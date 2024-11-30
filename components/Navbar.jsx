import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
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
    <br /><br /><br/>
  </div>
  )
}

export default Navbar