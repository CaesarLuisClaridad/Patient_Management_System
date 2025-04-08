import React from "react";

const Endorsement = ({ formData, setFormData }) => {
  // Add a new endorsement entry
  const handleAddEndorsement = () => {
    setFormData((prevState) => ({
      ...prevState,
      endorsements: [
        ...prevState.endorsements,
        {
          answer: "",
          endorsedBy: "",
          endorsedAt: "",
          receivedBy: "",
          receivedAt: "",
        },
      ],
    }));
  };

  // Delete a specific endorsement entry
  const handleDeleteEndorsement = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      endorsements: prevState.endorsements.filter((_, i) => i !== index),
    }));
  };

  // Handle input changes for endorsements
  const handleEndorsementChange = (index, field) => (e) => {
    const newEndorsements = [...formData.endorsements];
    newEndorsements[index][field] = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      endorsements: newEndorsements,
    }));
  };

  return (
    <>
      <div className="shadow mb-3 mb-lg-4 py-4 px-4 bg-violet rounded-2">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-success">
              <tr>
                <th colSpan="4" className="fw-bold mb-lg-4 text-center">
                  Endorsement:
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.endorsements.map((endorsement, index) => (
                <React.Fragment key={index}>
                  {/* Textarea Section */}
                  <tr>
                    <td colSpan="4">
                      <textarea
                        className="form-control text-center"
                        rows="6"
                        value={endorsement.answer}
                        onChange={handleEndorsementChange(index, "answer")}
                      ></textarea>
                    </td>
                  </tr>

                  {/* Received by and Date/time */}
                  <tr>
                    <td className="text-center fw-bold">
                      <label>Received by:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={endorsement.receivedBy}
                        onChange={handleEndorsementChange(index, "receivedBy")}
                      />
                    </td>

                    <td className="text-center fw-bold">
                      <label>Date/time:</label>
                    </td>
                    <td>
                      <input
                        type="datetime-local"
                        className="form-control text-center"
                        value={endorsement.receivedAt}
                        onChange={handleEndorsementChange(index, "receivedAt")}
                      />
                    </td>
                  </tr>

                  {/* Endorsed by and Date/time */}
                  <tr>
                    <td className="text-center fw-bold">
                      <label>Endorsed by:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={endorsement.endorsedBy}
                        onChange={handleEndorsementChange(index, "endorsedBy")}
                      />
                    </td>

                    <td className="text-center fw-bold">
                      <label>Date/time:</label>
                    </td>
                    <td>
                      <input
                        type="datetime-local"
                        className="form-control text-center"
                        value={endorsement.endorsedAt}
                        onChange={handleEndorsementChange(index, "endorsedAt")}
                      />
                    </td>
                  </tr>

                  {/* Delete Button */}
                  <tr>
                    <td colSpan="4">
                      <button
                        type="button"
                        className="btn btn-danger btn-sm  w-lg-25 w-50"
                        onClick={() => handleDeleteEndorsement(index)}
                      >
                        Delete Endorsement
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}

              {/* Add Endorsement Button */}
              <tr>
                <td colSpan="4">
                  <button
                    type="button"
                    className="btn btn-success btn-sm w-50"
                    onClick={handleAddEndorsement}
                  >
                    Add Endorsement
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Endorsement;
