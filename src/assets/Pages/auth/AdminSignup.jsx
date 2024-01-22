import React, { useState } from 'react'

import BaseLayout from '../../../Components/BaseLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomInput from '../../../Components/CustomInput/CustomInput';
import { toast } from 'react-toastify';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../../firebase-config';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';





const inputs = [
  { name: "fName",label:"First Name", placeholder: "Enter First Name", type:"text", required:true},
  { name: "LName",label:"Last Name", placeholder: "Enter Last Name", type:"text", required:true},
  { name: "phone",label:"Phone", placeholder: "Enter your Number", type:"number", required:true},
  { name: "email",label:"Email", placeholder: "Enter Your Email", type:"email", required:true},
  { name: "password",label:"Password", placeholder: "Enter Your Password", type:"password", required:true, minLength:6},
  { name: "confirmPassword",label:"Confirm Password", placeholder: "Re-enter Your Password", type:"Password", required:true},

]



const AdminSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e)=>{
    const {name , value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const { password, confirmPassword, ...restFormData}= formData;
    const {email}= formData;

    
    if(password !== confirmPassword){
     return toast.error("Password Didnot match");
    }
          const signupPromise=  createUserWithEmailAndPassword(auth, email, password)
        toast.promise(signupPromise,{
          pending:"In Progress..."

        });
        try {
          const userCredential = await signupPromise;
          toast("User Created Successfully");
          navigate('/login');
          const {uid} = userCredential.user;

          await setDoc (doc(db, "users", uid),{
            ...restFormData, uid
          });
        }
        catch(error){
          const errorCode = error.code;
         

          if(errorCode.includes("auth/email-already-in-use")){

            toast.error("Account Already exists");
          }else {
            toast.error (error.message);
          }
        };
   
     
  
   
    
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
