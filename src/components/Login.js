import './Login.css';
import React from 'react';
import logoImg from '../Images/Logo.png'
import { useHistory } from 'react-router-dom';
const Login = () => {
  const history = useHistory();
  const loginhanler = ()=>{
    history.push('/home')
  }
  return (

    <div className='login-page'>
      <div className='logo'>
        <img src={logoImg} />
        <h3>Ekart</h3>
      </div>
      <div className='form__container'>
        <form>
          <div className='email__input'>
            <img src='/product_img/VectorEmail.png'/>
            <input type='email' placeholder='Email' />
          </div>
          <div className='password__input'>
            <img src='/product_img/VectorPass.png'/>
            <input type='password' placeholder='Password' />
          </div>
          <div className='auth'>
            <div className='rememberMe'>
            <p >
            <img src='/product_img/check.png'/> 
              Remember me
            </p>
            </div>
            <p>
              Forgot password?
            </p>
          </div>
          <button onClick={loginhanler} className='login__button'>Login</button>
          <div className='auth2'>
            <p>Don't have an account? <a href='#'>Sign up</a></p>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login