import React, {useRef, useState, onSubmit} from 'react'
import './LoginForm.css'

function LoginForm() {
    // refs
    const usernameRef = useRef();
    const passwordRef = useRef();

    // states
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // this prevents the browser to refresh when the submit button is clicked
        const formData = {
            username: usernameRef.current.value, // we are accessing the value of the input field through the ref's current instance
            password: passwordRef.current.value,
        };
        //onSubmit(formData); // upon submission we are calling the onSubmit function
        console.log(formData)
    };

    const handleUsernameChange = (event) => {
        setUsernameValue(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Basic Login Component</h1>
            <div className='username'>
                <label>username: </label>
                <input
                    ref={usernameRef}
                    label="username"
                    id="username"
                    type="text"
                    value={usernameValue}
                    onChange={handleUsernameChange}
                />        
            </div>   
            <div className='password'>  
                <label>password: </label>
                <input
                    ref={passwordRef}
                    label="password"
                    id="password"
                    type="text"
                    value={passwordValue}
                    onChange={handlePasswordChange}
                />  
            </div>   
            <div className='button'>  
                <button
                    id="login-button"
                    type="submit"
                >
                    login
                </button>
            </div>
        </form>
    )
}

export default LoginForm;