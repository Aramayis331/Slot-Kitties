import { useEffect, useState } from "react";
import { array, checkCombination, distribution, initialSpinValue, randomItems } from "../../helpers/checkCombination";
import { winCombination } from "../../helpers/winCombinationTable";
import "./Slot.scss";

let spinTimeoutId;
const Slot = () => {
  const [kittys, setKittys] = useState(initialSpinValue);
  const [spin, setSpin] = useState(false);
  const [win, steWin] = useState([]);
  const [bet, setBet] = useState(100);
  const [winningPrice, setWinningPrice] = useState(0);
  const [spinCount, setSpinCount] = useState(5);

  useEffect(() => {
    if (spin) {
        steWin([]);
        spinCount > 0 && (spinTimeoutId = setTimeout(() => {
            playSlot();
            setSpinCount(prev => prev - 1)
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
    }
  }, [spinCount, spin]);

  useEffect(() => {
    if (win.length) setWinningPrice(winCombination(checkCombination(win)));
  }, [win]);

  const playSlot = () => {
    setKittys(prev => prev.map((item) => randomItems(array, distribution)));
  };

  const handleSpin = () => {
    setSpin((prev) => !prev);
  };

  return (
    <div className="slot">
      {kittys.map((item, i) => (
        <div key={i} className="slot__items__container">
          {item.map((item, i) => (
            <div key={i} className="slot__item">
              <img src={`https://www.solkitties.net/assets/slots/kitties/${item}.png`} />
            </div>
          ))}
        </div>
      ))}
      <div className="spin__button" onClick={handleSpin}>
        <button>SPIN</button>
      </div>
    </div>
  );
};

export default Slot;
