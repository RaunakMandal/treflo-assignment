import { useSelector } from "react-redux";
import CartItem from "../../shared/CartItem";
import Error from "../../shared/Error";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="flex flex-col flex-1 gap-2">
      {cartItems.length === 0 && (
        <Error
          from="cart"
          error="Your cart is empty. Please add some pizzas to your cart."
        />
      )}
      {cartItems.map((item) => (
        <CartItem key={item.id} pizza={item} />
      ))}
    </div>
  );
};

export default Cart;
