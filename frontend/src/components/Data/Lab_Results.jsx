import React from "react";

const Lab_Results = ({ patient }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Lab Results</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Collection Date</th>
              <th>Type of Test</th>
              <th>Result</th>
              <th>Provider</th>
            </tr>
          </thead>
          <tbody>
            {patient?.labResults?.length > 0 ? (
              patient.labResults.map((result, index) => (
                <tr key={index}>
                  <td>{new Date(result.collectionDate).toLocaleDateString()}</td>
                  <td>{result.typeOfTest}</td>
                  <td>{result.result}</td>
                  <td>{result.provider}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No lab results available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lab_Results;
