import React, { useEffect, useState } from 'react';
import Portfolio from './Portfolio';
import Login from '../assets/Login.png';
import Cms from '../assets/Cms.png';
import Shoppy from '../assets/Shoppy.png';

const Project = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        img: Login, 
        name: "Login Page",
        desc: "Introducing a login page that embodies the beauty of simplicity. With a minimalistic design approach, this page offers a clutter-free and focused experience..",
        link: "https://looogin-page.netlify.app/",
        glink:"https://github.com/arnavco9573/Login-Page",
      },
      {
        id: 2,
        img: Cms, 
        name: "Contact Management System using Redux",
        desc: "Created an app as an interviewer for Taiyo.Ai ",
        link: "https://contactmanges.netlify.app/",
        glink:"https://github.com/arnavco9573/contactms",
      },
      {
        id: 3,
        img: Shoppy, 
        name: "E-Commerce App",
        desc: "Created an E-commerce-App using React and Redux Store.Created two pages home and cart page.",
        link: "https://rshoppy.netlify.app/",
        glink:"https://github.com/arnavco9573/React_E_commerce_App",
      },
    ]);
  }, []);

  return (
    <div id='portfolio'>
      <Portfolio items={items} />
    </div>
  );
}

export default Project;
