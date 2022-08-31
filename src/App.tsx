import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppBar from "./components/AppBar";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Favorites = React.lazy(() => import("./pages/Favorites"));

function App() {
  return (
    <>
      <Router>
        <AppBar />
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="favorites" element={<Favorites />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
