import './ReviewCard.css'

import React from 'react'

const imageUrl = import.meta.env.VITE_IMG

import avatar from '../assets/missingAvatar.webp'


const ReviewCard = ({ review }) => {
  console.log(review.avatar_path)

  return (
    <div className='review-card'>
      <div className="user">

        <img className='user-img' src={
          review.author_details.avatar_path === null ? avatar : imageUrl + review.author_details.avatar_path
          } alt={review.author}/>
        <h3>{review.author}</h3>
      </div>
      <p className='review-content'>{review.content}</p>
    </div>
  )
}

export default ReviewCard
