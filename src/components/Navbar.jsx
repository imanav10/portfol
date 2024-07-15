const Navbar = () => {
    const smoothScroll = (e, targetId) => {
    e.preventDefault(); 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div style={{ backgroundColor: 'transparent' }}>
        <header className="w-full py-5 sm-px-10 px-5 flex justify-between items-center" style={{ backgroundColor: 'transparent', important: true ,textDecoration: 'none'}}>
            <nav className="flex w-full screen-max-width">
                <ul className="flex flex-1 justify-center">
                    <li className="px-10">@imanav10</li>
                    <li className="px-5 hover:text-gold transition-all"><a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a></li>
                    <li className="px-5 hover:text-gold transition-all"><a href="#experience" onClick={(e) => smoothScroll(e, 'experience')} style={{ textDecoration: 'none', color: 'inherit' }}>Experience</a></li>
                    <li className="px-5 hover:text-gold transition-all"><a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar

