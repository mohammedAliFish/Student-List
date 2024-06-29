import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Student } from '../utils/data';
import { useEffect } from 'react';


interface Props {
  students : Student[]
  
}

export const StudentsTable = ({students} : Props) => {

  useEffect(()=>{
    if(students.length === 5)
      alert("Maximam limits reached")

  },[students])





  return (
    <>
<TableContainer component={Paper}>
    <Table size='small' >
      <TableHead>
        <TableRow sx={{ background : '#197424'}}>
          <TableCell sx={{color:'#fff'}}>Full Name</TableCell>
          <TableCell sx={{color:'#fff'}}>Age</TableCell>
          <TableCell sx={{color:'#fff'}}>Email</TableCell>
          <TableCell sx={{color:'#fff'}}>Class</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((item)=>{
          return(
          <TableRow>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.age}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.class}</TableCell>
        </TableRow> 
          )
        })}
        
      </TableBody>
    </Table>
    </TableContainer>
     
    </>
  )
}


export default StudentsTable