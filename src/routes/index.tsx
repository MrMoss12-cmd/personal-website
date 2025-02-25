import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import BlogPost from '../pages/BlogPost';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
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
        path: '/about',
        element: <About />,
      },
    
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
   
      {
        path: '/blog',
        element: <Blog />,
      },
          
      {
        path: '/blog/:id',
        element: <BlogPost />,
      },
       
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;