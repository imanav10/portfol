

const Experience = () => {
  return (
    <div class container style={{background: 'black'}}>
      <section className=" hero">
        <div style={{paddingLeft: '10%', paddingRight:'10%', paddingTop: "5%",paddingBottom: '5%'}}>
            <div id="text">
                <div class="line">
                    <d id="channel-link" class="word" 
                        >Experience</d>
                </div>
                <div class="line" onClick={console.log}>
                    <d class="word fancy hover:text-blue">JAVASCRIPT</d>
                    <d class="word fancy">Intermediate</d>
                </div>
                <div class="line">
                    <d class="word fancy hover:text-green transition-all">PYTHON</d>
                    <d class="word fancy">ExperienceD</d>
                </div>
                <div class="line">
                    <d class="word fancy hover:text-blue transition-all">DATASTRUCTURE AND ALGORITHMS</d>
                    <d class="word fancy"> 1+ YR Intermediate</d>
                </div>
                <div class="line">
                    <d class="word fancy hover:text-orange transition-all" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>THREEJS GREENSOCK GSAP</d>
                    <d class="word fancy">Basic</d>

                </div>
                <div class="line">
                    <d class="word fancy hover:text-blue transition-all">SASS      DJANGO    FRAMER MOTION</d>
                    <d class="word fancy">Intermediate</d>
                </div>
                <div class="line">
                    <d class="word fancy hover:text-blue transition-all">KOTLIN</d>
                    <d class="word fancy">Intermediate</d>
                </div>
                <div class="line">
                    <d class="word fancy hover:text-blue transition-all">GO</d>
                    <d class="word fancy">Intermediate</d>
                </div>
                <div class="line">
                    <d class="word fancy hover:text-blue transition-all">Lua</d>
                    <d class="word fancy">Intermediate</d>
                </div>
                <div class="line">
                    <d class="word fancy hover:text-orange transition-all">Zig</d>
                    <d class="word fancy">Basic</d>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
