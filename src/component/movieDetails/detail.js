import React from "react";
import movieDB from "../../movieDB"
import {Link, useParams} from 'react-router-dom';

export default function Detail() {
    let {movieID} =useParams();
    const movie = movieDB.find(movie =>movie.ID===parseInt(movieID));
    return(
        <Link  to={'/'}>
        <h1 className='text-9xl cursor-pointer'>{movie.Title} </h1>
        </Link>
    )
}