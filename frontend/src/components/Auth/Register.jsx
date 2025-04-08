import React, { useEffect, useState } from "react";
import logo from "../../assets/sticker.png";
import { useRegisterMutation } from "../../../redux/api/authAPI";
import toast from "react-hot-toast";
import MetaData from "../MetaData";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register = () => {
  // State for form fields
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [register, { isLoading, isSuccess, error }] = useRegisterMutation();

  const navigate = useNavigate(); 

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      toast.success("Registration Successful");
      navigate("/login"); 
    }
  }, [error, isSuccess, navigate]); 

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const Userdata = {
      name: name,
      password,
    };

    register(Userdata);
  };

  return (
    <>
      <MetaData title={"Register"} />
      <div className="box">
        <div
          className="wrapper p-4 p-md-5 rounded-3 w-100"
          style={{ maxWidth: "420px" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column align-items-center justify-content-center mb-4">
              <img
                src={logo}
                className="img-contain mb-3"
                style={{ width: "60px", height: "60px", objectFit: "contain" }}
              />
              <h3 className="text-light fs-2 fw-bold text-center">
                SBLC-HOSPITAL
              </h3>
            </div>

            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
              />
              <i className="fa-solid fa-user text-light fs-6 p-0 m-0"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fa-solid fa-lock text-light shadow fs-6 p-0 m-0"></i>
            </div>
            <button
              type="submit"
              className="btn btn-outline-light rounded-5"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
