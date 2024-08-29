import React from "react";
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>
              The only thing we are serious is about healthy and hygenic food!
            </p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A illum
            ratione molestias dicta pariatur sequi aperiam, adipisci hic
            expedita saepe architecto quam quae totam culpa quos delectus
            consequatur fugiat? Aliquam dicta debitis quis laudantium cum aut
            consequuntur voluptates, inventore sequi excepturi eos ratione nihil
            laborum maxime iusto, quaerat magni soluta!
          </p>
          <Link to={'/'} >Explore Menu 
            <span>
                <HiOutlineArrowNarrowRight/>  
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
