import { Box } from "@mui/material";
import StudentsTable from "./components/Table";
import AddStudent from "./components/AddStudent"; 
import { useState } from "react";
import data from "./utils/data";

function App() {

  const [students , setStudents] = useState(data)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, padding: 3 }}>
      <AddStudent students={students} setStudents={setStudents} />
      <StudentsTable students={students} />
      
    </Box>
  );
}

export default App;