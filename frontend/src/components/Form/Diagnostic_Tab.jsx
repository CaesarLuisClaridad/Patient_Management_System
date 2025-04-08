import React from "react";

const Diagnostic_Tab = ({ formData, setFormData }) => {
  // Add new row to labResults
  const handleAddLabResult = () => {
    setFormData((prevState) => ({
      ...prevState,
      labResults: [
        ...prevState.labResults,
        { typeOfTest: "", collectionDate: "", result: "", provider: "" },
      ],
    }));
  };

  // Delete a row from labResults
  const handleDeleteLabResult = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      labResults: prevState.labResults.filter((_, i) => i !== index),
    }));
  };

  // Add new row to imagingResults
  const handleAddImagingResult = () => {
    setFormData((prevState) => ({
      ...prevState,
      imagingResults: [
        ...prevState.imagingResults,
        { typeOfImaging: "", dateOfExam: "", result: "", provider: "" },
      ],
    }));
  };

  // Delete a row from imagingResults
  const handleDeleteImagingResult = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      imagingResults: prevState.imagingResults.filter((_, i) => i !== index),
    }));
  };

  // Handle input changes for labResults
  const handleLabResultChange = (index, field) => (e) => {
    const newLabResults = [...formData.labResults];
    newLabResults[index][field] = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      labResults: newLabResults,
    }));
  };

  // Handle input changes for imagingResults
  const handleImagingResultChange = (index, field) => (e) => {
    const newImagingResults = [...formData.imagingResults];
    newImagingResults[index][field] = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      imagingResults: newImagingResults,
    }));
  };

  return (
    <>
      <div className="shadow mb-3 mb-lg-5 py-4 px-4 bg-violet rounded-2">
        <h4 className="fw-bold mb-lg-4 mb-2">Diagnostic Tab</h4>

        {/* Lab Results Section */}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th colSpan="2" className="mb-2">
                  Lab Results
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.labResults.map((labResult, index) => (
                <tr key={index}>
                  <td>Type of Test:</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={labResult.typeOfTest}
                      onChange={handleLabResultChange(index, "typeOfTest")}
                    />
                  </td>
                  <td>Collection Date:</td>
                  <td>
                    <input
                      type="date"
                      className="form-control"
                      value={labResult.collectionDate}
                      onChange={handleLabResultChange(index, "collectionDate")}
                    />
                  </td>
                  <td>Result:</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={labResult.result}
                      onChange={handleLabResultChange(index, "result")}
                    />
                  </td>
                  <td>Provider:</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={labResult.provider}
                      onChange={handleLabResultChange(index, "provider")}
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteLabResult(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="8">
                  <button
                    type="button"
                    className="btn btn-success w-25"
                    onClick={handleAddLabResult}
                  >
                    Add Lab Result
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Imaging Results Section */}
        <div className="table-responsive mt-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan="2" className="mb-2">
                  Imaging Results
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.imagingResults.map((imagingResult, index) => (
                <tr key={index}>
                  <td>Type of Imaging:</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={imagingResult.typeOfImaging}
                      onChange={handleImagingResultChange(
                        index,
                        "typeOfImaging"
                      )}
                    />
                  </td>
                  <td>Date of Exam:</td>
                  <td>
                    <input
                      type="date"
                      className="form-control"
                      value={imagingResult.dateOfExam}
                      onChange={handleImagingResultChange(index, "dateOfExam")}
                    />
                  </td>
                  <td>Result:</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={imagingResult.result}
                      onChange={handleImagingResultChange(index, "result")}
                    />
                  </td>
                  <td>Provider:</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={imagingResult.provider}
                      onChange={handleImagingResultChange(index, "provider")}
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteImagingResult(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="8" >
                  <button
                    type="button"
                    className="btn btn-success w-25"
                    onClick={handleAddImagingResult}
                  >
                    Add Result
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

export default Diagnostic_Tab;
