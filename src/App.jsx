import React from "react";
import Header from "./Header";
import Status from "./Status";
import Languages from "./Languages";

export default function AssemblyEndgame() {
  //set state for the word element
  const [currentWord, setCurrentWord] = React.useState("react");
  const letters = [...currentWord];
  const wordElements = letters.map((letter, index) => (
    <span className="letter" key={index}>
      {letter.toUpperCase()}
    </span>
  ));

  return (
    <main>
      <Header />
      <Status />
      <Languages />
      <section className="word">{wordElements}</section>
    </main>
  );
}
