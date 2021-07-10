import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
function NewCakeContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <div>
      <h1>loading</h1>
    </div>
  ) : (
    <div>
      <h1>{userData?.users?.length}</h1>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
