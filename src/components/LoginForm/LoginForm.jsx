import { React, useRef } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../api/url";
import { useDispatch } from "react-redux";
import loginAction from "../../redux/actions/loginForm";
import { useNavigate } from "react-router-dom";
const Swal = require("sweetalert2");

function LoginForm() {
  const email = useRef();
  const pwd = useRef();
  const navigate = useNavigate();
  let store = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch()
  async function submit(e) {
    e.preventDefault();
    const dataLogin = {
      email: email.current.value,
      password: pwd.current.value,
    };
    try {
      let res = await axios.post(`${BASE_URL}/api/auth/signin`, dataLogin)
      if (res.data.success) {
      let tokenx = res.data.response.token
      dispatch(loginAction.getToken(tokenx))
      localStorage.setItem("token", tokenx)
      Swal.fire({
        title: 'Successfully Login',
        html: "We're redirecting you to Home Page...",
        timer: 2200,
        timerProgressBar: true,
        willClose: () => {
          navigate('/')
        }
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "We found an error... ",
        text: `Errors: ${res.data.message.join(", ")}`,
      });
    }
  }catch(err){
    Swal.fire({
      icon: "error",
      title: "We found an error...",
      text: `Errors: You have entered an invalid email or password.`,
    })
  }
}
return (
  <>
      <form className="form" onSubmit={e=> submit(e)}>
        <div className="form-body">
          <h1 className="title">MyTinerary</h1>
          <h2 className="title2">Sign In</h2>
          <input
            type="email"
            autoComplete="current-email"
            placeholder="Email"
            className="form__input"
            ref={email}
            />
          <input
            type="password"
            autoComplete="on"
            placeholder="Password"
            className="form__input"
            ref={pwd}
            />
          <div className="submit">
            <button className="submit2">Login</button>
          </div>
        </div>
        <div className="registercontainer">
          <button className="buttonGooG">
            <img
              src="https://img.icons8.com/color/28/null/google-logo.png"
              alt="-"
              />{" "}
            Sign in with Google
          </button>
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
}

export { LoginForm };
