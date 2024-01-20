
import Banner from "../components/Banner"
import BestSellerBooks from "./BestSellerBooks"
import FavBook from "./FavBook"
import OtherBooks from "./OtherBooks"
import PromoBanner from "./PromoBanner"
import Review from "./Review"



const Home = () => {
  return (
    <div className="">
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/>
        <OtherBooks/>
        <Review/>
        
    </div>
  )
}

export default Home
