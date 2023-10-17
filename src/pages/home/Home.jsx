import React from 'react';
import Profile from '../../assets/IMG_22.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Dani.</span> UX Designer
          </h1>

          <p className='home__description'>
          I am a Creative Analyst. An individual who possesses a harmonious 
          blend of creative flair and analytical prowess. I thrive at the 
          intersection of design and logic, seamlessly merging my artistic 
          sensibilities with my problem-solving skills. I possess an innate 
          curiosity that drives me to explore both the aesthetic and functional 
          dimensions of projects. In the realm of design, I am passionate about aesthetics, 
          user experiences, and the power of visual storytelling. I  have an eye 
          for detail, an understanding of color theory, typography, and layout, 
          and a knack for crafting visually engaging and user-centered designs. 
          My creativity extends beyond just appearances – I can envision and 
          translate concepts into tangible designs that resonate with audiences.

          </p>

          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
