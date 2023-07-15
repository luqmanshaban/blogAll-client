import React, { useState } from 'react'
import styles from '../styles/Login.module.scss'
import Backdrop from './Backdrop'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

type Props = {
    unToggle: any,
    toggleSignup: any
}

interface FormState {
    email: string;
    password: string;
  }

const Login: React.FC<Props> = ({unToggle, toggleSignup}) => {
  const [isLoading, setIsLoading] = useState(Boolean);
  const[unAuthorized, setUnAuthorized] = useState(false);
  const[serverError, setServerError] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState<FormState>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    
    try {
      const response = await axios.post('https://bloggall.cyclic.app/login', user);
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      setTimeout(() => {
        unToggle();
        navigate('/dashboard');
      },2000)
    } catch (error: any) {
      console.error(error);
      if(error.response && error.response.status === 401) {
        setUnAuthorized(true)
      }else if(error.response && error.response.status === 500) {
        setServerError(true);
      }
    }finally {
      setIsLoading(false); 
    }
  };

  const toggleSignUpComponent = () => {
    unToggle()
    setTimeout(() =>{
      toggleSignup();
    },500)
  }
    
  return (
   <Backdrop onClick={unToggle}>
     <div className={styles.login}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <input
              required
              onChange={handleChange}
              type="email"
              maxLength={40}
              minLength={8}
              name="email"
              id={styles.email}
              placeholder="Email"
              value={user.email}
            />
            </div>
            <div>
            <input
              required
              onChange={handleChange}
              type="password"
              maxLength={12}
              minLength={6}
              name="password"
              id={styles.pass}
              placeholder="Password"
              value={user.password}
            />
                {unAuthorized && (<h1 style={{color: 'red', fontSize: '16px'}}>Invalid username or password</h1>)}
                {serverError && (<h1 style={{color: 'red', fontSize: '16px'}}>User Does not exist</h1>)}
            </div>
            <div id={styles.sumbit}>
                <button type='submit'>Login</button>
            </div>
        </form>
        {isLoading && <Loading />}
        <section className={styles.execption}>
          <p>Don't have an account?</p>
          <button onClick={toggleSignUpComponent}>Sign up</button>
        </section>
    </div>
   </Backdrop>
  )
}

export default Login