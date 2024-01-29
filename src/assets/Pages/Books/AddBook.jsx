import React, { useRef, useState } from 'react'
import AdminLayout from '../../../Components/Layout/AdminLayout'
import { Button, Form } from 'react-bootstrap'
import CustomInput from '../../../Components/CustomInput/CustomInput'
import { addBookAction } from '../../../redux/books/bookAction'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const inputs = [
 
  { name: "isbn",label:"ISBN", placeholder: "ISBN", type:"text", required:true},
  { name: "title",label:"Book Title", placeholder: "Enter Book Title", type:"text", required:true},
  { name: "author",label:"Author Name", placeholder: "Enter Author Name", type:"text", required:true},
  { name: "summary",label:"Summary", placeholder: "Enter Summary", as :"textarea", required:true, rows:4},
  { name: "year",label:"Published Year", placeholder: "2000", type:"number", required:true},
  { name: "url",label:"Image Url", placeholder: "https://image-url.com", required:true},
 
]
const initialBookValue= {
  isbn: '',
  title: '',
  author: '',
  summary : '',
  year:'',
  url: ''

}

const AddBook = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState(
   initialBookValue
  );
  
  const handleChange = (e)=>{
    const {name , value} = e.target;
    setFormData({...formData, [name]: value});
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const {email, password} = formData;
    try{
      const {year} = formData;
      
      if (year > new Date().getFullYear()){
        return toast.error("Published Year is invalid");
      }

      addBookAction(formData);

      //reset form data
      setFormData({initialBookValue});
     }

  catch(e) {
   
}
  }

  return (
    <div>
     <AdminLayout title={"Add Book"}>
      <Link to={'/books'}><Button>Go back </Button></Link>
     <div className='p-3 border shadow rounded login-form'>
    <h1>New Book Info</h1>
      <Form onSubmit={handleSubmit} ref={formRef}>
      {
        inputs.map(input=>(
          <CustomInput key={input.name} label={input.label} value={formData[input.name]} onChange={handleChange}{...input}/>
        ))
      }
     
      <Button variant="primary" type="submit">
        Add Book
      </Button>
    </Form>
    </div>
          
     </AdminLayout>
    </div>
  )
}

export default AddBook
