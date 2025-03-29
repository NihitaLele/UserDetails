import React from "react";
import { useState } from "react";
import axios from "axios"

const SignUp = () => {
    
  const [name, setName] = useState("");
  const [uEmail, setEmail] = useState("");
  const [uPassword, setPassword] = useState("");

  const userDetails = {
    userName : name,
    email : uEmail,
    password : uPassword
  }

const userRegister = ()=>{
    axios.post("http://localhost:8080/userPath", userDetails).then((response)=>{
        console.log(response)
        alert("user registered")
    }).catch((error)=>{
        console.log(error)
    })
}

  return (
    <div>
      <div>
        <h2>SignUp</h2>
      </div>

      <div>
        <label htmlFor="signName">Enter Your Name:</label>
        <input
          onChange={(e) => {
            setName(e.target.value)
          }}
          type="text"
          id="signName"
          placeholder="Enter Your Name"
        />
      </div>

      <div>
        <label htmlFor="signEmail">Enter Your Email:</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type="text"
          id="signEmail"
          placeholder="Enter Your Email"
        />
      </div>

      <div>
        <label htmlFor="signPassword">Enter Your Password:</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          type="text"
          name=""
          id="signPassword"
          placeholder="Enter a password"
        />
      </div>

          <div>
            <button onClick={userRegister}>SignUp</button>
          </div>

    </div>
  );
};

export default SignUp;
