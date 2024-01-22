import React, { useState } from 'react'
import BaseLayout from '../../../Components/BaseLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomInput from '../../../Components/CustomInput/CustomInput';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginauth } from '../../../firebase-config';
import { useNavigate } from 'react-router-dom';
const inputs = [
 
  { name: "email",label:"Email", placeholder: "Enter Your Email", type:"email", required:true},
  { name: "password",label:"Password", placeholder: "Enter Your Password", type:"password", required:true, minLength:6},
 
]

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const {name , value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const {email, password} = formData;
    signInWithEmailAndPassword(loginauth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    toast("logged In ")
    navigate('/dashboard');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode.includes("auth/invalid-credential")){
      toast.error("Invalid Email or Password")
    }
  });

   

   

 }
  
  return (
   <BaseLayout>
   <div className='p-3 border shadow rounded login-form'>
    <h1> Login Page</h1>
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
export default Login
