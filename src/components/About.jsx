import React, { useEffect } from 'react';
import sample from '/Videos/video.mp4';
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
			  <motion.div
				className="github-card-wrapper"
				drag
				dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
				whileDrag={{ scale: 1.1 }}
				style={grabCursorStyle} // Apply the grab cursor style here
			  >
				<div className="github-card" data-github="imanav10" data-width="400" data-height="150" data-theme="default">
				  {/* Content that should be draggable along with the hand icon */}
				</div>
				<p>*pick me</p>
			  </motion.div>
			  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
			{/* Adjust the styling as needed to ensure visibility */}
			<h4>Hey Fellas</h4>
		  </div>
			</section>
			<div className="video-container">
				<video className='videoTag' autoPlay loop muted>
					<source src={sample} type='video/mp4' />
				</video>
			</div>
		</div>
	);
};

export default About;
