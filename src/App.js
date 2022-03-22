import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import RouteLinks from "./RouteLinks";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouteLinks />
      </div>
    </Provider>
  );
}

export default App;
