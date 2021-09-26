import "./styles.css";
import { useState } from "react";

const fruits = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍓": "Strawberry",
  "🥭": "Mango",
  "🍍":"Pineapple",
  "🍌": "Banana",
  "🍒": "Cherries"
};

const symbols = Object.keys(fruits);

export default function App() {
  let [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    const userInput = event.target.value;
    let meaning = fruits[userInput];
    if (meaning === undefined) {
      setMeaning("not found in our database");
    } else {
      setMeaning(meaning);
    }
  }

  // function fruitClick(fruit) {
  //   let meaning = fruits[fruit];
  //   setMeaning(meaning);
  // }

  function fruitClick(event) {
    const fruit = event.target.id;
    let meaning = fruits[fruit];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>fruit maniaa</h1>
      <input onChange={changeHandler}></input>
      <div className="emotion">{meaning}</div>
      <h3>fruit's we know..</h3>
      {symbols.map((fruit) => (
        <span
          key={fruit}
          id={fruit}
          // onClick={() => fruitClick(fruit)}
          onClick={fruitClick}
          style={{ cursor: "pointer", padding: "1rem", fontSize: "2rem" }}
        >
          {fruit}
        </span>
      ))}
    </div>
  );
}
