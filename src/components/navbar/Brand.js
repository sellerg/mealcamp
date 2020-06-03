import React, { useDebugValue } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bicepEmoji from "./../../Assets/bicep-emoji.png";

const Brand = () => {
  return (
    <Brandwrap to="/">
      <Image src={bicepEmoji} alt="Bicep Emoji" />
      <h1>MealCamp</h1>
    </Brandwrap>
  );
};

export default Brand;

const Image = styled.img`
  height: 85%;
  width: 0.85 * 5rem;
  margin: auto 0;
`;

const Brandwrap = styled(Link)`
  display: flex;
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  h1 {
    padding-top: 0.7rem;
    padding-left: 1.5rem;
    color: palegoldenrod;
    font-size: 3rem;
  }
`;
