import errorImage from "../../../assets/img_error.png";
import emptyCartImage from "../../../assets/img_cart_empty.avif";
import { Link } from "react-router-dom";
const Error = ({ from, error }) => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <img
        src={from === "cart" ? emptyCartImage : errorImage}
        alt="Error"
        className="w-48"
      />
      <h1 className="text-xl text-center font-bold mt-2">{error}</h1>
      {from === "cart" && (
        <Link to="/">
          <button className="btn btn-primary mt-4">Go to Menu</button>
        </Link>
      )}
    </div>
  );
};

export default Error;
