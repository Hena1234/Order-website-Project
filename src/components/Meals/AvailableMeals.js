import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Spicy Garlic Beef -  Best Menu ★",
    description:
      "Marinated in chili garlic sauce and fresh spices with a spicy orange dipping sauce.",
    price: 29.25,
  },
  {
    id: "m2",
    name: "Pad Thai with Tamarind sauce - Best Menu ★",
    description:
      "Thai rice noodles with homemade Tamarind sauce, eggs, tofu, bean sprouts and green onions sprinkled with roasted peanuts.",
    price: 14.95,
  },
  {
    id: "m3",
    name: "Pineapple and Shrimp Fried Rice",
    description:
      "Pineapple, shrimp, garlic, onions, bell peppers, coriander, and lemon.",
    price: 22.75,
  },
  {
    id: "m4",
    name: "Mango Salad",
    description:
      "Green mango, mint leaves, red onions, sweet peppers, cashew nuts, and peanuts.",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Chicken Wings(Thai Chicken Wing)",
    description: "Crispy chicken wings tossed in sweet sriracha sauce.",
    price: 12.35,
  },
  {
    id: "m6",
    name: "Sticky Rice with Mango",
    description: "Mango sliced served with coconut milk sticky rice.",
    price: 9.95,
  },
  {
    id: "m7",
    name: "Three Kings Noodles",
    description:
      "Stir fried flat rice noodles with shrimps and chicken mixed with Thai chilli sauce basil leaves, bamboos, mushrooms and red peppers.",
    price: 14.95,
  },
  {
    id: "m8",
    name: "Spicy Tiger Shrimps",
    description:
      "Shrimps in spicy thick coconut milk, red curry, and peanut sauce topped with chilli.",
    price: 15.75,
  },
  {
    id: "m9",
    name: "Panang Beef",
    description:
      "Sliced beef in spicy thick coconut milk, red curry, basil leaves, and peanut sauce.",
    price: 14.95,
  },
  {
    id: "m10",
    name: "Red Veggie Curry",
    description:
      "Vegetables (mix) in Thai red curry with coconut milk, tofu and basil leaves.",
    price: 13.65,
  },
  {
    id: "m11",
    name: "Chicken Satay",
    description:
      "Four skewers. Grilled sliced marinated chicken breast and served with peanut sauce.",
    price: 10.75,
  },
  {
    id: "m12",
    name: "Deep Fried Tofu with Rice",
    description: "Deep fried tofu served with Thai cucumber salad..",
    price: 17.75,
  },
  {
    id: "m13",
    name: "Spring Rolls veggie",
    description:
      "Four pieces. Cabbage, carrots, glass noodles, and mushrooms. Served with sweet and sour sauce. .",
    price: 6.35,
  },
  {
    id: "m13",
    name: "Veggie Fresh Rolls ",
    description:
      "hree pieces. Cabbage, carrot coleslaw, tofu, and mint leaves roll in a rice wrapper, served with peanut sauce.",
    price: 6.35,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
