import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SellerRegistration from "./pages/SellerRegistration";
import Success from "./pages/Success";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SellerRegistration />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
