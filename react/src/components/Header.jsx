
export default function Header() {
  return (
    <div className="flex items-center justify-between py-7 px-20 bg-[#232536] text-white">
      <div>
        Finsweet
      </div>
      <div>
        <ul className="flex gap-6 items-center">
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><button className="py-4 px-12 text-black bg-amber-50">Subscribe</button></li>
        </ul>
      </div>
    </div>
  )
}
