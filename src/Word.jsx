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

  return <section className="word-section">{wordElements}</section>;
}
