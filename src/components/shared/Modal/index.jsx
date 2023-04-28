import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/reducers/cartSlice";

const Modal = ({
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
  toggleModal,
}) => {
  const [pizzaInCart, setPizzaInCart] = useState({
    id,
    name,
    description,
    isVeg,
    price,
    img_url,
    size: [],
    toppings: [],
    quantity: 1,
  });

  const dispatch = useDispatch();

  const handleRadioChange = (e, prop) => {
    if (prop.type === "size") {
      setPizzaInCart((prev) => ({
        ...prev,
        size: [prop.size],
      }));
    } else {
      setPizzaInCart((prev) => ({
        ...prev,
        toppings: [prop.topping],
      }));
    }
  };

  const handleCheckBoxChange = (e, prop) => {
    if (prop.type === "size") {
      if (e.target.checked) {
        setPizzaInCart((prev) => ({
          ...prev,
          size: [...prev.size, prop.size],
        }));
      } else {
        setPizzaInCart((prev) => ({
          ...prev,
          size: prev.size.filter((size) => size !== prop.size),
        }));
      }
    } else {
      if (e.target.checked) {
        setPizzaInCart((prev) => ({
          ...prev,
          toppings: [...prev.toppings, prop.topping],
        }));
      } else {
        setPizzaInCart((prev) => ({
          ...prev,
          toppings: prev.toppings.filter((topping) => topping !== prop.topping),
        }));
      }
    }
  };

  const handleModalClose = () => {
    toggleModal();
  };

  const handleAddToCart = () => {
    dispatch(addToCart(pizzaInCart));

    setTimeout(() => {
      toggleModal();
    }, 1000);
  };

  return (
    <div className={`modal modal-bottom sm:modal-middle modal-open`}>
      <div className="modal-box">
        <div className="flex justify-between items-start gap-2">
          <img src={pizzaInCart.img_url} alt="pizza" className="w-[200px]" />
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl">{pizzaInCart.name}</h2>
            <p className="text-sm">{pizzaInCart.description}</p>

            <p>Customize your Pizza</p>
            <div className="flex flex-col gap-2">
              <p className="text-sm capitalize">Choose Size</p>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  {size[0].isRadio ? (
                    <>
                      {size[0].items?.map((size) => (
                        <span className="flex items-center" key={size.size}>
                          <input
                            type="radio"
                            className="radio"
                            name={size.size}
                            onChange={(e) =>
                              handleRadioChange(e, {
                                type: "size",
                                size: size.size,
                              })
                            }
                            checked={pizzaInCart.size[0] === size.size}
                          />
                          <label className="ml-1">{size.size}</label>
                        </span>
                      ))}
                    </>
                  ) : (
                    <>
                      {size[0].items?.map((size) => (
                        <span className="flex items-center" key={size.size}>
                          <input
                            type="checkbox"
                            className="checkbox"
                            name={size.size}
                            onChange={(e) =>
                              handleCheckBoxChange(e, {
                                type: "size",
                                size: size.size,
                              })
                            }
                            checked={pizzaInCart.size.includes(size.size)}
                          />
                          <label className="ml-1">{size.size}</label>
                        </span>
                      ))}
                    </>
                  )}
                </div>
              </div>

              <p className="text-sm capitalize">Choose Toppings</p>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  {toppings[0].isRadio ? (
                    <>
                      {toppings[0].items?.map((topping) => (
                        <span className="flex items-center" key={topping.name}>
                          <input
                            type="radio"
                            className="radio"
                            name={topping.name}
                            onChange={(e) =>
                              handleRadioChange(e, {
                                type: "topping",
                                topping: topping.name,
                              })
                            }
                            checked={pizzaInCart.toppings[0] === topping.name}
                          />
                          <label className="ml-1">{topping.name}</label>
                        </span>
                      ))}
                    </>
                  ) : (
                    <>
                      {toppings[0].items?.map((topping) => (
                        <span className="flex items-center" key={topping.name}>
                          <input
                            type="checkbox"
                            className="checkbox"
                            name={topping.name}
                            onChange={(e) =>
                              handleCheckBoxChange(e, {
                                type: "topping",
                                topping: topping.name,
                              })
                            }
                            checked={pizzaInCart.toppings.includes(
                              topping.name
                            )}
                          />
                          <label className="ml-1">{topping.name}</label>
                        </span>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button className="btn" onClick={handleModalClose}>
            Close
          </button>
          <button className="btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
