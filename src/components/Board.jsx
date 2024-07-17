import { useState } from "react";
import Box from "./Box";
import { checkWinner } from "../utils/checkWinner";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isPlayerX, setIsPlayerX] = useState(true);
  //   console.log(squares);
  const winner = checkWinner(squares);
  console.log(winner);

  const handleClick = (index) => {
    if (squares[index]) return;
    const tempSquare = [...squares];
    if (isPlayerX) tempSquare[index] = "X";
    else tempSquare[index] = "O";
    setIsPlayerX(!isPlayerX);
    setSquares([...tempSquare]);
  };

  const heading = (
    <h3 className=" text-white mb-2 uppercase flex gap-1 justify-center">
      Player
      {winner ? (
        <>
          <span className=" text-orange-600 text-2xl block text-center leading-6 font-extrabold h-6 w-6">
            {!isPlayerX ? "X" : "O"}
          </span>
          winner
        </>
      ) : (
        <>
          <span className=" text-orange-600 text-2xl block text-center leading-6 font-extrabold h-6 w-6">
            {isPlayerX ? "X" : "O"}
          </span>
          turn
        </>
      )}
    </h3>
  );

  return (
    <div>
      {heading}
      <div className=" border-2 rounded border-slate-400 p-5 flex flex-col gap-5 ">
        <div className=" grid grid-cols-3 gap-2">
          {squares.map((element, index) => (
            <Box
              key={index}
              value={element}
              handleClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
