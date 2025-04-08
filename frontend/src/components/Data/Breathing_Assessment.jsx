import React from "react";

const Breathing_Assessment = ({ patient }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Breathing Assessment</h5>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <td>Circulation Pulse</td>
              <td>{patient?.circulationPulse || "Not specified"}</td>
            </tr>
            <tr>
              <td>Breathing</td>
              <td>{patient?.breathing || "Not specified"}</td>
            </tr>
            <tr>
              <td>Breathing Sound</td>
              <td>{patient?.breathingSound || "Not specified"}</td>
            </tr>
            <tr>
              <td>Breathing Quality</td>
              <td>{patient?.breathingQuality || "Not specified"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Breathing_Assessment;
