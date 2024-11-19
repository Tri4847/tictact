import React, {useState} from "react";
import GameGrid from "./GameGrid.js";

// TODO: Import useState() hook

function Game() {

   // TODO: Replace variables with state variables
   const [moves, setMoves] = useState(new Array(9).fill(""));
   const [turn, setTurn] = useState("X");
  
   function gridClick(whichSquare) {
      // TODO: Replace with code to set the move and turn
      if (moves[whichSquare] === "") {
         const movesCopy = [...moves]; // Create a copy of the moves array
         movesCopy[whichSquare] = turn; // Set the move
         setMoves(movesCopy); // Update the state
         setTurn(turn === "X" ? "O" : "X"); // Switch the turn
      }
   }

   // TODO: Add newGame() function here
   function newGame() {
      setMoves(new Array(9).fill(""));
      setTurn("X");
   }
   return (
      <>
         <h1>Tic-Tac-Toe</h1>        
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            <button onClick={newGame}>New Game</button>
         </p>
      </>
   );
}

export default Game;