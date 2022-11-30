import React, {useEffect, useState} from "react";
import { Col, Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import Select from 'react-select';
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
	// const [facultyOptions, setFacultyOptions] = useState([]);
	// const [faculty, setFaculty] = useState();
	const [prerequisiteOptions, setPrerequisiteOptions] = useState([]);
	const [prerequisite, setPrerequisite] = useState([]);
	const [specialisationOptions, setSpecialisationOptions] = useState([]);
	const [specialisation, setSpecialisation] = useState([]);

	// useEffect(() => {
	// 	const fetchFacultyList = async() => {
	// 		const arr = [];
	// 		await axios("http://localhost:8080/api/course/getFaculty").then((res) => {
	// 			let result = res.data;
	// 			result.map((user) => {
	// 				return arr.push({value: user.employee_id, label: user.first_name});
	// 			})
	// 			setFacultyOptions(arr);
	// 		})
	// 	};
	// 	fetchFacultyList();
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// },[])

	useEffect(() => {
		const fetchPrequisiteList = async() => {
			const arr = [];
			await axios("http://localhost:8080/api/course/getCourses").then((res) => {
				let result = res.data;
				result.map((course) => {
					return arr.push({value: course.course_id, label: course.name});
				})
				setPrerequisiteOptions(arr);
			})
		};
		fetchPrequisiteList();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])


	// useEffect(() => {
	// 	const fetchSpecialisationList = async() => {
	// 		const arr = [];
	// 		await axios("http://localhost:8080/api/course/getSpecialisations").then((res) => {
	// 			let result = res.data;
	// 			// setSpecialisation(result)
	// 			console.log(result,  "sfgresult ");
	// 			result.map((item) => {
	// 				let valueS = item.specialisation_id
	// 				let labelS = item.name
	// 				return arr.push({value: valueS, label: labelS});
	// 			})
	// 			setSpecialisationOptions(arr);
	// 		})
	// 	};
	// 	fetchSpecialisationList();
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// },[])

	const optionsForPreq = [];

	useEffect(()=>{
		fetch("http://localhost:8080/api/course/getSpecialisations").then((data)=>data.json()).then((val)=>setSpecialisationOptions(val))
	},[])

	useEffect(()=>{
		fetch("http://localhost:8080/api/course/getCourses").then((data)=>data.json()).then((val)=>setPrerequisiteOptions(val))
	},[])

	const handleOnChangeSpec = (val) => {
		let data = credentials;
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

	const handleOnChangePreq = (val) => {
		let data = credentials;
		let id;
		console.log(data, "preq from handle on change preq");

		console.log(prerequisiteOptions, "preq options");

		for(let i=0; i<prerequisiteOptions.length; i++){
			if(prerequisiteOptions[i].name === val){
				id = JSON.stringify(prerequisiteOptions[i].course_id);
				// console.log(id + "id from slected preq option")
				data["prerequisite"] = prerequisiteOptions[i]
				break;
			}
		}
	}

	const credentials =  {
		"course_code":code, "name":name, "description": description, "year":year, "term":term, "credits":credits, "capacity":capacity, "schedule":schedule, 
		"prerequisite":prerequisite,
		"specialisation":specialisation
	}
	console.log("creds",credentials)

	const handleSubmit = (event) => {
		event.preventDefault();

		submitCourseEntry(credentials);

		setCode('');
		setName('');
		setDescription('');
		setYear('');
		setTerm('');
		setCredits('');
		setCapacity('');
		setSchedule('');
		// setFacultyOptions('');
		// setFaculty('');
		// setPrerequisiteOptions('');
		setPrerequisite('');
		// setSpecialisationOptions('');
		setSpecialisation('');


		console.log("submitted");
		console.log(credentials);
	  }


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
						
						{/* <FormGroup>
							<Select
								className="select"
								isMulti
								onChange={(item) => setSelectedOptions(item)}
								options = {optionstry}
								isClearable = {true}
								isSearchable = {true}
								closeMenuOnSelect={false}
								>
								</Select>
						</FormGroup> */}

						{/* <FormGroup row>
							// <Label for="courseFaculty" sm={2}>Faculty</Label>
							<Select 
								className="selectCourseFaculty"
								// onChange={(item) => setFacultyOptions(item)}
								placeholder="Select/Search Faculty"
								onChange={(item) => setFaculty({item})}
								options={facultyOptions}
								isClearable = {true}
								isSearchable = {true}
								closeMenuOnSelect={true}
								labelKey='first_name'
								valueKey='employee_id'
								>
								</Select>
						</FormGroup> */}
{/* 
						<FormGroup row>
							<Label for="coursePrerequisite" sm={2}>Prerequisite</Label>
							<Select 
								className="selectCoursePrerequisite"
								placeholder="Prerequisite"
								isMulti
								onChange={(event) => handleOnChangePreq(event.target.value)}
								options = {optionsForPreq}
								isClearable = {true}
								isSearchable = {true}
								closeMenuOnSelect={false}
								>
								</Select>
						</FormGroup> */}
						<select 
								placeholder="Prerequisite" 
								onChange={(event) => handleOnChangePreq(event.target.value)}>
								{
									prerequisiteOptions.map((item, i)=><option key={i}>{item.name}</option>)
								}
							</select>
						<FormGroup row>
							{/* <Label for="courseSpecialisation" sm={2}>Specialisation</Label> */}
							{/* <Select 
								className="selectCourseSpecialisation"
								// isMulti
								
								onChange={handleOnChangeSpec}
								options = {specialisationOptions}
								isClearable = {true}
								isSearchable = {true}
								closeMenuOnSelect={false}
								>
								</Select> */}
							<select 
								placeholder="Specialisation" 
								onChange={(event) => handleOnChangeSpec(event.target.value)}>
								{
									specialisationOptions.map((item, i)=><option key={i}>{item.name}</option>)
								}
							</select>
							<h2>{specialisation}</h2>
						</FormGroup>
					
						<Button>Submit</Button>
					</Form>
			</div>
		</div>
    )
}

export default Course
