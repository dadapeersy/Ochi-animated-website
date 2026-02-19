import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex gap-5 items-center px-35 -mt-50  bg-zinc-100'>
      <div className="cardcontainer h-[55vh] w-1/2">
      <div className="card relative w-full h-full rounded-xl bg-[#004D43] px-10 py-10 ">
        <div className="absolute inset-0 flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='h-15' alt="" />
        </div>
         {/* Bottom Right Button */}
        <div className="absolute bottom-10 left-10">
          <button className='text-[#CDEA68] border border-[#CDEA68] px-6 py-2 rounded-full'>© 2026 Your Company</button>
        </div>
      </div>
      </div>

      {/* left side cards */}

      <div className="cardcontainer flex gap-5 h-[55vh] w-1/2 ">
 
        {/* card 2 */}

      <div className="card relative w-full h-full rounded-xl bg-black px-10 py-10 ">
        <div className="absolute inset-0 flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='h-15' alt="" />
        </div>
         {/* Bottom Right Button */}
         <div className="absolute bottom-10 left-10">
  <button className="btn-31 relative overflow-hidden border border-zinc-100 px-6 py-2 rounded-full uppercase font-black text-white transition-colors duration-300">
    
    <span className="relative z-10 block overflow-hidden">
      <span className="btn-text block uppercase">
        rating 5.0 on clutch
      </span>
    </span>

  </button>
</div>

      </div>

        {/* card 3 */}

       <div className="card relative w-full h-full rounded-xl bg-black px-10 py-10 ">
        <div className="absolute inset-0 flex items-center justify-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='h-20' alt="" />
        </div>
         {/* Bottom Right Button */}
        <div className="absolute bottom-10 left-10">
  <button className="btn-31 relative overflow-hidden border border-zinc-100 px-6 py-2 rounded-full uppercase font-black text-white transition-colors duration-300">
    
    <span className="relative z-10 block overflow-hidden">
      <span className="btn-text block">
        BUSINESS BOOTCAMP ALUM
      </span>
    </span>

  </button>
</div>




      </div>


        </div>
    </div>
  )
}

export default Cards
