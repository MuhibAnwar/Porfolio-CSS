import React from 'react';

const Skills = () => {
  

  return (
    <div id="skills" style={{paddingTop:'32px',backgroundColor:'rgb(22, 16, 16)',display:'flex'}}>
      <div  style={{
    display: 'grid',
    gap: '80px', 
    alignItems: 'center',
   gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
}} data-aos="zoom-in-up">
        <div>
          <h1 style={{fontWeight:'bold',fontSize:'50px',marginLeft:'30px',marginTop:'20px'}}>ABOUT MY SKILLS</h1>
          <p style={{color:'#ccc9c9',paddingTop:'2px',marginLeft:'30px',marginRight:'8px'}}>
            I possess a strong foundation in web development, with expertise in TypeScript and Next.js for building modern, scalable web applications. I am proficient in front-end technologies such as HTML and CSS, allowing me to create responsive and user-friendly interfaces. My technical skills are complemented by a solid understanding of communication, which enables me to collaborate effectively with both team members and clients. Additionally, my problem-solving mindset and ability to adapt to new technologies ensure that I can tackle challenges and deliver high-quality results in any project I undertake.
          </p>
        </div>

        <div style={{
  
    display:'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    color: 'var(--accent)',
    fontSize: '35px',
    marginTop: '50px',}}
>
          <div className="space-y-2">
            <h3 data-aos="zoom-in-up">TypeScript</h3>
            <h3 data-aos="zoom-in-up">HTML</h3>
            <h3 data-aos="zoom-in-up">CSS</h3>
          </div>
          <div className="space-y-2">
            <h3 data-aos="zoom-in-up">Next.js</h3>
            <h3 data-aos="zoom-in-up">WordPress</h3>
            <h3 data-aos="zoom-in-up">Node.js</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
