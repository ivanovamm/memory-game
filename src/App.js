import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
      <div className="App">
        {gameStarted ? (
            <>
              <h1>Найди пару: Картины русских художников</h1>
              <GameBoard/>
            </>
        ) : (
            <div className="start-screen">
              <h1>Добро пожаловать в игру "Найди пару"</h1>
              <button className="start-button" onClick={startGame}>
                Start
              </button>
            </div>
        )}
      </div>
  );
}

export default App;
