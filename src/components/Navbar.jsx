const Navbar = () => {
  return (
    <div style={{ backgroundColor: 'transparent' }}>
        <header className="w-full py-5 sm-px-10 px-5 flex justify-between items-center" style={{ backgroundColor: 'transparent', important: true }}>
            <nav className="flex w-full screen-max-width">
                <ul className="flex flex-1 justify-center">
                    <li className="px-10">@imanav10</li>
                    <li className="px-5 hover:text-gold transition-all"><a href="#about">About</a></li>
                    <li className="px-5 hover:text-gold transition-all"><a href="#experience">Experience</a></li>
                    <li className="px-5 hover:text-gold transition-all"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar

