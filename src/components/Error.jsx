import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const Navigate = useNavigate();

  return (
    <div className="job-details">
      <h3>An error Occured.</h3>
      <p>{error.message}</p>
      <button onClick={() => Navigate("/")}>Go to Home Page</button>
    </div>
  );
};

export default Error;
