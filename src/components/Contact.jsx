import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const toggleSound = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example action: log the form data to the console
    console.log({ name, email, message });
    // Here you would typically send the data to a server
  };

  return (
    <>
      <audio id="background-audio" loop autoplay>
        <source src="hard.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <section>
        <video autoPlay loop playsInline muted style={{ position: 'fixed', right: '0', bottom: '0', minWidth: '100%', minHeight: '100%', zIndex: '-1' }}>
          <source src="Videos/hard.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={toggleSound} style={{ zIndex: '1', position: 'absolute', top: '20px', right: '20px' }}>
          {isPlaying ? 'Pause Sound' : 'Play Sound'}
        </button>
      </section>
      <section className='hero' style={{  display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh',color: 'white',padding: '20px', background: 'white'}}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Contact;