import React from 'react'

const Treatment = ({ patient }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Treatment and Recovery Plans</h5>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-secondary">
            <tr>
              <th>Field</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Treatment Plan</td>
              <td>{patient?.treatmentPlan || "Not specified"}</td>
            </tr>
            <tr>
              <td>Recovery Plan</td>
              <td>{patient?.recoveryPlan || "N/A"}</td>
            </tr>
            <tr>
              <td>Intervention</td>
              <td>{patient?.interventions || "N/A"}</td>
            </tr>
            <tr>
              <td>Evaluation</td>
              <td>{patient?.evaluation || "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Treatment;
