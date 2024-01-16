import React from 'react'

import BaseLayout from '../../../Components/BaseLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomInput from '../../../Components/CustomInput/CustomInput';

const inputs = [
  { name: "fName",label:"First Name", placeholder: "Enter First Name", type:"text", required:true},
  { name: "LName",label:"Last Name", placeholder: "Enter Last Name", type:"text", required:true},
  { name: "phone",label:"Phone", placeholder: "Enter your Number", type:"number", required:true},
  { name: "email",label:"Email", placeholder: "Enter Your Email", type:"email", required:true},
  { name: "password",label:"Password", placeholder: "Enter Your Password", type:"password", required:true, minLength:6},
  { name: "ConfirmPassword",label:"Confirm Password", placeholder: "Re-enter Your Password", type:"Password", required:true},

]

const AdminSignup = () => {
  return (
   <>
   <BaseLayout>
   <div className='p-3 border shadow rounded login-form'>
    <h1> Admin Page</h1>
      <Form>
      {
        inputs.map(input=>(
          <CustomInput key={input.name} label={input.label} {...input}/>
        ))
      }
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
   
  
   </BaseLayout>
   </>
  )
}

export default AdminSignup
