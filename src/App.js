import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import CategoryPage from "./pages/category/CategoryPage.js";
import { NavBar } from "./layouts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/cat/:cat" element={<CategoryPage />} />
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/:{cat}" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
