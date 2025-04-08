import React from "react";

const Contact_Info = ({patient}) => {
  return (
    <>
      <div className="col-md-6">
        <h5 className="fw-bold mb-2 mb-lg-3">Contact Information</h5>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <td>Work Phone</td>
              <td>{patient?.workPhone}</td>
            </tr>
            <tr>
              <td>Personal Phone</td>
              <td>{patient?.personalPhone}</td>
            </tr>
            <tr>
              <td>Mailling Address</td>
              <td>{patient?.maillingAddress}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact_Info;
