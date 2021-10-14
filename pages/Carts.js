import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../redux/actions/cartActions";
import { getProducts } from "../redux/actions/productActions";
import { useEffect } from "react";

const Carts = () => {
  const dispatch = useDispatch();
  const allCartsData = useSelector((state) => state.Carts);
  const { loading, error, carts } = allCartsData;

  const allProductsData = useSelector((state) => state.Products);
  const { products } = allProductsData;

  // LOAD DATA
  useEffect(() => {
    dispatch(getCarts());
  }, []);

  return (
    <div>
      <title>Carts</title>

      <section className="carts">
        <h1>This is Carts</h1>
        {loading
          ? "Loading..."
          : error
          ? error.message
          : carts.map((cart) => (
              <div key={cart.id}>
                <div>
                  <p>id : {cart.id}</p>
                  <p>userId : {cart.userId}</p>
                  <p>date : {cart.date}</p>
                  <p>
                    products :
                    {cart.products.map((sub) => (
                      <div>
                        <li>
                          productId : {sub.productId}, Quantity : {sub.quantity}
                        </li>
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            ))}
      </section>
    </div>
  );
};

export default Carts;
