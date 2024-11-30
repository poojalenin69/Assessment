import { Typography ,Button, Input} from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Create New Blog
      </Typography><br /><br /><br />
    Blog Name:<Input type='text' name='your Blog name' id=''></Input><br/><br /><br />
    Description:<Input type='text' name='Description' id=''></Input><br/><br /><br />
    Author name:<Input type='text' name='Your Authors name' id=''></Input><br/><br /><br />
    <Button>Submit</Button>
    </>
  )
}
export default Signup