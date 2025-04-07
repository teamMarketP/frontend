import "./App.css";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import NotFoundPage from "../../pages/NotFound/NotFoundPage";

const HomePage = lazy(() => import("../../pages/Home/HomePage"));
const CatalogPage = lazy(() => import("../../pages/Catalog/CatalogPage"));

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
