import React from "react";

const Adjuncts = ({ formData, setFormData }) => {
  const handleRadioChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      adjuncts: {
        ...prev.adjuncts,
        [field]: e.target.value,
      },
    }));
  };

  return (
    <div className="shadow mb-3 mb-lg-5 py-4 px-4 bg-violet rounded-2">
    <div className="table-responsive">
      <table className="table table-bordered mt-4">
        <thead className="table-success text-center">
          <tr>
            <th colSpan="3">Adjuncts: (oropharyngeal & nasopharyngeal)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intubated:</td>
            <td>
              <input
                type="radio"
                name="intubated"
                id="intubated-yes"
                value="Yes"
                checked={formData.adjuncts.intubated === "Yes"}
                onChange={handleRadioChange("intubated")}
              />
              <label htmlFor="intubated-yes">Yes</label>
            </td>
            <td>
              <input
                type="radio"
                name="intubated"
                id="intubated-no"
                value="No"
                checked={formData.adjuncts.intubated === "No"}
                onChange={handleRadioChange("intubated")}
              />
              <label htmlFor="intubated-no">No</label>
            </td>
          </tr>
          <tr>
            <td>AV fistula:</td>
            <td>
              <input
                type="radio"
                name="av-fistula"
                id="av-fistula-yes"
                value="Yes"
                checked={formData.adjuncts.avFistula === "Yes"}
                onChange={handleRadioChange("avFistula")}
              />
              <label htmlFor="av-fistula-yes">Yes</label>
            </td>
            <td>
              <input
                type="radio"
                name="av-fistula"
                id="av-fistula-no"
                value="No"
                checked={formData.adjuncts.avFistula === "No"}
                onChange={handleRadioChange("avFistula")}
              />
              <label htmlFor="av-fistula-no">No</label>
            </td>
          </tr>
          <tr>
            <td>Colostomy bag:</td>
            <td>
              <input
                type="radio"
                name="colostomy"
                id="colostomy-yes"
                value="Yes"
                checked={formData.adjuncts.colostomyBag === "Yes"}
                onChange={handleRadioChange("colostomyBag")}
              />
              <label htmlFor="colostomy-yes">Yes</label>
            </td>
            <td>
              <input
                type="radio"
                name="colostomy"
                id="colostomy-no"
                value="No"
                checked={formData.adjuncts.colostomyBag === "No"}
                onChange={handleRadioChange("colostomyBag")}
              />
              <label htmlFor="colostomy-no">No</label>
            </td>
          </tr>
          <tr>
            <td>Pacemaker:</td>
            <td>
              <input
                type="radio"
                name="pacemaker"
                id="pacemaker-yes"
                value="Yes"
                checked={formData.adjuncts.paceMaker === "Yes"}
                onChange={handleRadioChange("paceMaker")}
              />
              <label htmlFor="pacemaker-yes">Yes</label>
            </td>
            <td>
              <input
                type="radio"
                name="pacemaker"
                id="pacemaker-no"
                value="No"
                checked={formData.adjuncts.paceMaker === "No"}
                onChange={handleRadioChange("paceMaker")}
              />
              <label htmlFor="pacemaker-no">No</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  );
};

export default Adjuncts;
