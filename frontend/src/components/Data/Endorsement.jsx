import React from "react";

const Endorsement = ({ patient }) => {
  return (
    <>
      <h5 className="fw-bold mb-2 mb-lg-3">Endorsements</h5>
      <ul className="list-group mb-4">
        {patient?.endorsements?.map((endorsement, index) => (
          <li className="list-group-item" key={index}>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
              <div
                className="text-center me-3 p-3 mb-3 mb-md-0"
                style={{
                  width: "100%", // Full width on small screens
                  backgroundColor: "#f0f0f0", // light gray background
                  padding: "8px", // added padding for a bit more space
                }}
              >
                <strong>{endorsement.answer}</strong>
              </div>
              <div style={{ width: "100%" }}>
                <small>
                  <strong>Endorsed by:</strong> {endorsement.endorsedBy}
                </small>
                <br />
                <small>
                  <strong>Endorsed at:</strong>{" "}
                  {new Date(endorsement.endorsedAt).toLocaleString()}
                </small>
                <br />
                <small>
                  <strong>Received by:</strong> {endorsement.receivedBy}
                </small>
                <br />
                <small>
                  <strong>Received at:</strong>{" "}
                  {new Date(endorsement.receivedAt).toLocaleString()}
                </small>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Endorsement;
