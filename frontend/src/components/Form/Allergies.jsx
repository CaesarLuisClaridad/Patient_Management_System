import React from "react";

const Allergies = ({ formData, setFormData }) => {
  const handleChange = (index, field) => (e) => {
    const updatedAllergies = [...formData.allergies];
    updatedAllergies[index] = {
      ...updatedAllergies[index],
      [field]: e.target.value,
    };

    setFormData((prev) => ({
      ...prev,
      allergies: updatedAllergies,
    }));
  };

  const addNewAllergy = () => {
    setFormData((prev) => ({
      ...prev,
      allergies: [...prev.allergies, { date: "", substance: "", symptoms: "" }],
    }));
  };

  const deleteAllergy = (index) => {
    const updatedAllergies = formData.allergies.filter((_, i) => i !== index);

    setFormData((prev) => ({
      ...prev,
      allergies: updatedAllergies,
    }));
  };

  return (
    <div className="py-4 px-4 rounded-3 shadow-lg mt-5 mb-3 mb-lg-5 bg-violet">
  <h4 className="fw-bold mb-lg-4 mb-2">Allergies</h4>
  <div className="d-flex flex-column">
    {formData.allergies.map((allergy, index) => (
      <div className="d-flex flex-column flex-md-row gap-4 mb-4 align-items-center" key={index}>
        <div className="col-12 col-md-3 mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control rounded-3"
            value={allergy.date}
            onChange={handleChange(index, "date")}
            required
          />
        </div>
        <div className="col-12 col-md-3 mb-3">
          <label className="form-label">Substance</label>
          <input
            type="text"
            className="form-control rounded-3"
            value={allergy.substance}
            onChange={handleChange(index, "substance")}
            required
          />
        </div>
        <div className="col-12 col-md-3 mb-3">
          <label className="form-label">Symptoms</label>
          <input
            type="text"
            className="form-control rounded-3"
            value={allergy.symptoms}
            onChange={handleChange(index, "symptoms")}
            required
          />
        </div>
        <div className="d-flex align-items-center ms-auto">
          <button
            className="btn btn-outline-danger d-flex align-items-center px-3 py-2"
            onClick={() => deleteAllergy(index)}
          >
            <i className="fa-solid fa-trash me-1"></i>
          </button>
        </div>
      </div>
    ))}
  </div>

  <div className="d-flex justify-content-start mt-3 w-lg-25 w-100">
    <button
      type="button"
      className="btn btn-success px-4 py-2 rounded-3"
      onClick={addNewAllergy}
    >
      Add Allergy
    </button>
  </div>
</div>

  );
};

export default Allergies;
