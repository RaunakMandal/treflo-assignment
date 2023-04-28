import { fetchPizzas } from "../../../store/reducers/pizzaSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PizzaCard from "../../shared/PizzaCard";

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza.pizzas);
  const loading = useSelector((state) => state.pizza.loading);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="flex justify-center flex-wrap">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;
