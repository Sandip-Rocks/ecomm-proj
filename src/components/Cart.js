import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Cart() {
    const cartData = useSelector(state => state.cartData)
    console.log(1000, cartData);
  return (
    <div>
      <Link to="/">Product List</Link>
      <h1>Cart Page</h1>
      <div className="product-container">
          {cartData.map((item) => (
            <div key={item.id} className="product-item">
              <img src={item.photo} alt={item.name} />
              <div>Name: {item.name}</div>
              <div>color: {item.color}</div>
              <div>Price: {item.price}</div>
              <div>Category: {item.category}</div>
              <div>Brand: {item.brand}</div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Cart;
