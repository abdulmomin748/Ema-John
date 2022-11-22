import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { productAndCartLoader } from './loaders/productAndCartLoader';
import Orders from './components/Orders/Order';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          // loader: () => fetch('http://localhost:5000/products'),
          element: <Shop />
        },
        {
          path: '/orders',
          loader: productAndCartLoader,
          element: <Orders />
        },
        {
          path: '/inventory',
          element: <PrivateRoute><Inventory /></PrivateRoute>
        },
        {
          path: '/shipping',
          element: <PrivateRoute><Shipping /></PrivateRoute>
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/login',
          element: <Login />
        },

      ],
    },
    

  ])
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
