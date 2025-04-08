import React from 'react';

const Imaging_Results = ({ patient }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Imaging Results</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Date of Exam</th>
              <th>Type of Imaging</th>
              <th>Result</th>
              <th>Provider</th>
            </tr>
          </thead>
          <tbody>
            {patient?.imagingResults?.length > 0 ? (
              patient.imagingResults.map((result, index) => (
                <tr key={index}>
                  <td>{new Date(result.dateOfExam).toLocaleDateString()}</td>
                  <td>{result.typeOfImaging}</td>
                  <td>{result.result}</td>
                  <td>{result.provider}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No imaging results available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Imaging_Results;
