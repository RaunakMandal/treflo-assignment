import { fetchPizzas } from "../../../store/reducers/pizzaSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PizzaCard from "../../shared/PizzaCard";
import Loader from "../../shared/Loader";
import Error from "../../shared/Error";

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza.pizzas);
  const loading = useSelector((state) => state.pizza.loading);
  const error = useSelector((state) => state.pizza.error);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}

      <div className="flex justify-center flex-wrap">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
};

export default Home;
