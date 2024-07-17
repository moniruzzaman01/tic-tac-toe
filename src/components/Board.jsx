import { useState } from "react";
import Box from "./Box";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);

  const handleClick = (index) => {
    console.log("clicked", index);
    const tempSquare = [...squares];
    tempSquare[index] = "X";
    setSquares([...tempSquare]);
  };

  return (
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
  );
}
