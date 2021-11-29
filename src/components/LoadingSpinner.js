import React from "react";

export function LoadingSpinner({ loading }) {
  return (
    loading !== false && (
      <div
        className="spinner-grow"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  );
}
