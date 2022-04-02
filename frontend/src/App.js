import { createContext, useState } from "react";
import { Alert, Button } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";

import { Bascet } from "./components/Bascet";

import { Favorites } from "./pages/Favorites";

export const OrderFunction = createContext();

const App = () => {
  const [items, setItems] = useState([]);

  const [alert, setAlert] = useState(false);

  const addButton = (product) => {
    setItems((prev) => [product, ...prev]);
  };

  const deleteItems = () => {
    setItems([]);
    setAlert((prev) => !prev);
    setTimeout(() => {
      setAlert((prev) => !prev);
    }, 3000);
  };

  return (
    <OrderFunction.Provider value={{ items, addButton, deleteItems }}>
      <header>
        <div className="display">
          <div className="navigate">
            <Button>
              <Link to="/products">
                <HomeRoundedIcon />
              </Link>
            </Button>

            <Button>
              <Link to="/products/favorites">
                <FavoriteIcon />
              </Link>
            </Button>
          </div>

          <h1>Whatever</h1>

          <Bascet />
        </div>
      </header>

      <div className="layout">
        <Routes>
          <Route path="/products" element={<Home items={items} />} />
          <Route path="/products/:slug/:id" element={<ProductPage />} />
          <Route path="/products/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>

        {alert && (
          <Alert severity="success" className="alert">
            Purchase made successfully
          </Alert>
        )}
      </div>
    </OrderFunction.Provider>
  );
};

export default App;
