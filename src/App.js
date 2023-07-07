import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" exact />
      {/* <Route element={<About />} path="/about" exact /> */}
      <Route element={<Projects />} path="projects" exact />
    </Routes>
  );
}

export default App;
