import React, { useState, useEffect } from "react";
import styled from "styled-components";
require("dotenv").config();

export default function RecipePage() {
  const apiConnect = "?apiKey=";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = "https://api.spoonacular.com/recipes/random";
  const number = "&number=3";
  const protien = "&minProtien=20";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [loading, isLoading] = useState(false);
  const [start, onStart] = useState(true);

  useEffect(() => {
    if (query) {
      onStart(false);
      isLoading(true);
      getRecipes();
    }
  }, [query]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  async function getRecipes() {
    console.log(loading);
    try {
      let response = await fetch(
        `${url}${apiConnect}${API_KEY}&tags=${query}${number}${protien}`
      );
      let data = await response.json().then(isLoading(false));
      setRecipe(data.recipes);
    } catch (err) {
      console.log("Error: " + err);
    }
  }

  return (
    <Maindiv>
      <h1>Feeling peckish?</h1>
      <h2>Need inspiration for a high protien healthy meal?</h2>
      <p>
        Choose you favorite ingredient, type it in the search bar, and generate
        three random delicious recipes for todays meal.
      </p>
      <p>Have fun and get your cook on!</p>
      <form onSubmit={handleSubmit}>
        <Inputs>
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={handleSearch}
          />
          <button type="submit">Search</button>
        </Inputs>
      </form>

      <Container>
        {start ? (
          <RecipeWrap>
            <h1>Please enter an ingredient to get started!</h1>
          </RecipeWrap>
        ) : loading ? (
          <RecipeWrap>
            <h1>Loading...</h1>
          </RecipeWrap>
        ) : recipe.length !== 0 ? (
          recipe.map((recipes) => (
            <RecipeWrap
              href={recipes.sourceUrl}
              target="_blank"
              key={recipes.title}
            >
              <img src={recipes.image} alt="Recipe" />
              <h1>{recipes.title}</h1>
              <Info>High protien</Info>
              <InfoGluten>{recipes.glutenFree ? "Gluten-free" : ""}</InfoGluten>
            </RecipeWrap>
          ))
        ) : (
          <RecipeWrap>
            <h1>Oop's! We don't seem to recognise that ingredient :(</h1>
          </RecipeWrap>
        )}
      </Container>
    </Maindiv>
  );
}

const Maindiv = styled.div`
  padding-top: 6rem;
  background-color: white;
  height: 100%;
  width: 100vw;

  & > h1 {
    font-size: 3rem;
    padding: 2rem;
  }

  & > h2 {
    font-size: 2.5rem;
    padding: 2rem;
  }

  & > p {
    font-size: 2rem;
    padding-left: 2rem;
    padding-bottom: 1rem;
  }
`;

const RecipeWrap = styled.a`
  background-color: rgb(240, 240, 240);
  border: 2rem solid white;
  position: relative;
  text-decoration: none;
  color: #2d3436;

  & img {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    height: 50%;
    width: 100%;
  }

  & h1 {
    padding: 1rem;
  }
`;

const Inputs = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;

  & input {
    font-size: 2rem;
    padding: 0.5rem;
    border: 1px solid black;
    margin-right: 1rem;
  }

  & button {
    font-size: 2rem;
    padding: 0.5rem;
    border: 1px solid black;

    &:hover {
      color: white;
      border: 1px solid white;
      background-color: #2d3436;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Info = styled.span`
  background-color: lightgrey;
  border-radius: 10%;
  font-size: 1.5rem;
  padding: 0.2rem;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  text-decoration: none;
  color: #2d3436;
`;

const InfoGluten = styled.span`
  background-color: lightgrey;
  border-radius: 10%;
  font-size: 1.5rem;
  padding: 0.2rem;
  position: absolute;
  bottom: 2rem;
  left: 12rem;
  text-decoration: none;
  color: #2d3436;
`;
