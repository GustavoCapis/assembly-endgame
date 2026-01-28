import { data } from "./data";
export default function Languages() {
  //Map to render each language as a <p> with styles from data.js
  return (
    <>
      <section className="languages-section">
        {data.map((data) => (
          <span
            key={data.name}
            className="language-chip"
            style={{ color: data.color, backgroundColor: data.backgroundColor }}
          >
            {data.name}
          </span>
        ))}
      </section>
    </>
  );
}
