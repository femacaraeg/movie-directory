import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppBar from "./components/AppBar";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Favorites = React.lazy(() => import("./pages/Favorites"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Router>
        <AppBar />
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="favorites" element={<Favorites />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
