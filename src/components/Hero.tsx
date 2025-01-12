import React from 'react';
import Image from 'next/image';

const validateImgSrc = (src: string) => (src.startsWith("/") ? src : `/${src}`);

const Hero = () => {
  return (
    <div
      id="hero"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    
      }}
    >
      
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{ padding: '8px',marginRight:'50px' }}
        
        >
          <Image
            src={validateImgSrc('KM2.jpg')}
            alt="Profile"
            width={350}
            height={350}
            style={{marginRight:'100px'}}
          
          />
        </div>
      </div>

      
      <div
        data-aos="zoom-in-up"
        style={{
          flex: 1,
          textAlign: 'center',
          color: '#ffffff', 
          fontSize: '6rem', 
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Muhib</p>
        <p>Anwar</p>
        <p>Here</p>
      </div>
    </div>
  );
};

export default Hero;
