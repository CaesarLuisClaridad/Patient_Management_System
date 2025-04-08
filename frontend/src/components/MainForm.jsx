import React from "react";
import { useState } from "react";
import Personal_Info from "./Form/Personal_Info";
import Personal_Contact_Info from "./Form/Personal_Contact_Info";
import Physician_Notes_Info from "./Form/Physician_Notes_Info";
import Emergency_Contact_Info from "./Form/Emergency_Contact_Info";
import Consciousness_Level from "./Form/Consciousness_Level";
import Pain_Assessment from "./Form/Pain_Assessment";
import Allergies from "./Form/Allergies";
import Medication from "./Form/Medication";
import Past_Medical_History from "./Form/Past_Medical_History";
import Vital_Sign_Check from "./Form/Vital_Sign_Check";
import Nutrition_and_Meal_Intake from "./Form/Nutrition_and_Meal_Intake";
import Glasgow_Coma_Scale from "./Form/Glasgow_Coma_Scale";
import Initial_Assessment_Form from "./Form/Initial_Assessment_Form";
import Vital_Signs from "./Form/Vital_Signs";
import Adjuncts from "./Form/Adjuncts";
import Trauma_Burn_Assessment from "./Form/Trauma_Burn_Assessment";
import CarePlanForm from "./Form/CarePlanForm";
import Diagnostic_Tab from "./Form/Diagnostic_Tab";
import Endorsement from "./Form/Endorsement";
import Immunization from "./Form/Immunization";
import Oxygen from "./Form/Oxygen";
import { useEffect } from "react";
import { useCreatePatientDataMutation } from "../../redux/api/patientAPI";
import toast from "react-hot-toast";
import MetaData from "./MetaData";

const MainForm = () => {
  const initialFormData = {
    name: "",
    age: "",
    gender: "",
    dateOfBirth: "",
    weight: "",
    height: "",
    maritalStatus: "",
    maillingAddress: "",
    roomNumber: "",
    religion: "",
    workPhone: "",
    personalPhone: "",

    attendingPhysician: {
      name: "",
      date: "",
    },

    followUpNotes: { note: "", date: "" },

    emergencyContact: {
      contactName: "",
      phoneNumber: "",
      relationship: "",
    },

    levelOfConsciousness: "",

    painAssessment: {
      onset: "",
      provocation: "",
      quality: "",
      radiation: "",
      severity: "",
      time: "",
    },

    allergies: [{ date: "", substance: "", symptoms: "" }],
    medications: [{ date: "", medication: "", strength: "" }],

    pastMedicalHistory: "",

    vitalSignCheck: {
      heartRate: "",
      bloodPressure: "",
      oxygenSaturation: "",
      temperature: "",
      respiratoryRate: "",
      gcs: "",
      checkedBy: {
        name: "",
        dateTime: "",
      },
    },

    immunizations: [{ date: "", type: "", site: "" }],

    nutrition: {
      hasFoodAllergies: "",
      specificDiet: "",
      mealsPerDay: "",
      chewingOrSwallowingDifficulty: "",
      fruitVegConsumption: "",
      enoughWaterDaily: "",
      appetiteIssues: "",
      consumesSugaryProcessedFoods: "",
    },

    chiefComplaint: "",
    signsAndSymptoms: "",
    caseType: "Medical",
    circulationPulse: "Present",
    breathing: "Present",
    breathingSound: "Clear",
    breathingQuality: "Normal",

    oxygen: {
      required: "",
      details: [{ given: "", ipmVia: "", timeStart: "", timeEnd: "" }],
    },

    adjuncts: {
      intubated: "",
      avFistula: "",
      colostomyBag: "",
      paceMaker: "",
    },

    traumaBurnAssessment: {
      wholeHeadNeck: "",
      entireRightArm: "",
      entireLeftArm: "",
      entireTrunk: "",
      groin: "",
      entireRightLeg: "",
      entireLeftLeg: "",
    },

    treatmentPlan: "",
    recoveryPlan: "",
    interventions: "",
    evaluation: "",

    labResults: [
      { typeOfTest: "", collectionDate: "", result: "", provider: "" },
    ],
    imagingResults: [
      { typeOfImaging: "", dateOfExam: "", result: "", provider: "" },
    ],
    endorsements: [
      {
        answer: "",
        endorsedBy: "",
        endorsedAt: "",
        receivedBy: "",
        receivedAt: "",
      },
    ],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [createPatientData, { isLoading, isSuccess, error }] =
    useCreatePatientDataMutation();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success("Patient Record Successfully Submitted!");
      setFormData(initialFormData); // Reset the form data after success
    }
  }, [isSuccess, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the mutation to submit the form data
    await createPatientData(formData).unwrap();
  };

  return (
    <>
      <MetaData title={"Add Patient Record"} />
      <div className="container py-4 form">
        <h2 className="text-center mb-4 fs-1 fw-bold">Patient Database Form</h2>
        <form onSubmit={handleSubmit}>
          <Personal_Info formData={formData} setFormData={setFormData} />
          <Personal_Contact_Info
            formData={formData}
            setFormData={setFormData}
          />
          <Physician_Notes_Info formData={formData} setFormData={setFormData} />
          <Emergency_Contact_Info
            formData={formData}
            setFormData={setFormData}
          />
          <Consciousness_Level formData={formData} setFormData={setFormData} />
          <Pain_Assessment formData={formData} setFormData={setFormData} />
          <Allergies formData={formData} setFormData={setFormData} />
          <Medication formData={formData} setFormData={setFormData} />
          <Past_Medical_History formData={formData} setFormData={setFormData} />
          <Vital_Sign_Check formData={formData} setFormData={setFormData} />
          <Immunization formData={formData} setFormData={setFormData} />
          <Nutrition_and_Meal_Intake
            formData={formData}
            setFormData={setFormData}
          />
          <Glasgow_Coma_Scale formData={formData} setFormData={setFormData} />
          <Initial_Assessment_Form
            formData={formData}
            setFormData={setFormData}
          />
          <Vital_Signs formData={formData} setFormData={setFormData} />
          <Oxygen formData={formData} setFormData={setFormData} />
          <Adjuncts formData={formData} setFormData={setFormData} />
          <Trauma_Burn_Assessment
            formData={formData}
            setFormData={setFormData}
          />
          <CarePlanForm formData={formData} setFormData={setFormData} />
          <Diagnostic_Tab formData={formData} setFormData={setFormData} />
          <Endorsement formData={formData} setFormData={setFormData} />
          <button
            type="submit"
            className="btn btn-primary mt-3 m-auto d-block"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default MainForm;
