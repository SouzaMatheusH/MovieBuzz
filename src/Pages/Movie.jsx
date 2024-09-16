
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

// Components Import
import ReviewCard from "../Components/ReviewCard";
import NavBar from "../Components/NavBar";

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const getReview = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setReviews(data.results);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    const reviewUrl = `${moviesURL}${id}/reviews?${apiKey}`;
    getMovie(movieUrl);
    getReview(reviewUrl);
  }, []);

  return (
    <div className="movie">
      <NavBar/>
      <div className="movie-page">
        {movie && (
          <>
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
              <h3>
                <BsWallet2 className="desc-icon"/> Orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp className="desc-icon" /> Receita:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit className="desc-icon" /> Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill className="desc-icon" /> Descrição:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </>
        )}

        <div className="movie-reviews">
          <h2>Análises de Usuários:</h2>
          { reviews && reviews.map((review) => (
            <ReviewCard review={review} key={review.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
