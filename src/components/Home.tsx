import React from 'react'
import Navbar from './Navbar'
import Header from './pages/Header'
import About from './pages/About'
import Features from './pages/Features'
import Getstarted from './pages/Getstarted'
import Footer from './Footer'
import FormFunctions from '../functions/FormFunctions'
import Contact from '../modals/Contact'
import Signup from '../modals/Signup'
import Login from '../modals/Login'
import toggleStyles from '../styles/Pages.module.scss'

const Home = () => {
  const formfunctions = FormFunctions();

  const content = (
    <section>
      <article className={`${toggleStyles.contact} ${formfunctions.toggleContact ? toggleStyles.active : ''}`}>
        {formfunctions.toggleContact && <Contact unToggle={formfunctions.unToggleContactComponent} />}
      </article>
      <article className={`${toggleStyles.signup} ${formfunctions.toggleSignup ? toggleStyles.active : ''}`}>
        {formfunctions.toggleSignup && <Signup unToggle={formfunctions.unToggleSignupComponent} toggleLogin={formfunctions.toggleLoginComponent} />}
      </article>
      <article className={`${toggleStyles.signup} ${formfunctions.toggleLogin ? toggleStyles.active : ''}`}>
        {formfunctions.toggleLogin && <Login unToggle={formfunctions.unToggleLoginComponent} toggleSignup={formfunctions.toggleSignupComponent}/>}
      </article>
    </section>
  );
  return (
    <>
    {content}
    <header>
        <Navbar contact={formfunctions.toggleContactComponent} signup={formfunctions.toggleSignupComponent} login={formfunctions.toggleLoginComponent}/>
        <Header />
    </header>
    <main>
        <About />
        <Features />
        <Getstarted onClick={formfunctions.toggleSignupComponent}/>
    </main>
    <footer>
        <Footer />
    </footer>
    </>
  )
}

export default Home