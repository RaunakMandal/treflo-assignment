import { useEffect } from "react";
import Base from "./components/core/Base";
import { fetchPizzas } from "./store/reducers/pizzaSlice";
import { useDispatch, useSelector } from "react-redux";
import PizzaCard from "./components/shared/PizzaCard";

const App = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza.pizzas);
  const loading = useSelector((state) => state.pizza.loading);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <Base>
      <div className="flex justify-center flex-wrap">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </Base>
  );
};

export default App;
