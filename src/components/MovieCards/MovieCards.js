import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'

import useStyles from './styles.js'
import MovieCard from '../MovieCard/MovieCard';

const infoCards = [
    { color: '#00838f', title: 'Movies by Talent', info: 'Christopher Nolan, Leonardo DiCaprio, Hans Zimmer...', text: "Show me movies by 'Christopher Nolan'" },
    { color: '#1565c0', title: 'Movies by Genres', info: 'Action, Animation, Comedy, Documentary, Drama, Horror, Romance...', text: "Show me 'Horror' movies" },
    { color: '#4527a0', title: 'Movies by Title', info: 'Batman, Star Wars, Harry Potter, Spider-Man...', text: 'Spider-Man' },
    { color: '#283593', title: 'Movies by Year', info: '1950, 1960, 1970, 1980, 1990, 2020, 2023...', text: "Show me movies from '2023'" },
  ];
const MovieCards = ({ movies }) => {
    const classes = useStyles();

    if(!movies.length){
        return (
            <Grow in>
                <Grid className={classes.container}container alignitems='stretch' spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                                <Typography varient="h5">{infoCard.title}</Typography>
                                {
                                    infoCard.info 
                                        ? (<Typography varient="h6">
                                            <strong>
                                                {infoCard.title.split(' ')[2]}:
                                            </strong>
                                                <br />
                                                {infoCard.info}
                                        </Typography>) : null}
                                <Typography varient="h6">Try Saying: <br/><i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }

    return (
        <Grow in>
            <Grid className={classes.container}container alignitems='stretch' spacing={3}>

            {movies.map((movie, i) => (
                <Grid item lg={3} style={{ display: 'flex'}}>
                    <MovieCard movie={movie} i={i}/>
                </Grid>
            ))}

            </Grid>
        </Grow>
    )
}

export default MovieCards;