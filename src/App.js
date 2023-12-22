
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Burger from './components/Burger';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Home />
  },
  {
    path: 'menu',
    element:<Menu/>
  },
  {
    path: 'burger',
    element:<Burger/>
  },
])
  return (
    <div className=' min-h-screen flex flex-col justify-between items-center bg-slate-300'>
      <Header />
      <RouterProvider router={router} />

      <Footer />

    </div>
  );
}

export default App;
