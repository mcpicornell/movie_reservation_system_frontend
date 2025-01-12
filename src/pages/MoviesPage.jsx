import styled from 'styled-components'
import {useEffect, useState} from "react";
import {fetchMovies} from "../features/movies/movies";
import MovieCard from "../components/MovieCard";

const MoviesPage = () => {

    const [movies, setMovies] = useState();

    useEffect(() => {
        if (!movies) {
            fetchMovies(setMovies)
        }
    }, [movies]);
    //
    let content = [];
    if (movies) {
        const moviesCopy = [...movies.results];

        moviesCopy.forEach((movie) => {
            if (movie) {
                content.push(<MovieCard key={movie.id} movie={movie}/>);
            }
        });
    }


    return (
        <MovieCardContainer key="movieCardContainer">
            {content}
        </MovieCardContainer>
    );
};
export default MoviesPage;

const MovieCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

  