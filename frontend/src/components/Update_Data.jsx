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
import {
  useGetPatientDetailsQuery,
  useUpdatePatientMutation,
} from "../../redux/api/patientAPI";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import MetaData from "./MetaData";

const Update_Data = () => {
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

  const params = useParams();
  const [updatePatient, { isLoading, isSuccess, error }] =
    useUpdatePatientMutation();
  const { data } = useGetPatientDetailsQuery(params?.id);

  const patient = data?.data;

  useEffect(() => {
    if (patient) {
        const formatDate = (date, type) => {
            if (!date || isNaN(new Date(date))) return ""; // Check if the date is invalid or not present
            
            const formattedDate = new Date(date);
            const year = formattedDate.getFullYear();
            const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
            const day = formattedDate.getDate().toString().padStart(2, "0");
            const hours = formattedDate.getHours().toString().padStart(2, "0");
            const minutes = formattedDate.getMinutes().toString().padStart(2, "0");
          
            if (type === 'datetime') {
              return `${year}-${month}-${day}T${hours}:${minutes}`; // Format for datetime-local (yyyy-MM-ddTHH:mm)
            } else if (type === 'date') {
              return `${year}-${month}-${day}`; // Format for date (yyyy-MM-dd)
            } else if (type === 'time') {
              return `${hours}:${minutes}`; // Format for time (HH:mm)
            } else {
              return ""; // Return empty if no valid type
            }
          };

        
      setFormData({
        name: patient.name || "",
        age: patient.age || "",
        gender: patient.gender || "",
        dateOfBirth: formatDate(patient.dateOfBirth, "date"), // Apply formatDate here if needed
        weight: patient.weight || "",
        height: patient.height || "",
        maritalStatus: patient.maritalStatus || "",
        maillingAddress: patient.maillingAddress || "",
        roomNumber: patient.roomNumber || "",
        religion: patient.religion || "",
        workPhone: patient.workPhone || "",
        personalPhone: patient.personalPhone || "",

        attendingPhysician: {
          name: patient.attendingPhysician?.name || "",
          date: patient.attendingPhysician?.date
            ? formatDate(patient.attendingPhysician.date, "date")
            : "", // Apply 'date' type here to get yyyy-MM-dd format
        },

        followUpNotes: {
          note: patient.followUpNotes?.note || "",
          date: patient.followUpNotes?.date
            ? formatDate(patient.followUpNotes.date, "date")
            : "", // 'date' for date input
        },

        emergencyContact: {
          contactName: patient.emergencyContact?.contactName || "",
          phoneNumber: patient.emergencyContact?.phoneNumber || "",
          relationship: patient.emergencyContact?.relationship || "",
        },

        levelOfConsciousness: patient.levelOfConsciousness || "",
        painAssessment: {
            onset: patient.painAssessment?.onset || "",
            provocation: patient.painAssessment?.provocation || "",
            quality: patient.painAssessment?.quality || "",
            radiation: patient.painAssessment?.radiation || "",
            severity: patient.painAssessment?.severity || "",
            time: patient.painAssessment.time, // 'time' for HH:mm format
          },

        allergies: patient.allergies?.map((allergy) => ({
          date: formatDate(allergy.date, "date"), // Apply formatDate here
          substance: allergy.substance || "",
          symptoms: allergy.symptoms || "",
        })),

        medications: patient.medications?.map((medication) => ({
          date: formatDate(medication.date, "date"), // Apply formatDate here
          medication: medication.medication || "",
          strength: medication.strength || "",
        })),

        pastMedicalHistory: patient.pastMedicalHistory || "",

        vitalSignCheck: {
          heartRate: patient.vitalSignCheck?.heartRate || "",
          bloodPressure: patient.vitalSignCheck?.bloodPressure || "",
          oxygenSaturation: patient.vitalSignCheck?.oxygenSaturation || "",
          temperature: patient.vitalSignCheck?.temperature || "",
          respiratoryRate: patient.vitalSignCheck?.respiratoryRate || "",
          gcs: patient.vitalSignCheck?.gcs || "",
          checkedBy: {
            name: patient.vitalSignCheck?.checkedBy?.name || "",
            dateTime: formatDate(
              patient.vitalSignCheck?.checkedBy?.dateTime,
              "datetime"
            ), // Apply formatDate here
          },
        },

        immunizations: patient?.immunizations.map((immunization) => {
            return {
                date: immunization?.date ? formatDate(immunization.date, "date") : "", 
                site: immunization?.site ,
                type: immunization?.type , 
            };
        }),
        
          

        nutrition: {
          hasFoodAllergies: patient.nutrition?.hasFoodAllergies || "",
          specificDiet: patient.nutrition?.specificDiet || "",
          mealsPerDay: patient.nutrition?.mealsPerDay || "",
          chewingOrSwallowingDifficulty:
            patient.nutrition?.chewingOrSwallowingDifficulty || "",
          fruitVegConsumption: patient.nutrition?.fruitVegConsumption || "",
          enoughWaterDaily: patient.nutrition?.enoughWaterDaily || "",
          appetiteIssues: patient.nutrition?.appetiteIssues || "",
          consumesSugaryProcessedFoods:
            patient.nutrition?.consumesSugaryProcessedFoods || "",
        },

        chiefComplaint: patient.chiefComplaint || "",
        signsAndSymptoms: patient.signsAndSymptoms || "",
        caseType: patient.caseType || "Medical",
        circulationPulse: patient.circulationPulse || "Present",
        breathing: patient.breathing || "Present",
        breathingSound: patient.breathingSound || "Clear",
        breathingQuality: patient.breathingQuality || "Normal",

        oxygen: {
          required: patient.oxygen?.required,
          details: patient.oxygen?.details?.map((oxygenDetail) => ({
            given: oxygenDetail?.given || "",
            ipmVia: oxygenDetail?.ipmVia || "",
            timeStart: oxygenDetail?.timeStart ? formatDate(oxygenDetail.timeStart, "datetime") : "",
            timeEnd: oxygenDetail?.timeEnd ? formatDate(oxygenDetail.timeEnd, "datetime") : "",
          })) // Fallback to default structure if details is missing
        },
        

        adjuncts: {
          intubated: patient.adjuncts?.intubated || "",
          avFistula: patient.adjuncts?.avFistula || "",
          colostomyBag: patient.adjuncts?.colostomyBag || "",
          paceMaker: patient.adjuncts?.paceMaker || "",
        },

        traumaBurnAssessment: {
          wholeHeadNeck: patient.traumaBurnAssessment?.wholeHeadNeck || "",
          entireRightArm: patient.traumaBurnAssessment?.entireRightArm || "",
          entireLeftArm: patient.traumaBurnAssessment?.entireLeftArm || "",
          entireTrunk: patient.traumaBurnAssessment?.entireTrunk || "",
          groin: patient.traumaBurnAssessment?.groin || "",
          entireRightLeg: patient.traumaBurnAssessment?.entireRightLeg || "",
          entireLeftLeg: patient.traumaBurnAssessment?.entireLeftLeg || "",
        },

        treatmentPlan: patient.treatmentPlan || "",
        recoveryPlan: patient.recoveryPlan || "",
        interventions: patient.interventions || "",
        evaluation: patient.evaluation || "",

        labResults: patient.labResults.map((labResult) => {
            return {
                typeOfTest: labResult.typeOfTest,
                collectionDate: formatDate(labResult.collectionDate, 'date'), // Make sure to pass the correct type here
                result: labResult.result,
                provider: labResult.provider
            };
        }),
        imagingResults: patient.imagingResults.map((imagingResult) => {
            return {
                typeOfImaging: imagingResult.typeOfImaging,
                dateOfExam: formatDate(imagingResult.dateOfExam, 'date'), // Pass the correct type
                result: imagingResult.result,
                provider: imagingResult.provider
            };
        }),
        // dateTime: formatDate(
        //     patient.vitalSignCheck?.checkedBy?.dateTime,
        //     "datetime"
        //   ), 
        
        endorsements: (patient.endorsements || []).map((endorsement) => {
            return {
                answer: endorsement.answer || "",
                endorsedBy: endorsement.endorsedBy || "",
                endorsedAt: formatDate(endorsement.endorsedAt, "datetime"), // Format the date here
                receivedBy: endorsement.receivedBy || "",
                receivedAt: formatDate(endorsement.receivedAt, "datetime"), // Format the date here
            };
        }),
        
      });
    }

  }, [patient]);

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
    if (isSuccess) {
      toast.success("Patient Record Updated");
    }
  }, [isSuccess, error,])

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the mutation to submit the form data
    await updatePatient({ id: params?.id, body: formData }).unwrap();
  };

  return (
    <>
    <MetaData title={"Edit Patient Information"} />
      <div className="container py-4 form">
        <h2 className="text-center mb-4 fs-1 fw-bold">Update Patient Data</h2>
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
            className="btn btn-primary mt-3"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Update_Data;
