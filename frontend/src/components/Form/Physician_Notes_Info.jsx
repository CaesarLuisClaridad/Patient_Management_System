import React from "react";

const Physician_Notes_Info = ({ formData, setFormData }) => {
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
    <div className="py-4 px-4 rounded-3 shadow mt-3 bg-violet mb-3 mb-lg-5">
  <div className="row">
    <div className="col-md-6 mb-4">
      <label className="form-label">Attending Physician:</label>
      <input
        type="text"
        className="form-control"
        value={formData.attendingPhysician.name}
        onChange={handleNestedChange("attendingPhysician", "name")}
        required
      />
    </div>
    <div className="col-md-6 mb-4">
      <label className="form-label">Date</label>
      <input
        type="date"
        className="form-control"
        value={formData.attendingPhysician.date}
        onChange={handleNestedChange("attendingPhysician", "date")}
        required
      />
    </div>
    <div className="col-md-6 mb-4">
      <label className="form-label">Follow-up Notes:</label>
      <textarea
        className="form-control"
        rows="3"
        value={formData.followUpNotes.note}
        onChange={handleNestedChange("followUpNotes", "note")}
        required
      ></textarea>
    </div>
    <div className="col-md-6 mb-4">
      <label className="form-label">Follow-up Date</label>
      <input
        type="date"
        className="form-control"
        value={formData.followUpNotes.date}
        onChange={handleNestedChange("followUpNotes", "date")}
        required
      />
    </div>
  </div>
</div>

  );
};

export default Physician_Notes_Info;
