import React from 'react';

const Vital_Signs = ({ patient }) => {
  const vital = patient?.vitalSignCheck;

  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Vital Signs</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>Measurement</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heart Rate</td>
              <td>{vital?.heartRate || "N/A"}</td>
            </tr>
            <tr>
              <td>Blood Pressure</td>
              <td>{vital?.bloodPressure || "N/A"}</td>
            </tr>
            <tr>
              <td>Oxygen Saturation</td>
              <td>{vital?.oxygenSaturation || "N/A"}</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>{vital?.temperature || "N/A"}</td>
            </tr>
            <tr>
              <td>Respiratory Rate</td>
              <td>{vital?.respiratoryRate || "N/A"}</td>
            </tr>
            <tr>
              <td>GCS</td>
              <td>{vital?.gcs || "N/A"}</td>
            </tr>
            <tr>
              <td>Checked By</td>
              <td>
                {vital?.checkedBy?.name || "N/A"} on{" "}
                {vital?.checkedBy?.dateTime
                  ? new Date(vital.checkedBy.dateTime).toLocaleString()
                  : "N/A"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vital_Signs;
