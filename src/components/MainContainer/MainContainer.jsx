import Participants from "../Participants/Participants";
import "./MainContainer.css";

function MainContainer({ state }) {
  return (
    <div className="mainContainer">
      <div className="titles">
        <h3>ХОД</h3>
        <h3 id="bottomLine">ПАРАМЕТРЫ И ТРЕБОВАНИЯ</h3>
        <p>
          Наличие комплекса мероприятий, повышающих стандарты качеста
          изготовления
        </p>
        <p>Срок изготовдения лота, мес</p>
        <p>Гарантийные обязательства</p>
        <p>Условия оплаты</p>
        <p id="price">Стоимость изготовления лота, руб.(без НДС)</p>
        <p>Действия:</p>
      </div>
      <Participants state={state} />
    </div>
  );
}

export default MainContainer;
