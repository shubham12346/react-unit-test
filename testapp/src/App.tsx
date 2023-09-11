import React from "react";
import "./App.css";
import DisplayList from "./shared/component/datalist/DisplayList";
import { Provider } from "react-redux";
import Button from "./shared/component/button/Button";
import { store } from "./store";
import UserInfo from "./shared/component/form/UserInfo";
function App() {
  const handleCick = () => {
    console.log("Do nothing ");
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Button
          btnText="click here"
          btnType="button"
          onclick={handleCick}
          className="buttonStyle"
        />
        <DisplayList />
      </div>
      <div>
        <UserInfo />{" "}
      </div>
    </Provider>
  );
}

export default App;
