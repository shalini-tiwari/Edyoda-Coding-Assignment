import  EDYODA  from "../assets/EDYODA.png"
import { FiChevronDown } from 'react-icons/fi';
import { GrSearch } from 'react-icons/gr';


export const Navbar = () => {
    return (
        <>
            <section  className="bg-white h-[72px] flex justify-between items-center px-20 py-6 text-base">
                <div className="flex space-x-16">
                    <img  src={EDYODA}/>
                    <h1 className="flex items-center ">Cources<span className="ps-4">{<FiChevronDown/>}</span></h1>
                    <h2 className="flex items-center ">Programs<span className="ps-4">{<FiChevronDown/>}</span></h2>
                </div>
                <div className="flex space-x-16 items-center">
                    <div className="">{<GrSearch/>}</div>
                    <h1 className="">Log in</h1>
                    <button className="bg-gradient-to-r from-[#0096FF] to-[#0048FF] text-white h-10 w-[166px] rounded-full ">JOIN NOW</button>
                </div>
            </section>
        </>
      
    )
  }