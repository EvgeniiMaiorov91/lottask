import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { participants } from "../../source/participants";
import MainContainer from "../MainContainer/MainContainer";
import "./App.css";

function App() {
  const tradingStartDate = new Date(2022, 11, 25, 18, 30).getTime();
  const timeToThink = 120;
  const [state, setState] = useState({
    participant: null,
    current: null,
  });

  useEffect(() => {

    const timerСountdown = () => {
      let nowDate = Date.now();
      let timeDifference = Math.floor((nowDate - tradingStartDate) / 1000);
      let remainingTime = timeToThink - (timeDifference % timeToThink);
      remainingTime = dayjs("0000-00-00")
        .add(remainingTime, "second")
        .format("HH:mm:ss");
      let activeParticipant =
        (Math.floor(timeDifference / timeToThink) % participants.length) + 1;
      return {
        remainingTime,
        activeParticipant,
      };
    };

    let timer = setInterval(() => {
      let obj = timerСountdown();
      setState({
        ...state,
        participant: obj.activeParticipant,
        current: obj.remainingTime,
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="app">
      <h1>
        Ход торгов Тестовые торги на аппарат ЛОТОС №2033564 (25.12.2022 18.30)
      </h1>
      <hr></hr>
      <h2>
        Уважаемые участники, во время вашего хода вы можете изменить параметры
        торгов, указанных в таблице:
      </h2>
      <MainContainer state={state} />
    </div>
  );
}

export default App;
