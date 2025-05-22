import '@/components/App/App.css';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import MainLayout from '@/shared/components/Layout/MainLayout';
import SearchSpecialistsPage from '@/features/searchSpecialists/pages/SearchSpecialistsPage';

const HomePage = lazy(() => import('@/pages/Home/HomePage'));
const SearchSpecialistsPage = lazy(
  () => import('@/features/searchSpecialists/pages/SearchSpecialistsPage')
);
const SpecialistProfilePage = lazy(
  () => import('@/features/specialist/pages/SpecialistProfilePage')
);
const BookingPage = lazy(() => import('@/features/booking/pages/BookingPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/specialists" element={<SearchSpecialistsPage />} />
          <Route path="/specialists/:id" element={<SpecialistProfilePage />} />
          <Route path="/specialists/:id/booking" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
