import React, { useState } from 'react'

import BaseLayout from '../../../Components/BaseLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomInput from '../../../Components/CustomInput/CustomInput';
import { toast } from 'react-toastify';

const inputs = [
  { name: "fName",label:"First Name", placeholder: "Enter First Name", type:"text", required:true},
  { name: "LName",label:"Last Name", placeholder: "Enter Last Name", type:"text", required:true},
  { name: "phone",label:"Phone", placeholder: "Enter your Number", type:"number", required:true},
  { name: "email",label:"Email", placeholder: "Enter Your Email", type:"email", required:true},
  { name: "password",label:"Password", placeholder: "Enter Your Password", type:"password", required:true, minLength:6},
  { name: "confirmPassword",label:"Confirm Password", placeholder: "Re-enter Your Password", type:"Password", required:true},

]



const AdminSignup = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e)=>{
    const {name , value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const {password, confirmPassword}= formData;
    
    if(password !== confirmPassword){
     return toast.error("Password Didnot match");
    }
    
   
      toast("SignedUp Successfully !!!");
  
   
    
  }
  return (
   <>
   <BaseLayout>
   <div className='p-3 border shadow rounded login-form'>
    <h1> Admin Page</h1>
      <Form onSubmit={handleSubmit}>
      {
        inputs.map(input=>(
          <CustomInput key={input.name} label={input.label} onChange={handleChange}{...input}/>
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
