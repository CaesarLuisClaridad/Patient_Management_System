import React from "react";
import img from "../../assets/img.png";

const Trauma_Burn_Assessment = ({ formData, setFormData }) => {
  // Handle changes for each field
  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      traumaBurnAssessment: {
        ...prev.traumaBurnAssessment,
        [field]: e.target.value,
      },
    }));
  };

  return (
    <>
      <div className="shadow rounded-2 mb-3 mb-lg-5 bg-violet p-3">
        <div className="table-responsive">
          <table className="table table-bordered mb-0">
            <thead className="table-success text-center">
              <tr>
                <th colSpan="2">Trauma/Burn Assessment</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td colSpan="2">
                  <img
                    src={img}
                    className="img-fluid"
                    alt="Burn Assessment Diagram"
                  />
                </td>
              </tr>
              <tr>
                <th>Body Part</th>
                <th>Surface Area</th>
              </tr>
              <tr>
                <td>Whole head & neck</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.traumaBurnAssessment.wholeHeadNeck}
                    onChange={handleInputChange("wholeHeadNeck")}
                  />
                </td>
              </tr>
              <tr>
                <td>Entire right arm</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.traumaBurnAssessment.entireRightArm}
                    onChange={handleInputChange("entireRightArm")}
                  />
                </td>
              </tr>
              <tr>
                <td>Entire left arm</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.traumaBurnAssessment.entireLeftArm}
                    onChange={handleInputChange("entireLeftArm")}
                  />
                </td>
              </tr>
              <tr>
                <td>Entire trunk</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.traumaBurnAssessment.entireTrunk}
                    onChange={handleInputChange("entireTrunk")}
                  />
                </td>
              </tr>
              <tr>
                <td>Groin</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.traumaBurnAssessment.groin}
                    onChange={handleInputChange("groin")}
                  />
                </td>
              </tr>
              <tr>
                <td>Entire right leg</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.traumaBurnAssessment.entireRightLeg}
                    onChange={handleInputChange("entireRightLeg")}
                  />
                </td>
              </tr>
              <tr>
                <td>Entire left leg</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.traumaBurnAssessment.entireLeftLeg}
                    onChange={handleInputChange("entireLeftLeg")}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Trauma_Burn_Assessment;
