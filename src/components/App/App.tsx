import '@/components/App/App.css';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import MainLayout from '@/components/Layout/MainLayout';

const HomePage = lazy(() => import('@/pages/Home/HomePage'));
const CatalogPage = lazy(() => import('@/pages/Catalog/CatalogPage'));
const SearchSpecialistsPage = lazy(
  () => import('@/pages/SearchSpecialistsPage/SearchSpecialistsPage')
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/specialists" element={<SearchSpecialistsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
