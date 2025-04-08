import mongoose from "mongoose";
import Patient from "../model/patient.js";
import patient from "../seeder/data.js";

const seedPatients = async () => {
  try {
    await mongoose.connect("mongodb+srv://caesar:claridad@pms.gyyqawl.mongodb.net/PMS?retryWrites=true&w=majority&appName=PMS");
    await Patient.deleteMany();
    console.log("Patients record deleted");

    await Patient.insertMany(patient);
    console.log("Patients record added");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedPatients();
