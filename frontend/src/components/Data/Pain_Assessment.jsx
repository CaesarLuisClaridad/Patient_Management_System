import React from "react";

const Pain_Assessment = ({ patient }) => {
  const formatTimeWithAMPM = (time) => {
    if (!time) return "";
  
    const [hours, minutes] = time.split(":");
    const formattedHours = parseInt(hours, 10);
    const suffix = formattedHours >= 12 ? "PM" : "AM";
    const hour12 = formattedHours % 12 || 12; // Convert to 12-hour format
    return `${hour12}:${minutes} ${suffix}`;
  };

  return (
    <>
      <div className="mb-4">
        <h5 className="fw-bold mb-2 mb-lg-3">Pain Assessment</h5>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <td>Onset</td>
              <td>{patient?.painAssessment?.onset}</td>
            </tr>
            <tr>
              <td>Provocation</td>
              <td>{patient?.painAssessment?.provocation}</td>
            </tr>
            <tr>
              <td>Quality</td>
              <td>{patient?.painAssessment?.quality}</td>
            </tr>
            <tr>
              <td>Radiation</td>
              <td>{patient?.painAssessment?.radiation}</td>
            </tr>
            <tr>
              <td>Severity</td>
              <td>{patient?.painAssessment?.severity}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>{formatTimeWithAMPM(patient?.painAssessment?.time)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Pain_Assessment;
