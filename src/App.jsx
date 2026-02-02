import { data } from "./data";
import { useState } from "react";
import Header from "./Header";
import Status from "./Status";
import Languages from "./Languages";
import Keyboard from "./Keyboard";
import Word from "./Word";

export default function AssemblyEndgame() {
  //Set state for the word element
  const [currentWord, setCurrentWord] = useState("react");

  //Set state for the guessed letters
  const [guessedLetters, setGuessedLetters] = useState([]);

  //Derived state wrong guess count
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  //Add end game mechanism
  const isGameLost = wrongGuessCount >= data.length
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameOver = isGameLost || isGameWon

  function handleClick(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  return (
    <main>
      <Header />
      <Status />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        handleClick={handleClick}
      />
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}
