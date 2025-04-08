import React from "react";

const Pain_Assessment = ({ formData, setFormData }) => {
  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      painAssessment: {
        ...prev.painAssessment,
        [field]: e.target.value,
      },
    }));
  };

  return (
    <div className="py-4 px-4 rounded-2 shadow mt-3 mb-3 mb-lg-5 bg-violet ">
      <h4 className="fw-bold mb-lg-4 mb-2">Pain Assessment</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Onset</label>
            <input
              type="text"
              className="form-control"
              value={formData.painAssessment.onset}
              onChange={handleChange("onset")}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Provocation</label>
            <input
              type="text"
              className="form-control"
              value={formData.painAssessment.provocation}
              onChange={handleChange("provocation")}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Quality</label>
            <input
              type="text"
              className="form-control"
              value={formData.painAssessment.quality}
              onChange={handleChange("quality")}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Radiation</label>
            <input
              type="text"
              className="form-control"
              value={formData.painAssessment.radiation}
              onChange={handleChange("radiation")}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Severity</label>
            <input
              type="text"
              className="form-control"
              value={formData.painAssessment.severity}
              onChange={handleChange("severity")}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input
              type="time"
              className="form-control"
              value={formData.painAssessment.time}
              onChange={handleChange("time")}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pain_Assessment;
