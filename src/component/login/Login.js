import React, { useContext, useState } from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { UserData } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { signInWithEmail, signUpwithPassword } from './useAuth';

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedIn, setLoggedIn] = useContext(UserData)
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: '',
        success: false
    })
    const [newUser, setNewUser] = useState(false)
    const [pass, setPass] = useState(true)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    let isFormValid = true;
    let passwordValid = true;

    const handleBlur = e => {

        if (e.target.name === 'email') {
            isFormValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)
        }

        if (e.target.name === 'password') {
            const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(e.target.value)
            passwordValid = isValidPassword;
            if (!passwordValid) {
                setPass(false)
            } else {
                setPass(true)
            }
        }
        if (e.target.name === 'confirmPassword') {
            const isValidConfirmPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(e.target.value)
            passwordValid = isValidConfirmPassword;
            if (!passwordValid) {
                setPass(false)
            } else {
                setPass(true)
            }
        }
        if (isFormValid && passwordValid) {
            const userInfo = { ...user }
            userInfo[e.target.name] = e.target.value;
            setUser(userInfo)
        }
    }

    const onSubmit = data => {

        if (newUser && user.firstName && user.email && (user.password === user.confirmPassword)) {
            signUpwithPassword(user.firstName, user.email, user.password)
                .then(res => {
                    console.log(res)
                    setUser(res)
                    const { email } = res;
                    const userInfo = {
                        email: email,
                        name: user.firstName,
                    }
                    setLoggedIn(userInfo)
                    if (res.email) { history.replace(from) }
                })
        }
        if (!newUser && user.email && user.password) {
            console.log(user)
            signInWithEmail(user.email, user.password)
                .then(res => {
                    console.log(res)
                    setUser(res)
                    const { email, displayName } = res;
                    const userInfo = {
                        email: email,
                        name: displayName,
                    }
                    setLoggedIn(userInfo)
                    if (res.email) { history.replace(from) }
                })

        }
    }
    if (user.error) {
        setTimeout(() => setUser(user.error), 5000)
    }

    return (
        <div className="login-form p-5">


            {/* Login Form */}
            {!newUser &&
                < div >
                    <h4><b>Login</b></h4>
                    {user.success && <p className="text-success">User Created Successfully</p>}
                    {user.error && <p className="text-danger"><b>{user.error}</b></p>}
                    {!pass && <p className="text-danger mt-2">*Use uppercase, lowercase, number(1-9) and special character combination</p>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        < input name="email" onChange={handleBlur} placeholder="Email" className="form-control mt-2" ref={register({ required: true })} />
                        {errors.email && <span className="text-warning">This field is required</span>}

                        < input name="password" type="password" onChange={handleBlur} placeholder="Password" className="form-control mt-3" ref={register({ required: true })} />
                        {errors.password && <span className="text-warning">This field is required</span>}

                        <div className="d-flex justify-content-between mt-2">
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" for="defaultCheck1">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <div>
                                <span className="text-warning"><u>Forgot Password</u></span>
                            </div>
                        </div>
                        <p className="text-center mt-2">Don't have an account?<span className="text-warning" style={{ cursor: 'pointer' }} onClick={() => setNewUser(true)}><u>Create an Account</u></span></p>
                        <button className="btn btn-warning form-control"><b>Submit</b></button>
                    </form>
                </div>}

            {/* Create account Form */}

            {newUser &&
                <div>
                    <h4><b>Create an Account</b></h4>
                    {user.success && <p className="text-success">User Created Successfully</p>}
                    {user.error && <p className="text-danger"><b>{user.error}</b></p>}
                    {!pass && <p className="text-danger">*Use uppercase, lowercase, number(1-9) and special character combination<br></br>*Password and confirm password should be same</p>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        < input name="firstName" onChange={handleBlur} placeholder="First Name" className="form-control mt-2" ref={register({ required: true })} />
                        {errors.firstName && <span className="text-warning">This field is required</span>}

                        < input name="lastName" onChange={handleBlur} placeholder="Last Name" className="form-control mt-3" ref={register({ required: true })} />
                        {errors.lastName && <span className="text-warning">This field is required</span>}

                        < input name="email" onChange={handleBlur} placeholder="Email" className="form-control mt-3" ref={register({ required: true })} />
                        {errors.email && <span className="text-warning">This field is required</span>}

                        < input name="password" type="password" onChange={handleBlur} placeholder="Password" className="form-control mt-3" ref={register({ required: true })} />
                        {errors.password && <span className="text-warning">This field is required</span>}

                        < input name="confirmPassword" type="password" onChange={handleBlur} placeholder="Confirm Password" className="form-control mt-3" ref={register({ validate: (value) => value === watch('password') })} />
                        {errors.confirmPassword && <span className="text-warning">Passwords don't match</span>}

                        <p className="text-center mt-2">Already have an account?<span className="text-warning" style={{ cursor: 'pointer' }} onClick={() => setNewUser(false)}><u>Login</u></span></p>
                        <button className="btn btn-warning form-control"><b>Submit</b></button>
                    </form>
                </div>}
        </div >
    );
};

export default Login;