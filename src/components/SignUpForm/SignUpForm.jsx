import "./SignUpForm.css"
import React, { useRef } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'
import { BASE_URL } from '../../api/url'


function SignUpForm() {
    const nameRef = useRef()
    const lastNameRef = useRef()
    const photoRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const formRef = useRef()

    async function saveData(e) {
        e.preventDefault()
        let userValue = {
            name: nameRef.current.value,
            lastName: lastNameRef.current.value,
            role: "user",
            photo: photoRef.current.value,
            age: ageRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            let res = await axios.post(`${BASE_URL}/api/auth/singup`, userValue)
            console.log(res);
            if (res.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'The user has been created successfully!',
                    text: `Activate your account login in your email.`,
                })
                formRef.current.reset()
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'We found an error...',
                    text: `Errors: ${res.data.message.join(', ')}`,
                })
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error, the user email, it´s already exist',
                text: err.message,
            })
        }
    }

    return (
        <>
            <form ref={formRef} className="formSing" id="miFormulario">
                <div className="form-bodySing">
                    <h2 className="title2Sing">Sign Up</h2>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="form__input"
                        ref={nameRef}
                        required
                    />
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="form__input"
                        ref={lastNameRef}
                        required
                    />
                    <input
                        className="form__input"
                        type='text'
                        id='photoInput'
                        placeholder="Photo"
                        ref={photoRef}
                        required
                    />
                    <input
                        className="form__input"
                        type='number'
                        id='age'
                        placeholder="Age"
                        ref={ageRef}
                        required
                    />
                    <input
                        id="Email"
                        type="email"
                        placeholder="Email"
                        className="form__input"
                        ref={emailRef}
                        required
                    />
                    <input
                        id="Password"
                        type="password"
                        placeholder="Password"
                        className="form__input"
                        ref={passwordRef}
                        required
                    />
                    <div className="submitSing">
                        <input onClick={saveData} className="submit2Sing" type='button' value='Register' />
                    </div>
                </div>
            </form>
        </>
    );
}
export { SignUpForm };
