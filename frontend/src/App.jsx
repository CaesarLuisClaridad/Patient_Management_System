import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import PatientData from "./components/PatientData";
import HomePage from "./components/HomePage";
import MainForm from "./components/MainForm";
import { Toaster } from "react-hot-toast";
import Update_Data from "./components/Update_Data";
import Login from "./components/Auth/Login";
import { useSelector } from "react-redux";
import Register from "./components/Auth/Register";

function App() {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        {!isAuthenticated && (
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<Register/>}/> */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}

        {isAuthenticated && (
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 col-md-2 col-xl-2 px-sm-2 px-0 min-vh-100 bg">
                <Navigation />
              </div>

              <div className="col-10 col-md-10 py-lg-3 py-1 px-0 bg-page">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/patient/:id" element={<PatientData />} />
                  <Route path="/addRecord" element={<MainForm />} />
                  <Route path="/patient_data/:id" element={<Update_Data />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
