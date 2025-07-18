import React from "react";

export default function Loader() {
  return (
    <div className="loader-container bg-red-500">
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}
