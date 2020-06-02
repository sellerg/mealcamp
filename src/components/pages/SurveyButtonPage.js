import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import surveyImage from "./../../Assets/surveyImage3.jpg";

export default function SurveyButtonPage() {
  return (
    <Div>
      <HeadingWrapper>
        <h1>
          To generate your tailored high protien meal plan, please take our
          survey.
        </h1>
      </HeadingWrapper>
      <SurveyWrapper>
        <A to="/mealplans/survey">Take Survey</A>
      </SurveyWrapper>
    </Div>
  );
}

const HeadingWrapper = styled.div`
  padding-top: 8rem;
  padding-left: 1rem;
  padding-bottom: 3rem;
`;

const SurveyWrapper = styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${surveyImage});
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid black;
  margin-bottom: 4rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const A = styled(Link)`
  font-size: 3rem;
  border: 1px solid black;
  background-color: #fdcb6e;
  padding: 1rem;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
    border: 1px solid #fdcb6e;
    color: #fdcb6e;
    background-color: #2d3436;
  }
`;
