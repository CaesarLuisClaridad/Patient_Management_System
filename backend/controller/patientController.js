import Patient from "../model/patient.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import APIfilters from "../utils/apiFilters.js";

// Fetch all patient data
export const getAllData = catchAsyncError(async (req, res, next) => {

    const apiFilters = new APIfilters(Patient.find(), req.query).search()

    const patient = await apiFilters.query;
    const length = patient.length;

    res.status(200).json({
        length,
        patient,
    });
});


// Submit new patient data
export const submitData = catchAsyncError(async (req, res, next) => {
  const data = await Patient.create(req.body); // Create a new patient document

  res.status(200).json({
    data,
  });
});

// Fetch a specific patient by ID
export const getPatient = catchAsyncError(async (req, res, next) => {
  const {id} = req.params
  const patient = await Patient.findById(id);

  if (!patient) {
    return next(new ErrorHandler("Patient not found", 404));
  }

  res.status(200).json({
    data: patient,
  });
});

// Update a specific patient by ID
export const updatePatientData = catchAsyncError(async (req, res, next) => {
  const {id} = req.params
  let patient = await Patient.findById(id);

  if (!patient) {
    return next(new ErrorHandler("Patient not found", 404));
  }

  patient = await Patient.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json({
    data: patient,
  });
});

// Delete a specific patient by ID
export const deletePatientData = catchAsyncError(async (req, res, next) => {
  const {id} = req.params
  const patient = await Patient.findById(id);

  if (!patient) {
    return next(new ErrorHandler("Patient not found", 404));
  }

  await patient.deleteOne();

  res.status(200).json({
    message: "Patient record deleted",
  });
});
