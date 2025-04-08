import React from "react";

const Adjuncts = ({ patient }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Adjuncts</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-secondary">
            <tr>
              <th>Adjunct Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intubated</td>
              <td>{patient?.adjuncts?.intubated || "Not specified"}</td>
            </tr>
            <tr>
              <td>AV Fistula</td>
              <td>{patient?.adjuncts?.avFistula || "Not specified"}</td>
            </tr>
            <tr>
              <td>Colostomy Bag</td>
              <td>{patient?.adjuncts?.colostomyBag || "Not specified"}</td>
            </tr>
            <tr>
              <td>Pacemaker</td>
              <td>{patient?.adjuncts?.paceMaker || "Not specified"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adjuncts;
