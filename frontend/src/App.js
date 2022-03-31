import { createContext, useState } from "react";
import { Alert, Button, Dialog } from "@mui/material";
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

  const [dialog, setDialog] = useState(false);

  const [alert, setAlert] = useState(false);
  const onToggle = () => {
    setDialog((prev) => !prev);
  };

  const addButton = (product) => {
    setItems((prev) => [product, ...prev]);
  };

  const deleteItems = () => {
    setItems([]);
    setAlert((prev) => !prev);
    onToggle();
    setTimeout(() => {
      setAlert((prev) => !prev);
    }, 3000);
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
        <OrderFunction.Provider value={{ items, addButton, deleteItems }}>
          <Routes>
            <Route path="/products" element={<Home items={items} />} />
            <Route path="/products/:slug/:id" element={<ProductPage />} />
          </Routes>

          <Dialog open={dialog} onClose={onToggle}>
            <Bascet />
          </Dialog>
        </OrderFunction.Provider>
        {alert && (
          <Alert severity="success" className="alert">
            Purchase made successfully
          </Alert>
        )}
      </div>
    </>
  );
};

export default App;
