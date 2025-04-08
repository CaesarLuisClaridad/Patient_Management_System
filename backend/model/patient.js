import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female"], required: true },
    dateOfBirth: { type: Date, required: true },
    weight: { type: String, required: true },
    height: { type: String, required: true },
    maritalStatus: {
      type: String,
      enum: ["Single", "Married", "Divorced", "Widowed"],
      required: true,
    },
    maillingAddress: { type: String, required: true },
    roomNumber: { type: String, required: true },
    religion: { type: String, required: true },
    workPhone: { type: String, required: true },
    personalPhone: { type: String, required: true },

    attendingPhysician: {
      name: { type: String, required: true },
      date: { type: Date, required: true },
    },

    followUpNotes: 
      {
        note: { type: String, required: true },
        date: { type: Date, required: true },
      },

    emergencyContact: {
      contactName: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      relationship: { type: String, required: true },
    },

    levelOfConsciousness: {
      type: String,
      enum: ["Alert", "Confused", "Pain", "Unconscious"],
      required: true,
    },

    painAssessment: {
      onset: { type: String, required: true },
      provocation: { type: String, required: true },
      quality: { type: String, required: true },
      radiation: { type: String, required: true },
      severity: { type: String, required: true },
      time: { type: String, required: true },
    },

    allergies: [
      {
        date: { type: Date, required: true },
        substance: { type: String, required: true },
        symptoms: { type: String, required: true },
      },
    ],

    medications: [
      {
        date: { type: Date, required: true },
        medication: { type: String, required: true },
        strength: { type: String, required: true },
      },
    ],

    pastMedicalHistory: { type: String, required: true },

    vitalSignCheck: {
      heartRate: { type: String, required: true },
      bloodPressure: { type: String, required: true },
      oxygenSaturation: { type: String, required: true },
      temperature: { type: String, required: true },
      respiratoryRate: { type: String, required: true },
      gcs: { type: String, required: true },
      checkedBy: {
        name: { type: String, required: true },
        dateTime: { type: String, required: true },
      },
    },

    immunizations: [
      {
        date: { type: Date, required: true },
        type: { type: String, required: true },
        site: { type: String, required: true },
      },
    ],

    nutrition: {
      hasFoodAllergies: { type: String, required: true },
      specificDiet: { type: String, required: true },
      mealsPerDay: { type: String, required: true },
      chewingOrSwallowingDifficulty: { type: String, required: true },
      fruitVegConsumption: { type: String, required: true },
      enoughWaterDaily: { type: String, required: true },
      appetiteIssues: { type: String, required: true },
      consumesSugaryProcessedFoods: { type: String, required: true },
    },

    chiefComplaint: String,
    signsAndSymptoms: String,
    caseType: {
      type: String,
      enum: ["Medical", "Trauma"],
    },

    circulationPulse: {
      type: String,
      enum: ["Present", "Absent", "Strong", "Weak"],
    },

    breathing: {
      type: String,
      enum: ["Present", "Absent", "Dyspnea"],
    },

    breathingSound: {
      type: String,
      enum: ["Clear", "Rhonchi", "Crackles", "Wheezing", "Other"],
    },

    breathingQuality: {
      type: String,
      enum: ["Normal", "Labored"],
    },

    oxygen: {
      required: String,
      details: [
        {
          given: String,
          ipmVia: String,
          timeStart: String,
          timeEnd: String,
        },
      ],
    },

    adjuncts: {
      intubated: String,
      avFistula: String,
      colostomyBag: String,
      paceMaker: String,
    },

    traumaBurnAssessment: {
      wholeHeadNeck: String,
      entireRightArm: String,
      entireLeftArm: String,
      entireTrunk: String,
      groin: String,
      entireRightLeg: String,
      entireLeftLeg: String,
    },

    treatmentPlan: { type: String, required: true },
    recoveryPlan: String,
    interventions: String,
    evaluation: String,

    labResults: [
      {
        typeOfTest: String,
        collectionDate: String,
        provider: String,
        result: String,
      },
    ],

    imagingResults: [
      {
        typeOfImaging: String,
        dateOfExam: String,
        provider: String,
        result: String,
      },
    ],

    endorsements: [
      {
        answer: String,
        endorsedBy: String,
        endorsedAt: String,
        receivedBy: String,
        receivedAt: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Patient", patientSchema);
