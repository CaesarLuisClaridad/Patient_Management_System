import React from 'react'

const Personal_Info = ({patient}) => {
  return (
    <>
         <div className="col-md-6 mb-3">
              <h5 className="fw-bold mb-2 mb-lg-3">Personal Information</h5>
              <table className="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <td>Age</td>
                    <td>{patient?.age}</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>{patient?.height} cm</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{patient?.weight} kg</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>{patient?.gender}</td>
                  </tr>
                  <tr>
                    <td>Date of Birth</td>
                    <td>
                      {new Date(patient?.dateOfBirth).toLocaleDateString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Marital Status</td>
                    <td>{patient?.maritalStatus}</td>
                  </tr>
                  <tr>
                    <td>Religion</td>
                    <td>{patient?.religion}</td>
                  </tr>
                </tbody>
              </table>
            </div>
    </>
  )
}

export default Personal_Info