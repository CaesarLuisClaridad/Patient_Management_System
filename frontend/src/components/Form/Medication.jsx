import React from "react";

const Medication = ({ formData, setFormData }) => {
  const handleChange = (index, field) => (e) => {
    const updatedMedications = [...formData.medications];
    updatedMedications[index] = {
      ...updatedMedications[index],
      [field]: e.target.value,
    };

    setFormData((prev) => ({
      ...prev,
      medications: updatedMedications,
    }));
  };

  const addNewMedication = () => {
    setFormData((prev) => ({
      ...prev,
      medications: [
        ...prev.medications,
        { date: "", medication: "", strength: "" },
      ],
    }));
  };

  const deleteMedication = (index) => {
    const updatedMedications = formData.medications.filter(
      (_, i) => i !== index
    );

    setFormData((prev) => ({
      ...prev,
      medications: updatedMedications,
    }));
  };

  return (
    <div className="py-4 px-4 rounded-3 shadow mb-3 mb-lg-5 bg-violet">
      <h4 className="fw-bold mb-lg-4 mb-2">Medications</h4>

      {formData.medications.map((medication, index) => (
        <div className="row mb-4" key={index}>
          <div className="col-12 col-md-3 mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control rounded-3"
              value={medication.date}
              onChange={handleChange(index, "date")}
              required
            />
          </div>
          <div className="col-12 col-md-3 mb-3">
            <label className="form-label">Medication</label>
            <input
              type="text"
              className="form-control rounded-3"
              value={medication.medication}
              onChange={handleChange(index, "medication")}
              required
            />
          </div>
          <div className="col-12 col-md-3 mb-3">
            <label className="form-label">Strength</label>
            <input
              type="text"
              className="form-control rounded-3"
              value={medication.strength}
              onChange={handleChange(index, "strength")}
              required
            />
          </div>

          <div className="d-flex justify-content-center mt-lg-3 ms-auto w-auto">
            <button
              className="btn btn-outline-danger d-flex align-items-center px-3 py-2"
              onClick={() => deleteMedication(index)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-start mt-3 w-lg-25 w-100">
        <button
          type="button"
          className="btn btn-success px-4 py-2 rounded-3"
          onClick={addNewMedication}
        >
          Add Medication
        </button>
      </div>
    </div>
  );
};

export default Medication;
