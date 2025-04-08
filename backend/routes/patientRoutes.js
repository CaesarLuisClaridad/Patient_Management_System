import express from 'express'
import { deletePatientData, getAllData, getPatient, submitData, updatePatientData } from '../controller/patientController.js';
import { isAuthenticatedUser } from '../middleware/auth.js';

const router = express.Router();

router.route("/AllRecords").get(isAuthenticatedUser, getAllData); // get all data
router.route("/SubmitData").post(isAuthenticatedUser, submitData); // submit data

router.route('/patient/:id')
  .get(isAuthenticatedUser, getPatient)
  .put(isAuthenticatedUser, updatePatientData)
  .delete(isAuthenticatedUser, deletePatientData);


export default router;