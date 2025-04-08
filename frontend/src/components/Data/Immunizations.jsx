import React from "react";

const Immunizations = ({ patient }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Immunizations</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            {patient?.immunizations?.map((immunization, index) => (
              <tr key={index}>
                <td>
                  {immunization.date
                    ? new Date(immunization.date).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>{immunization.type || "N/A"}</td>
                <td>{immunization.site || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Immunizations;
