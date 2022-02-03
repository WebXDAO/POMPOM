import "../styles/globals.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider  store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
