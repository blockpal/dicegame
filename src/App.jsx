import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import Connect from "./Connect";

function App() {
  // const [isGameStarted, setIsGameStarted] = useState(false);
  const [login,setLogin] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{login ? <GamePlay /> : <Connect setLogin={setLogin}/>}</>
  );
}

export default App;
