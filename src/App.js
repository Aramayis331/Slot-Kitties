import './App.scss';
import Header from "components/Header";
import GameBox from "components/GameBox";

function App() {
  return (
    <>
    <Header />
    <div className='slot-machine'>
      <GameBox />
    </div>
  </>
  );
}

export default App;
