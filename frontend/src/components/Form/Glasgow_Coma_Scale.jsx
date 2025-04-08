import React from "react";

const Glasgow_Coma_Scale = ({ formData, setFormData }) => {
  return (
    <>
      <div className="py-4 px-4 rounded-2 shadow mb-3 mb-lg-5 bg-violet rounded-2">
        <h4 className="fw-bold mb-2 mb-lg-4">Glasgow Coma Scale</h4>
        <p>Scale for assessing level of consciousness:</p>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Response</th>
                <th>Scale</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eye</td>
                <td>Open Spontaneously</td>
                <td>4</td>
              </tr>
              <tr>
                <td></td>
                <td>Open to verbal command, speech, or shout</td>
                <td>3</td>
              </tr>
              <tr>
                <td></td>
                <td>Open to pain</td>
                <td>2</td>
              </tr>
              <tr>
                <td></td>
                <td>No eye opening</td>
                <td>1</td>
              </tr>

              <tr>
                <td>Verbal</td>
                <td>Oriented</td>
                <td>5</td>
              </tr>
              <tr>
                <td></td>
                <td>Confused conversation</td>
                <td>4</td>
              </tr>
              <tr>
                <td></td>
                <td>Inappropriate responses</td>
                <td>3</td>
              </tr>
              <tr>
                <td></td>
                <td>Incomprehensible sounds or speech</td>
                <td>2</td>
              </tr>
              <tr>
                <td></td>
                <td>No verbal response</td>
                <td>1</td>
              </tr>

              <tr>
                <td>Motor</td>
                <td>Obeys command</td>
                <td>6</td>
              </tr>
              <tr>
                <td></td>
                <td>Purposeful movement</td>
                <td>5</td>
              </tr>
              <tr>
                <td></td>
                <td>Withdraws from pain</td>
                <td>4</td>
              </tr>
              <tr>
                <td></td>
                <td>Abnormal flexion, decorticate posture</td>
                <td>3</td>
              </tr>
              <tr>
                <td></td>
                <td>Extensor response, decerebrate</td>
                <td>2</td>
              </tr>
              <tr>
                <td></td>
                <td>No motor response</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Minor Brain Injury:</strong> 13-15 points
        </p>
        <p>
          <strong>Moderate Brain Injury:</strong> 9-12 points
        </p>
        <p>
          <strong>Severe Brain Injury:</strong> 3-8 points
        </p>
      </div>
    </>
  );
};

export default Glasgow_Coma_Scale;
