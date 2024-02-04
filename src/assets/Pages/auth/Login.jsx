import React, { useEffect, useState } from 'react'
import BaseLayout from '../../../Components/BaseLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomInput from '../../../Components/CustomInput/CustomInput';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase-config';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoAction } from '../../../redux/authAction';


const inputs = [
 
  { name: "email",label:"Email", placeholder: "Enter Your Email", type:"email", required:true},
  { name: "password",label:"Password", placeholder: "Enter Your Password", type:"password", required:true, minLength:6},
 
]

const Login = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.auth);
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const {name , value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const {email, password} = formData;
    try{
      const signInPromise = signInWithEmailAndPassword(auth, email, password);
      toast.promise(signInPromise,{
        pending: "In Progress"
      });
      const userCredential= await signInPromise;
      const {user} = userCredential;

      dispatch(getUserInfoAction(user.uid));
     }

  catch(e) {
    console.log(e)
    const errorCode = e.code;
    if(errorCode.includes("auth/invalid-credential")){
      toast.error("Invalid Email or Password")
    }
  };
}

useEffect(()=>{
  if(userInfo.uid){
   
    if (location.state?.path) {
      navigate(location.state.path);
    }
    else{
      navigate('/dashboard');
    }
  }

}, [userInfo])


   
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
    Forget password ? <Link to={"/reset-password"}> Reset Password</Link>
    </div>
    </BaseLayout>
  )

  }
export default Login
