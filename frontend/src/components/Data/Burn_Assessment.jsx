import React from "react";

const Burn_Assessment = ({ patient }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Trauma Burn Assessment</h5>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-secondary">
            <tr>
              <th>Body Area</th>
              <th>Assessment Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Whole Head & Neck</td>
              <td>{patient?.traumaBurnAssessment?.wholeHeadNeck || "Not specified"}</td>
            </tr>
            <tr>
              <td>Entire Right Arm</td>
              <td>{patient?.traumaBurnAssessment?.entireRightArm || "Not specified"}</td>
            </tr>
            <tr>
              <td>Entire Left Arm</td>
              <td>{patient?.traumaBurnAssessment?.entireLeftArm || "Not specified"}</td>
            </tr>
            <tr>
              <td>Entire Trunk</td>
              <td>{patient?.traumaBurnAssessment?.entireTrunk || "Not specified"}</td>
            </tr>
            <tr>
              <td>Groin</td>
              <td>{patient?.traumaBurnAssessment?.groin || "Not specified"}</td>
            </tr>
            <tr>
              <td>Entire Right Leg</td>
              <td>{patient?.traumaBurnAssessment?.entireRightLeg || "Not specified"}</td>
            </tr>
            <tr>
              <td>Entire Left Leg</td>
              <td>{patient?.traumaBurnAssessment?.entireLeftLeg || "Not specified"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Burn_Assessment;
