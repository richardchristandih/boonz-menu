import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicMenu from "./pages/PublicMenu"; // adjust this path!

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicMenu />} />
        <Route path="/menu" element={<PublicMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
