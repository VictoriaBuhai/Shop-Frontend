import ProductCard from "../ProductCard";

export const ProductsList = ({ products, addButton }) => {
  return (
    <div className="list">
      {products.map((product) => {
        return (
          <ProductCard
            key={product._id}
            product={product}
            addButton={addButton}
          />
        );
      })}
    </div>
  );
};
