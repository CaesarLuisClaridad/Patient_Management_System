import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sticker.png";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../../redux/api/authAPI";
import { useNavigate } from "react-router-dom";
import nurse from "../assets/nurse.jpg";

const Navigation = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      className="d-flex flex-column align-items-center align-items-sm-start px-lg-3 px-0 pt-0 pt-lg-2 text-white"
      style={{ minHeight: "100vh" }}
    >
      <div className="d-flex align-items-center mb-4 mt-3">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid d-block d-md-none d-lg-block mx-auto"
            style={{
              width: "50px",
              height: "60px",
              objectFit: "contain",
            }}
          />
        </Link>

        <Link
          to="/"
          className="ms-lg-3 ms-0 text-white text-decoration-none d-flex align-items-center"
        >
          <h2 className="fs-2 m-0 text-light d-none d-sm-inline ">SBLC</h2>
        </Link>
      </div>

      <ul
        className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start w-100"
        id="menu"
      >
        <li className="w-100 mt-2">
          <Link
            className="nav-link px-lg-3 py-lg-2  align-middle hover-effect w-100 d-flex align-items-center"
            to="/"
          >
            <i className="fs-4 me-1 ms-2 ms-lg-0 me-lg-2 text-light fa-solid fa-clipboard "></i>
            <span className="ms-lg-2 ms-0 d-none d-sm-inline text-light ms-md-2 ">
              Patients Record Table
            </span>
          </Link>
        </li>
        <li className="w-100 mt-2">
          <Link
            className="nav-link px-lg-3 py-lg-2 align-middle hover-effect w-100 d-flex align-items-center"
            to="/addRecord"
          >
            <i className="fs-4 me-0 ms-2 ms-lg-0 me-lg-2 text-light fa-solid fa-notes-medical"></i>
            <span className="ms-lg-2 ms-0 d-none d-sm-inline text-light ms-md-2">
              Add Record
            </span>
          </Link>
        </li>
      </ul>

      {/* Dropdown at the bottom with sticky position */}
      <div
        className="dropdown mt-auto mb-3 mx-1 mx-lg-3"
        style={{ position: "fixed", bottom: "0" }}
      >
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={nurse}
            alt="User Avatar"
            width="30"
            height="30"
            className="rounded-circle mx-lg-2 m-0 d-none d-lg-block"
          />
          <span className="d-none d-sm-inline mx-1">{user?.name}</span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a
              className="dropdown-item hover-effect"
              href="#"
              onClick={handleLogout}
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
