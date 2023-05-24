import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableSummary from "./AvailableMeals";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableSummary />
    </Fragment>
  );
};
export default Meals;
