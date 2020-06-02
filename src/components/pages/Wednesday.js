import React from "react";
import styled from "styled-components";

export default function Wednesday(props) {
  return (
    <div>
      <Heading>
        <h1>
          <u>Wednesday's meals</u>
        </h1>
      </Heading>
      <MealContainer>
        {props.mealplan.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          props.mealplan.wednesday.meals.map((item) => (
            <RecipeWrap href={item.sourceUrl} target="_blank" key={item.title}>
              <img
                src={`https://spoonacular.com/recipeImages/${item.id}-556x370.jpg`}
                alt="Recipe"
              />
              <h1>{item.title}</h1>
            </RecipeWrap>
          ))
        )}
      </MealContainer>
      {props.mealplan.length === 0 ? (
        ""
      ) : (
        <Div>
          <p>Your total daily nutrients for these three meals is as follows:</p>
          <p>Calories - {props.mealplan.wednesday.nutrients.calories}</p>
          <p>Protien - {props.mealplan.wednesday.nutrients.protein}</p>
          <p>Fat - {props.mealplan.wednesday.nutrients.fat}</p>
          <p>
            Carbohydrates - {props.mealplan.wednesday.nutrients.carbohydrates}
          </p>
        </Div>
      )}
    </div>
  );
}

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

const Div = styled.div`
  padding: 3rem;
  width: 100%;
  background-color: rgb(240, 240, 240);
  border: 2rem solid white;
  & > p {
    font-size: 2rem;
  }
`;

const MealContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
`;
