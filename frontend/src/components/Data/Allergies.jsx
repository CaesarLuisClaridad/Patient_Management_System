import React from "react";

const Allergies = ({ patient }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Allergies</h5>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Date</th>
              <th>Substance</th>
              <th>Symptoms</th>
            </tr>
          </thead>
          <tbody>
            {patient?.allergies?.map((allergy, index) => (
              <tr key={index}>
                <td>{new Date(allergy.date).toLocaleDateString()}</td>
                <td>{allergy.substance}</td>
                <td>{allergy.symptoms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allergies;
