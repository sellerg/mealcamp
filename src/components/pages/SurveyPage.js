import React, { useState } from "react";
import styled from "styled-components";
import MealPlanPage from "./MealPlanPage";

export default function SurveyPage() {
  const [age, setAge] = useState("");
  const [male, isMale] = useState(false);
  const [female, isFemale] = useState(false);
  const [gender, setGender] = useState("");
  const [stone, setStone] = useState("");
  const [pounds, setPounds] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [exerciseLevel, setExerciseLevel] = useState("3 times/week");
  const [mealsPerDay, setMealsPerDay] = useState("3 meals per day");
  const [calories, setCalories] = useState(2000); //default daily caloric intake
  const [validation, setValidation] = useState(false);

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderMaleChange = (event) => {
    if (female) {
      isMale(true);
      isFemale(false);
      setGender("male");
    } else {
      isMale(true);
      setGender("male");
    }

    document.getElementById("checkBoxMale").removeAttribute("required");
    document.getElementById("checkBoxFemale").removeAttribute("required");
  };

  const handleGenderFemaleChange = (event) => {
    if (male) {
      isFemale(true);
      isMale(false);
      setGender("female");
    } else {
      isFemale(true);
      setGender("female");
    }

    document.getElementById("checkBoxMale").removeAttribute("required");
    document.getElementById("checkBoxFemale").removeAttribute("required");
  };

  const handleStone = (event) => {
    setStone(event.target.value);
  };

  const handlePounds = (event) => {
    setPounds(event.target.value);
  };

  const handleFeet = (event) => {
    setFeet(event.target.value);
  };

  const handleInches = (event) => {
    setInches(event.target.value);
  };

  const handleExerciseLevel = (event) => {
    setExerciseLevel(event.target.value);
  };

  const handleMealsPerDay = (event) => {
    setMealsPerDay(event.target.value);
  };

  const calculateDailyCalories = (
    age,
    stone,
    pounds,
    feet,
    inches,
    exerciseLevel
  ) => {
    let W = (14 * stone + pounds) * 0.453;
    let H = (12 * feet + inches) * 2.54;
    let exerciseLevelVal;
    switch (exerciseLevel) {
      case "BMR (Basal Metabolic Rate)":
        exerciseLevelVal = 1.0;
        break;
      case "Little/no exercise":
        exerciseLevelVal = 1.2;
        break;
      case "3 times/week":
        exerciseLevelVal = 1.45;
        break;
      case "4 times/week":
        exerciseLevelVal = 1.6;
        break;
      case "5 times/week":
        exerciseLevelVal = 1.7;
        break;
      default:
        exerciseLevelVal = 1.0;
        break;
    }
    if (gender === "male") {
      return (13.397 * W + 4.799 * H - 5.677 * age + 88.362) * exerciseLevelVal;
    } else {
      return (9.247 * W + 3.098 * H - 4.33 * age + 447.593) * exerciseLevelVal;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidation(true);
    console.log(`Age: ${age}, Gender: ${gender}, Current weight: ${stone} stone ${pounds} pounds, 
    Height: ${feet} feet ${inches} inches, Exercise level: ${exerciseLevel}, Meals per day: ${mealsPerDay}`);
    setCalories(
      calculateDailyCalories(
        Number(age),
        Number(stone),
        Number(pounds),
        Number(feet),
        Number(inches),
        exerciseLevel
      )
    );
  };

  return (
    <div>
      {!validation ? (
        <Wrapper onSubmit={handleSubmit}>
          <Heading>
            <h1>Meal Plan Survey</h1>
          </Heading>
          <Body>
            <Question>
              <p style={{ paddingRight: "5rem" }}>Age:</p>
              <input
                type="text"
                required
                value={age}
                onChange={handleAgeChange}
              />
              <p>Years</p>
            </Question>
            <Question>
              <p style={{ paddingRight: "5rem" }}>Gender:</p>

              <input
                type="checkbox"
                id="checkBoxMale"
                checked={male}
                onChange={handleGenderMaleChange}
                required
              />
              <p style={{ paddingLeft: ".1rem" }}>Male</p>

              <input
                type="checkbox"
                id="checkBoxFemale"
                checked={female}
                onChange={handleGenderFemaleChange}
                required
              />
              <p style={{ paddingLeft: ".1rem" }}>Female</p>
            </Question>
            <Question>
              <p style={{ paddingRight: "5rem" }}>Current Weight:</p>
              <input
                type="text"
                required
                value={stone}
                onChange={handleStone}
              />
              <p>Stone</p>
              <input
                type="text"
                required
                value={pounds}
                onChange={handlePounds}
              />
              <p>Pounds</p>
            </Question>
            <Question>
              <p style={{ paddingRight: "5rem" }}>Height:</p>
              <input type="text" required value={feet} onChange={handleFeet} />
              <p>Feet</p>
              <input
                type="text"
                required
                value={inches}
                onChange={handleInches}
              />
              <p>Inches</p>
            </Question>
            <Question>
              <label for="exerciseLevel" style={{ paddingRight: "5rem" }}>
                Exercise level:
              </label>

              <select
                name="exerciseLevel"
                id="exerciseLevel"
                value={exerciseLevel}
                onChange={handleExerciseLevel}
              >
                <option value="3 times/week">3 times/week</option>
                <option value="4 times/week">4 times/week</option>
                <option value="5 times/week">5 times/week</option>
                <option value="Little/no exercise">Little/no exercise</option>
                <option value="BMR (Basal Metabolic Rate)">
                  BMR (Basal Metabolic Rate)
                </option>
              </select>
            </Question>
            <Question>
              <label for="mealsPerDay" style={{ paddingRight: "5rem" }}>
                Number of meals per day:
              </label>

              <select
                name="mealsPerDay"
                id="mealsPerDay"
                value={mealsPerDay}
                onChange={handleMealsPerDay}
              >
                <option value="3 meals per day">3 meals per day</option>
              </select>
            </Question>
            <Question>
              <button type="submit">Generate</button>
            </Question>
          </Body>
        </Wrapper>
      ) : (
        <MealPlanPage validation={validation} calories={calories} />
      )}
    </div>
  );
}

const Wrapper = styled.form`
  padding-top: 6rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.div`
  width: 80vw;
  height: 5rem;
  background-color: #fdcb6e;
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  width: 80vw;
  height: 100%;
  background-color: rgb(240, 240, 240);
`;

const Question = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  font-size: 2rem;
  padding-bottom: 5rem;
  word-wrap: break-word;
  & p {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  & input {
    width: 50px;
  }
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
