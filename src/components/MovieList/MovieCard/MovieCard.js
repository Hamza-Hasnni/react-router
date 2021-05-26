import React from 'react';
import './MovieCard.css';
import ReactStars from "react-rating-stars-component";


const MovieCard = ({item}) => {

    
    return (
      <div>
          <div class="wrapper">
	<div class="main_card">
		<div class="card_left">
			<div class="card_datails">
				<h1>{item.name}</h1>
				<div class="card_cat">
					<p class="year">{item.date}</p>
					<p class="genre"> {item.type} </p>
					
				</div>
				<p class="disc">{item.description}</p>
				
			<div class="social-btn">
       
			
			
				
				
				<button>
					<i class="fas fa-thumbs-up"></i>  
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
		<div class="card_right">
			<div class="img_container">
				<img src={item.image} alt=""/>
				</div>
				<div class="play_btn">
					<a href="https://www.imdb.com/title/tt4912910/" >
						<i class="fas fa-play-circle"></i>
					</a>
				</div>
			</div>
		</div>
	</div>




      </div>
      
    );
}

export default MovieCard
