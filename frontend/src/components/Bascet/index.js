import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import { OrderFunction } from "../../App";
import "./styles.css";

export const Bascet = () => {
  const { items, deleteItems } = useContext(OrderFunction);
  return (
    <div className="orders">
      <h1>Your List</h1>
      {items.map((item) => {
        return (
          <ListItem>
            <ListItemAvatar>
              <Avatar src={item.imagePath}></Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={`${item.price}$`} />
          </ListItem>
        );
      })}
      {items.length === 0 && <p>The basket is empty...</p>}
      <Button onClick={() => deleteItems()} disabled={items.length === 0}>
        Buy
      </Button>
    </div>
  );
};
