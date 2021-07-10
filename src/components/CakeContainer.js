import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
function cakeContainer(props) {
  console.dir(props);
  return (
    <div>
      <h1>Number of cake: {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    numberOfCakes: state.numberOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);
