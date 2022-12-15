import BidAmount from "./componenets/BidAmount";
import { bidAmount } from "./data";
import "./SlotPanel.scss";

const SlotPanel = ({ setSpin }) => {
  const handleSpin = () => {
    setSpin((prev) => !prev);
  };
  return (
    <div className="slotPanel">
      <div className="slotPanel__button__bid__amount__container">
        {bidAmount.map((item) => (
          <BidAmount key={item} item={item} />
        ))}
      </div>
      <button className="slotPanel__button" onClick={handleSpin}>
        SPIN
      </button>
    </div>
  );
};

export default SlotPanel;
