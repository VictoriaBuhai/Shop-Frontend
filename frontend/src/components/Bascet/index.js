import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useContext, useState } from "react";
import { OrderFunction } from "../../App";
import { BascetDialog } from "../BascetDialog";
import { BascetStyles } from "./styles";

export const Bascet = () => {
  const styles = BascetStyles();
  const [dialog, setDialog] = useState(false);
  const { items } = useContext(OrderFunction);

  const onToggle = () => {
    setDialog((prev) => !prev);
  };
  return (
    <>
      <div className={styles.order}>
        {items.length !== 0 && (
          <div className={styles.counter}>
            <h3>{items.length}</h3>
          </div>
        )}
        <ShoppingCartRoundedIcon onClick={() => onToggle()} />
      </div>
      <BascetDialog open={dialog} onClose={onToggle} />
    </>
  );
};
