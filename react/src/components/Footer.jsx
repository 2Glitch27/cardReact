
export default function Footer({name, children}) {
  return (
    <div className="bg-[#232536] text-white px-20">
    <div className="flex items-center justify-between py-14">
        <div>{name}</div>
        <ul className="flex gap-4">
           {children}
        </ul>
    </div>
    <div className="bg-[#4C4C4C] flex justify-between py-20 px-14">
        <div className="text-[32px] w-1/2">
            Subscribe to our news letter to get latest updates and news
        </div>
        <div>
            <input type="text" 
                placeholder="Enter Your Email"
                className="border border-[#6D6E76] py-4 pl-7 pr-18 focus:outline-none"
            />
            <button className="text-[#232536] bg-[#FFD050] py-4 px-16">Subscribe</button>
        </div>
    </div>
   <div className="flex justify-between py-16">
     <div>
        <div>Finstreet 118 2561 Fintown</div>
        <div>Hello@finsweet.com  020 7993 2905</div>
    </div>
    <div className="flex gap-4 items-center">
        <img src="/footer/facebook.svg" alt="" />
        <img src="/footer/inst.svg" alt="" />
        <img src="/footer/linkedin.svg" alt="" />
        <img src="/footer/twitter.svg" alt="" />
    </div>
   </div>
    </div>
  )
}
