import React from "react";
import axios from "axios";
import "./App.css";

import iconDice from "./assets/icon-dice.svg";
import dividerDesktop from "./assets/pattern-divider-desktop.svg";
import dividerMobile from "./assets/pattern-divider-mobile.svg";

const App = () => {
  const [advice, setAdvice] = React.useState({
    advice: "",
    id: "",
  });

  const fetchData = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip);
        console.log(response.data.slip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <article className='card'>
        <p className='advice-id'>ADVICE #{advice.id}</p>
        <p className='advice-text'>{`"${advice.advice}"`}</p>
        <img className='icon' src={dividerDesktop} alt='icon dice' />
        <button className='action-button' onClick={fetchData}>
          <img src={iconDice} />
        </button>
      </article>
    </main>
  );
};

export default App;
