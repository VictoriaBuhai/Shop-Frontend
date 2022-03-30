import { useContext } from "react";
import { OrderFunction } from "../../App";

export const Bascet = () => {
  const { state } = useContext(OrderFunction);
  console.log(state);
  state.map((item) => {
    return (
      <div>
        <img src={item.image} alt="smth" />
        <h3>{item.name}</h3>
        <h3>{item.price}</h3>
      </div>
    );
  });
};
