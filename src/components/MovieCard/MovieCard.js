import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie: { id, overview, title, release_date, poster_path }, i }) => {
    const movieURL = `https://www.themoviedb.org/movie/${id}`;

    return (
        <Card>
            <CardActionArea href={movieURL} target="_blank">
                <CardMedia
                    image={poster_path && poster_path.startsWith("http") ? poster_path : `${BASE_IMAGE_URL}${poster_path}`}
                    title={title}
                    style={{ height: 500 }} 
                />

                <div>
                    <Typography variant="body2" color="textSecondary" component="h2">{release_date}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2"></Typography>
                </div>
                <Typography gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{overview}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary" href={movieURL} target="_blank">Learn More</Button>
                <Typography variant="body2" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default MovieCard;
