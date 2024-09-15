// React Imports
import React, { useState, useEffect } from 'react';

// CSS Imports
import './Home.css';

// Assets Import
import testimage from '../assets/images.jpeg';

// Components Import
import MovieCard from '../Components/MovieCard';
import NavBar from '../Components/NavBar';

// Carousel Import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <>
      <NavBar/>
      <header className='header_container'>
        <img src={testimage} alt="Banner do filme" />
      </header>

      <div className='catalogo'>
        <h1 className='session_title'>Melhores Avaliados:</h1>
        {topMovies.length === 0 && <p>Loading...</p>}
          <Slider {...settings}>
            {topMovies.length > 0 && topMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id}/>
            ))}
          </Slider>
      </div>
    </>
  )
}

export default Home;