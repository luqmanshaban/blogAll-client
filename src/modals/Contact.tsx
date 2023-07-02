import React, {useState} from 'react'
import axios from 'axios'
import styles from '../styles/Contact.module.scss'
import Backdrop from './Backdrop'

type Props = {
    unToggle: any,
}

interface FormState {
    names: string;
    email: string;
    message: string;
  }
  

const Contact: React.FC<Props> = ({unToggle}) => {

    const [user, setUser] = useState<FormState>({
        names: '',
        email: '',
        message: ''
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({
          ...prev,
          [name]: value
        }));
      };

      const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
        
    
        try {
          const response = await axios.post('https://bloggall.cyclic.app/contact', user);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      };
    
  return (
    <Backdrop onClick={unToggle}>
        <div className={styles.contact}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
            <div id={styles.field1}>
                <input  onChange={handleChange} value={user.names} type="text" name='names' id={styles.names} placeholder='Names'/>
                <input  onChange={handleChange} value={user.email} type="email" name="email" id={styles.email} placeholder='email'/>
            </div>
            <div>
                <textarea onChange={handleChangeTextarea} value={user.message} name="message" id={styles.message} cols={30} rows={10} placeholder='message'></textarea>
            </div>
            <div>
                <button type='submit'>Send</button>
            </div>
        </form>
    </div>
    </Backdrop>
  )
}

export default Contact