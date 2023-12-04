import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productListing } from "../redux/productAction";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log(111, data);
  useEffect(() => {
    dispatch(productListing());
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <div className="product-container">
          {data.map((item) => (
            <div key={item.id} className="product-item">
              <img src={item.photo} alt={item.name} />
              <div>Name: {item.name}</div>
              <div>color: {item.color}</div>
              <div>Price: {item.price}</div>
              <div>Category: {item.category}</div>
              <div>Brand: {item.brand}</div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove from Cart
              </button>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
