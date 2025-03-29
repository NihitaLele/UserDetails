import React from "react";
import { useState } from "react";

const Login = () => {
  const [uEmail, setEmail] = useState("");
  const [uPassword, setPassword] = useState("");

  const userDetails = {
    email: uEmail,
    password: uPassword,
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
      </div>
      <div>
        <label htmlFor="logEmail">Enter Your Email:</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          id="logEmail"
        />
      </div>
      <div>
        <label htmlFor="logPassword">Enter Your Password:</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          name=""
          id="logPassword"
        />
      </div>

      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
