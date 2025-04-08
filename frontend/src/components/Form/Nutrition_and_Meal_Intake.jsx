import React from 'react';

const Nutrition_and_Meal_Intake = ({ formData, setFormData }) => {

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      nutrition: {
        ...formData.nutrition,
        [name]: value, // Update the specific property in the nutrition object
      },
    });
  };

  return (
    <>
     <div className="py-4 px-4 rounded-2 shadow mb-3 mb-lg-5 bg-violet">
  <h4 className="mt-4 mb-lg-4 mb-2 fw-bold">Patient Nutrition & Meal Intake</h4>
  <div className="row">
    <div className="col-12 col-md-6 mb-3">
      <label className="form-label">Do you have food allergies?</label>
      <select
        className="form-select"
        name="hasFoodAllergies"
        value={formData.nutrition.hasFoodAllergies}
        onChange={handleInputChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
    <div className="col-12 col-md-6 mb-3">
      <label className="form-label">
        Do you follow any specific diet? (Vegetarian, Diabetic, Low-sodium, etc.)
      </label>
      <input
        type="text"
        className="form-control"
        name="specificDiet"
        value={formData.nutrition.specificDiet}
        onChange={handleInputChange}
        placeholder="Specify diet if applicable"
        required
      />
    </div>
    <div className="col-12 col-md-6 mb-3">
      <label className="form-label">
        How many meals do you eat per day?
      </label>
      <input
        type="text"
        className="form-control"
        name="mealsPerDay"
        value={formData.nutrition.mealsPerDay}
        onChange={handleInputChange}
        placeholder="e.g., 3 meals per day"
        required
      />
    </div>
    <div className="col-12 col-md-6 mb-3">
      <label className="form-label">
        Do you have any difficulty chewing or swallowing food?
      </label>
      <select
        className="form-select"
        name="chewingOrSwallowingDifficulty"
        value={formData.nutrition.chewingOrSwallowingDifficulty}
        onChange={handleInputChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
    <div className="col-12 col-md-6 mb-3">
      <label className="form-label">
        How often do you consume fruits and vegetables?
      </label>
      <input
        type="text"
        className="form-control"
        name="fruitVegConsumption"
        value={formData.nutrition.fruitVegConsumption}
        onChange={handleInputChange}
        required
        placeholder="e.g., Daily, A few times a week"
      />
    </div>
    <div className="col-12 col-md-6 mb-3">
      <label className="form-label">
        Do you drink enough water daily (at least 8 glasses)?
      </label>
      <select
        className="form-select"
        name="enoughWaterDaily"
        value={formData.nutrition.enoughWaterDaily}
        onChange={handleInputChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
    <div className="col-12 col-md-6 mb-3">
      <label className="form-label">
        Do you have any appetite issues?
      </label>
      <select
        className="form-select"
        name="appetiteIssues"
        value={formData.nutrition.appetiteIssues}
        onChange={handleInputChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
    <div className="col-12 col-md-6 mb-3">
      <label className="form-label">
        Do you consume sugary or processed foods frequently?
      </label>
      <select
        className="form-select"
        name="consumesSugaryProcessedFoods"
        value={formData.nutrition.consumesSugaryProcessedFoods}
        onChange={handleInputChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  </div>
</div>

    </>
  );
};

export default Nutrition_and_Meal_Intake;
