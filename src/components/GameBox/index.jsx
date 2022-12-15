import Slot from "components/Slot";
import SlotPanel from "components/SlotPanel";
import { useState } from "react";
import "./GameBox.scss";

const GameBox = () => {
  const [spin, setSpin] = useState(false);
  return (
    <div className="slot-machine">
      <SlotPanel setSpin={setSpin} />
      <Slot spin={spin} setSpin={setSpin} />
    </div>
  );
};

export default GameBox;
