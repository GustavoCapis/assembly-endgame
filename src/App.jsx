import {useState} from "react";
import Header from "./Header";
import Status from "./Status";
import Languages from "./Languages";
import Keyboard from "./Keyboard";

export default function AssemblyEndgame() {
  //Set state for the word element
  const [currentWord, setCurrentWord] = useState("react");

  //Set state for the guessed letters
  const [guessedLetters, setGuessedLetters] = useState([]);

  function handleClick(letter) {
    setGuessedLetters((prev) => [...prev, letter]);
  }

  const letters = [...currentWord];
  const wordElements = letters.map((letter, index) => (
    <span className="letter" key={index}>
      {letter.toUpperCase()}
    </span>
  ));

  return (
    <main>
      <Header />
      <Status />
      <Languages />
      <section className="word">{wordElements}</section>
      <Keyboard handleClick={handleClick} />
      <button className="new-game">New Game</button>
    </main>
  );
}
