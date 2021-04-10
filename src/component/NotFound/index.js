import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">
      <h1>Oops Page not found</h1>
      <Link to="/" className="btn">
        Back home
      </Link>
    </div>
  );
}

export default NotFound;
