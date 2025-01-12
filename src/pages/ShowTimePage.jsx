import styled from "styled-components";
import {useEffect, useState} from "react";
import {fetchShowTimes} from "../features/showTime/showTime";
import MovieCard from "../components/MovieCard";

const ShowTimePage = () => {

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
        <ShowTimeCardContainer key="showTimeCardContainer">
            {content}
        </ShowTimeCardContainer>
    );
};
export default ShowTimePage;

const ShowTimeCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;
