import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useContext, useState } from "react";
import { OrderFunction } from "../../App";
import { BascetDialog } from "../BascetDialog";
import "./styles.css";

export const Bascet = () => {
  const [dialog, setDialog] = useState(false);
  const { items } = useContext(OrderFunction);

  const onToggle = () => {
    setDialog((prev) => !prev);
  };
  return (
    <>
      <div className="order">
        {items.length !== 0 && (
          <div className="counter">
            <h3>{items.length}</h3>
          </div>
        )}
        <ShoppingCartRoundedIcon onClick={() => onToggle()} />
      </div>
      <BascetDialog open={dialog} onClose={onToggle} />
    </>
  );
};
