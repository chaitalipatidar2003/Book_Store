
import  App from '../App'
import {
  createBrowserRouter
} from "react-router-dom";
import Home from '../Home/Home'
import Shop from '../Shop/Shop';
import Navbar from '../components/Navbar'; 
import SingleBook from '../Shop/SingleBook';
import DashboardLayout from '../Dashboards/DashboardLayout';
import Dashboard from '../Dashboards/Dashboard';
import UploadBook from '../Dashboards/UploadBook';
import ManageBooks from '../Dashboards/ManageBooks';
import EditBooks from '../Dashboards/EditBooks';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Logout from '../components/Logout';
import UserPage from '../components/UserPage';
import Blog from '../components/Blog';
import About from '../components/About';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/navbar",
        element: <Navbar/>
      },
      {
        path: "/book/:id",
        element: <SingleBook/>,
        loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
  },
      {
        path: "/admin/dashboard",
        element:<PrivateRoute>
         <DashboardLayout/>
        </PrivateRoute>,
      children:[
        {
          path: "/admin/dashboard",
          element: <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks/>
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBooks/>,
          loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        },
        ]  
       },
  {
   path:"sign-up",
   element:<SignUp/>
  },
  {
   path:"login",
   element:<Login/>
  },
  {
   path:"logout",
   element:<Logout/>
  },
  {
    path: "user",
    element: <UserPage/>
  },
], );

export default Router;