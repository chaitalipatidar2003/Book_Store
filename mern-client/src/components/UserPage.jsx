import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import userImg from '../assets/images/profile.png';

const UserPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-700 to-blue-500"  style={{background: 'linear-gradient(to bottom, #423F3E,#393E46, #393E46)'}}>
      <div className="bg-slate-100 p-10 rounded shadow-lg w-2/5">
        <div className="text-center">
          <img
            src={user?.photoURL || userImg}
            alt="User Profile"
            className="mx-auto w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
          />
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">{user?.displayName || 'Demo User'}</h2>
          <p className="text-gray-600 mb-4">{user?.email}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 text-center text-blue-700">User Actions</h3>
          <ul className="list-none p-0 flex flex-col items-center">
            <li className="mb-2">
              <a href="/shop" className="text-black hover:underline">View My Books</a>
            </li>
            <li className="mb-2">
              <a href="/admin/dashboard/upload" className="text-black hover:underline">Upload a Book</a>
            </li>
            <li>
              <a href="/logout" className="text-red-500 hover:underline">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
