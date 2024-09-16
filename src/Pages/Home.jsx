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

// Env Setup
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const discoverURL = import.meta.env.VITE_DISCOVER;

const Home = () => {
  // Movies Lists Array's
  const [topMovies, setTopMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  
  // Movies Lists Functions
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  const getActionMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setActionMovies(data.results);
  };

  const getAdventureMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setAdventureMovies(data.results);
  };

  const getHorrorMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setHorrorMovies(data.results);
  };

  const getAnimationMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setAnimationMovies(data.results);
  };


  const getComedyMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setComedyMovies(data.results);
  };

  useEffect(() => {
    // Top Rated
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    // By Genre
    const actionUrl = `${discoverURL}?${apiKey}&with_genres=28`;
    const adventureUrl = `${discoverURL}?${apiKey}&with_genres=12`;
    const horrorUrl = `${discoverURL}?${apiKey}&with_genres=27`;
    const animationUrl = `${discoverURL}?${apiKey}&with_genres=16`;
    const comedyUrl = `${discoverURL}?${apiKey}&with_genres=35`;


    getTopRatedMovies(topRatedUrl);
    getActionMovies(actionUrl);
    getAdventureMovies(adventureUrl);
    getHorrorMovies(horrorUrl);
    getAnimationMovies(animationUrl);
    getComedyMovies(comedyUrl);
  }, []);


  // Sliders config
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
        {/* Filmes Melhores Avaliados */}
        <div className="genre-container">
          <h1 className='session_title'>Melhores Avaliados:</h1>
          {topMovies.length === 0 && <p>Loading...</p>}
              <Slider {...settings}>
                {topMovies.length > 0 && topMovies.map((movie) => (
                  <MovieCard movie={movie} key={movie.id}/>
                ))}
              </Slider>
        </div>
            
        {/* Filmes de Ação */}
        <div className="genre-container">
          <h1 className='session_title'>Filmes de Ação:</h1>
          {actionMovies.length === 0 && <p>Loading...</p>}
              <Slider {...settings}>
                {actionMovies.length > 0 && actionMovies.map((movie) => (
                  <MovieCard movie={movie} key={movie.id}/>
                ))}
              </Slider>
        </div>

        {/* Filmes de Aventura */}
        <div className="genre-container">
          <h1 className='session_title'>Filmes de Aventura:</h1>
          {adventureMovies.length === 0 && <p>Loading...</p>}
              <Slider {...settings}>
                {adventureMovies.length > 0 && adventureMovies.map((movie) => (
                  <MovieCard movie={movie} key={movie.id}/>
                ))}
              </Slider>
        </div>

        {/* Filmes de Terror */}
        <div className="genre-container">
          <h1 className='session_title'>Filmes de Terror:</h1>
          {horrorMovies.length === 0 && <p>Loading...</p>}
              <Slider {...settings}>
                {horrorMovies.length > 0 && horrorMovies.map((movie) => (
                  <MovieCard movie={movie} key={movie.id}/>
                ))}
              </Slider>
        </div>

        {/* Filmes de Animação */}
        <div className="genre-container">
          <h1 className='session_title'>Filmes de Animação:</h1>
          {animationMovies.length === 0 && <p>Loading...</p>}
              <Slider {...settings}>
                {animationMovies.length > 0 && animationMovies.map((movie) => (
                  <MovieCard movie={movie} key={movie.id}/>
                ))}
              </Slider>
        </div>

        {/* Filmes de Comédia */}
        <div className="genre-container">
          <h1 className='session_title'>Filmes de Comédia:</h1>
          {comedyMovies.length === 0 && <p>Loading...</p>}
              <Slider {...settings}>
                {comedyMovies.length > 0 && comedyMovies.map((movie) => (
                  <MovieCard movie={movie} key={movie.id}/>
                ))}
              </Slider>
        </div>

      </div>
    </>
  )
}

export default Home;