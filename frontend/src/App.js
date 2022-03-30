import { useState } from "react";
import { Button } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
const App = () => {
  const [items, setItems] = useState([]);

  const addButton = (product) => {
    setItems((prev) => [product, ...prev]);
  };
  return (
    <>
      <header>
        <div className="display">
          <Button>
            <Link to="/products">
              <HomeRoundedIcon />
            </Link>
          </Button>
          <h1>Whatever</h1>
          <ShoppingCartRoundedIcon />
        </div>
      </header>
      <div className="layout">
        <Routes>
          <Route
            path="/products"
            element={<Home addButton={addButton} items={items} />}
          />
          <Route path="/products/:slug/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
