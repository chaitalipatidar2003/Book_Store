// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from 'flowbite-react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {FaStar} from "react-icons/fa"
import profilePic from "../assets/images/profile.png"

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Review = () => {
  return (
    <div className='my-4 px-4 lg:px-24'>
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Our Customers</h2>
      <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2 mx-8'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7 mx-8'>
                    <p>
                    An absolute delight! This bookstore is a haven for book lovers. Impeccable collection, cozy ambiance—pure literary bliss. Highly recommend!
                    </p>
                    <Avatar img={profilePic} alt="avatar of Jese" rounded  className='w-10 mb-10'/>
                    <h5 className='text-lg font-medium '>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
         <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2 mx-8'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7 mx-8'>
                    <p>
                    An absolute delight! This bookstore is a haven for book lovers. Impeccable collection, cozy ambiance—pure literary bliss. Highly recommend!
                    </p>
                    <Avatar img={profilePic} alt="avatar of Jese" rounded  className='w-10 mb-10'/>
                    <h5 className='text-lg font-medium '>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
         <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2 mx-8'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7 mx-8'>
                    <p>
                    An absolute delight! This bookstore is a haven for book lovers. Impeccable collection, cozy ambiance—pure literary bliss. Highly recommend!
                    </p>
                    <Avatar img={profilePic} alt="avatar of Jese" rounded  className='w-10 mb-10'/>
                    <h5 className='text-lg font-medium '>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
         <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2 mx-8'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7 mx-8'>
                    <p>
                    An absolute delight! This bookstore is a haven for book lovers. Impeccable collection, cozy ambiance—pure literary bliss. Highly recommend!
                    </p>
                    <Avatar img={profilePic} alt="avatar of Jese" rounded  className='w-10 mb-10'/>
                    <h5 className='text-lg font-medium '>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
         <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2 mx-8'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7 mx-8'>
                    <p>
                    An absolute delight! This bookstore is a haven for book lovers. Impeccable collection, cozy ambiance—pure literary bliss. Highly recommend!
                    </p>
                    <Avatar img={profilePic} alt="avatar of Jese" rounded  className='w-10 mb-10'/>
                    <h5 className='text-lg font-medium '>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
         <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2 mx-8'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7 mx-8'>
                    <p>
                    An absolute delight! This bookstore is a haven for book lovers. Impeccable collection, cozy ambiance—pure literary bliss. Highly recommend!
                    </p>
                    <Avatar img={profilePic} alt="avatar of Jese" rounded  className='w-10 mb-10'/>
                    <h5 className='text-lg font-medium '>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
         <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2 mx-8'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7 mx-8'>
                    <p>
                    An absolute delight! This bookstore is a haven for book lovers. Impeccable collection, cozy ambiance—pure literary bliss. Highly recommend!
                    </p>
                    <Avatar img={profilePic} alt="avatar of Jese" rounded  className='w-10 mb-10'/>
                    <h5 className='text-lg font-medium '>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
         <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2 mx-8'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7 mx-8'>
                    <p>
                    An absolute delight! This bookstore is a haven for book lovers. Impeccable collection, cozy ambiance—pure literary bliss. Highly recommend!
                    </p>
                    <Avatar img={profilePic} alt="avatar of Jese" rounded  className='w-10 mb-10'/>
                    <h5 className='text-lg font-medium '>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5  rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2 mx-8'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7 mx-8'>
                    <p>
                    An absolute delight! This bookstore is a haven for book lovers. Impeccable collection, cozy ambiance—pure literary bliss. Highly recommend!
                    </p>
                    <Avatar img={profilePic} alt="avatar of Jese" rounded  className='w-10 mb-10'/>
                    <h5 className='text-lg font-medium '>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Review
