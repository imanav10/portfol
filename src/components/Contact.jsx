import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => setIsPlaying(!isPlaying);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <>
      <audio id="background-audio" loop autoplay>
        <source src="hard.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <section>
        <video autoPlay loop playsInline muted style={{ position: 'fixed', right: '0', bottom: '0', minWidth: '100%', minHeight: '100%', zIndex: '-1' ,width: 'auto'}}>
          <source src="Videos/hard.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={toggleSound} style={{ zIndex: '1', position: 'absolute', top: '20px', right: '20px' }}>
          {isPlaying ? 'Pause Sound' : 'Play Sound'}
        </button>
      </section>
      <section className='hero' style={{paddingLeft: '122px',justifyContent: 'center',alignItems: 'center',color: 'white',   background: 'url("last.jpeg") no-repeat center center fixed', 
  backgroundSize: 'cover',paddingTop: '5%'}}>
        <div style={{justifyContent: 'center'}}>
          <>
            <h2 style={{paddingBottom: "50px", fontSize: '48px'}}>Contact me</h2>
          </>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name'/>
            </label>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
            </label>
            <label>
              Message:
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='message'/>
            </label>
            <button type="submit">Submit</button>
          </form>
        
          <div style={{paddingTop: '110px'}}>
            <h2 style={{justifyContent: 'center', paddingTop: '30px', fontSize: '123px', textAlign: 'center'}} className='hover:text-orange'>マナヴからの愛によって作られた</h2>
            <h2>made with ❤️ by imanav10</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;