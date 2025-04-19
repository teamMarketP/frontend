import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Suspense } from 'react';

const MainLayout = () => {
  return (
    <>
      <div className="px-6 my-2">
        <Header />
      </div>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
