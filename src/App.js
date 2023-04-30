import React from 'react';
import './App.css';
import Home from './Website/Home';
import {Route, Routes, Navigate} from 'react-router-dom';
import ContactForm from './email/contactForm';
import Impressum from './footer/impressum';
import Datenschutz from './footer/Datenschutz';
import Skills from './Website/Skill';
import Experience from './Website/Experience';
import MyComponent from './Website/TitleAnimation';
import Projects from './Website/Projects';
import Acheivements from './Website/Acheivements';

const App = () => (
  <div className='App' style={{minHeight: "90vh"}}>
    
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/home" element={<Navigate replace to="/" />} />
    <Route path="/skills" element={<Skills />}/>
    <Route path="/experience" element={<Experience />}/>
    <Route path="/contact" element={<ContactForm />} />
    <Route path="/impressum" element={<Impressum />} />
    <Route path="/datenschutz" element={<Datenschutz />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/acheivements" element={<Acheivements />} />
    <Route path="/animation" element={<MyComponent />} />
    </Routes>
  </div>
);

export default App;

