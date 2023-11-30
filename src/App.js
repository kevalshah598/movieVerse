import React, { useState, useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web'

import MovieCards from "./components/MovieCards/MovieCards";
import MovieCard from "./components/MovieCard/MovieCard"; 
import useStyles from "./styles.js"
import logo from './assets/logo.jpg';
import harold from './assets/favoriteMovie.jpg'

const alanKey = '1b1e49a523c0afdd647024a319a1cf4d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [favoriteMovie, setFavoriteMovie] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, movies, favoriteMovie}) => {
                if(command === 'showMovies'){
                    console.log(movies);
                    setMovies(movies);
                } else if(command === 'showFavoriteMovie') {
                    if (favoriteMovie && favoriteMovie.poster === 'harold') {
                        favoriteMovie.poster_path = harold;
                    }
                    setFavoriteMovie(favoriteMovie);
                }
            }
        })
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src={logo} className={classes.logo} alt='logo'/>
            </div>
            {favoriteMovie ? <MovieCard movie={favoriteMovie} /> : <MovieCards movies={movies} />}
        </div>
    )
}

export default App;
