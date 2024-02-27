import Home from './pages/home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Users from './pages/users/users';
import Lawsuits from './pages/lawsuits/Lawsuits';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';

import './styles/global.scss';

function App() {
  const Layout = () => {
    return (
      <section className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>

          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </section>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },

        {
          path: '/clientes',
          element: <Users />,
        },

        {
          path: '/processos',
          element: <Lawsuits />,
        },

        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
