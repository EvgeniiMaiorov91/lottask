import "./Participants.css";
import { participants } from "../../source/participants";

function Participants({ state }) {
  return (
    <div className="participants">
      {participants.map((item, i) => {
        return (
          <div key={i} className="participant">
            <div>{state.participant === i + 1 && <h6>{state.current}</h6>}</div>
            <h3 id="bottomLine">УЧАСТНИК №{i + 1}</h3>
            <p id="measures">-</p>
            <p>{item.productionTime}</p>
            <p>{item.warrantyObligations}</p>
            <p>{item.paymentTerms}</p>
            <p>
              <span style={{ color: "blue" }}>
                {item.manufacturingCost.price}
              </span>
              <span style={{ color: "red" }}>
                -{item.manufacturingCost.discount}
              </span>
              <span style={{ color: "green" }}>
                {item.manufacturingCost.price - item.manufacturingCost.discount}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Participants;
