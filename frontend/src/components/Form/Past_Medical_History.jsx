import React from "react";

const Past_Medical_History = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, pastMedicalHistory: e.target.value });
  };

  return (
    <div className="py-4 px-4 bg-violet rounded-2 shadow mb-3 mb-lg-5 bg-violet">
      <h4 className="fw-bold mb-lg-4 mb-2">Past Medical History</h4>
      <textarea
        className="form-control rounded-3"
        rows="3"
        value={formData.pastMedicalHistory}
        onChange={handleInputChange}
        style={{ resize: "none" }} 
        required
      />
    </div>
  );
};

export default Past_Medical_History;
