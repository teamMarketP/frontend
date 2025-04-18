import '@/components/App/App.css';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import MainLayout from '@/components/Layout/MainLayout';

const HomePage = lazy(() => import('@/pages/Home/HomePage'));
const CatalogPage = lazy(() => import('@/pages/Catalog/CatalogPage'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
