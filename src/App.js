import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './lauout/Main';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register';
import PrivateRoutes from './routes/PrivateRoutes';
import Orders from './components/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoutes><Home></Home></PrivateRoutes>
        },
        {
          path: '/orders',
          element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]

    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
