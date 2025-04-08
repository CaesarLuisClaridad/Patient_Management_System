import React from "react";

const Emergency_Contact = ({ patient }) => {
  return (
    <>
      <div className="mb-4">
        <h5 className="fw-bold mb-2 mb-lg-3">Emergency Contact</h5>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{patient?.emergencyContact?.contactName}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{patient?.emergencyContact?.phoneNumber}</td>
            </tr>
            <tr>
              <td>Relationship</td>
              <td>{patient?.emergencyContact?.relationship}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Emergency_Contact;
