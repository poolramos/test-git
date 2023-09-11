import { useState, useEffect } from "react";
import Mobile from "./images/pattern-divider-mobile.svg";
import Desktop from "./images/pattern-divider-desktop.svg";
import icon from "./images/icon-dice.svg";

function App() {
  const [text, setText] = useState({ id: "", advice: "" });

  const fetchAdvice = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setText(data.slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      <h1>Advice #{text.id}</h1>
      <p>{text.advice}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={Desktop} />
        <img src={Mobile} alt="" />
      </picture>

      <div>
        <button onClick={fetchAdvice}>
          <img src={icon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;


