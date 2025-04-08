import React from "react";

const Personal_Info = ({ formData, setFormData }) => {
  
  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
  <div className="shadow p-4 rounded bg-violet mb-lg-5 mb-3">
  <div className="row g-3">
    <div className="col-md-6">
      <label className="form-label">Name</label>
      <input
        type="text"
        className="form-control"
        value={formData.name}
        onChange={handleChange("name")}
        required
      />
    </div>
    <div className="col-md-3">
      <label className="form-label">Age</label>
      <input
        type="number"
        className="form-control"
        value={formData.age}
        onChange={handleChange("age")}
        required
      />
    </div>
    <div className="col-md-3">
      <label className="form-label">Date of Birth</label>
      <input
        type="date"
        className="form-control"
        value={formData.dateOfBirth}
        onChange={handleChange("dateOfBirth")}
        required
      />
    </div>

    <div className="col-md-3">
      <label className="form-label">Gender</label>
      <select
        className="form-select"
        value={formData.gender}
        onChange={handleChange("gender")}
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div className="col-md-3">
      <label className="form-label">Weight (kg)</label>
      <input
        type="text"
        className="form-control"
        value={formData.weight}
        onChange={handleChange("weight")}
        required
      />
    </div>
    <div className="col-md-3">
      <label className="form-label">Height (cm)</label>
      <input
        type="text"
        className="form-control"
        value={formData.height}
        onChange={handleChange("height")}
        required
      />
    </div>
    <div className="col-md-3">
      <label className="form-label">Marital Status</label>
      <select
        className="form-select"
        value={formData.maritalStatus}
        onChange={handleChange("maritalStatus")}
        required
      >
        <option value="">Select Status</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
        <option value="Widowed">Widowed</option>
      </select>
    </div>
    <div className="col-12 w-lg-50 w-100">
      <label className="form-label">Mailing Address</label>
      <input
        type="text"
        className="form-control"
        value={formData.maillingAddress}
        onChange={handleChange("maillingAddress")}
        required
      />
    </div>
  </div>
</div>

  );
};

export default Personal_Info;
