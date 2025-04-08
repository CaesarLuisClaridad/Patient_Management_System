import React from "react";

const CarePlanForm = ({ formData, setFormData }) => {
  // Handle changes for each textarea field
  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <>
      <div className="shadow bg-violet mb-3 mb-lg-5 rounded-2 p-3">
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="text-center fw-bold mb-2">
              <label>Treatment Plan</label>
            </div>
            <textarea
              className="form-control"
              rows="6"
              value={formData.treatmentPlan}
              onChange={handleInputChange("treatmentPlan")}
              required
            ></textarea>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center fw-bold mb-2">
              <label>Recovery Plan</label>
            </div>
            <textarea
              className="form-control"
              rows="6"
              value={formData.recoveryPlan}
              onChange={handleInputChange("recoveryPlan")}
            ></textarea>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center fw-bold mb-2">
              <label>Interventions</label>
            </div>
            <textarea
              className="form-control"
              rows="6"
              value={formData.interventions}
              onChange={handleInputChange("interventions")}
            ></textarea>
          </div>
        </div>

        <div className="mt-3">
          <div className="text-center fw-bold mb-2">
            <label>Additional Interventions</label>
          </div>
          <textarea
            className="form-control"
            rows="6"
            value={formData.evaluation}
            onChange={handleInputChange("evaluation")}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default CarePlanForm;
