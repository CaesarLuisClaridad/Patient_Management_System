import React from "react";

const Consciousness_Level = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      levelOfConsciousness: e.target.value,
    }));
  };

  const options = ["Alert", "Confused", "Pain", "Unconscious"];

  return (
    <div className="py-4 px-4 rounded-3 shadow mt-4 mb-3 mb-lg-5 bg-violet ">
      <div className="row">
        <div className="col-12">
          <h4 className="fw-bold mb-lg-4 mb-2">Level of Consciousness</h4>

          {options.map((option) => (
            <div className="form-check mb-3" key={option}>
              <input
                className="form-check-input"
                type="radio"
                name="levelOfConsciousness"
                value={option}
                checked={formData.levelOfConsciousness === option}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">{option}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consciousness_Level;
