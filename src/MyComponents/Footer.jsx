import React from 'react'

function Footer() {

    const icons = [
        'fbicon.png',
        'instaicon.png',
        'xicon.png',
        'linkedinicon.png',
        'yticon.png',
        'tiktokicon.png'
    ]
    return (
            <div className="bg-[#F2F3F4] py-6 lg:py-10">
            <div className="bg-white w-[92%] max-w-7xl mx-auto rounded-3xl p-5 sm:p-8 lg:p-10">
                <div className="flex flex-col justify-between items-center gap-8 lg:flex lg:flex-row lg:justify-between lg:items-center">
                    <div className="flex flex-col justify-between items-center gap-4 w-full lg:w-auto lg:flex-row lg:items-center lg:gap-12">
                        <div className='my-2 lg:my-14 shrink-0'>
                            <img src='/klogo (2).png' alt='kruncheeselogo' className="h-[40px] w-[120px] object-contain" />
                        </div>
                        <div className="flex flex-col justify-between items-start space-y-2 w-full sm:w-auto">
                            <p className="font-bold text-base text-black"> Kruncheese</p>
                            <p className="flex flex-row gap-3 text-sm sm:text-base"> <span className="shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C40013" className="bi bi-telephone-fill" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" /></svg></span>051 111 434 434</p>
                            <p className="flex flex-row gap-3 text-sm sm:text-base break-all sm:break-normal"> <span className="shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C40013" className="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" /></svg></span>contact@kruncheese.com.pk</p>
                            <p className="flex flex-row gap-3 text-sm sm:text-base"> <span className="shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C40013" className="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" /></svg></span>Kruncheese - Jinnah Park, Jinnah Park, Rawalpindi</p>
                            <div className="flex flex-row justify-between items-center gap-3 sm:gap-8 mt-6 sm:mx-auto">
                                <img src='/playstore.jpg' alt='playstorelogo' className="h-[40px] w-[120px] sm:w-[140px] object-contain" />
                                <img src='/appstore.jpg' alt='applestorelog' className="h-[40px] w-[120px] sm:w-[140px] object-contain" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between items-start w-full lg:w-auto">
                        <p className="font-bold text-base lg:text-lg text-black py-1">Our Timing</p>
                        <div className="flex flex-row flex-wrap justify-between items-center gap-x-6 gap-y-1 sm:gap-x-10 lg:gap-16">
                            <p className="text-sm lg:text-[14px] font-thin text-black">Monday - Sunday</p>
                            <p className="text-sm lg:text-[14px] font-thin text-black">12:00 PM - 05:00 AM</p>
                        </div>
                        <p className="font-bold text-base lg:text-lg text-black py-3">Follow us:</p>
                        <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
                            {icons.map((i) => (
                                <div key={i}>
                                    <img src={`/${i}`} alt='' className="h-[30px] w-[30px] rounded" />
                                </div>))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center mt-8">
                    <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-8">
                        <a href='' className="text-sm lg:text-base hover:text-black duration-200 text-gray-400 font-thin underline">Terms and conditions</a>
                        <a href='' className="text-sm lg:text-base hover:text-black duration-200 text-gray-400 font-thin underline">Privacy Policy</a></div>
                    <hr className="w-full border-t border-black my-4" />
                    <p className="flex flex-row flex-wrap justify-center items-center text-center text-sm sm:text-base font-thin"> © 2026 Powered by <span><img src='/blink-icon.png' alt='' className="h-[20px] w-[20px]" /></span><a href='' className="font-bold underline">Blink</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer