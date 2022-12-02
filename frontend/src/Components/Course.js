import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import * as React from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";
import "./Css/CourseForm.css"


const Course = ({submitCourseEntry}) => {

	const [code, setCode] = useState('')
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [year, setYear] = useState('')
	const [term, setTerm] = useState('')
	const [credits, setCredits] = useState('')
	const [capacity, setCapacity] = useState('')
	const [schedule, setSchedule] = useState('');
	const [specialisationOptions, setSpecialisationOptions] = useState([]);
	const [specialisation, setSpecialisation] = useState([]);
	const [prerequisiteOptions, setPrerequisiteOptions] = useState([]);
	const [prerequisite, setPrerequisite] = useState([]);
	const [facultyOptions, setFacultyOptions] = useState([]);
	const [faculty, setFaculty] = useState([]);

	useEffect(()=>{
		fetch("http://localhost:8080/api/course/getSpecialisations").then((data)=>data.json()).then((val)=>setSpecialisationOptions(val))
	},[])
	useEffect(()=>{
		fetch("http://localhost:8080/api/course/getCourses").then((data)=>data.json()).then((val)=>setPrerequisiteOptions(val))
	},[])
	useEffect(()=>{
		fetch("http://localhost:8080/api/course/getFaculty").then((data)=>data.json()).then((val)=>setFacultyOptions(val))
	},[])

	// console.log(JSON.stringify(prerequisiteOptions) + "preq opts");
	// console.log(JSON.stringify(specialisationOptions) + "spec options");

	const credentials =  {
		"course_code":code, "name":name, "description": description, "year":year, "term":term, "credits":credits, "capacity":capacity, "schedule":schedule, 
		"specialisation":specialisation,
		"faculty":faculty,
		"prerequisite":""
	}

	const handleOnChangePreq = (val) => {
		let data = credentials;
		// console.log("change spec")
		let id;
		console.log(data, "preq from handle on change spec")
		console.log(prerequisiteOptions, "preq options");

		for(let i=0;i<prerequisiteOptions.length;i++){
			console.log(prerequisiteOptions[i]);
            if(prerequisiteOptions[i].name === val){
                console.log(JSON.stringify(prerequisiteOptions[i]) + "spec list");
                id = JSON.stringify( prerequisiteOptions[i].course_id);
                // data[index]['organisation'] = companyList[i];
				data["prerequisite"] = prerequisiteOptions[i].name
                console.log(id + "id")
                break
            }
        }
		console.log(data, "preq after edit")
	}

	const handleOnChangeSpec = (val) => {
		let data = credentials;
		// console.log("change spec")
		let id;
		console.log(data, "spec from handle on change spec")
		console.log(specialisationOptions, "spec options");

		for(let i=0;i<specialisationOptions.length;i++){
            if(specialisationOptions[i].name === val){
                console.log(JSON.stringify(specialisationOptions[i]) + "spec list");
                id = JSON.stringify( specialisationOptions[i].specialisation_id);
                // data[index]['organisation'] = companyList[i];
				data["specialisation"] = specialisationOptions[i]
                console.log(id + "id")
                break
            }
        }
		console.log(data, "spec after edit")
	}

	const handleOnChangeFaculty = (val) => {
		let data = credentials;
		// console.log("change spec")
		let id;
		console.log(data, "faculty from handle on change spec")
		console.log(facultyOptions, "faculty options");

		for(let i=0;i<facultyOptions.length;i++){
            if(facultyOptions[i].first_name === val){
                console.log(JSON.stringify(facultyOptions[i]) + "faculty list");
                id = JSON.stringify(facultyOptions[i].employee_id);
                // data[index]['organisation'] = companyList[i];
				data["faculty"] = facultyOptions[i]
                console.log(id + "id")
                break
            }
        }
		console.log(data, "faculty after edit")
	}



	console.log("creds",credentials)

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(credentials);
		submitCourseEntry(credentials);

		setCode('');
		setName('');
		setDescription('');
		setYear('');
		setTerm('');
		setCredits('');
		setCapacity('');
		setSchedule('');
		setFaculty('');
		// setPrerequisite('');
		setSpecialisation('');
		console.log("submitted");
		console.log(credentials);
	  };


	return (
		<div className="outerFrame">
			<div className="extra"></div>
			<div className="form"> 
					<h2>Add New Course</h2>
					<Form onSubmit={handleSubmit}>

						<FormGroup row>
							{/* <Label for="courseCode" sm={2}>Course Code</Label> */}
							<Col sm={10}>
								<Input value={code} onChange={e=>setCode(e.target.value)} type = "text" name = "courseCode" id = "courseCodeId" placeholder="Course Code"/>
							</Col>
						</FormGroup>
						
						<FormGroup row>
							{/* <Label for="courseName" sm={2}>Name</Label> */}
							<Col sm={10}>
								<Input value={name} onChange={e=>setName(e.target.value)} type = "text" name = "courseName" id = "courseNameId" placeholder="Course Name"/>
							</Col>
						</FormGroup>

						<FormGroup row>
							{/* <Label for="courseDescription" sm={2}>Description</Label> */}
							<Col sm={10}><Input value={description} onChange={e=>setDescription(e.target.value)} type = "text" name = "courseDescription" id = "courseDescriptionId" placeholder="Description"/></Col>
						</FormGroup>

						<FormGroup row>
							{/* <Label for="courseYear" sm={2}>Year</Label> */}
							<Col sm={10}><Input value={year} onChange={e=>setYear(e.target.value)} type = "number" min="1" max="5" name = "courseYear" id = "courseYearId" placeholder="Year"/></Col>
						</FormGroup>
						<FormGroup row>
							{/* <Label for="courseTerm" sm={2}>Term</Label> */}
							<Col sm={10}><Input value={term} onChange={e=>setTerm(e.target.value)} type = "number" min = "1" name = "courseTerm" id = "courseTermId" placeholder="Term"/></Col>
						</FormGroup>
						<FormGroup row>
							{/* <Label for="courseCredits" sm={2}>Credits</Label> */}
							<Col sm={10}><Input value={credits} onChange={e=>setCredits(e.target.value)} type = "number" min = "1" name = "courseCredits" id = "courseCreditsId" placeholder="Credits"/></Col>
						</FormGroup>
						<FormGroup row>
							{/* <Label for="courseCapacity" sm={2}>Capacity</Label> */}
							<Col sm={10}><Input value={capacity} onChange={e=>setCapacity(e.target.value)} type = "number" min = "1" name = "courseCapacity" id = "courseCapacityId" placeholder="Capacity"/></Col>
						</FormGroup>
						<FormGroup row>
							{/* <Label for="courseSchedule" sm={2}>Schedule</Label> */}
							<Col sm={10}>
								<Input value={schedule} onChange={e=>setSchedule(e.target.value)} type = "text" placeholder="Schedule"/>
							</Col>
						</FormGroup>

						<FormGroup row>
							<select 
								placeholder="Prerequisite" 
								onChange={(event) => handleOnChangePreq(event.target.value)}>
									<option onSelect={handleOnChangePreq("")} key="n" value = "-1">Prerequisite</option>
								{
									prerequisiteOptions.map((item, i)=><option key={i}>{item.name}</option>)
								}
							</select>
							<h2>{prerequisite}</h2>
						</FormGroup>
						<FormGroup row>
							<select 
								placeholder="Specialisation" 
								onChange={(event) => handleOnChangeSpec(event.target.value)}>
									<option onSelect={handleOnChangeSpec("")} key="n" value = "-1">Specialisation</option>
								{
									specialisationOptions.map((item, i)=><option key={i}>{item.name}</option>)
								}
							</select>
							<h2>{specialisation}</h2>
						</FormGroup>
						<FormGroup row>
							<select 
								placeholder="Faculty" 
								onChange={(event) => handleOnChangeFaculty(event.target.value)}>
									<option onSelect={handleOnChangeFaculty("")} key="n" value = "-1">Faculty</option>
								{
									facultyOptions.map((item, i)=><option key={i}>{item.first_name}</option>)
								}
							</select>
							<h2>{faculty}</h2>
						</FormGroup>
					
						<Button>Submit</Button>
					</Form>
			</div>
		</div>
    )
}

export default Course
