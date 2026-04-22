
export default function Header({name, children }) {
  return (
    <div className="flex items-center justify-between py-7 px-20 bg-[#232536] text-white">
      <div>
        {name}
      </div>
      <div>
        <ul className="flex gap-6 items-center">
          {children}
        </ul>
      </div>
    </div>
  )
}
