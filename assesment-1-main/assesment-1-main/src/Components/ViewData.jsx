import {Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const ViewData=() => {
    var [users,setUsers]= useState([]) 
    var [loading,SetLoading] = useState(false)

    useEffect(()=>{
        SetLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
    console.log(res)
    setUsers(res.data)
    SetLoading(false)
    })
    .catch(err=>console.log(err))
    },[])

    

       return (
    <div style ={{paddingTop:"80px"}}>
   

     {loading? <CircularProgress color='primary'/>: <TableContainer>
<Table>
    <TableHead>
        <TableRow>
    <TableCell>name</TableCell>
    <TableCell>description</TableCell>
    <TableCell>author name</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {users.map((val,i)=>{
            return(
                <TableRow><TableCell>{val.userId}</TableCell>
                <TableCell>{val.title}</TableCell>
                <TableCell>{val.body}</TableCell>
               
                </TableRow>
            )
        })}

    </TableBody>
</Table>
</TableContainer>}
    


    </div>
  )
}

export default ViewData