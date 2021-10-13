import "../styles/globals.scss";
<<<<<<< HEAD
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "../redux/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
=======
import { Provider } from "react-redux";
import store from "../redux/store/store";
import Layout from "./components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
>>>>>>> 52d1bafaae3ddf69d0a09100bdd3d8c5629d171e
  );
}

export default MyApp;
