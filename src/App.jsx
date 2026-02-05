import { data } from "./data";
import { useState } from "react";
import Header from "./Header";
import Status from "./Status";
import Languages from "./Languages";
import Keyboard from "./Keyboard";
import Word from "./Word";
import { getWord } from "./utils";

export default function AssemblyEndgame() {
  //Set state for the word element
  const [currentWord, setCurrentWord] = useState(getWord);
  //Set state for the guessed letters
  const [guessedLetters, setGuessedLetters] = useState([]);

  //Derived state wrong guess count
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  //Add end game mechanism
  const isGameLost = wrongGuessCount >= data.length - 1;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = isGameLost || isGameWon;

  //Derived values
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);
  const numGuessesLeft = data.length - 1;

  function handleClick(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  return (
    <main>
      <Header />
      <Status
        isGameOver={isGameOver}
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        wrongGuessCount={wrongGuessCount}
        isLastGuessIncorrect={isLastGuessIncorrect}
      />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard
        isGameOver={isGameOver}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        numGuessesLeft={numGuessesLeft}
        handleClick={handleClick}
      />
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}
