import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap';
import './LogIn.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LogInManager';
import Header from '../Header/Header';
import logInBg from '../../images/logIn-Bg.svg';

const LogIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: ''
    })

    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    initializeLoginFramework();


    // handle response from login manager 
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }
    // handle google Sign In
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }
    // handle facebook sign in
    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }
    // eslint-disable-next-line
    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }
    //create a new user or sign in(returning user) with email and password
    const handleSubmit = (e) => {
        //create new user
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        //returning user
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }
    //handle form inputs field
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;

        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        if (e.target.name === 'confirmPassword') {
            if (e.target.value === user.password) {
                const newUserInfo = { ...user };
                newUserInfo[e.target.name] = true;
                setUser(newUserInfo);
                document.getElementById("confirmPasswordMessage").innerText = "";
            }
            else {
                const newUserInfo = { ...user };
                newUserInfo[e.target.name] = false;
                setUser(newUserInfo);
                document.getElementById("confirmPasswordMessage").innerText = "Password didn't matched!!!";
            }

        }
    }

    return (
        <div style={{ backgroundImage: `url(${logInBg})` }} className="home">
            <Container>
                <Header></Header>
                <div className="row mx-auto">
                    <form onSubmit={handleSubmit}
                        className="user-access-form mx-auto my-5 w-50 py-4 px-5 rounded">
                        {
                            (!newUser) ?
                                <h3>Log In</h3> : <h3>Create an account</h3>
                        }
                        {
                            (newUser) && <input type="text" className="user-input" onBlur={handleBlur} name="name" placeholder="Enter Your Name" required />
                        }
                        <br />
                        <input type="email" onBlur={handleBlur} className="user-input" name="email" placeholder="Enter your Email" required />
                        <br />
                        <input type="password" onBlur={handleBlur} className="user-input" name="password" placeholder="Password" required />
                        <br />
                        {
                            (newUser) && <small className="text-danger">*Password must contain a number with minimum length 6!</small>
                        }
                        <br />
                        {
                            (newUser) && <input type="password" className="user-input" onBlur={handleBlur} name="confirmPassword" placeholder="Confirm Password" id="confirmPasswordMessage" required />
                        }
                        <div className="d-flex justify-content-between">
                            <div className="mr-2 font-weight-bold">
                                {
                                    !newUser && <><input type="checkbox" name="rememberPassword" />
                                        <span className="ml-2">Remember Me</span></>
                                }
                            </div>
                            <div>
                                {!newUser && <Link to="#">Forgot Password</Link>}
                            </div>
                        </div>
                        <input type="submit" variant="warning" value={newUser ? 'Create an account' : 'LogIn'} className="form-submit-btn my-4 btn-block font-weight-bold" />
                        {
                            newUser ?
                                <p className="text-center">Already have an account?
                                <Link to="#" onClick={() => setNewUser(!newUser)}>Log In</Link>
                                </p>
                                :
                                <p className="text-center">Don't have an account?
                                <Link to="#" onClick={() => setNewUser(!newUser)}>Create an account</Link>
                                </p>
                        }
                    </form>
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
                </div>

                <div className="or-continue-sign-in-with text-center">
                    <span className="logIn-or">Or</span>
                    <br />
                    <button className="btn-primary continue-sign-in" onClick={fbSignIn}>
                        <FontAwesomeIcon icon={faFacebook} /> Continue with Facebook
                    </button>
                    <br />
                    <button className="btn-primary continue-sign-in" onClick={googleSignIn}>
                        <FontAwesomeIcon icon={faGoogle} /> Continue with Google
                    </button>
                </div>
            </Container>
        </div >
    );
};

export default LogIn;