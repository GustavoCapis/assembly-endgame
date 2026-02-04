import clsx from "clsx";

export default function Word(props) {
  const letters = [...props.currentWord];

  const wordElements = letters.map((letter, index) => {
    const isGuessed = props.guessedLetters.includes(letter);

    const className = clsx("letter", {
      guessed: isGuessed,
    });

    return (
      <span className={className} key={index}>
        {letter.toUpperCase()}
      </span>
    );
  });

  return (
    <>
      <section className="word-section">{wordElements}</section>
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {numGuessesLeft} attempts left.
        </p>
        <p>
          Current word:
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + "." : "blank.",
            )
            .join(" ")}
        </p>
      </section>
    </>
  );
}
