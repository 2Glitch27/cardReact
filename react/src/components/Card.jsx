
export default function Card({title, img, price, onClick}) {
  return (
    <div className="rounded-2xl overflow-hidden" onClick={onClick}>
      <div className="h-72 w-60 flex items-center justify-center bg-gray-50">
        <img src={img} alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col items-center bg-[#232536] text-white">
        <div>{title}</div>
        <div>{price} р.</div>
      </div>
    </div>
  )
}
