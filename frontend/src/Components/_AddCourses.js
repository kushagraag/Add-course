import * as React from 'react';
import {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name, prerequisiteName, theme) {
    return {
        fontWeight:
            prerequisiteName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const theme = createTheme();

const AddCourse = () => {
    const [ selectedPrerequisite, setSelectedPrerequisite] = useState([]);
    const [ savedCourseList, setSavedCourseList] = useState([]);

    async function getCourses(){
        await axios.get("http://localhost:8080/api/course/getCourses", {})
            .then(
                (response) => {
                    console.log(response);
                    if(response.status === 200){
                        setSavedCourseList(response.data);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    useEffect(()=>{
        getCourses();
    }, []);


    const handlePrerequisiteChange = (event) => {
        console.log(event);
        let value= event.target.value;
        setSelectedPrerequisite(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let temp = [];
        // savedCourseList.map(c=>delete c.prerequistes);
        for(let i=0; i<savedCourseList.length; i++){
            for(let j=0; j<selectedPrerequisite.length; j++){
                if(savedCourseList[i].courseId === selectedPrerequisite[j]){
                    temp.push(savedCourseList[i]);
                }
            }
        }

        console.log({
            preRequisite: temp
        });

        let requestObject = {
            // ...specialisation && {specialisation : {specialisationId : specialisation}},
            prerequistes: temp
        };
    };
    return(
    <Grid item xs={6}>
        <FormControl fullWidth margin='normal'>
            <InputLabel id="prerequisite-select">Prerequisite</InputLabel>
            <Select labelId="prerequisite-select" id="prerequisite" multiple value={selectedPrerequisite}onChange={handlePrerequisiteChange} input={<OutlinedInput id="prerequisite-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {
                                selected.map
                                ((value) => {
                                    let va = savedCourseList.filter((course)=>course.courseId===value)[0].name;
                                    return (<Chip key={value} label={va} />);
                                })}
                        </Box>
                    )} MenuProps={MenuProps}
            >
                {
                    savedCourseList.map
                    ((course) => (
                        <MenuItem
                            key={course.courseId}
                            value={course.courseId}
                            style={getStyles(course,  selectedPrerequisite, theme)}
                        >
                            {course.name}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    </Grid>
                    
    )
}

export default AddCourse;