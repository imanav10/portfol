import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; 



const About = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

	const grabCursorStyle = {
	  cursor: 'grab',
	};
	useEffect(() => {
		const checkAndScroll = () => {
		  let url = window.location.href.split("#experience");
		  if (url.length < 2) return; // Exit if there's no fragment
	  
		  let target = url[url.length - 1].toLowerCase();
		  let element = document.getElementById(target);
	  
		  if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		  } else {
			// If the element isn't found, wait a bit and try again
			setTimeout(checkAndScroll, 100); // Adjust time as needed
		  }
		};
	  
		checkAndScroll();
	  }, []);

	return (
		
		<div>
			<section className='hero' style={{height: '100vh'}}>
				  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
				  <motion.div
					className="github-card-wrapper"
					drag
					dragConstraints={{ left: -300, right: 300, top: 0, bottom: 300 }}
					whileDrag={{ scale: 1.1 }}
					style={grabCursorStyle} // Apply the grab cursor style here
				  >
					<div className="github-card" data-github="imanav10" data-width="400" data-height="150" data-theme="default">
					  {/* Content of the GitHub card */}
					</div>
					<p className="px-5 hover:text-white transition-all">> pick me and move</p>
				  </motion.div>
				  {/* New text element added here, vertically aligned with the GitHub card */}
				  
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white' }}>
					<p style= {{ fontSize: '150px' , paddingRight: '0'}} className="px-5 hover:text-gold transition-all" > <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.imdb.com/title/tt5311514/&ved=2ahUKEwjwsI3RjamHAxWPe2wGHR9iBqIQFnoECD4QAQ&usg=AOvVaw3dxRlPsgi3QAr0aqIVH_th' style={{textDecorationLine: 'none', color: 'inherit'}} target=' '>> はい My</a></p>	
					<p style={{ fontSize: '100px',fontColor: 'gold' }} className="px-5 hover:text-gold transition-all"> 私の名前は</p>
					<p style={{ fontSize: '50px' }} className="px-5 hover:text-gold transition-all">Watashinonamaeha - Name is MANAV</p>
				  </div>
				</div>
			</section>
			<section class="containers">
				<img src="book.png" />
				<div class="bottom-left" id="text">
                    <h1  className="px-5 hover:text-gold transition-all word fancy" style={{color: 'magenta'}}>YKYK</h1>
                    <h1 className="px-5 hover:text-gold transition-all word fancy" style={{color: 'magenta'}}>マナブ</h1>
					
                </div>
				<div class="bottom-right"><iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/4OYD1lr1BkzZ1XhITn3Wz5?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
				<br />
				<iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/4eFzULFLUvY3zAKA4Talnh?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
				</div>
			
				
			</section>
		</div>
	);
};

export default About;
