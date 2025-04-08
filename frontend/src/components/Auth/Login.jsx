import React, { useEffect, useState } from "react";
import logo from "../../assets/sticker.png";
import { useLoginMutation } from "../../../redux/api/authAPI";
import toast from "react-hot-toast";
import MetaData from "../MetaData";

const Login = () => {
  // State for form fields
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading, isSuccess, data, error }] = useLoginMutation();

  console.log(data);

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      toast.success("Login Successfully");
    }
  }, [error, isSuccess]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const Userdata = {
      name: name,
      password,
    };

    console.log(Userdata); 
    login(Userdata);
  };

  return (
    <>
      <MetaData title={"Login"} />
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
              {isLoading ? "Login..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
