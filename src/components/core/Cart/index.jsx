import { useSelector } from "react-redux";
import CartItem from "../../shared/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="flex flex-col gap-2 w-full">
      {cartItems.map((item) => (
        <CartItem key={item.id} pizza={item} />
      ))}
    </div>
  );
};

export default Cart;
