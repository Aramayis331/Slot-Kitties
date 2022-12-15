import { useEffect, useState } from "react";
import {
  array,
  checkCombination,
  distribution,
  initialSpinValue,
  randomItems,
} from "../../helpers/checkCombination";
import { winCombination } from "../../helpers/winCombinationTable";
import Kitty from "./components/Kitty";
import "./Slot.scss";

let spinTimeoutId;
const Slot = ({ spin, setSpin }) => {
  const [kittys, setKittys] = useState(initialSpinValue);
  const [win, steWin] = useState([]);
  const [bet, setBet] = useState(100);
  const [winningPrice, setWinningPrice] = useState(0);
  const [spinCount, setSpinCount] = useState(5);

  useEffect(() => {
    if (spin) {
      steWin([]);
      spinCount > 0 &&
        (spinTimeoutId = setTimeout(() => {
          playSlot();
          setSpinCount((prev) => prev - 1);
        }, 200));
    }

    if (!spinCount) {
      setSpin(false);
      setSpinCount(5);
      clearInterval(spinTimeoutId);
      steWin(kittys[1]);
    }

    return () => {
      clearTimeout(spinTimeoutId);
    };
  }, [spinCount, spin]);

  useEffect(() => {
    if (win.length) setWinningPrice(winCombination(checkCombination(win)));
  }, [win]);

  const playSlot = () => {
    setKittys((prev) => prev.map((item) => randomItems(array, distribution)));
  };

  return (
    <div className="slot">
      {kittys.map((item, i) => (
        <div key={i} className="slot__items__container">
          {item.map((item, i) => (
            <Kitty key={i} item={item} spin={spin} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Slot;
