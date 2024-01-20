import BannerCard from "../Home/BannerCard";

const Banner = () => {
  return (
    <div className="ban px-8 lg:px-28" style={{background: 'linear-gradient(to bottom, #423F3E,#393E46, #2B2B2B)'}}>
      <div className="bg-blue-100 text-black flex items-center" style={{background: 'linear-gradient(to bottom, #423F3E,#393E46, #2B2B2B)'}}>
        <div className="flex w-full  flex-col md:flex-row justify-between items-center gap-12 py-40">
          {/* left div */}
          <div className="space-y-7 md:wd-1/2 h-full">
            <h2 className="text-5xl font-bold leading-snug text-white md:w-1/2">Buy and Sell your Books <span className="text-blue-700 text-4xl">for the best prices </span></h2>
            <p className="md:w-2/5 text-white">Explore a seamless book-buying and selling experience on our website. Whether you`re looking to declutter your bookshelf or discover new reads, our platform makes transactions easy and enjoyable.</p>
            <div className="p-3">
              <input type="search" name="search" placeholder="search a book " className="py-2 px-2 rounded-s-sm  bg-white-400 text-gray outline-none" />
              <button className="px-6 py-2 font-medium m-2 outline-gray text-white bg-blue-700 hover:bg-black transition-all ease-in duration-200">Search</button>
            </div>
          </div>
          {/* right div */}
          <div className="mx-4 px-5 space-y-7 md:wd-1/2 h-full relative z-0">
            <BannerCard className="mx-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
