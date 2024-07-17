import Box from "./Box";

export default function Board() {
  return (
    <div className=" border-2 rounded border-slate-400 p-5 flex flex-col gap-5 ">
      <div className=" flex gap-5">
        <Box />
        <Box />
        <Box />
      </div>
      <div className=" flex gap-5">
        <Box />
        <Box />
        <Box />
      </div>
      <div className=" flex gap-5">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
