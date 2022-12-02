import React, {useState, createElement} from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {addMorePrerequisite} from "./AddDropdowns"


const Prerequisite = () => {
	// return <input placeholder="Your input here" />;
	return (
		<div>
			<FormGroup row>
	 		<Col sm={10}>
	 			<Input type = "select" name = "coursePrerequisite" placeholder="Prerequisite">
	 				<option>Dummy preq</option>
	 				<option>Dummy preq</option>
	 				<option>Dummy preq</option>
	 				<option>Dummy preq</option>
	 				<option>Dummy preq</option>
	 				<option>Dummy preq</option>
	 			</Input>
	 		</Col>
	 </FormGroup>
		</div>
	)
}

const Specialisation = () => {
	// return <input placeholder="Your input here" />;
	return (
		<div>
			<FormGroup row>
	 		<Col sm={10}>
	 			<Input type = "select" name = "courseSpecialisation" placeholder="Specialisation">
				 <option>Dummy spc</option>
				 <option>Dummy spc</option>
							<option>Dummy spc</option>
							<option>Dummy spc</option>
							<option>Dummy spc</option>
							<option>Dummy spc</option>
							<option>Dummy spc</option>
							<option>Dummy spc</option>
	 			</Input>
	 		</Col>
	 </FormGroup>
		</div>
	)
}

const Course = () => {


	const [prerequisiteList, setPrerequisiteList] = useState([]);
	const [specialisationList, setSpecialisationList] = useState([]);

	const onAddPreqClick = event => {
		setPrerequisiteList(prerequisiteList.concat(<Prerequisite key = {prerequisiteList.length} />));
	}

	const onAddSpecClick = event => {
		setSpecialisationList(specialisationList.concat(<Specialisation key = {specialisationList.length} />));
	}

	const items = []
	const handleSubmit = (event) => {
		event.preventDefault();
		// while(event.target[i].value !== null){
 

		// }
		for (var i = 0; i<13; i++){
			console.log(event.target[i].value)
		}
	  }


	return (
		<div> 

			<h2>Add New Course</h2>
			<Form onSubmit={handleSubmit}>

				<FormGroup row>
					<Label for="courseCode" sm={2}>Course Code</Label>
					<Col sm={10}><Input type = "text" name = "courseCode" id = "courseCodeId" placeholder="Course Code"/></Col>
				</FormGroup>
				
				<FormGroup row>
					<Label for="courseName" sm={2}>Name</Label>
					<Col sm={10}><Input type = "text" name = "courseName" id = "courseNameId" placeholder="Course Name"/></Col>
				</FormGroup>

				<FormGroup row>
					<Label for="courseDescription" sm={2}>Description</Label>
					<Col sm={10}><Input type = "text" name = "courseDescription" id = "courseDescriptionId" placeholder="Description"/></Col>
				</FormGroup>

				<FormGroup row>
					<Label for="courseYear" sm={2}>Year</Label>
					<Col sm={10}><Input type = "number" min="1" max="5" name = "courseYear" id = "courseYearId" placeholder="Year"/></Col>
				</FormGroup>
				<FormGroup row>
					<Label for="courseTerm" sm={2}>Term</Label>
					<Col sm={10}><Input type = "number" min = "1" name = "courseTerm" id = "courseTermId" placeholder="Term"/></Col>
				</FormGroup>
				<FormGroup row>
					<Label for="courseCredits" sm={2}>Credits</Label>
					<Col sm={10}><Input type = "number" min = "1" name = "courseCredits" id = "courseCreditsId" placeholder="Credits"/></Col>
				</FormGroup>
				<FormGroup row>
					<Label for="courseCapacity" sm={2}>Capacity</Label>
					<Col sm={10}><Input type = "number" min = "1" name = "courseCapacity" id = "courseCapacityId" placeholder="Capacity"/></Col>
				</FormGroup>
				<FormGroup row>
					<Label for="courseDay" sm={2}>Day</Label>
					<Col sm={10}>
						<Input type = "select" name = "courseDay" id = "courseDayId" placeholder="Day">
						<option>Monday</option>
						<option>Tuesday</option>
						<option>Wednesday</option>
						<option>Thrusday</option>
						<option>Friday</option>
						<option>Saturday</option>
						<option>Sunday</option>
						</Input>
						</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="courseTime" sm={2}>Time</Label>
					<Col sm={10}>
						<Input type = "time" name = "courseTime" id = "courseTimeId" placeholder="Time"/>
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="coursePrerequisite" sm={2}>Prerequisite</Label>
					<div>
						{}
						{prerequisiteList}
					</div>
					<div>
						<button onClick={()=>onAddPreqClick}>Add Prerequisite</button>
						{/* <button onClick={onAddPreqClick}>Add Prerequisite</button> */}
					</div>
				</FormGroup>

				<FormGroup row>
					<Label for="courseSpecialisation" sm={2}>Specialisation</Label>
					<div>
						{specialisationList}
					</div>
					<div>
						<button onClick={onAddSpecClick}>Add Specialisation</button>
					</div>
				</FormGroup>
				<FormGroup check row>
				<Col sm={{ size: 10, offset: 2 }}>
					<Button type="submit">Submit</Button>
				</Col>
				</FormGroup>

		</Form>
		</div>
    )
}

export default Course
