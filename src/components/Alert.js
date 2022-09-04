import React from "react";

function Alert(props) {
  return (
    // big brein time if null then and hokei null
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show my-1`}
        role="alert"
      >
        {props.alert.msg}
        <props className="alert"></props>
        
      </div>
    )
  );
}

export default Alert;
