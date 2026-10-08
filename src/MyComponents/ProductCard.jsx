import React from 'react'

function ProductCard() {
  return (
    <div>
        <div className="flex flex-col md:flex-row justify-between items-stretch bg-white md:h-[600px] w-[92%] max-w-5xl mx-auto rounded-3xl overflow-hidden my-6">
        <div className="w-full md:w-1/2">
          <img src='/card.jpg' className="h-56 sm:h-72 md:h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-between items-start gap-6 md:h-full w-full md:w-1/2 p-4 sm:p-6">
          <div className="w-full">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-black font-bold text-2xl">Krunch Box</h3>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#A6A6A6" className="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" /></svg></span>
            </div>
            <p className="text-black font-medium text-xl">Rs. 690.00</p>
            <p className="text-gray-400 text-sm font-light">Crispy Box (2 pcs chicken , regular fries  and 345ml Drink)</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 w-full border-t border-[#ebebeb] pt-3">
            <div className="flex flex-row justify-between items-center">
              <button className="rounded-full bg-[#C40013] text-white  hover:bg-white hover:text-[#C40013] duration-200 h-[40px] w-[40px]"><p>−</p></button>
              <p className="border border-gray-400 h-[35px] w-[45px] rounded flex justify-center items-center">1</p>
              <button className="rounded-full bg-[#C40013] text-white  hover:bg-white hover:text-[#C40013] duration-200 h-[40px] w-[40px]"><p>+</p></button>
            </div>
            <button className="bg-[#C40013] rounded-xl text-white font-bold flex flex-row justify-between items-center h-[45px] w-full sm:w-auto sm:flex-1 sm:max-w-[350px] hover:bg-white hover:text-[#C40013] hover:shadow-lg hover:shadow-[#C40013] duration-200 px-4">
              <span>Rs. 699.00</span>
              <span>Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard