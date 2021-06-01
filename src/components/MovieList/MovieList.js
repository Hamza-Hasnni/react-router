import React from 'react'
import MovieCard from './MovieCard/MovieCard.js'
import {Link} from 'react-router-dom'
const MovieList = ({moviesData}) => {
    return (
        <div>
           { moviesData.map((item)=> 
           <Link to={`/${item.name}`} style={{textDecoration:"none"}}>
           <MovieCard item= {item } key={item.id}/>
           </Link>
           )}
        </div>
    )
}

export default MovieList
