import { Outlet } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import './App.css';
import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className=''>
      <nav>
        {/* <FaBook/> */}
        <Navbar />
      </nav>
      <div className='min-h-screen'>
      <Outlet />
      </div>
      
      <MyFooter/>
    </div>
  );
}

export default App;
