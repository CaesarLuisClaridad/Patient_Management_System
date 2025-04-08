import React from "react";

const Case_info = ({ patient }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Case Information</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-secondary">
            <tr>
              <th>Field</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chief Complaint</td>
              <td>{patient?.chiefComplaint || "Not specified"}</td>
            </tr>
            <tr>
              <td>Signs and Symptoms</td>
              <td>{patient?.signsAndSymptoms || "Not specified"}</td>
            </tr>
            <tr>
              <td>Case Type</td>
              <td>{patient?.caseType || "Not specified"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Case_info;
