import {BiCommentDetail} from "react-icons/bi";
import StarRating from "./StarRating";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const MovieCard = ({movie, width}) => {
    const nav = useNavigate();

    const navToCompaniesDetailsOnClick = () => {
        if (movie) {
            nav(`/movies/${movie.id}`);
        }
    };

    return (
        <CardContainer onClick={navToCompaniesDetailsOnClick}>
            <MovieName>{movie.title}</MovieName>
            <MoviePicture src={movie.poster_url}/>
            <StarRating rating={movie.rating}/>
        </CardContainer>
    );
};
export default MovieCard;

const CardContainer = styled.div`
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 10px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30px;
    cursor: pointer;
`;

export const MoviePicture = styled.img`
    border-radius: 12px;
    width: 200px;
    margin-bottom: 25px;
`;

const MovieName = styled.span`
    margin-bottom: 25px;
    font-weight: 600;
    font-size: 18px;
`;

const ContainerBottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 20px;
`;
