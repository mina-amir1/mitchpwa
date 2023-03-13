import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import CategoryPage from "./pages/category/CategoryPage.js";
import { NavBar } from "./layouts";
import Footer from "./layouts/Footer/Footer.js";
import Product from "./pages/product/Product.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/cat/:cat" element={<CategoryPage />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/:{cat}" element={} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
