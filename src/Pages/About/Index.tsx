import React, { useEffect, useState } from 'react';
import './style.css';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';

function About() {
  return (
    <div>
      <Header/>
        <div className="center">
          <h1>hello word!</h1>
        </div>
      <Footer/>
    </div>
  );
}

export default About;