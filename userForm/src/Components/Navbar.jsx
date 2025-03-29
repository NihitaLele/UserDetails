import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
      <NavApp/>
        <Routes>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const NavApp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/SignUp")
          }}
        >
          SignUp
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            navigate("/Login")
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
