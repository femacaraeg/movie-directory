import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppBar from "./components/AppBar";

const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <>
      <Router>
        <AppBar />
        {/* <HomePage /> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="favorites" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
