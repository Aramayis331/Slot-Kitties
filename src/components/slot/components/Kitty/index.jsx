import "./Kitty.scss";

const Kitty = ({ item, spin }) => {
  return (
    <div className={`kitty ${spin ? "kitty_spin" : ""}`}>
      <img
        className={` ${spin ? "kitty_spin_img" : ""}`}
        src={`https://www.solkitties.net/assets/slots/kitties/${item}.png`}
      />
    </div>
  );
};

export default Kitty;
