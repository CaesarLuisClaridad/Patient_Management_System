import React from "react";

const Consciousness_Level = ({ patient }) => {
  return (
    <>
      <div className="mb-4">
        <h5 className="fw-bold mb-2 mb-lg-3">Level of Consciousness</h5>
        <table className="table table-striped table-bordered mb-4">
          <tbody>
            <tr>
              <td>Level</td>
              <td>{patient?.levelOfConsciousness || "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Consciousness_Level;
