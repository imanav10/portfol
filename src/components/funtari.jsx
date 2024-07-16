import React, {useEffect} from "react";

const funtari = () => {

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
                    <div style={{padding: '8px'}}> 
                        <img src="pfp.jpeg" style={{ width: '250px', height: '250px'}}/>
                        <section>
                           <p style={{color: 'black',paddingTop: '12px', fontSize: '19px'}}>hi
                                
                            </p> 
                            <p style={{color: 'black', fontSize: '19px'}}>If you give up, the game is already over.
                                	<br/>あきらめたら そこで試合終了ですよ</p>
                            <p style={{color: 'black', fontSize: '19px'}}>Not used Stuff</p>
                            <br /><a href='https://github.com/imanav10/portfol/tree/master/public' style={{color: 'blue', fontSize: '19px', display: 'flex', alignItems: 'center', gap: '10px'}}><img src="cool.png" style={{width: '2%', height:'6%', textDecorationLine: 'none', color: 'inherit'}} />./public</a>
                        </section>
                    </div>
                </section>
            </>
        </main>
        
        
    )
}
export default funtari