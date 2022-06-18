import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="logo" />
                <div className="webname">
                    <h1>React Js</h1>
                    <h6>Learn the UI development</h6>
                </div>
            </div>
            {/* <SignUp /> */}
            <Login />
        </div>
    )
}

function Login() {
    return (
        <div className="a-right">
            <form className='infoForm authForm'>
                <h3>Login</h3>

                <div>
                    <input className='infoInput' type='text' placeholder='username' name='username' />
                </div>
                <div>
                    <input className='infoInput' type='text' placeholder='password' name='password' />

                </div>
                <div>
                    <span style={{ fontSize: '12px' }}>Don't have an acount. SignUp!</span>

                    <button className="button infoButton" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}


function SignUp() {
    return (
        <div className="a-right">
            <form className='infoForm authForm'>
                <h3>Sign up</h3>
                <div>
                    <input className='infoInput' type='text' placeholder='first Name' name='firstname' />
                    <input className='infoInput' type='text' placeholder='last Name' name='lastname' />

                </div>
                <div>
                    <input className='infoInput' type='text' placeholder='user Name' name='username' />
                </div>
                <div>
                    <input className='infoInput' type='text' placeholder='password' name='password' />
                    <input className='infoInput' type='text' placeholder='confirm password' name='confirmpassword' />

                </div>
                <div>
                    <span style={{ fontSize: '12px' }}>Already have an acount. Login!</span>
                </div>
                <button className="button infoButton" type="submit">Sign Up</button>

            </form>
        </div>
    )
}

export default Auth