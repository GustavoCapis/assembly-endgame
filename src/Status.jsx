import clsx from "clsx";
import { getFarewellText } from "./utils";
import { data } from "./data";

export default function Status(props) {
  const gameOverMsg = (
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

  function getFarewellMessage() {
    if (props.wrongGuessCount > 0) {
      const index = props.wrongGuessCount - 1;
      const lang = data[index].name;
      return <h2>{getFarewellText(lang)}</h2>;
    }
  }

  const className = clsx("game-status", {
    won: props.isGameWon,
    lost: props.isGameLost,
    hidden: !props.isGameOver && !props.isLastGuessIncorrect,
    miss: !props.isGameOver && props.isLastGuessIncorrect,
  });

  function statusMsg() {
    if (props.isGameWon) return gameWonMsg;
    if (props.isGameLost) return gameOverMsg;

    if (!props.isGameOver && props.isLastGuessIncorrect) {
      return getFarewellMessage();
    }

    return null;
  }

  return <section className={className}>{statusMsg()}</section>;
}
