import React from "react";

const Attending_Physician = ({ patient }) => {
  return (
    <>
      <div className="mb-4">
        <h5 className="fw-bold mb-2 mb-lg-3">Attending Physician</h5>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{patient?.attendingPhysician?.name}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>
                {new Date(
                  patient?.attendingPhysician?.date
                ).toLocaleDateString()}
              </td>
            </tr>
          </tbody>
        </table>

        <h5 className="fw-bold mb-2 mb-lg-3">Follow-Up Notes</h5>
        <ul className="list-group mb-4">
          <li className="list-group-item">
            <strong></strong> {patient?.followUpNotes?.note}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Attending_Physician;
