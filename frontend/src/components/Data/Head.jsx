import React from "react";

const Head = ({ patient }) => {
  return (
    <>
      <div className="card-header d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center px-4 py-3 bg-light shadow-sm border-bottom">
        <h3 className="mb-0" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          {patient?.name}'s Details
        </h3>
        <div className="d-flex align-items-center mt-3 mt-md-0">
          <i className="fa-solid fa-bed me-2 text-primary"></i>
          <strong>Room Number:</strong>
          <p className="mb-0 ms-2 text-end" style={{ fontSize: "1.2rem" }}>
            {patient?.roomNumber || "N/A"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Head;
