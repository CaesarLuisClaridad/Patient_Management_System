import React from "react";

const Medications = ({ patient }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Medications</h5>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Date</th>
              <th>Medication</th>
              <th>Strength</th>
            </tr>
          </thead>
          <tbody>
            {patient?.medications?.map((medication, index) => (
              <tr key={index}>
                <td>{new Date(medication.date).toLocaleDateString()}</td>
                <td>{medication.medication}</td>
                <td>{medication.strength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Medications;
