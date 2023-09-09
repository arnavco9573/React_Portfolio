import React, { useEffect, useState } from 'react'
import Skill from './Skill'
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io';
import { DiReact } from 'react-icons/di';
import { FaNode } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
    const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([
      {
        id: 1,
        img: <AiFillHtml5 className='' />,
        tag: "HTML",
        about: "I have a good knowledge of a HTML and HTML5 with work experience of 4 months on personal projects. Certification is added in 'Read More' ",
        certi:"https://www.sololearn.com/certificates/CT-B1TU3FI7",
      },
      {
        id: 2,
        img: <BiLogoCss3 className='' />,
        tag: "CSS",
        about: "I have 4 months of hands-on CSS experience, crafting appealing, responsive UIs with CSS3. Certification; details in 'Read More'.",
        certi:"https://coursera.org/share/6534914a03411c9ac36f0ac2810b6f50",
      },
      {
        id: 3,
        img: <IoLogoJavascript className='' />,
        tag: "JavaScript",
        about: "4 months experience in JavaScript, building dynamic web functionalities. Certification; details in 'Read More'.",
        certi:"https://coursera.org/share/6534914a03411c9ac36f0ac2810b6f50",
      },
      {
        id: 4,
        img: <DiReact className='' />,
        tag: "React.js",
        about: "Skilled in React, building interactive web applications for 3 months. Certificatio; details in 'Read More'.",
        certi:"https://coursera.org/share/f02b0a0982fa3635d9e7b858010b0464",
      },
      {
        id: 5,
        img: <FaNode className='' />,
        tag: "Node.js",
        about:"Skilled in React, building interactive web applications for 3 months.",
        certi:"",
      },
      {
        id: 6,
        img: <SiTailwindcss className='' />,
        tag: "Tailwind css",
        about:"Proficient in Tailwind CSS, creating modern and responsive designs for 3 months.",
        certi:"",
      },
    ]);
}, []);
  return (
    <div>
      <Skill items = {items}/>
    </div>
  )
}

export default Skills
