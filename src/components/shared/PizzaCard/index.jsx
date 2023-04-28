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
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
      <figure className="px-10 pt-10">
        <img src={img_url} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
