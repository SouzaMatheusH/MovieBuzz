// Hooks Import
import { useState, useEffect } from 'react';

// Icons Import
import { CiSettings, CiHome, CiSearch, } from 'react-icons/ci';
import { CgProfile } from "react-icons/cg";

// Carousel Import
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Styles Import
import './Home.css';

// Carousel Style define
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// Test Image Import
import testimage from '../assets/images.jpeg';
const imagesURL = import.meta.env.VITE_IMG;


import React from 'react'

const Home = () => {

  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <>
      <nav className='nav_container'>
        <CiSearch className='icon'/>
        <CgProfile className='icon'/>
        <CiHome className='icon'/>
        <CiSettings className='icon'/>
      </nav>

      <header className='header_container'>
        <img src={testimage} alt="Banner do filme" />
      </header>

      <div className='catalogo'>
        <h1 className='session_title'>Melhores Avaliados:</h1>
        <Carousel className='carrossel_container' responsive={responsive}>
          {topMovies.length > 0 && topMovies.map((movie) => 
            <div className='movie_card'>
              <img className='movie_image' src={imagesURL + movie.backdrop_path} />
              <p className="legend">{movie.title}</p>
            </div>
          )}
        </Carousel>
      </div>
    </>
  )
}

export default Home
