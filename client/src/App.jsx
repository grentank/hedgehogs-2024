import { useState } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/pages/Layout";
import MainPage from "./components/pages/MainPage";
import StudentsPage from "./components/pages/StudentsPage";

// React Bootstrap
// Material UI
// Chakra UI
// Reactstrap
// Ant D
// Tailwind CSS
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/students" element={<StudentsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
