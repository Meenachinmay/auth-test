import React, { useState } from 'react'

import axios from 'axios'

const Register = () => {
    
    const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        buttonText:''
    })

    const { username, email, password, buttonText } = values

    const handleChange = (name) => (event) =>{
        setValues({...values, [name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()

        axios({
            method: 'POST',
            url: `http://localhost:8000/apiV1/create-new-user`,
            data: { username, email, password }
        })
        .then(response => {
            console.log("activate account via email", response.data)
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }

    return (
        <form>
            <div>
                <lable>Name</lable>
                <input onChange={handleChange('username')} value={username} type="text" placeholder='name'/>
                <lable>Email</lable>
                <input onChange={handleChange('email')} value={email} type="text" placeholder='email'/>
                <lable>Password</lable>
                <input onChange={handleChange('password')} value={password} type="password" placeholder='password'/>

                <button className='bg-red-500 font-bold text-white border-1 p-5 rounded mx-5' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default Register