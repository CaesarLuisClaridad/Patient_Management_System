import React from "react";

const Emergency_Contact_Info = ({ formData, setFormData }) => {
  const handleNestedChange = (section, field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: e.target.value,
      },
    }));
  };

  return (
    <div className="py-4 px-4 rounded-2 shadow mt-3 mb-3 mb-lg-5 bg-violet ">
      <h4 className="fw-bold mb-lg-4 mb-2">Emergency Contact</h4>
      <div className="row">
        <div className="col-md-6 mb-4">
          <label className="form-label">Contact Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.emergencyContact.contactName}
            onChange={handleNestedChange("emergencyContact", "contactName")}
            required
          />
        </div>
        <div className="col-md-3 mb-4">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            value={formData.emergencyContact.phoneNumber}
            onChange={handleNestedChange("emergencyContact", "phoneNumber")}
            required
          />
        </div>
        <div className="col-md-3 mb-4">
          <label className="form-label">Relationship</label>
          <input
            type="text"
            className="form-control"
            value={formData.emergencyContact.relationship}
            onChange={handleNestedChange("emergencyContact", "relationship")}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Emergency_Contact_Info;
