import React, { useState } from 'react'
import styles from '../styles/Login.module.scss'
import Backdrop from './Backdrop'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type Props = {
    unToggle: any,
    toggleSignup: any
}

interface FormState {
    email: string;
    password: string;
  }

const Login: React.FC<Props> = ({unToggle, toggleSignup}) => {
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
    
    try {
      const response = await axios.post('https://wild-top-coat-seal.cyclic.app/login', user);
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      // localStorage.setItem('email')

      setTimeout(() => {
        unToggle();
        navigate('/dashboard');
      },2000)
    } catch (error) {
      console.error(error);
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
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
        <section className={styles.execption}>
          <p>Don't have an account?</p>
          <button onClick={toggleSignUpComponent}>Sign up</button>
        </section>
    </div>
   </Backdrop>
  )
}

export default Login