import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import profileImage from './assets/images/hamza.jpg'

function App() {
  

  return (
    <>
      <div className="profile-container">
        <header>
          <h1 className="main-heading">Hamza Khan</h1>
          <p className="bio-text">
            My Name is Hamza Khan i am from Jamrud District Khyber. My
            Qualification is BS Computer Science. Fashionate Frontened Developer
            Focused on creating clean, responsive, and User Friendly web
            Experience.
          </p>
        </header>
        <section className="skill-section">
          <h3 className="skills-list">My Skills</h3>
          <ul>
            <li>-HTMl</li>
            <li>-CSS</li>
            <li>-BootStrap</li>
            <li>-JavaScript</li>
            <li>-React</li>
            <li>-VideoAnimation</li>
            <li>-Graphic Desiging</li>
          </ul>
        </section>
      <div className="image-wrapper">
        <img src={profileImage} alt="Profile Portrate" className='profile-image' />
      </div>
        <footer className="footer">
          <p>Build with React | 2026</p>
        </footer>
      </div>
      {/* <div className='parent'>
        <h1>Name:</h1>
        <h3>Hamza Khan </h3>
        <p>
        My Name is Hamza Khan i am from Jamrud District Khyber. My
          Qualification is BS Computer Science.
        </p>
        <h1>Skills:</h1>
        <ul>
        <li>-HTMl</li>
        <li>-CSS</li>
          <li>-BootStrap</li>
          <li>-JavaScript</li>
          <li>-React</li>
          <li>-VideoAnimation</li>
          <li>-Graphic Desiging</li>
        </ul>
        <img src="" alt="" />
        <footer></footer>
      </div> */}
    </>
  );
}

export default App
