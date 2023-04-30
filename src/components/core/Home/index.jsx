import {
  fetchPizzas,
  filterPizzas,
  sortPizzas,
} from "../../../store/reducers/pizzaSlice";
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
  const sortDir = useSelector((state) => state.pizza.sortDir);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    if (name) {
      dispatch(filterPizzas({ type: name, value: checked }));
    }
  };

  const handleSortChange = (e) => {
    dispatch(sortPizzas({ value: e.target.name }));
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
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-primary m-1">
            Sort
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <label className="label cursor-pointer ml-2">
                <input
                  type="radio"
                  className="radio mr-1"
                  name="price-asc"
                  onChange={handleSortChange}
                  checked={sortDir === "price-asc"}
                />
                <span className="label-text text-bold">
                  Price - Low to High
                </span>
              </label>
            </li>
            <li>
              <label className="label cursor-pointer ml-2">
                <input
                  type="radio"
                  className="radio mr-1"
                  name="price-desc"
                  onChange={handleSortChange}
                  checked={sortDir === "price-desc"}
                />
                <span className="label-text text-bold">
                  Price - High to Low
                </span>
              </label>
            </li>
            <li>
              <label className="label cursor-pointer ml-2">
                <input
                  type="radio"
                  className="radio mr-1"
                  name="rating-asc"
                  onChange={handleSortChange}
                  checked={sortDir === "rating-asc"}
                />
                <span className="label-text text-bold">
                  Rating - Low to High
                </span>
              </label>
            </li>
            <li>
              <label className="label cursor-pointer ml-2">
                <input
                  type="radio"
                  className="radio mr-1"
                  name="rating-desc"
                  onChange={handleSortChange}
                  checked={sortDir === "rating-desc"}
                />
                <span className="label-text text-bold">
                  Rating - High to Low
                </span>
              </label>
            </li>
          </ul>
        </div>
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
