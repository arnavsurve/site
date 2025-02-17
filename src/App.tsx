import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/organisms/Home";
import BlogPage from "./components/organisms/BlogPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/writing/:slug" element={<BlogPage />}></Route>
    </Routes>
  );
};

export default App;
