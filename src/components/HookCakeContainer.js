import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
const HookCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cake: {numberOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};

export default HookCakeContainer;
