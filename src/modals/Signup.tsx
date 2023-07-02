import React, { useState } from 'react';
import styles from '../styles/Login.module.scss';
import Backdrop from './Backdrop';
import axios from 'axios';

type Props = {
  unToggle: any;
  toggleLogin: any;
};

interface FormState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const Signup: React.FC<Props> = ({ unToggle, toggleLogin }) => {
  const [user, setUser] = useState<FormState>({
    firstname: '',
    lastname: '',
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
      const response = await axios.post('https://bloggall.cyclic.app/signup', user);
      console.log(response);
      setTimeout(() => {
        toggleLogin();
        unToggle();
      },2000)
    } catch (error) {
      console.error(error);
    }
  };

  const toggleLoginComponent = () => {
    unToggle();

    setTimeout(() => {
      toggleLogin();
    }, 500)
  }


  return (
    <Backdrop onClick={unToggle}>
      <div className={styles.login}>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              required
              onChange={handleChange}
              type="text"
              maxLength={20}
              minLength={3}
              name="firstname"
              id={styles.fname}
              placeholder="First Name"
              value={user.firstname}
            />
          </div>
          <div>
            <input
              required
              onChange={handleChange}
              type="text"
              maxLength={20}
              minLength={3}
              name="lastname"
              id={styles.lname}
              placeholder="Last Name"
              value={user.lastname}
            />
          </div>
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
            <button type="submit">Signup</button>
          </div>
        </form>
        <section className={styles.execption}>
          <p>Already have an account?</p>
          <button onClick={toggleLoginComponent}>Login</button>
        </section>
      </div>
    </Backdrop>
  );
};

export default Signup;
