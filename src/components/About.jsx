import React, { useEffect } from 'react';
import sample from '/Videos/vid.mp4';
import { motion } from 'framer-motion'; // Step 2: Import motion
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

	return (
		
		<div>
			<section className='hero'>
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
					<p style= {{ fontSize: '150px' , paddingRight: '0'}} className="px-5 hover:text-gold transition-all"> >はい My</p>	
					<p style={{ fontSize: '100px' }} className="px-5 hover:text-gold transition-all"> 私の名前は</p>
					<p style={{ fontSize: '50px' }} className="px-5 hover:text-gold transition-all">Watashinonamaeha - Name is MANAV</p>

				  </div>
				</div>
			</section>
			<section>
				<img src="book.jpeg" />
			</section>
		</div>
	);
};

export default About;
