import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";
require("dotenv").config();

export default function MealPlanPage(props) {
  const apiConnect = "?apiKey=";
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = "https://api.spoonacular.com/mealplanner/generate";
  const timeFrame = "&timeFrame=week";
  const targetCalories = `&targetCalories=${Math.floor(props.calories)}`;

  const [mealplan, setMealPlan] = useState([]);
  const [monday, setMonday] = useState(true);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);

  useEffect(() => {
    if (props.validation) {
      getMealPlan();
    }
  }, [props.calories]);

  async function getMealPlan() {
    try {
      let response = await fetch(
        `${url}${apiConnect}${API_KEY}${timeFrame}${targetCalories}`
      );
      let data = await response.json();
      console.log(data.week);
      setMealPlan(data.week);
    } catch (err) {
      console.log("Error: " + err);
    }
  }

  const handleMonday = () => {
    setMonday(true);
    setTuesday(false);
    setWednesday(false);
    setThursday(false);
    setFriday(false);
    setSaturday(false);
    setSunday(false);
  };

  const handleTuesday = () => {
    setMonday(false);
    setTuesday(true);
    setWednesday(false);
    setThursday(false);
    setFriday(false);
    setSaturday(false);
    setSunday(false);
  };

  const handleWednesday = () => {
    setMonday(false);
    setTuesday(false);
    setWednesday(true);
    setThursday(false);
    setFriday(false);
    setSaturday(false);
    setSunday(false);
  };

  const handleThursday = () => {
    setMonday(false);
    setTuesday(false);
    setWednesday(false);
    setThursday(true);
    setFriday(false);
    setSaturday(false);
    setSunday(false);
  };

  const handleFriday = () => {
    setMonday(false);
    setTuesday(false);
    setWednesday(false);
    setThursday(false);
    setFriday(true);
    setSaturday(false);
    setSunday(false);
  };

  const handleSaturday = () => {
    setMonday(false);
    setTuesday(false);
    setWednesday(false);
    setThursday(false);
    setFriday(false);
    setSaturday(true);
    setSunday(false);
  };

  const handleSunday = () => {
    setMonday(false);
    setTuesday(false);
    setWednesday(false);
    setThursday(false);
    setFriday(false);
    setSaturday(false);
    setSunday(true);
  };

  var day;
  if (monday) {
    day = <Monday mealplan={mealplan} />;
  } else if (tuesday) {
    day = <Tuesday mealplan={mealplan} />;
  } else if (wednesday) {
    day = <Wednesday mealplan={mealplan} />;
  } else if (thursday) {
    day = <Thursday mealplan={mealplan} />;
  } else if (friday) {
    day = <Friday mealplan={mealplan} />;
  } else if (saturday) {
    day = <Saturday mealplan={mealplan} />;
  } else if (sunday) {
    day = <Sunday mealplan={mealplan} />;
  } else {
    day = null;
  }

  return (
    <Maindiv>
      <h1>Estimated daily calories</h1>
      <h2>
        Your estimated daily calorie needs are: {Math.floor(props.calories)}
      </h2>
      <h2>
        Here is your tailored weekly high protien meal plan, adhering to your
        daily intake of {Math.floor(props.calories)} calories.
      </h2>
      <ButtonContainer>
        <button onClick={handleMonday}>Monday</button>
        <button onClick={handleTuesday}>Tuesday</button>
        <button onClick={handleWednesday}>Wednesday</button>
        <button onClick={handleThursday}>Thursday</button>
        <button onClick={handleFriday}>Friday</button>
        <button onClick={handleSaturday}>Saturday</button>
        <button onClick={handleSunday}>Sunday</button>
      </ButtonContainer>
      {day}
      <CalorieInfo>
        <h1>How were my calories calculated?</h1>
        <br></br>
        <p>
          The calulator uses the revised <b>Harris-Benedicts</b> equation:
        </p>
        <p>For men: BMR = 13.397W + 4.799H - 5.677A + 88.362</p>
        <p>For women: BMR = 9.247W + 3.098H - 4.330A + 447.593</p>
        <p>Where W is weight in kg, H is height in cm and A is age in years.</p>
      </CalorieInfo>
    </Maindiv>
  );
}

const Maindiv = styled.div`
  padding-top: 6rem;
  width: 100vw;
  height: 100%;
  /* min-height: 170vh; */
  & > h1 {
    font-size: 3rem;
    padding: 2rem;
    color: orange;
  }

  & > h2 {
    font-size: 2rem;
    padding: 2rem;
  }

  & p {
    font-size: 2rem;
    padding-left: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-evenly;
  & button {
    font-size: 2rem;
    padding: 1rem;
    background-color: #fdcb6e;
    border: 1px solid black;
    &:hover {
      color: #fdcb6e;
      border: 1px solid #fdcb6e;
      background-color: #2d3436;
      cursor: pointer;
    }
  }
`;

const CalorieInfo = styled.div`
  padding: 3rem;
  width: 100%;
  background-color: rgb(240, 240, 240);
  border: 2rem solid white;
  & > h1 {
    font-size: 3rem;
    color: orange;
    padding-left: 2rem;
  }
  & > p {
    font-size: 2rem;
  }
`;
