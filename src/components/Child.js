import React from "react";

const Child = (props) => {
  
  return (
    props.islogin && (
      <div>
        <p>loggedin</p>
      </div>
    )
  );
};
export default Child;
