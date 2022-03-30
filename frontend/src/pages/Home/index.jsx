import { Button } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "./styles.css";

export const Home = () => {
  return (
    <header>
      <div className="container">
        <Button>
          <HomeRoundedIcon />
        </Button>
        <h1>Products</h1>
        <ShoppingCartRoundedIcon />
      </div>
    </header>
  );
};
