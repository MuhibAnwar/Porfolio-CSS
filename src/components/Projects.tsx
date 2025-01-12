import React from 'react';
import Headings from './Heading';
import Cards from './Cards';

const data = [
  {
    id: 0,
    title: "Resume Builder",
    descri: "A resume builder that helps users create resumes quickly and easily.",
    img: "/screen.png", 
    tags: ["HTML", "CSS", "TYPESCRIPT"]
  },
  {
    id: 1,
    title: "CLI PROJECTS",
    descri: "CLI projects made with Typescript that work on Command Prompt only.",
    img: "/muh.jpeg",
    tags: ["TYPESCRIPT"]
  }
];

const Projects = () => {
  return (
    <div id="projects" className="container" style={{paddingTop:'32px',paddingBottom:'32px'}}>
      <Headings title="My Projects" />
      <div  style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'32px',marginRight:'400px'}} >    {data.map((el) => (
          <Cards
            key={el.id}
            title={el.title}
            des={el.descri}  
            img={el.img}
            tages={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
