import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useEffect ,useState, useRef} from 'react';
import { motion } from 'framer-motion'; 
import emailjs from '@emailjs/browser';
import { serviceId, publicKey, templateId } from '../../public/api';


import Navbar from "./Navbar"
import Experience from './Experience';


const lowres = () => {
  useEffect(() => {
      const script = document.createElement('script');
      script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []); 
  
      const grabCursorStyle = {
        cursor: 'grab',
      };
  useEffect(() => {
      const checkAndScroll = () => {
        let url = window.location.href.split("#experience");
        if (url.length < 2) return; 
    
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
    
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          setTimeout(checkAndScroll, 100); 
        }
      };
    
      checkAndScroll();
    }, []);



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
    }       
    return(
        <main>
            <>
                <Navbar />
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="warning" style={{textAlign: 'center', justifyContent: 'center'}}>Visit using a laptop/PC for better experience</Alert>
                </Stack>
                <section className="hero" style={{position: 'relative', overflow: 'hidden'}}>
                    <img src='u.jpeg' style={{height: '390px'}}/>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white' }}>
                        <p style= {{ fontSize: '20px' , paddingLeft: '10px', paddingTop: '10px'}} className="hover:text-gold transition-all" > <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.imdb.com/title/tt5311514/&ved=2ahUKEwjwsI3RjamHAxWPe2wGHR9iBqIQFnoECD4QAQ&usg=AOvVaw3dxRlPsgi3QAr0aqIVH_th' style={{textDecorationLine: 'none', color: 'inherit'}} target=' '>> はい My</a></p>	
                        <p style={{ fontSize: '20px',fontColor: 'gold' , paddingLeft: '10px'}} className="hover:text-gold transition-all"> 私の名前は</p>
                        <p style={{ fontSize: '20px' ,textDecoration: 'none', color: 'inherit', paddingLeft: '10px'}} className="hover:text-gold transition-all"><a href="/about" style={{textDecorationLine: 'none', color: 'inherit'}} target=' '>Watashinonamaeha - Name is MANAV</a></p>
				   </div>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                        <motion.div
                            className="github-card-wrapper"
                            drag
                            dragConstraints={{ left: -300, right: 300, top: 0, bottom: 200 }}
                            whileDrag={{ scale: 1.1 }}
                            style={grabCursorStyle} // Apply the grab cursor style here
                        >
                            <div className="github-card" data-github="imanav10" data-width="350" data-height="10" data-theme="default" >
                            {}
                            </div>
                            <p className="hover:text-white transition-all" style={{fontSize: '12px'}}>> pick me and move</p>
                        </motion.div>

                    </div>
                    <p style= {{ fontSize: '20px' ,marginTop: '-20px', textAlign: 'center',fontStyle: 'italic'}} className="hover:text-gold transition-all"> Its bad that you are using a mobile device</p>
                </section>
                <Experience />
                <section className='hero' style={{padding: '10px',justifyContent: 'center',alignItems: 'center',color: 'white',   background: 'url("last.jpeg") no-repeat center center fixed', 
  backgroundSize: 'cover',paddingTop: '5%', height: '80vh'}} id = 'contact'>
                  <div style={{justifyContent: 'center'}}>
                    <>
                      <h2 style={{paddingBottom: "10px", fontSize: '48px'}}>Contact me</h2>
                    </>
                    <form ref={form} onSubmit={sendEmail}>
                      <label style={{fontSize: '15px'}}>
                        Name:
                        <input type="text" name="user_name" onChange={(e) => setName(e.target.value)} placeholder='name' style={{color: 'black', fontSize: '15px'}} required/>
                      </label>
                      <label style={{fontSize: '15px'}}>
                        Email:
                        <input type="email" name="user_email" onChange={(e) => setEmail(e.target.value)} placeholder='email' style={{color: 'black'}} required/>
                      </label>
                      <label style={{fontSize: '15px'}}>
                        Message:
                        <textarea type="text" name="user_message" onChange={(e) => setMessage(e.target.value)} placeholder='message' style={{color: 'black'}} required/>
                      </label>
                      <button type="submit" disabled={loading} style={{fontSize: '15px'}}>
                        {loading ? 'Sending...' : 'Submit'} {/* Step 2: Update button text based on loading state */}
                      </button>
                    </form>
                  
                    <div style={{paddingTop: '10px'}}>
                      <h2 style={{justifyContent: 'center',fontSize: '20px', textAlign: 'center'}} className='hover:text-orange'><a href='/funtari' style={{textDecorationLine: 'none', color: 'inherit'}} target=' '>マナヴからの愛によって作られた</a></h2>
                      <h2 style={{fontSize: '10px', marginTop: '10px'}}>made with ❤️ by imanav10</h2>
                    </div>
                  </div>
                </section>
            </>
        </main>
        
        
    )
};

export default lowres