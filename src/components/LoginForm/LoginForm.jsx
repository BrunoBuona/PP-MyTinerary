// Login Form and save information to local storage for future use in the app 
import React, { useState } from 'react';
import { Footer } from '../../layouts/Footer/Footer';
import './LoginForm.css';

function LoginForm(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      setError("");
    }
  };

  return (
    <>
    <form className="form">
      <div className="form-body">
        <h1 className='title'>MyTinerary</h1>
        <h2 className='title2'>Log-In</h2>
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
        <p className="error">{error}</p>
      </div>
      </div>
    </form>
    <Footer/>
    </>
  );
};

export {LoginForm}
