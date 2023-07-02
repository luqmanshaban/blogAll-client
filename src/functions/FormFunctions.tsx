import { useState } from "react";


const FormFunctions = () => {
    const [toggleContact, setToggleContact] = useState(false);
    const [toggleSignup, setToggleSignup] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false);
  
    //Contact
    const toggleContactComponent = () => {
      setToggleContact(!toggleContact)
    }
    const unToggleContactComponent = () => {
      setToggleContact(false)
    }
    //Signup
    const toggleSignupComponent = () => {
      setToggleSignup(!toggleSignup)
    }
    const unToggleSignupComponent = () => {
      setToggleSignup(false)
    }
    //Login
    const toggleLoginComponent = () => {
      setToggleLogin(!toggleLogin)
    }
    const unToggleLoginComponent = () => {
      setToggleLogin(false)
    }


    const formFunctions = {
      toggleContactComponent,
      unToggleContactComponent,
      toggleLoginComponent,
      unToggleLoginComponent,
      toggleSignupComponent,
      unToggleSignupComponent,
      toggleContact,
      toggleLogin,
      toggleSignup
    }

    return formFunctions;
  
}

export default FormFunctions