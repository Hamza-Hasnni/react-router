import React from "react";
import {useEffect , useState} from "react"
import { useHistory } from 'react-router-dom';
import "./Trailer.css"
import { BsArrowLeftShort } from "react-icons/bs";

const Trail = ({ match ,moviesData}) => {
const [movie, setmovie] = useState("")
useEffect(() => {
  setmovie(moviesData.find(el=>el.name === match.params.name))
}, [])

let history = useHistory();

const handelBack = () => {
  history.push('/')
}
  return (
    <div className="bg">
      <div>
       <button className="MBtn"  onClick={handelBack}>
          <BsArrowLeftShort/>
        </button>
     </div>
   
    <div className="trailer">
     
      <p>{movie.description}</p>
      <iframe
        width="560" 
        height="315"
        src={movie.movieTrailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1>{movie.name}</h1> 
    </div>
    </div>
  );
};

export default Trail;
