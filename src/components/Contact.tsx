import React from 'react';
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiLinkDuotone } from "react-icons/pi";

const Contact = () => {
  return (
    <div id="contact" style={{paddingTop:'65px',display:'container',backgroundColor:'rgb(22, 16, 16)'}}>
      <div style={{display:'grid',gap:'10px',gridTemplateColumns:'repeat(2,1fr)'}}>
        
    
      <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>


          <h2 className="text-5xl" data-aos="zoom-in-up"style={{fontSize:'50px',marginLeft:'30px'}}>Contact me</h2>
          <p style={{color:'#ccc9c9',paddingTop:'10px',fontSize:'18px',marginLeft:'30px'}} data-aos="zoom-in-up">
            Feel free to reach out to me via email or phone for any inquiries.
          </p>
          
          <div  style={{display:'flex',gap:'3px',alignItems:'center',marginLeft:'30px',paddingTop:'10px'}} data-aos="zoom-in-up">
            <IoMail size={30} /> <span>muhibanwar065@gmail.com</span>
          </div>
          <div style= {{display:'flex',gap:'3px',alignItems:'center',marginLeft:'30px',paddingTop:'10px'}}data-aos="zoom-in-up">
            <BsFillTelephoneFill size={30} /> <span>+923306249841</span>
          </div>
          <div style= {{display:'flex',gap:'3px',alignItems:'center',marginLeft:'30px',paddingTop:'10px'}}data-cos="zoom-in-up">
            <PiLinkDuotone size={30} /><span>Muhib Anwar</span>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginTop: '5px',
    marginLeft: '50px',
    color: 'white', // Text color for labels
    backgroundColor: 'transparent', // Matches the dark background
    padding: '1rem',
    maxWidth: '1000px',
  }}
  data-aos="zoom-in-up"
>
  {/* Name Input */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <label htmlFor="name" style={{ fontSize: '16px' }}>
      Name
    </label>
    <input
      type="text"
      id="name"
      style={{
        height: '40px',
        backgroundColor: 'transparent',
        border: '1px solid #fff',
        padding: '0 8px',
        color: 'white',
        fontSize: '14px',
      }}
    />
  </div>

  {/* Email Input */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <label htmlFor="email" style={{ fontSize: '16px' }}>
      Email
    </label>
    <input
      type="email"
      id="email"
      style={{
        height: '40px',
        backgroundColor: 'transparent',
        border: '1px solid #fff',
        padding: '0 8px',
        color: 'white',
        fontSize: '14px',
      }}
    />
  </div>

  {/* Message Textarea */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <label htmlFor="msg" style={{ fontSize: '16px' }}>
      Message
    </label>
    <textarea
      id="msg"
      rows={10}
      style={{
        backgroundColor: 'transparent',
        border: '1px solid #fff',
        padding: '8px',
        color: 'white',
        fontSize: '14px',
        resize: 'none',
      }}
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    style={{
      backgroundColor: 'white',
      color: 'black',
      padding: '10px 20px',
      marginTop: '2px',
    
      fontWeight: 'bold',
      fontSize: '14px',
    }}
    data-aos="zoom-in-up"
  >
    SEND
  </button>
</div>
</div>
    </div>
  );
};

export default Contact;
