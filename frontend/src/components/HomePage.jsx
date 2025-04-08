import React, { useEffect, useState } from "react";
import {
  useDeletePatientMutation,
  useGetPatientsQuery,
} from "../../redux/api/patientAPI";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Search from "./Search";
import { useSearchParams } from "react-router-dom";
import MetaData from "./MetaData";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const { data, isLoading, error } = useGetPatientsQuery({ keyword });
  const [deletePatient, { isSuccess }] = useDeletePatientMutation();

  const [showModal, setShowModal] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message || "An error occurred");
    }

    if (isSuccess) {
      toast.success("Patient record deleted successfully");
    }
  }, [error, isSuccess]);

  const handleDeleteClick = (id) => {
    setSelectedPatientId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (selectedPatientId) {
      deletePatient(selectedPatientId);
      setShowModal(false);
    }
  };

  return (
    <>
     <MetaData title={"Patient Record"}/>
      <div className="container my-4">
        <h3 className="fw-bold mb-lg-4 mb-2 fs-2">Patients Record</h3>

        <div className="row w-100 mb-4 gx-2">
          <div className="col-9 d-flex align-items-center mt-2">
            <Search />
          </div>

          {keyword && (
            <div className="col-3 col-md-3 d-flex justify-content-md-end justify-content-start mt-2">
              <Link to="/" className="text-decoration-none">
                <button className="btn btn-outline-secondary d-flex align-items-center">
                  <i className="fa-solid fa-arrow-left me-1"></i>
                  <span className="d-none d-lg-inline">Back</span>
                </button>
              </Link>
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle mb-0 bg-white shadow-sm">
              <thead
                style={{
                  backgroundColor: "rgb(121, 22, 121)",
                  color: "#fff",
                }}
              >
                <tr>
                  <th>Room No.</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.patient?.length > 0 ? (
                  data.patient.map((patient) => (
                    <tr key={patient._id}>
                      <td>{patient.roomNumber}</td>
                      <td className="fw-bold">{patient.name}</td>
                      <td>{patient.gender}</td>
                      <td>{patient.age}</td>
                      <td
                        className="align-middle"
                        style={{ width: "1%", whiteSpace: "nowrap" }}
                      >
                        <div className="d-inline-flex align-items-center gap-2">
                          <Link to={`/patient/${patient._id}`}>
                            <button className="btn btn-sm btn-outline-secondary">
                              View
                            </button>
                          </Link>
                          <Link to={`/patient_data/${patient._id}`}>
                            <button className="btn btn-sm btn-outline-primary">
                              Edit
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDeleteClick(patient._id)}
                            disabled={isLoading}
                            className="btn btn-sm btn-outline-danger"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">
                      No results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {showModal && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Delete</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete this patient record?
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={confirmDelete}
                    disabled={isLoading}
                  >
                    {isLoading ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
