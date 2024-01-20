import { Link } from "react-router-dom"
import bookPic from "../assets/images/Books2.png"

const PromoBanner = () => {
  return (
    <div className="mt-16 py-16 bg-gray-200 px-8 lg:px-24" style={{background: 'linear-gradient(to bottom, #423F3E,#393E46, #2B2B2B)'}}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
         <h2 className="text-3xl text-white font-bold mb-6 leading-snug">2023 National Book Awards for Fiction Shortlist</h2>
         <Link to="/shop" className="block"><button className="bg-blue-700 font-semibold px-5 py-2 rounded hover:bg-black  transition-all duration-300 text-white">Get Promo Code</button></Link>
        </div>
           <div>
            <img src={bookPic} alt="" className="w-96"/>
            </div>
      </div>
    </div>
  )
}

export default PromoBanner
