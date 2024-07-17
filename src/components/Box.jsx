export default function Box({ value, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className=" border-2 border-green-500 h-10 w-10 flex items-center justify-center text-white"
    >
      {value}
    </div>
  );
}
