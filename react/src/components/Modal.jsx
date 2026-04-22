import { useEffect } from "react"

export default function Modal({title, price, img, desc, onClick}) {
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
         return () => {
      document.body.style.overflow = 'auto';
    };
    }, [])
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
        <div className="relative bg-white flex rounded-2xl overflow-hidden">
            <div className="h-90 w-90 flex items-center justify-cente">
                <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="px-7 max-w-100 flex flex-col">
                <div>
                    <div className="py-7 min-w-0 flex justify-between items-center">
                    {title}
                    <button className=" py-1 px-3 bg-[#232536] text-white rounded-2xl" onClick={onClick}>
                        x
                    </button>
                </div>
                </div>
                <div >
                    {desc}
                </div>
                <div className="mt-auto">
                    <div>{price} p.</div>
                    <button className="px-4 py-2 rounded-2xl bg-amber-300 mt-2 mb-5">купить</button>
                </div>
                
            </div>
        </div>

    </div>
  )
}
