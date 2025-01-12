import styled from "styled-components";
import {useEffect, useState} from "react";
import {fetchShowTimes} from "../features/showTime/showTime";
import MovieCard from "../components/MovieCard";

const Home = () => {

    const [showTimes, setShowTimes] = useState();

    useEffect(() => {
        if (!showTimes) {
            fetchShowTimes(setShowTimes)
        }
    }, [showTimes]);
    //
    let content = [];
    if (showTimes) {
        console.log(showTimes);
        const showTimesCopy = [...showTimes.results];

        showTimesCopy.forEach((showTime) => {
            if (showTime) {
                content.push(<MovieCard key={showTime.id} showTime={showTime}/>);
            }
        });
    }

    return (
        <>
            <div>
                {content}
            </div>
        </>
    );
};

const ReviewsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;
export default Home;
