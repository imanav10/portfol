const lowres = () => {
    return(
        <main>
            <>
                <section className="hero" style={{background: 'white', color: 'black'}}>
                    <br />
                    <button style={{paddingLeft: '13px', paddingBottom: '12px'}}><a href= "/" style={{
                        display: 'inline-block',
                        backgroundColor: '#FFFFF',
                        color: 'black',
                        textAlign: 'center',
                        padding: '15px 32px',
                        textDecoration: 'none',
                        fontSize: '16px',
                        margin: '4px 2px',
                        cursor: 'pointer',
                        border: '1px solid black',
                        borderRadius: '1px',}}>click to go back to homepage</a></ button>
                    <> 
                        <img src="yo.jpg" style={{ width: '400px', height: '400px', marginLeft: '12px'}}/>
                        <h2 style={{color: 'black', fontSize: '60px', paddingTop: "12px"}}>
                            hii, My name is Manav
                        </h2>
                        <h2 style={{marginLeft: "13px", paddingBottom: '12px'}}>
                            I am a undergrad at nsut.
                        </h2>
                        <p style={{justifyContent: 'center', textAlign: 'center'}}>you have access to scroll Horizontally above</p>
                    </>
                </section>
            </>
        </main>
        
        
    )
}
export default lowres