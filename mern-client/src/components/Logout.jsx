import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut}= useContext(AuthContext)
    
    const location= useLocation();
    const navigate = useNavigate();
    
    const from =location.state?.from?.pathname || "/";

    const handleLogout=()=>{
        logOut().then(() => {
            alert("Sign-out successful!!")
            navigate(from, { replace: true })
            
          }).catch((error) => {
            // An error happened.
          });
    }
    
    return (
    <div className='h-screen bg-sky-100 flex items-center justify-center' style={{background: 'linear-gradient(to bottom, #423F3E,#393E46, #393E46)'}}>
      <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
