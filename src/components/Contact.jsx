import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import { serviceId, publicKey, templateId } from '../../public/api';

const Contact = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null); // Step 1: Reference the audio element

  useEffect(() => { // Step 2: Effect hook to toggle play/pause
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]); // Depend on isPlaying to trigger effect

  const toggleSound = () => setIsPlaying(!isPlaying); // Ensure this toggles the state


  const form = useRef(null);
  const [loading, setLoading] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
        },
      );



  };

  return (
    <>
      <audio ref={audioRef} id="background-audio" loop>
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
  backgroundSize: 'cover',paddingTop: '5%'}} id = 'contact'>
        <div style={{justifyContent: 'center'}}>
          <>
            <h2 style={{paddingBottom: "50px", fontSize: '48px'}}>Contact me</h2>
          </>
          <form ref={form} onSubmit={sendEmail}>
            <label>
              Name:
              <input type="text" name="user_name" onChange={(e) => setName(e.target.value)} placeholder='name' style={{color: 'black'}} required/>
            </label>
            <label>
              Email:
              <input type="email" name="user_email" onChange={(e) => setEmail(e.target.value)} placeholder='email' style={{color: 'black'}} required/>
            </label>
            <label>
              Message:
              <textarea type="text" name="user_message" onChange={(e) => setMessage(e.target.value)} placeholder='message' style={{color: 'black'}} required/>
            </label>
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Submit'} {/* Step 2: Update button text based on loading state */}
            </button>
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