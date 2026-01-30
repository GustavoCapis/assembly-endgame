export default function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <section className="keyboard">
      {[...alphabet].map((letter) => (
        <button className="keyboard-btn" key={letter}>
          {letter.toUpperCase()}
        </button>
      ))}
    </section>
  );
}
