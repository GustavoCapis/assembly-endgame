import clsx from "clsx";

export default function Status(props) {
  const gameLostMsg = (
    <>
      <h2>Game Over!</h2>
      <p>You lose! Better start learning Assembly 😭</p>
    </>
  );

  const gameWonMsg = (
    <>
      <h2>You win!</h2>
      <p>Well done! 🎉</p>
    </>
  );

  const className = clsx("game-status", {
    won: props.isGameWon,
    lost: props.isGameLost,
    hidden: !props.isGameOver,
  });

  return (
    <section className={className}>
      {props.isGameWon ? gameWonMsg : gameLostMsg}
    </section>
  );
}
