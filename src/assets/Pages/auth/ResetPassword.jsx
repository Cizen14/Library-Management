import React, { useState } from 'react'
import BaseLayout from '../../../Components/BaseLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomInput from '../../../Components/CustomInput/CustomInput';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../firebase-config';
import { Navigate, useNavigate } from 'react-router-dom';

const inputs = [
 
  { name: "email",label:"Email", placeholder: "Enter Your Email", type:"email", required:true},
 
 
]

const ResetPassword = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) =>
 {
  const {name , value} = e.target;
    setFormData({...formData, [name]: value});
 }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const {email} = formData;

    sendPasswordResetEmail(auth, email)
    .then(()=>{
      toast.success("Please check your email")
      navigate('/login');
    })
    
    .catch((error)=> {
      const errorMessage = error.message;
      toast.error("Something Went Wrong")
    });



    
  }


  return (
     <BaseLayout>
      <div className='p-3 border shadow rounded login-form'>
    <h1> Reset- Password</h1>
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
  )
}

export default ResetPassword
