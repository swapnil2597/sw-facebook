import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from './firebase';
import "./Login.css"
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

const fbLogoURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png";
const fbwordLogoURL = "https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg";

function Login() {
    const [state, dispatch] = useStateValue();
    
    const signIn = () => {
        // Sign in function
        auth.signInWithPopup(provider).then((result) =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result)
        }).catch((error) => alert(error.message))
    };

    return (
        <div className="login">
            <div className="login__body">
                <div className="login__disclaimer">
                    <h5>Welcome to "SW-FACEBOOK"<br/>A React.js web-app project for my portfolio, cloning the working and UI/UX of facebook.</h5>
                    <h4>Designed and developed by <a target="__blank" href="https://swapnil2597.github.io/about#/">Swapnil Khare</a></h4>
                    <h5>(Connect with me at <a target="__blank" href="https://www.linkedin.com/in/khareswapnil/">LinkedIn</a>)</h5>
                </div>
                <img src={fbLogoURL} alt="" />
                {/* <img src={fbwordLogoURL} alt="" /> */}
                <Button className="loginSubmit__button" onClick={signIn} type="submit">Sign In with Google</Button>
                <h5>- login with google to use the WebApp's complete functioning.</h5>
                <h5>- Safe login via Google's Firebase authentication services.</h5>
            </div>
        </div>
    )
}

export default Login
