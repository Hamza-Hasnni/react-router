import React from 'react';
import './MovieCard.css';
import ReactStars from "react-rating-stars-component";


const MovieCard = ({item}) => {

    
    return (
      <div>
          <div className="wrapper">
	<div className="main_card">
		<div className="card_left">
			<div className="card_datails">
				<h1>{item.name}</h1>
				<div className="card_cat">
					<p className="year">{item.date}</p>
					<p className="genre"> {item.type} </p>
					
				</div>
				<p className="disc">{item.description}</p>
				
			<div className="social-btn">
       
			
			
				
				
				<button>
					<i className="fas fa-thumbs-up"></i>  
		<ReactStars
            count={5}
            name="rating"  
            size={24}
            position="center"
            activeColor="#ffd700"
			value={item.rating}
			edit = {false}
          />
				</button>
			</div>	
			</div>
		</div>
		<div className="card_right">
			<div className="img_container">
				<img src={item.image} alt=""/>
				</div>
				<div className="play_btn">
					<a href="https://www.imdb.com/title/tt4912910/" >
						<i className="fas fa-play-circle"></i>
					</a>
				</div>
			</div>
		</div>
	</div>




      </div>
      
    );
}

export default MovieCard
