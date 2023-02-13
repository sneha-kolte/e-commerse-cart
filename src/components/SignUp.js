import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";
import { json } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SignUp = () => {

const[inpVal, setInpVal] = useState({
  name:"",
  email:"",
  date:"",
  password:""
})
const[data, setData]=  useState([])
const getData =(e) =>{
  //console.log(e.target.value)
  const {value,name}= e.target;
  console.log(value)
  setInpVal(()=>{
    return{
      ...inpVal,
      [name]:value
    }
  })

}
const addData =(e) =>{
e.preventDefault()
  const {name,email,date,password} = inpVal;

  if(name==""){
    alert("add name")
  }
  else if(email=="" || !email.includes("@")){
    alert("add email")
  }
  else if(date==""){
    alert("date is required")
  }
  else if(password=="" || password.length < 5){
    alert("password is not correct")
  }
  else {
    alert("data added successfully")
    localStorage.setItem("user", JSON.stringify([...data,inpVal]) )
  }
}
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control type="text" name="name" onChange={getData} placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control type="email" name="email" onChange={getData} placeholder="Enter Your Email"/>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control type="date" name="date" onChange={getData} placeholder="Enter Date" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control type="password" name="password" onChange={getData} placeholder="*******" />
            </Form.Group>
            <Button variant="primary" onClick={addData} className='col-lg-6' style={{ background: "rgb(67, 185, 127)" }} type="submit">
              Submit
            </Button>
            </Form>
            <p className="mt-3">Already have an account <span><NavLink to="/login">Login</NavLink></span></p>
          </div>
          <SignImg />
        </section>
      </div>
    </>
  );
}

export default SignUp;
