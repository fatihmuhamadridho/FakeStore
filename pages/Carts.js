import React from "react";
import Head from "next/dist/shared/lib/head";
import { useEffect } from "react";
import {
  decrementItem,
  getCarts,
  incrementItem,
  removeItem,
} from "../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/CartPage.module.scss";
import Image from "next/dist/client/image";

const Carts = () => {
  const dispatch = useDispatch();
  const allCartsData = useSelector((state) => state.Carts);
  const { cart } = allCartsData;

  // LOAD DATA
  useEffect(() => {
    dispatch(getCarts());
  }, []);

  // TOTAL PRICE
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div>
      <Head>
        <title>Carts</title>
      </Head>

      <div className={styles.container}>
        {cart.length === 0 ? (
          <h1>Your Cart is Empty!</h1>
        ) : (
          <>
            <div className={styles.header}>
              <div>Image</div>
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Actions</div>
              <div>Total Price</div>
            </div>
            {cart.map((item) => (
              <div className={styles.body}>
                <div className={styles.image}>
                  <Image src={item.image} height="90" width="65" />
                </div>
                <p>{item.title}</p>
                <p>$ {item.price}</p>
                <p>{item.quantity}</p>
                <div className={styles.buttons}>
                  <button onClick={() => dispatch(incrementItem(item))}>
                    +
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        decrementItem(item),
                        console.log("Decrement nih")
                      )
                    }
                  >
                    -
                  </button>
                  <button onClick={() => dispatch(removeItem(item))}>x</button>
                </div>
                <p>$ {item.quantity * item.price}</p>
              </div>
            ))}
            <h2>Grand Total: $ {getTotalPrice()}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Carts;
