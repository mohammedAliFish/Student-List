import { Button, Paper, TextField } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Student } from "../utils/data";

interface Props {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const initialState = {id:1 , name:'' , age : '' , email : '' , class : ''}

const AddStudent = ({ setStudents, students }: Props) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setStudents([...students, formData]);
    setFormData(initialState)
  };

  useEffect(() => {
    if (formData.name === "admin")
      alert("You entered a name that will not be store in database.");
  }, [formData.name]);

  return (
    <Paper
      sx={{
        width: 300,
        padding: 5,
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <TextField
        onChange={handleChange}
        value={formData.name}
        id="name"
        label="Full Name"
        name="name"
        variant="outlined"
        fullWidth
      />
      <TextField
        onChange={handleChange}
        value={formData.age}
        id="age"
        label="Age"
        name="age"
        variant="outlined"
        fullWidth
      />
      <TextField
        onChange={handleChange}
        value={formData.email}
        id="email"
        label="Email"
        name="email"
        variant="outlined"
        fullWidth
      />
      <TextField
        onChange={handleChange}
        value={formData.class}
        id="class"
        label="Class"
        name="class"
        variant="outlined"
        fullWidth
      />
      <Button onClick={handleSubmit} sx={{ marginTop: 5 }} variant="contained">
        Submit
      </Button>
    </Paper>
  );
};

export default AddStudent;
