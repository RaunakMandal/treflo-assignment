import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  toggleQuantity,
} from "../../../store/reducers/cartSlice";

const CartItem = ({
  pizza: {
    id,
    name,
    description,
    isVeg,
    rating,
    price,
    img_url,
    size,
    toppings,
    quantity,
  },
}) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e, value) => {
    dispatch(
      toggleQuantity({
        id,
        quantity: value,
      })
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="card w-100 bg-primary">
      <div className="card-body items-start flex-row">
        <figure className="w-20 flex-1">
          <img src={img_url} alt={name} className="rounded-xl" />
        </figure>
        <p className="text-l font-bold flex-1">{name}</p>
        <p className="flex-1">{size.join(", ")}</p>
        <p className="flex-1">{toppings.join(", ")}</p>
        <p className="text-l font-bold flex-1">INR {quantity * price}</p>
        {quantity > 1 && (
          <button className="btn" onClick={(e) => handleQuantityChange(e, -1)}>
            -
          </button>
        )}
        {quantity === 1 && (
          <button className="btn" onClick={(e) => handleRemoveFromCart(e)}>
            Remove
          </button>
        )}
        <button className="btn">{quantity}</button>
        <button
          className="btn"
          onClick={(e) => handleQuantityChange(e, 1)}
          disabled={quantity === 10}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
