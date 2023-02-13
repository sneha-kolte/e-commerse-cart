import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate()
  const [inpVal, setInpVal] = useState({
    email: "",

    password: "",
  });
  const [data, setData] = useState([]);
  const getData = (e) => {
    //console.log(e.target.value)
    const { value, name } = e.target;
    console.log(value);
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };
  const addData = (e) => {

    const getUser = localStorage.getItem("user")
    console.log(getUser)
    e.preventDefault();
    const { email, password } = inpVal;
    if (email == "" || !email.includes("@")) {
      alert("add email");
    } else if (password == "" || password.length < 5) {
      alert("password is not correct");
    } else {
      if(getUser && getUser.length){
        const userData = JSON.parse(getUser)
        console.log(userData)
        const userLogin = userData.filter((e,k)=>{
          return e.email === email && e.password === password
        })

        if(userLogin==0){
          alert("login data does not match")
        }
        else{
          //alert("login successful");
         history("/cards")
         localStorage.setItem("user_login",JSON.stringify(userLogin))
        }
      }
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Login</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Enter Your email"
                  onChange={getData}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="password"
                  placeholder="Enter Your Password"
                  onChange={getData}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
                onClick={addData}

              >
                Submit
              </Button>
            </Form>
          </div>
          <SignImg />
        </section>
      </div>
    </>
  );
};

export default Login;
