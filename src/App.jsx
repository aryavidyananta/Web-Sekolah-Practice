import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Books from "./books";
import HomePage from "./Homepage";
import NotFound from "./not-found";
import About from "./About";
import MainLayout from "./main-layout";
import BlogPage from "./Blog";
import Staff from "./staff";
import Ekstrakulikuler from "./Eskul";
import Fasilitas from "./fasilitas";

// ProtectedRoute tetap seperti sebelumnya
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Books />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/homepage"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/blog"
          element={
            <MainLayout>
              <BlogPage />
            </MainLayout>
          }
        />

        <Route
          path="/staff"
          element={
            <MainLayout>
              <Staff/>
            </MainLayout>
          }
        />

        <Route
          path="/ekstrakulikuler"
          element={
            <MainLayout>
              <Ekstrakulikuler/>
            </MainLayout>
          }
        />

        <Route
          path="/fasilitas"
          element={
            <MainLayout>
              <Fasilitas/>
            </MainLayout>
          }
        />

        <Route path="/errorpage" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
