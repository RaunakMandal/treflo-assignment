import { fetchPizzas, filterPizzas } from "../../../store/reducers/pizzaSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PizzaCard from "../../shared/PizzaCard";
import Loader from "../../shared/Loader";
import Error from "../../shared/Error";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.pizza.loading);
  const error = useSelector((state) => state.pizza.error);
  const filteredPizzas = useSelector((state) => state.pizza.filteredPizzas);

  const filters = useSelector((state) => state.pizza.filters);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    if (name) {
      dispatch(filterPizzas({ type: name, value: checked }));
    }
  };

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row justify-end px-8 form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-bold">Veg</span>
          <input
            type="checkbox"
            checked={filters.veg}
            className="checkbox ml-1"
            name="veg"
            onChange={(e) => handleFilterChange(e)}
          />
        </label>

        <label className="label cursor-pointer ml-2">
          <span className="label-text text-bold">Non Veg</span>
          <input
            type="checkbox"
            checked={filters.nonVeg}
            className="checkbox ml-1"
            name="nonVeg"
            onChange={(e) => handleFilterChange(e)}
          />
        </label>
      </div>

      {filteredPizzas.length > 0 ? (
        <div className="flex justify-center flex-wrap">
          {filteredPizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      ) : (
        <div className="flex flex-1">
          <Error error="No pizzas found" />
        </div>
      )}
    </div>
  );
};

export default Home;
