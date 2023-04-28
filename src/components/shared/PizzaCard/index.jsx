import { useState } from "react";
import Modal from "../Modal";

const PizzaCard = ({
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
  },
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleAddToCart = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
      <figure className="px-10 pt-10">
        <img src={img_url} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-start">
        <span className="flex items-center justify-between w-full">
          <h2 className="card-title">{name}</h2>
          <span className={`badge badge-${isVeg ? "primary" : "danger"}`}>
            {isVeg ? "Veg" : "Non-Veg"}
          </span>
        </span>
        <span className="flex items-center justify-between w-full">
          <p className="text-l font-bold">INR {price}</p>
          <span className="badge badge-outline">{rating} ⭐️</span>
        </span>
        <p>{description}</p>
        <button className="btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      {showModal && (
        <Modal
          pizza={{
            id,
            name,
            description,
            isVeg,
            rating,
            price,
            img_url,
            size,
            toppings,
          }}
          toggleModal={setShowModal}
        />
      )}
    </div>
  );
};

export default PizzaCard;
