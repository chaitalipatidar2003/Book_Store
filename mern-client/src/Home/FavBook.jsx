import { Link } from "react-router-dom"
import FavBookImg from "../assets/images/ladytawem_.jpg"

const FavBook = () => {
  return (
    <div className="px-8 lg:px-24 my-16 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2 item-center">
         <img src={FavBookImg} alt="" className="rounded w-900 h-1250 md:10/12 px-32 "/>
      </div>
      <div className="space-y-6 md:w-1/2 ">
        <h2 className="text-4xl font-bold my-5 md:w-3/4">
            Find Your Favorite Book <span className="text-indigo-700">Book here!</span>
        </h2>
        <p>Discover literary treasures in our favorite books section, where captivating stories and brilliant narratives come to life. Immerse yourself in a curated selection of timeless classics and contemporary gems that promise to transport you to new worlds and ignite your imagination. Explore the magic of storytelling at its finest.</p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
            <div>
                <h3 className="text-3xl font-bold">800+</h3>
                <p className="text-base">Book Listing</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">550+</h3>
                <p className="text-base">Registered Users</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">1200+</h3>
                <p className="text-base">PDF Downloads</p>
            </div>
        </div>
        <Link to="/shop" className="mt-8 block"><button className="bg-blue-700 font-semibold px-5 py-2 rounded hover:bg-black  transition-all duration-300 text-white">Explore More</button></Link>
      </div>
    </div>
  )
}

export default FavBook
