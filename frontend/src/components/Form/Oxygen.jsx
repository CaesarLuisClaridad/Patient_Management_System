const Oxygen = ({ formData, setFormData }) => {
  // Handle oxygen required selection (Yes/No)
  const handleOxygenRequiredChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      oxygen: { ...prevData.oxygen, required: value },
    }));
  };

  // Handle input changes for each oxygen detail form field
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedDetails = [...formData.oxygen.details];
    updatedDetails[index][name] = value;

    setFormData((prevData) => ({
      ...prevData,
      oxygen: { ...prevData.oxygen, details: updatedDetails },
    }));
  };

  // Add a new oxygen detail form
  const handleAddForm = () => {
    const newDetail = { given: "", ipmVia: "", timeStart: "", timeEnd: "" };
    const updatedDetails = [...formData.oxygen.details, newDetail];
    setFormData((prevData) => ({
      ...prevData,
      oxygen: { ...prevData.oxygen, details: updatedDetails },
    }));
  };

  // Delete an oxygen detail form
  const handleDeleteForm = (index) => {
    const updatedDetails = formData.oxygen.details.filter(
      (_, i) => i !== index
    );
    setFormData((prevData) => ({
      ...prevData,
      oxygen: { ...prevData.oxygen, details: updatedDetails },
    }));
  };

  return (
    <div className="shadow mb-3 mb-lg-5 bg-violet rounded-2 ">
      <div className="row p-3">
        {/* Oxygen Required */}
        <div className="col-md-4 col-12">
          <label className="form-label">Oxygen Required:</label>
        </div>
        <div className="col-md-8 col-12">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="oxygenRequired"
              id="oxygenRequiredYes"
              value="Yes"
              checked={formData.oxygen.required === "Yes"}
              onChange={handleOxygenRequiredChange}
            />
            <label className="form-check-label" htmlFor="oxygenRequiredYes">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="oxygenRequired"
              id="oxygenRequiredNo"
              value="No"
              checked={formData.oxygen.required === "No"}
              onChange={handleOxygenRequiredChange}
            />
            <label className="form-check-label" htmlFor="oxygenRequiredNo">
              No
            </label>
          </div>
        </div>

        {/* Oxygen Details Form (only appears if "Yes" is selected) */}
        {formData.oxygen.required === "Yes" && (
          <>
            {formData.oxygen.details.map((detail, index) => (
              <div className="row mt-3" key={index}>
                <div className="col-md-4 col-12">
                  <label className="form-label">Oxygen Given:</label>
                </div>
                <div className="col-md-8 col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="given"
                    value={detail.given}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Enter oxygen given"
                  />
                </div>

                <div className="col-md-4 col-12 mt-2">
                  <label className="form-label">IPM Via:</label>
                </div>
                <div className="col-md-8 col-12 mt-2">
                  <input
                    type="text"
                    className="form-control"
                    name="ipmVia"
                    value={detail.ipmVia}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder="Enter IPM via"
                  />
                </div>

                <div className="col-md-4 col-12 mt-2">
                  <label className="form-label">Time Start:</label>
                </div>
                <div className="col-md-8 col-12 mt-2">
                  <input
                    type="datetime-local"
                    className="form-control"
                    name="timeStart"
                    value={detail.timeStart}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </div>

                <div className="col-md-4 col-12 mt-2">
                  <label className="form-label">Time End:</label>
                </div>
                <div className="col-md-8 col-12 mt-2">
                  <input
                    type="datetime-local"
                    className="form-control"
                    name="timeEnd"
                    value={detail.timeEnd}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </div>

                <div className="col-md-12 col-12 mt-2 w-lg-25 w-100">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteForm(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {/* Add Another Form */}
            <div className="col-md-12 col-12 mt-3 w-lg-25 w-100">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddForm}
              >
                Add Another Form
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Oxygen;
