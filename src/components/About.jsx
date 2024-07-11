import sample from '/Videos/video.mp4';
const About = () => {
  return (
    <div className="container">
	  <video className='videoTag' autoPlay loop muted>
		<section className="hero">
			<h1>Hey</h1>
		</section>
		<source src={sample} type='video/mp4' />
		

	  </video>
	</div>
  )
}

export default About
