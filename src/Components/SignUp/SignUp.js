import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [apiStatus, setApiStatus] = useState('')
    const [signUpStatus, setSignUpStatus] = useState(null)
    // const [userId, setUserId] = useState('')
    const navigate = useNavigate();

    function readFirstName(e){
        setFirstName(e.target.value)
    }

    function readLastName(e){
        setLastName(e.target.value)
    }

    function readEmail(e) {
        setEmail(e.target.value)
    }

    function readPassword(e) {
        setPassword(e.target.value)
    }

    useEffect(() => {
        console.log('inside useEffect')
        console.log('inside sign up status ='+ signUpStatus)

        if (signUpStatus === 'success'){
            navigate.push('/login')
        }
        else {
            console.log('sign up failed')
        }
    }, [signUpStatus]);

    function signUp() {
        const signUpObj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        const url = "http://local:8080/user/signup"

        axios.post(url, signUpObj).then(res => {
            console.log(res)
            if (res.status === 200) {
                // setApiStatus(res.data)
                console.log(res.data)
                setSignUpStatus(res.data.data.signUpStatus)
                console.log('signUp status ='+ signUpStatus)
            }
            else{
                console.log('API call failed')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>

            <div>
                <h5>First Name</h5>
                <input onChange={readFirstName} value={firstName} type="text"></input>
            </div>

            <div>
                <h5>Last Name</h5>
                <input onChange={readLastName} value={lastName} type="text"></input>
            </div>

            <div>
                <h5>Email</h5>
                <input onChange={readEmail} value={email} type="text"></input>
            </div>

            <div>
                <h5>Password</h5>
                <input onChange={readPassword} value={password} type="password"></input>
            </div>

            <button onClick={signUp} type="submit" className="btn btn-primary button-space">Sign Up</button>
        </div>
    );
}

export default SignUp;