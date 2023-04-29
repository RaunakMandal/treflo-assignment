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
    <div className="card w-100 bg-base-300">
      <div className="card-body items-start flex-row flex-wrap">
        <figure className="w-20">
          <img src={img_url} alt={name} className="rounded-xl" />
        </figure>
        <p className="text-l font-bold">{name}</p>
        <p className="text-l font-bold">Size: {size.join(", ")}</p>
        <p className="text-l font-bold">Toppings: {toppings.join(", ")}</p>
        <p className="text-l font-bold">INR {quantity * price}</p>
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
