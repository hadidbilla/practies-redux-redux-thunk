import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
        <HookIceCreamContainer />
        <NewCakeContainer />
        {/* <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
