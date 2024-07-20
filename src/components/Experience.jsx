const Experience = () => {
  return (
    <div class container style={{background: 'black'}}>
      <section className=" hero" id='experience' style={{height: 'auto'}}>
        <div style={{padding: '5%', textAlign: 'center', maxWidth: '90%', margin: 'auto'}}>
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
                    <d class="word fancy hover:text-blue transition-all">JAVA</d>
                    <d class="word fancy">BASIC</d>
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
                    <d class="word fancy hover:text-orange transition-all">Solidity</d>
                    <d class="word fancy">Yes</d>
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
