import { data } from "./data";
import clsx from "clsx";
export default function Languages(props) {
  //Map to render each language as a <p> with styles from data.js
  return (
    <section className="languages-section">
      {data.map((lang, index) => {
        const isLost = index < props.wrongGuessCount;
        const className = clsx("language-chip", isLost && "lost");
        return (
          <span
            key={lang.name}
            className={className}
            style={{ color: lang.color, backgroundColor: lang.backgroundColor }}
          >
            {lang.name}
          </span>
        );
      })}
    </section>
  );
}
