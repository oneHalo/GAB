import logo from './logo.svg';
import './Invitation.css';
import React, { useState } from "react";
import Button from 'react-bootstrap';
function Invitation() {
  
  const [email, setEmail] = useState('');
  const signUp = (event) =>{
    
  //  window.alert(email);
   if(email === ''){
        window.alert("no input email provided");
    }
    else if(!validateEmail(email)){
      window.alert("Not valid input email address");
    }


  };
  const handleEmailChange = (event) => {

      setEmail(event.target.value);
      
  }
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  
  
  
  
  return (
   <div className="App">
   <div className="header">
     <div className="title">
      <h1>AutoArchitect-AI.app</h1>
     
     </div>
    </div>
    <body>
    <div className="body">
      <p>
    <h1>Welcome to the Future of Web Creation: AutoArchitect AI!</h1>
   
<span className="intro-paragraph">🌟 Dive into the heart of innovation with AutoArchitect AI, 
  where your web-building dreams turn into reality with the flick of a finger! Born from a desire to empower, 
  AutoArchitect AI is here to transform the digital landscape for friends, small businesses, creators, and developers alike.</span>
    
<span className="intro-paragraph">🚀 Why AutoArchitect AI? Imagine a world where creating a website is as easy as describing your dream space. 
  That's AutoArchitect AI for you – an AI-powered sanctuary where technology meets empathy. Built with love, fueled 
  by the desire to solve real-world struggles faced by my friends and many others, AutoArchitect AI is not just a platform; it's a revolution.</span>

<span className="intro-paragraph">💡 Empower Your Story: Whether you're a small business seeking to carve your niche, a creator aiming to 
  showcase your art, or a developer looking for a harmonious canvas, AutoArchitect AI is your companion. It learns, adapts, and 
  evolves with you, transforming your vision into digital reality. </span>
 
<span className="intro-paragraph">🌐 Crafted with Care: Harnessing the power of Python, PyTorch, TensorFlow, Node.js, various AI models 
and the latest web technologies, AutoArchitect AI offers a personalized journey through the web building process. From intuitive design to AI-driven content recommendations, 
   we make sure your voice is heard and seen.</span> 

<span className="intro-paragraph">✨ Join the Movement: Step into a community where creation knows no bounds, where your 
ideas breathe life into pixels. With AutoArchitect AI, you're not just building a website; you're crafting a piece of the digital 
universe that echoes your unique story.</span>
<span className="intro-paragraph"> <span className="red">Note</span>: I am still working on the prototype and there is limited capacity. I appreciate your patience. </span>
      </p>
      <div className="sign-up">
    <input className="input-email" name="email" type="text" placeholder="someone@example.com" value={email} onChange={handleEmailChange}></input>
    <button className="input-button" type="button" onClick={signUp}  >Sign Up</button>
    <div className="error-message"></div>
    </div>

    </div>
    </body>
    
    </div>
  );
}

export default Invitation;
