
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Info = () => {
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
                            I am a undergrad at NSUT Delhi. I use vim + Arch btw.
                        </h2>
                        <SyntaxHighlighter language="LaTeX">
                        {`\\documentclass{article}
                        \\usepackage[utf8]{inputenc}
                        \\usepackage{hyperref}
                        \\usepackage{geometry}
                        \\usepackage{graphicx}
                        \\geometry{a4paper, margin=1in}
                        \\begin{document}
                        \\maketitle
                        \\section* {About me}
                        Hello! I'm \textbf{Manav}, a passionate developer and linux kernal enjoyer,
                        love contributing to open source, and the tech community.
                        \\begin{itemize}
                            \\item GitHub: \href{https://github.com/imanav10}{imanav10}
                            \\item LinkedIn: \href{https://www.linkedin.com/in/imanav07/}{Manav Raj}
                        \\end{itemize}
                        \\section*{Skills}
                        \\begin{itemize}
                            \\item Languages: JavaScript, Python, Go, C, Lua, Kotlin
                            \\item Frameworks: React, Django, fiber, express.js, next.js
                        \\end{itemize}
                        \\end{document}`}
                        </SyntaxHighlighter>
                        <p style={{justifyContent: 'center', textAlign: 'center'}}>you have access to scroll Horizontally above</p>
                    </>
                </section>
            </>
        </main>
        
        
    )
}
export default Info