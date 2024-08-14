
// About
function Card({ img, button, h1, p }) {
  return (
    <div className="flex flex-col gap-3 w-[50%]">
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
      <p className="text-[13px] text-gray-600 dark:text-gray-400">{p}</p>
      <div>
        <h1 className="font-bold">{h1}</h1>
      </div>
      <div className="pt-[10px]">
        <button className="border-[1px] border-[#0b0b45] py-[4px] px-[25px] dark:border-[#fff]">{button}</button>
      </div>
    </div>
  )
}
export default Card;

