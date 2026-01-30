import clsx from "clsx";

export default function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <section className="keyboard">
      {[...alphabet].map((letter) => {
        const isGuessed = props.guessedLetters.includes(letter);
        const isCorrect = isGuessed && props.currentWord.includes(letter);
        const isWrong = isGuessed && !props.currentWord.includes(letter);
        const className = clsx("keyboard-btn", {
          correct: isCorrect,
          wrong: isWrong,
        });
        return (
          <button
            key={letter}
            onClick={() => props.handleClick(letter)}
            className={className}
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </section>
  );
}
