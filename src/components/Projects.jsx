import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import $ from 'jquery';



function Projects() {
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray('.text');

    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }, []);
  return (
    
    <>
      <section className='hero' style={{background: '#ffffff', paddingTop: "10%", paddingLeft: '10%'}}>
        <b style={{color: '#000000', fontSize: "50px", fontFamily: "Helvetica,Arial,sans-serif"}}>Index of /E0/E2/chikoyeat (social)</b>
        <br/>
        <hr noshade="" align="left" width="100%"></hr>
        <br></br>
        <table>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><p>[DSC]</p> <img src="cool.png" style={{width: '12%', height:'24%'}} />
        
        <a href="https://github.com/imanav10" style={{color: 'blue',  fontSize: '22px'}} target=' '> 
        <span>/github</span>
        </a>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><p>[ASSM]</p> <img src="cool.png" style={{width: '12%', height:'24%'}} /><a href="https://x.com/imanav10" style={{color: 'blue',  fontSize: '22px'}} target=' '> <span>/X</span></a></div>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><p>[DST]</p> <img src="cool.png" style={{width: '12%', height:'24%'}} /><a href="https://linktr.ee/imanav69" style={{color: 'blue',  fontSize: '22px'}} target=' '> <span>/linktree</span></a></div></table>

      </section>
    </>

  )
}

export default Projects
