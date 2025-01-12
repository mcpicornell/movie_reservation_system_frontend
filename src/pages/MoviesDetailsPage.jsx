import styled from "styled-components";
import "swiper/css";
import {MdLocationOn} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
import {HiMail} from "react-icons/hi";
import {AiOutlineUser} from "react-icons/ai";
import {ButtonLogin} from "./LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StarRating from "../components/StarRating";
import {fetchMovieById} from "../features/movies/movies";
import {MoviePicture} from "../components/MovieCard";
import {findAllByDisplayValue} from "@testing-library/react";

const MoviesDetailsPage = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!movie) {
            setLoading(true);
            fetchMovieById(id, setMovie)
        }
        console.log(movie)
        if (loading && movie) {
            setLoading(false);
        }
    }, [movie, loading]);
    if (!movie && loading) {
        return (
            <div>
                <Spinner/>
            </div>
        )
    } else if (movie && !loading) {
        return (
            <PageContainer>
                <HeaderContainer>
                    <Header>
                        <Title>{movie.title}</Title>
                        <StarInfoContainer>
                            <StarRating rating={movie.rating}/>
                        </StarInfoContainer>
                    </Header>
                </HeaderContainer>
                <CardsContainer>
                    <MoviePicture src={movie.poster_url}/>
                    <SpanCardTitle>{movie.title}</SpanCardTitle>
                    <SpanCardDescription>{movie.description}</SpanCardDescription>
                </CardsContainer>
            </PageContainer>

        )
    }
}
export default MoviesDetailsPage;

const PageContainer = styled.div`
    margin: 0 auto;
    margin-top: 1px;
    width: 100%;
    border-radius: 24px;
    margin-bottom: 20px;
`;

const SliderContainer = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
`;

const HeaderContainer = styled.div`
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05);
    padding-bottom: 15px;
    margin-bottom: 10px;
`;

const Header = styled.div`
    width: 80%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    text-align: center;
    margin-bottom: 10px;
`;

const SubHeader = styled.div`
    width: 65%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
`;

const SubHeaderElementContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HiMailStyled = styled(HiMail)`
    margin-right: 10px;
    color: rgba(130, 130, 130, 1);
`;

const BsFillTelephoneFillStyled = styled(BsFillTelephoneFill)`
    margin-right: 10px;
    color: rgba(130, 130, 130, 1);
`;

const MdLocationOnStyled = styled(MdLocationOn)`
    margin-right: 10px;
    color: rgba(130, 130, 130, 1);
`;

const Title = styled.h3``;

const StarInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardStarRating = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    margin: 5px;
`;

const SpanGrey = styled.span`
    font-style: italic;
    color: rgba(130, 130, 130, 1);
    font-size: 12px;
`;

const ReviewSpan = styled.span`
    margin-left: 10px;
    font-size: 14px;
`;
const CardsContainer = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 70%;
`;

const CardReviewContainer = styled.div`
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 10px;
    width: 300px;
    margin: 0 auto;
`;

const CardInfoContainer = styled.div`
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    padding-right: 5px;
    width: 300px;
    margin: 0 auto;
    padding-left: 20px;
    padding-top: 20px;
`;

const SpanCardTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

const SpanCardDescription = styled.span`
    font-size: 12px;
    margin-top: 15px;
`;

const SpanGreyStyled = styled(SpanGrey)`
    font-size: 12px;
    color: black;
    margin-left: 10px;
`;

const CardInfoContactContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContactContainer = styled.div`
    display: flex;
    margin-top: 15px;
`;

const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const MainCommentContainer = styled.div`
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(224, 224, 224, 1);
    border-radius: 12px;
    margin: 0 auto;
    width: 60%;
    padding: 20px 20px 20px 20px;
    position: ${props => props.isLogged ? "absolute" : "relative"};
    height: 16vh;
    visibility: ${props => props.isLogged ? "hidden" : "visible"};
`;

const CommentAndStarsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
`;

const AiOutlineUserStyled = styled(AiOutlineUser)`
    color: rgba(130, 130, 130, 1);
    position: relative;
    width: 30px;
    height: 20px;
    bottom: 2px;
    margin-right: 50px;
    margin-left: 10px;
`;

const CommentInput = styled.textarea`
    margin-top: 5px;
    border: none;
    margin-left: 10px;
    resize: none;
    width: 98%;
    cursor: text;
    height: 60px;
`;

const ButtonComment = styled(ButtonLogin)`
    width: 100px;
    position: absolute;
    right: 30px;
    bottom: 10px;
`;
