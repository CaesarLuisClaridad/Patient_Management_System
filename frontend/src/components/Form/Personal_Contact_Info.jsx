import React from "react";

const Personal_Contact_Info = ({ formData, setFormData }) => {
  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <>
      <div className="shadow p-4 rounded bg-violet mt-3 mb-3 mb-lg-5">
        <div className="row g-3">
          <div className="col-md-3 col-sm-6">
            <label className="form-label">Room Number</label>
            <input
              type="text"
              className="form-control"
              value={formData.roomNumber}
              onChange={handleChange("roomNumber")}
              required
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <label className="form-label">Religion</label>
            <input
              type="text"
              className="form-control"
              value={formData.religion}
              onChange={handleChange("religion")}
              required
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <label className="form-label">Work Phone</label>
            <input
              type="text"
              className="form-control"
              value={formData.workPhone}
              onChange={handleChange("workPhone")}
              required
            />
          </div>
          <div className="col-md-3 col-sm-6">
            <label className="form-label">Personal Phone</label>
            <input
              type="text"
              className="form-control"
              value={formData.personalPhone}
              onChange={handleChange("personalPhone")}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal_Contact_Info;
