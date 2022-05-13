import Navigation from "./Navigation";
import { Provider } from "react-redux";
import {store} from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
