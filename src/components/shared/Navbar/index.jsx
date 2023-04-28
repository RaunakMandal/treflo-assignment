import { useSelector } from "react-redux";
import cart from "../../../assets/ic_cart.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  console.log(cartItem);
  return (
    <div className="navbar bg-base-300 sticky top-0 z-10 px-4">
      <div className="flex-1">
        <Link to="/">
          <a className="btn btn-ghost normal-case text-xl">Pizza Shop</a>
        </Link>
      </div>
      <Link to="/cart">
        <div className="indicator p-0 m-2 hover:cursor-pointer">
          <span className="indicator-item badge badge-secondary">
            {cartItem?.length}
          </span>
          <img src={cart} alt="cart" className="w-8" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
