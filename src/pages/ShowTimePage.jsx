
import {useEffect, useState} from "react";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";

const ShowTimePage = () => {

  // const [showTimes, setShowTimes] = useState(null)
  //
  //   useEffect(() => {
  //       if (!showTimes) {
  //           fetchCompanies(setShowTimes)
  //       }
  //   }, [showTimes]);
  // let content = [];
  //
  // if (showTimes) {
  //   const showTimesDataCopy = [...showTimes];
  //   showTimesDataCopy.forEach((showTime) => {
  //     if (showTime) {
  //       content.push(
  //         <>
  //           <MovieCard key={showTime.id} showTime={showTime} />
  //         </>
  //       );
  //     }
  //   });
  // }

  return (
      // <ShowTimeCardContainer key="showTimeCardContainer">
      //   {content}
      // </ShowTimeCardContainer>
      <></>
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
