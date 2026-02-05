import clsx from "clsx";

export default function Word(props) {
  const letters = [...props.currentWord];

  const wordElements = letters.map((letter, index) => {
    const isGuessed = props.guessedLetters.includes(letter);
    const isMissed = !isGuessed && props.isGameLost

    const className = clsx("letter", {
      guessed: isGuessed,
      missed: isMissed
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
          {props.currentWord.includes(props.lastGuessedLetter)
            ? `Correct! The letter ${props.lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${props.lastGuessedLetter} is not in the word.`}
          You have {props.numGuessesLeft} attempts left.
        </p>
        <p>
          Current word:
          {props.currentWord
            .split("")
            .map((letter) =>
              props.guessedLetters.includes(letter) ? letter + "." : "blank.",
            )
            .join(" ")}
        </p>
      </section>
    </>
  );
}
