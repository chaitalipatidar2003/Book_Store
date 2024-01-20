import React from 'react';
import logo from '/src/assets/images/profile.png';
import { Link } from 'react-router-dom';
import { FaBlog } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex flex-col  items-center justify-center w-screen "  >
    <div className='inline-block shadow-lg flex flex-col px-8 py-4 items-center bg-transparent' >
      <img src={logo} alt="Bookstore Logo" className="w-24 h-24 block shadow-lg rounded-full" />
      <Link to="/" className="text-xl text-gray-300 rounded  my-5 px-6 py-2 font-bold inline-block shadow-lg  mx-2 px-8 lg:px-24"  style={{background: 'linear-gradient(to bottom, #423F3E,#393E46, #393E46)'}}>
            Go to Home
          </Link>
    </div>
    </div>
  );
}

export default Dashboard;
