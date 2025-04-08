import React from "react";

const Oxygen_Administration = ({ patient }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Oxygen Administration</h5>

      <p>
        <strong>Oxygen Required:</strong>{" "}
        {patient?.oxygen?.required || "Not specified"}
      </p>

      {patient?.oxygen?.details?.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-secondary">
              <tr>
                <th>Oxygen Given</th>
                <th>IPM Via</th>
                <th>Time Start</th>
                <th>Time End</th>
              </tr>
            </thead>
            <tbody>
              {patient.oxygen.details.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.given || "N/A"}</td>
                  <td>{entry.ipmVia || "N/A"}</td>
                  <td>{entry.timeStart ? new Date(entry.timeStart).toLocaleString() : "N/A"}</td>
                  <td>{entry.timeEnd ? new Date(entry.timeEnd).toLocaleString() : "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-muted">No oxygen administration details available.</p>
      )}
    </div>
  );
};

export default Oxygen_Administration;
