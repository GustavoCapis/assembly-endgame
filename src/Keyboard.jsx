export default function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <section className="keyboard">
      {[...alphabet].map((letter) => (
        <button
          onClick={()=> props.handleClick(letter)}
          className="keyboard-btn"
          key={letter}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </section>
  );
}
