import React from "react";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { Link as NavLink } from "react-router-dom";
import "./SignUp.css"

function SignUp() {
  return (
    <>
    <div className="contain">
      <SignUpForm />
      <div className="containButtons">
      <button className="buttonGooG"><img src="https://img.icons8.com/color/28/null/google-logo.png" alt="-" /> Sign up with Google      
      </button>
        <h3 className="textPregt">Already has an account?</h3>
        <div className="buttons-form">
          <NavLink to="/SignIn">
            <button className="buttonsignin">Access your account</button>
          </NavLink>
        </div>
      </div>
    </div>
    </>
  );
}

export { SignUp };
