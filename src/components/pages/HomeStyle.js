import styled from "styled-components";

export const Image = styled.img`
  object-fit: cover;
  height: 90vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  display: block;
  filter: drop-shadow(0px 5px 4px #2d3436);
`;

export const Home = styled.section`
  width: 100vw;
  height: 100%;
  background-color: lightgrey;
  margin: 0px;
  font-size: 2rem;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h2 {
    padding-bottom: 2rem;
  }
`;

export const Icon = styled.img`
  height: 10rem;
  width: 10rem;
  display: block;
  padding: 2rem;
`;
