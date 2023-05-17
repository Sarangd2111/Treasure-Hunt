
import './App.css';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login'
import Terms from './pages/Terms'
import Rules from './pages/Rules'
import Map from './pages/Map'
import Clue1 from './pages/Clue1'
import Clue2 from './pages/Clue2'
import Clue3 from './pages/Clue3'
import Clue4 from './pages/Clue4'
import Clue5 from './pages/Clue5'
import Clue6 from './pages/Clue6'
import Dead1 from './pages/Dead1'
import Dead2 from './pages/Dead2'
import Winpage from './pages/Winpage';
import User from './pages/User';
import Leaderboard from './pages/Leaderboard';

import Navbar from './components/Navbar';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";

const Layout = () =>{
  return(
    <>
    <div className="layout">
      <Navbar />
      <Outlet />
    </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:'/',
        element:<Homepage />
      },
      {
        path:'/rules',
        element:<Rules />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/signup',
        element:<Signup />
      },
      {
        path:'/map',
        element:<Map />
      },
      {
        path:'/terms',
        element:<Terms />
      },
      {
        path:'/clue1',
        element:<Clue1 />
      },
      {
        path:'/clue2',
        element:<Clue2 />
      },
      {
        path:'/clue3',
        element:<Clue3 />
      },
      {
        path:'/clue4',
        element:<Clue4 />
      },
      {
        path:'/clue5',
        element:<Clue5 />
      },
      {
        path:'/clue6',
        element:<Clue6 />
      },
      {
        path:'/finalpage',
        element:<Winpage />
      },
      {
        path:'/user',
        element:<User />
      },
      {
        path:'/leaderboard',
        element:<Leaderboard />
      },
      
      {
        path:'/dead1',
        element:<Dead1 />
      },
      
      {
        path:'/dead2',
        element:<Dead2 />
      },
      
    ]
  },

]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}



export default App;
