import React, { useState } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      let login = { email, password }
      localStorage.setItem("user", JSON.stringify(login));
    }
  };
  return (
    <>
      <form className="form">
        <div className="form-body">
          <h1 className='title'>MyTinerary</h1>
          <h2 className='title2'>Sign In</h2>
          <input
            type="email"
            autoComplete='current-email'
            placeholder="Email"
            className='form__input'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoComplete='on'
            placeholder="Password"
            className='form__input'
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="submit">
            <button className='submit2' onClick={submit}>Login</button>

          </div>

        </div>
        <div className='registercontainer'>
          <button className="buttonGooG"><img src="https://img.icons8.com/color/28/null/google-logo.png" alt="-" /> Sign in with Google</button>
          <h3 className="textPregt">You dont have an account?</h3>
          <div className="buttons-form">
            <Link to="/SignUp">
              <button className="buttonsignin">Register now!</button>
            </Link>
          </div>
        </div>
      </form>

    </>
  );
};

export { LoginForm }
