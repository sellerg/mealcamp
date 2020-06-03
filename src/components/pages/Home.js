import React from "react";
import banner from "./../../Assets/4.jpg";
import mealplan from "./../../Assets/mealplan.png";
import recipe from "./../../Assets/recipe.png";
import food from "./../../Assets/food.png";
import paper from "./../../Assets/paper.png";
import { Image, Home, Icon } from "./HomeStyle";

export default function HomePage() {
  return (
    <div>
      <Image src={banner} alt="meal" />
      <Home>
        <Icon src={mealplan} alt="mealplan" />
        <h2>Ingredients</h2>
        <p>
          MealCamp has over 2600 ingredients to choose from with nutritional and
          cost breakdowns
        </p>

        <Icon src={recipe} alt="recipe" />
        <h2>Delicious body sculpting recipes</h2>
        <p>Over 360k recipes with nutritional analysis and cooking tips</p>

        <Icon src={food} alt="food" />
        <h2>Meal Plans</h2>
        <p>
          Generate daily or weekly high protien meal plans based on your current
          body goals
        </p>

        <Icon src={paper} alt="paper" />
        <h2>Shopping Lists</h2>
        <p>Generate weekly shopping lists for your meal plans</p>
      </Home>
    </div>
  );
}
