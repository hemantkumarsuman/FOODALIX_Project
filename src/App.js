import React from 'react';  //importing React keyword from react package at location node_modules
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';

import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


/*
-Header
 -Logo
 -Nav-Items
-Body
 -Search
 -RestaurantContainer
  -RestaurantCard
-Footer
 -Copyright
 -Links
 -Address
 -Contact
*/


const AppLayout = ()=>{
  return (
    <Provider store={appStore}>
      <div className='app'>        
        <Header/>
        <Outlet/>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  },
  
]);




const root = ReactDOM.createRoot(document.querySelector('.root'));

//root.render(<AppLayout/>)

root.render(<RouterProvider router={appRouter}/>)


