import { AppBar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Api = () => {
    var[user, setuser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{ 
        console.log(response.data)
        setuser(response.data)
    })
   
  return (
    <div>
    <AppBar>
        <Toolbar>
                <div>
                    MyBlog
                </div><br /><br />
                
                <Link to ="/Api">
                <Button variant='contained'>Api</Button>
                </Link>
                <Link to ="/Signup">
                <Button variant='contained'>Signup</Button>
                </Link>
               
              
        </Toolbar>
    </AppBar>
    <br />
  
        <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                   
                    <TableCell>Id</TableCell>
                    <TableCell>Title</TableCell>
                  
                </TableRow>
            </TableHead>
            <TableBody>
            {user.map((val)=>{
                return(
                    <TableRow>
                   
                    <TableCell>{val.id}</TableCell>
                    <TableCell>{val.title}</TableCell>
                    
                </TableRow>
                )
            })}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api
