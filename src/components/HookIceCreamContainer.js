import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";
const HookIceCreamContainer = () => {
  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cake: {numberOfIceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
};

export default HookIceCreamContainer;
