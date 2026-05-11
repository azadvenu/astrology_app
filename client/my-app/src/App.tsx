// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Horoscope from "./pages/Horoscope";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path = "/" element = {<Index />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Horoscope />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;