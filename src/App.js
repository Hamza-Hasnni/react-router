import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import MovieFilter from "./components/MovieFiltre/MovieFilter";
import React, { useState, useEffect } from "react";
import AddMovie from "./components/MovieAdd/AddMovie";
import ReactStars from "react-rating-stars-component";
import Trail from "./components/MovieTrail/Trail"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const moviesData = [
    {
      id: Math.floor(Math.random()*1000),
      image:
        "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
      rating: 4,
      name: "Devil's Mile",
      date: "2014",
      type: "Action | Crime",
      description:
        "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
        movieTrailer: "https://www.youtube.com/embed/iGTSDqSLXN0",
    },
    {
      id: Math.floor(Math.random()*1000),
      image:
        "https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg",
      rating: 2,
      name: "Once Upon A Time In The west",
      date: "1968",
      type: "Western",
      description:
        "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
        movieTrailer: "https://www.youtube.com/embed/c8CJ6L0I6W8"
      },
    {
      id: Math.floor(Math.random()*1000),
      image:
        "https://i.pinimg.com/564x/37/bd/f8/37bdf8f405a30977959e112d6f48aec0.jpg",
      rating: 4,
      name: "Taxi Driver",
      date: "1976",
      type: "Crime | Drama",
      description:
        "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
        movieTrailer:"https://www.youtube.com/embed/44gB58YS53A"
      },
    {
      id: Math.floor(Math.random()*1000),
      image:
        "https://i.pinimg.com/564x/78/55/ac/7855acc7002b1ae619b1edaa4b595df3.jpg",
      rating: 4,
      name: "Mad Max",
      date: "1979",
      type: "Action | Adventure",
      description:
        "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
        movieTrailer:"https://www.youtube.com/embed/hEJnMQG9ev8"
      },
    {
      id: Math.floor(Math.random()*1000),
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b1330b14202071.5627f4dc23472.jpg",
      rating: 3,
      name: "Little Miss Sunshine",
      date: "2006",
      type: "Comedy | Drama",
      description:
        "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
        movieTrailer:"https://www.youtube.com/embed/wvwVkllXT80"
      },
    {
      id: Math.floor(Math.random()*1000),
      image:
        "https://i.pinimg.com/564x/32/49/1c/32491ccd2f4ce577dea8871988c5828c.jpg",
      rating: 5,
      name: "KILL BILL",
      date: "2003",
      type: "Action",
      description:
        "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.'The Bride' decided to escape her life as a killer.",
      details:
        "https://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl",
        movieTrailer: "https://www.youtube.com/embed/7kSuas6mRpk"
    },
    {
      id: Math.floor(Math.random()*1000),
      image:
        "https://i.pinimg.com/originals/3e/f1/ba/3ef1baaaceb5a95c4f57a7cb2393b39d.jpg",
      rating: 5,
      name: "The Wolf Of Wall Street",
      date: "2013",
      type: " Biography | Crime | Drama  ",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        movieTrailer:"https://www.youtube.com/embed/iszwuX1AK6A"
      },
  ];
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState(moviesData);
  const [stars, setStars] = useState(0);
  const [trail, setTrail] = useState(videos);

 const handelTrailer = elem =>{
    setTrail(elem)
 };

  const handelSearch = (x) => {
    setSearch(x);
  };
  const handelStars = (el) => {
    setStars(el);
  };

  const addMovie = (add) => {
    setVideos([...videos, add]);
  };

  return (
    <Router>
      <Switch>
<Route exact path='/'>
    <div className="App">
      <MovieFilter handelSearch={handelSearch} />
      <div
        className="rating"
        style={{
          marginLeft: "35%",
          marginRight: "35%",
          display: "flex",
          color: "white",
        }}
      >
        Rating Search
        <ReactStars
          count={5}
          name="rating"
          size={24}
          position="center"
          activeColor="#ffd700"
          onChange={(rat) => {
            handelStars(rat);
          }}
        />
      </div>
      <MovieList
        moviesData={videos.filter(
          (ele) =>
            ele.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
            ele.rating >= stars
        )}
      />
      <AddMovie addMovie={addMovie} />
    </div>
    </Route>
    <Route path = {`/:name`} render={(props) => <Trail moviesData={moviesData}
    {...props} />}
     />
    </Switch>
    </Router>
  );
}

export default App;
