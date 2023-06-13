import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';

const router = createBrowserRouter([{
  path:"/",
  element:<Navbar/>,
  children:[
    {
      path:"/",
      element:<Home/>
    }
  ]
}])

function App() {

  return (
      <>
      <div className="App">
      <RouterProvider router={router} />
        </div></>
  );
}

export default App;
