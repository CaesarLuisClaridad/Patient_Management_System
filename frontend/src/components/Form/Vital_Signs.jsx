import React from 'react';

const Vital_Signs = ({ formData, setFormData }) => {

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update formData based on the input's name
    });
  };

  return (
    <>
      <div className="shadow py-4 px-4 mb-3 mb-lg-5 bg-violet rounded-2">
  <div className="row mt-3">
    <div className="col-md-3 col-12">
      <label className="form-label">Circulation Pulse:</label>
      <select
        className="form-select"
        name="circulationPulse"
        value={formData.circulationPulse}
        onChange={handleInputChange}
      >
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
        <option value="Strong">Strong</option>
        <option value="Weak">Weak</option>
      </select>
    </div>
    <div className="col-md-3 col-12">
      <label className="form-label">Breathing:</label>
      <select
        className="form-select"
        name="breathing"
        value={formData.breathing}
        onChange={handleInputChange}
      >
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
        <option value="Dyspnea">Dyspnea</option>
      </select>
    </div>
    <div className="col-md-3 col-12">
      <label className="form-label">Breathing sounds:</label>
      <select
        className="form-select"
        name="breathingSound"
        value={formData.breathingSound}
        onChange={handleInputChange}
      >
        <option value="Clear">Clear</option>
        <option value="Rhonchi">Rhonchi</option>
        <option value="Crackles">Crackles</option>
        <option value="Wheezing">Wheezing</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div className="col-md-3 col-12">
      <label className="form-label">Quality:</label>
      <select
        className="form-select"
        name="breathingQuality"
        value={formData.breathingQuality}
        onChange={handleInputChange}
      >
        <option value="Normal">Normal</option>
        <option value="Labored">Labored</option>
      </select>
    </div>
  </div>
</div>

    </>
  );
};

export default Vital_Signs;
