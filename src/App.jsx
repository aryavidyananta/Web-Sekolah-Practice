import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Books from "./books";
import "./index.css";
import HomePage from "./Homepage";
import NotFound from "./not-found";

// Contoh ProtectedRoute sederhana
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    // Kalau belum login, redirect ke login
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
              <Books />
            </ProtectedRoute>
          } 
        />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/errorpage" element={<NotFound />} />
        {/* Redirect ke /login kalau path lain */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
