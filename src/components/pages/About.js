import React from "react";
import styled from "styled-components";
import mandssurvey from "./../../Assets/mandssurvey.PNG";
import man from "./../../Assets/man.jpg";
import woman from "./../../Assets/woman.jpg";

export default function AboutPage() {
  return (
    <Container>
      <Maindiv>
        <h1>About Page</h1>
        <p>
          Let’s kick things off by discussing the <b>biggest challenges</b> you
          all face when it comes to working out.
        </p>
        <img src={mandssurvey} alt="survey graph" />
        <p>
          According to the <b>2017 M&amp;S Fitness Survey,</b> the number one
          challenge of those who took the survey was maintaining a diet that
          helped them reach their goals. I found this interesting. Further down
          in their results article, I learnt that nearly 71% of people who took
          their survey create their own diet plans.
        </p>

        <p>
          So, if 71% of people are creating their own diets and another 43% are
          finding it difficult to maintain a proper diet, the fitness industry
          must find a way to make it easier for you guys to adopt and maintain a
          diet so you can better reach your goals. That is when I decided to
          create MealCamp!
        </p>

        <p>
          MealCamp is an appliation which makes it easy for you to find high
          protien recipes and generate high protien weekly meal plans. MealCamp
          uses the <b>spoonacular recipe API</b> which has over 360 thousand
          recipes to choose from. I hope you like my application and find some
          delicious recipes that will help you reach your goals!
        </p>

        <p>
          Please check my{" "}
          <a
            href="https://github.com/sellerg/todo-list"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>{" "}
          page to view the source code.
        </p>
        <p>
          This is my first react project so please ignore the horrendous code
        </p>

        <p>
          <b>Creator:</b> Gregory Seller.
        </p>
      </Maindiv>
      <Maindiv>
        <img src={man} alt="man" />
        <img src={woman} alt="woman" />
      </Maindiv>
    </Container>
  );
}

const Maindiv = styled.div`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  width: 50%;

  & > h1 {
    font-size: 3rem;
    padding: 2rem;
    color: orange;
  }

  & > p {
    font-size: 2rem;
    padding: 2rem;
  }

  & img {
    padding: 2rem;
    max-width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  background-color: rgb(240, 240, 240);
`;
