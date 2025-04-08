import React from "react";
import { useGetPatientDetailsQuery } from "../../redux/api/patientAPI";
import { useParams } from "react-router-dom";

import Head from "./Data/Head";
import Personal_Info from "./Data/Personal_Info";
import Contact_Info from "./Data/Contact_Info";
import Emergency_Contact from "./Data/Emergency_Contact";
import Attending_Physician from "./Data/Attending_Physician";
import Consciousness_Level from "./Data/Consciousness_Level";
import Pain_Assessment from "./Data/Pain_Assessment";
import Allergies from "./Data/Allergies";
import Medications from "./Data/Medications";
import Medical_History from "./Data/Medical_History";
import Vital_Signs from "./Data/Vital_Signs";
import Immunizations from "./Data/Immunizations";
import Nutrition from "./Data/Nutrition";
import Case_info from "./Data/Case_info";
import Breathing_Assessment from "./Data/Breathing_Assessment";
import Oxygen_Administration from "./Data/Oxygen_Administration";
import Adjuncts from "./Data/Adjuncts";
import Burn_Assessment from "./Data/Burn_Assessment";
import Treatment from "./Data/Treatment";
import Lab_Results from "./Data/Lab_Results";
import Imaging_Results from "./Data/Imaging_Results";
import Endorsement from "./Data/Endorsement";
import MetaData from "./MetaData";

const PatientData = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetPatientDetailsQuery(params?.id);

  const patient = data?.data;

  console.log(patient);

  // Check if the data is still loading or if there's an error
  if (isLoading) {
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  // handling error
  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          There was an error fetching patient data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <>
      <MetaData title={"Patient Information"} />
      <div className="container mt-5">
        <div className="card">
          <Head patient={patient} />

          <div className="card-body">
            <div className="row">
              <Personal_Info patient={patient} />
              <Contact_Info patient={patient} />
            </div>
            <Emergency_Contact patient={patient} />
            <Attending_Physician patient={patient} />
            <Consciousness_Level patient={patient} />
            <Pain_Assessment patient={patient} />
            <Allergies patient={patient} />
            <Medications patient={patient} />
            <Medical_History patient={patient} />
            <Vital_Signs patient={patient} />
            <Immunizations patient={patient} />
            <Nutrition patient={patient} />
            <Case_info patient={patient} />
            <Breathing_Assessment patient={patient} />
            <Oxygen_Administration patient={patient} />
            <Adjuncts patient={patient} />
            <Burn_Assessment patient={patient} />
            <Treatment patient={patient} />
            <Lab_Results patient={patient} />
            <Imaging_Results patient={patient} />
            <Endorsement patient={patient} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientData;
