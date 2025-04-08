import React from "react";

const Vital_Sign_Check = ({ formData, setFormData }) => {
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "checkedByName" || name === "checkedByDateTime") {
      setFormData({
        ...formData,
        vitalSignCheck: {
          ...formData.vitalSignCheck,
          checkedBy: {
            ...formData.vitalSignCheck.checkedBy,
            [name === "checkedByName" ? "name" : "dateTime"]: value,
          },
        },
      });
    } else {
      setFormData({
        ...formData,
        vitalSignCheck: {
          ...formData.vitalSignCheck,
          [name]: value,
        },
      });
    }
  };

  return (
    <div className="py-4 px-3 rounded-2 bg-violet shadow mb-3 mb-lg-5 bg-violet">
      <h4 className="fw-bold mb-lg-4 mb-2">Vital Sign Check</h4>
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <label className="form-label">Heart rate:</label>
          <input
            type="text"
            className="form-control rounded-3"
            name="heartRate"
            value={formData.vitalSignCheck.heartRate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label className="form-label">BP:</label>
          <input
            type="text"
            className="form-control rounded-3"
            name="bloodPressure"
            value={formData.vitalSignCheck.bloodPressure}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label className="form-label">O2 Sat:</label>
          <input
            type="text"
            className="form-control rounded-3"
            name="oxygenSaturation"
            value={formData.vitalSignCheck.oxygenSaturation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label className="form-label">Temp:</label>
          <input
            type="text"
            className="form-control rounded-3"
            name="temperature"
            value={formData.vitalSignCheck.temperature}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label className="form-label">Respiratory rate:</label>
          <input
            type="text"
            className="form-control rounded-3"
            name="respiratoryRate"
            value={formData.vitalSignCheck.respiratoryRate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label className="form-label">GCS:</label>
          <input
            type="text"
            className="form-control rounded-3"
            name="gcs"
            value={formData.vitalSignCheck.gcs}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-12 mb-3">
          <label className="mt-1">
            Check by:{" "}
            <span className=" text-light">
              (name & signature with time and date)
            </span>
          </label>

          <div className="d-flex flex-column flex-md-row gap-3">
            <input
              type="text"
              className="form-control mt-1 mb-3 mb-md-0"
              name="checkedByName"
              value={formData.vitalSignCheck.checkedBy.name}
              onChange={handleInputChange}
              placeholder="Enter name & signature"
              required
            />

            <input
              type="datetime-local"
              className="form-control mb-3 mb-md-0"
              name="checkedByDateTime"
              value={formData.vitalSignCheck.checkedBy.dateTime}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vital_Sign_Check;
