'use client'
import { MdOutlineMenuBook, MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    
    <div  style={{display:'flex',maxWidth:'100%',paddingTop:'8px',alignItems:'center',justifyContent:'space-between' }}>
  
      <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center',flexGrow: 1}}>
        <h2 style={{textAlign: 'left',fontSize: '20px', fontWeight: 'bold',marginTop:'30px',marginLeft:'30px'}}>PERSONAL PORTFOLIO</h2>
      </div>

      
      <ul style={{gap: '66px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center',marginTop:'20px',marginRight:'40px'}}>
        <li className="menuLink"><a href="#hero">Home</a></li>
        <li className="menuLink"><a href="#about">About</a></li>
        <li className="menuLink"><a href="#projects">Projects</a></li>
        <li className="menuLink"><a href="#skills">Skills</a></li>
        <li className="menuLink"><a href="#contact">Contact me</a></li>
      </ul>

  
      <div  onClick={toggleMenu}style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center',marginTop:'20px',marginRight:'10px'}}>
        {isMenuOpen ? <MdOutlineClose size={24} /> : <MdOutlineMenuBook size={24} />}
      </div>

  
      {isMenuOpen && (
        <div style={{position: 'absolute', top: '0', right: '0', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '16px', marginTop: '8px', borderRadius: '8px'}}>
          <ul className="space-y-4">
            <li><a href="#hero" className="menu">Home</a></li>
            <li><a href="#about" className="menu">About</a></li>
            <li><a href="#projects" className="menu">Projects</a></li>
            <li><a href="#skills" className="menu">Skills</a></li>
            <li><a href="#contact" className="menu">Contact me</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
