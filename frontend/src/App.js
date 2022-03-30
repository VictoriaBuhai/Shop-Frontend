import { createContext, useState } from "react";
import { Button, Dialog } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { Bascet } from "./components/Bascet";

export const OrderFunction = createContext();

const App = () => {
  const [items, setItems] = useState([]);
  //const [orders, setOrders] = useState([]);

  const [dialog, setDialog] = useState(false);

  let state = [
    { name: "hfjjd", price: 134, image: "qwertyu" },
    { name: "hfjjd", price: 134, image: "qwertyu" },
    { name: "hfjjd", price: 134, image: "qwertyu" },
    { name: "hfjjd", price: 134, image: "qwertyu" },
    { name: "hfjjd", price: 134, image: "qwertyu" },
  ];

  const onToggle = () => {
    setDialog((prev) => !prev);
  };

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
          <ShoppingCartRoundedIcon onClick={() => onToggle()} />
        </div>
      </header>

      <div className="layout">
        <OrderFunction.Provider value={{ state, addButton }}>
          <Routes>
            <Route path="/products" element={<Home items={items} />} />
            <Route path="/products/:slug/:id" element={<ProductPage />} />
          </Routes>
        </OrderFunction.Provider>
      </div>
      <Dialog open={dialog} onClose={onToggle}>
        <Bascet />
      </Dialog>
    </>
  );
};

export default App;
