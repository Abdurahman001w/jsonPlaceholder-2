import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import { thunk } from "redux-thunk";

const initialState = { todo: [], loading: false };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/start":
      return { loading: true };
    case "todo/item":
      return { todo: action.payload };
    default:
      return state;
  }
};
const store = createStore(reducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
