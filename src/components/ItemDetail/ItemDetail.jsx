import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";


export const ItemDetail = ({ item }) => {
  const {addItems} = useCart();
  return (
    <Item {...item}>
      <button className="btn primary" onClick={ () => addItems(item)}>Agregar al carrito</button>
    </Item>
  );
};
