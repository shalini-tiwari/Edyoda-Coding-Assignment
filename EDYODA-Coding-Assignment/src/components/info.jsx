import  book  from "../assets/book.png"
import  clock  from "../assets/clock.png"
import  hat  from "../assets/hat.png"
import  Live  from "../assets/Live.png"
import  noad  from "../assets/noad.png"
import  notclock  from "../assets/notclock.png"
import  razorpay  from "../assets/razorpay.png"
import  BG  from "../assets/BG.png"
import { useEffect, useState } from "react"

export const Info = () => {

    
    const done = <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z" fill="#ffff"/></svg>

    
    const [month, setMonth] = useState("12")
    const [price, setPrice] = useState("179")
    const [discountPrice, setDiscountPrice] = useState("18,288.78")
    const [finalPrice, setFinalPrice] = useState("211.22")

    //To set background of selected subcription plan
    const renderMonthSelect = (id) => {
        const green = " border-2 border-[#47d147] bg-[#D7EDDD]"
        const white = ""
        if (id === month) {
          return green 
        } else {
          return white 
        }
      }

    const renderSelect = (id) => {
        const green = " border-2 border-[#47d147] bg-[#47d147]"
        const white = ""
        if (id === month) {
          return green 
        } else {
          return white 
        }
      }
    
    //To Calculte the 18% GST
      const percentage = (partialValue, totalValue) => {
        return (totalValue * partialValue) /100 ;
     }
    
    //To calculate the discounted price and total price with adition of GST aswell whenever price state updates
      useEffect(()=>{
        let totalValue = percentage(18 , price) ;
        totalValue = totalValue + Number(price)
        setFinalPrice(totalValue)
        let discountPrice = 18500 - totalValue;
        const currencyFormat = new Intl.NumberFormat('en-IN').format(discountPrice); // 1,43,450
        setDiscountPrice(currencyFormat)

      },[price])
      



    return (
        <>
            <section className="conatiner grid grid-cols-12 mx-auto h-full w-full text-white py-14 " style={{backgroundImage: `url(${BG})`}}>
                
                <div className="col-start-2 col-end-8  font-semibold space-y-14 " >
                    <h1 className="text-5xl">Access curated courses worth <br/> ₹ <span className="line-through decoration-red-600 decoration-4">18,500</span> at just <span className="text-[#0096FF]">₹ 99</span> per year!</h1>
                    <ul className="space-y-10 text-3xl font-medium">
                        <li className="flex items-center"><img className="me-10 h-[68px] w-[68px]" src={book}/><span className="text-[#0096FF]">100+&nbsp;</span> Job relevant courses </li>
                        <li className="flex items-center"><img className="me-10 h-[68px] w-[68px]" src={clock}/><span className="text-[#0096FF]">20,000+&nbsp;</span> Hours of content</li>
                        <li className="flex items-center whitespace-normal"><img className="me-10 h-[68px] w-[68px]" src={Live}/><span className="text-[#0096FF]">Exclusive&nbsp;</span> webinar access</li>
                        <li className="flex items-center"><img className="me-10 h-[68px] w-[68px]" src={hat}/>Scholarship worth&nbsp;<span className="text-[#0096FF]">₹94,500</span></li>
                        <li className="flex items-center"><img className="me-10 h-[68px] w-[68px]" src={noad}/><span className="text-[#0096FF]">Ad Free&nbsp;</span> learning experience</li>
                    </ul>
                </div>


                <div className="col-start-8 col-end-12 border rounded-md w-[550px] p-5 bg-white text-slate-950 flex flex-col ">
                    <div className="flex justify-evenly ">
                        <div className="flex flex-col items-center ">
                            <p className="bg-[#0096FF] w-[38px] h-[38px] text-2xl rounded-full grid place-items-center font-semibold text-white">1</p>
                            <p className="text-[#3C4852]">Sign Up</p>
                        </div>
                        <div className="flex flex-col items-center ">
                            <p className="bg-[#0096FF] w-[38px] h-[38px] text-2xl rounded-full grid place-items-center font-semibold text-white">2</p>
                            <p className="text-[#3C4852]">Subscribe</p>
                        </div>
                        
                    </div>

                    <h1 className="mx-auto text-2xl py-7 font-semibold text-[#3C4852]">Select your subcription plan</h1>

                    <ul className="space-y-3 text-[#3C4852]">
                        <li className=" relative flex items-center justify-between border-[#BEBEBE] border-2 p-3 rounded-md text-[#3C4852] bg-[#E7E7E7]" >
                            <div className="absolute bg-[#F77171] text-xs top-0 left-14 font-medium text-white w-[121px] h-4 grid place-items-center rounded-b-md">Offer expired</div>
                            <div className="flex items-center font-semibold text-[#BEBEBE]"><span className="relative border-2 border-[#BEBEBE] h-6 w-6 rounded-full me-3 grid place-items-center"><span className="absolute bg-[#BEBEBE] h-4 w-4 rounded-full"></span></span>12 Months Subscription</div> 
                            <div className="text-end -space-y-2 text-[#BEBEBE]"><div><span className="text-xs font-normal">Total</span> <span className="text-base font-semibold">₹99</span></div> <div><span className="text-xs  font-normal">₹8</span> <span className="text-[10px] text-[#BEBEBE] font-medium">/mo</span></div>  </div>
                        </li>
                        <li id="12" className={`${renderMonthSelect("12")} relative flex items-center justify-between border-[#BEBEBE] border-2 p-3 rounded-md text-[#3C4852] cursor-pointer`} onClick={() => {setMonth("12"); setPrice("179")}}>
                            <div className="absolute bg-[#47BA68] text-xs top-0 left-14 font-medium text-white w-[121px] h-4 grid place-items-center rounded-b-md">Recommended</div>
                            <div className="flex items-center font-semibold "><span className={`${renderSelect("12")} relative border-2 border-[#BEBEBE] h-6 w-6 rounded-full me-3 grid place-items-center`}><span className="absolute">{done}</span></span>12 Months Subscription</div> 
                            <div className="text-end -space-y-2"><div><span className="text-xs font-normal">Total</span> <span className="text-base font-semibold">₹179</span></div> <div><span className="text-xs  font-normal">₹15</span> <span className="text-[10px] text-[#BEBEBE] font-medium">/mo</span></div>  </div>
                        </li>
                        <li id="6" className={`${renderMonthSelect("6")} flex items-center justify-between border-[#BEBEBE] border-2 p-3 rounded-md text-[#3C4852] cursor-pointer`} onClick={() => {setMonth("6"); setPrice("149")}}>
                            <div className="flex items-center font-semibold"><span className={`${renderSelect("6")} relative border-2 border-[#BEBEBE] h-6 w-6 rounded-full me-3 grid place-items-center`}><span className="absolute">{done}</span></span>6 Months Subscription</div> 
                            <div className="text-end -space-y-2"><div><span className="text-xs font-normal">Total</span> <span className="text-base font-semibold">₹149</span></div> <div><span className="text-xs  font-normal">₹25</span> <span className="text-[10px] text-[#BEBEBE] font-medium">/mo</span></div>  </div>
                        </li>
                        <li id="3" className={`${renderMonthSelect("3")} flex items-center justify-between border-[#BEBEBE] border-2 p-3 rounded-md text-[#3C4852] cursor-pointer`} onClick={() => {setMonth("3"); setPrice("99")}}>
                            <div className="flex items-center font-semibold"><span className={`${renderSelect("3")} relative border-2 border-[#BEBEBE] h-6 w-6 rounded-full me-3 grid place-items-center`}><span className="absolute">{done}</span></span>3 Months Subscription</div> 
                            <div className="text-end -space-y-2"><div><span className="text-xs font-normal">Total</span> <span className="text-base font-semibold">₹99</span></div> <div><span className="text-xs  font-normal">₹33</span> <span className="text-[10px] text-[#BEBEBE] font-medium">/mo</span></div>  </div>
                        </li>
                    </ul>
                    
                    <div className="border-t-2 border-[#BEBEBE] my-6 ">
                        <div className="flex justify-between p-3 text-[#3C4852]"><span className="text-base font-normal">Subscription Fee</span><span className="text-base font-semibold">₹18,500</span></div>
                        <div className=" p-3 text-[#DE4313] bg-gradient-to-r from-[#DE4313]/20 to-[#FEC163]/20 " style={{borderImage: "linear-gradient(#DE4313, #FEC163) 30",borderWidth: "2px", borderStyle: "solid"}}>
                            <span className="flex justify-between "><span>Limited time offer</span><span className="text-base font-semibold">- ₹{discountPrice}</span></span>
                            <span className="flex "><span><img className="me-3 h-[20px] w-[20px]" src={notclock}/></span><span>Offer valid till 25th March 2023 </span></span>
                        </div>
                        <div className="flex justify-between p-3 text-[#3C4852]"><span className="text-base font-semibold">Total (Incl. of 18% GST)</span><span className="font-bold text-2xl">₹{finalPrice}</span></div>
                    </div>

                    <div className="h-[56px] grid grid-cols-2 gap-4 font-bold">
                        <button className="border-2 border-[#F77171] h-full rounded text-[#F77171]">CANCEL</button>
                        <button className=" h-full rounded bg-[#47BA68] text-white">PROCEED TO PAY</button>
                    </div>

                    <img className="w-[120px] mt-6 mb-2" src={razorpay} alt="" />
                </div>
            </section>
        </>
      
    )
  }