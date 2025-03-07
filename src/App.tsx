import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/organisms/Home";
import BlogPage from "./components/organisms/BlogPage";
import BlogIndex from "./components/organisms/BlogIndex";
import Reading from "./components/organisms/Reading";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/writing" element={<BlogIndex />}></Route>
      <Route path="/writing/:slug" element={<BlogPage />}></Route>
      <Route path="/reading" element={<Reading />}></Route>
    </Routes>
  );
};

export default App;
