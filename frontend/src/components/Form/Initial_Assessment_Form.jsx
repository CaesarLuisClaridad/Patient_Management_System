import React from 'react';

const Initial_Assessment_Form = ({ formData, setFormData }) => {

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the formData based on the input's name
    });
  };

  return (
    <>
     <div className="shadow px-4 py-4 mb-3 mb-lg-5 bg-violet rounded-2">
  <div className="row mt-3">
    <div className="col-md-4 col-12">
      <label className="form-label">Chief Complaint/Case of patient:</label>
      <textarea
        className="form-control"
        rows="3"
        name="chiefComplaint"
        value={formData.chiefComplaint}
        onChange={handleInputChange}
      ></textarea>
    </div>
    <div className="col-md-4 col-12">
      <label className="form-label">Signs and Symptoms:</label>
      <textarea
        className="form-control"
        rows="3"
        name="signsAndSymptoms"
        value={formData.signsAndSymptoms}
        onChange={handleInputChange}
      ></textarea>
    </div>
    <div className="col-md-4 col-12">
      <label className="form-label">Case: Medical or Trauma</label>
      <select
        className="form-select"
        name="caseType"
        value={formData.caseType}
        onChange={handleInputChange}
      >
        <option value="Medical">Medical</option>
        <option value="Trauma">Trauma</option>
      </select>
    </div>
  </div>
</div>

    </>
  );
};

export default Initial_Assessment_Form;
