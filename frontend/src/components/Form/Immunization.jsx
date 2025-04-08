import React, { useEffect } from "react";

const Immunization = ({ formData, setFormData }) => {
  // Update parent state whenever immunizations change
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      immunizations: formData.immunizations || [
        { date: "", type: "", site: "" },
      ],
    }));
  }, [formData.immunizations, setFormData]);

  // Handle input change for a specific immunization entry
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedImmunizations = formData.immunizations.map((immunization, i) =>
      i === index ? { ...immunization, [name]: value } : immunization
    );
    setFormData({ ...formData, immunizations: updatedImmunizations });
  };

  // Add new immunization record
  const handleAddImmunization = () => {
    setFormData({
      ...formData,
      immunizations: [
        ...formData.immunizations,
        { date: "", type: "", site: "" },
      ],
    });
  };

  // Delete specific immunization record
  const handleDeleteImmunization = (index) => {
    const updatedImmunizations = formData.immunizations.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, immunizations: updatedImmunizations });
  };

  return (
    <div className="py-4 px-4 rounded-2 shadow mb-3 mb-lg-5 bg-violet">
      <h4 className="fw-bold mb-lg-4 mb-2">Immunizations</h4>
      {formData.immunizations.map((immunization, index) => (
        <div
          className="d-flex flex-column flex-md-row gap-lg-4 gap-1 mb-4 align-items-center"
          key={index}
        >
          <div className="col-12 col-md-3 mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={immunization.date}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
          </div>
          <div className="col-12 col-md-3 mb-3">
            <label className="form-label">Type</label>
            <input
              type="text"
              className="form-control"
              name="type"
              value={immunization.type}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
          </div>
          <div className="col-12 col-md-3 mb-3">
            <label className="form-label">Site</label>
            <input
              type="text"
              className="form-control"
              name="site"
              value={immunization.site}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
          </div>
          <div className="d-flex align-items-center ms-auto">
            <button
              className="btn btn-outline-danger d-flex align-items-center px-3 py-2"
              onClick={() => handleDeleteImmunization(index)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-start mt-3 w-lg-25 w-100">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddImmunization}
        >
          Add Immunization
        </button>
      </div>
    </div>
  );
};

export default Immunization;
