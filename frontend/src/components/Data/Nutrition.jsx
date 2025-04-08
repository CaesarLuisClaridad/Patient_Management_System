import React from "react";

const Nutrition = ({ patient }) => {
  const nutrition = patient?.nutrition || {};

  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2 mb-lg-3">Nutrition</h5>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>Question</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Do you have food allergies?</td>
              <td>{nutrition.hasFoodAllergies || "N/A"}</td>
            </tr>
            <tr>
              <td>
                Do you follow any specific diet (vegetarian, diabetic,
                low-sodium)?
              </td>
              <td>{nutrition.specificDiet || "N/A"}</td>
            </tr>
            <tr>
              <td>How many meals do you eat per day?</td>
              <td>{nutrition.mealsPerDay || "N/A"}</td>
            </tr>
            <tr>
              <td>Do you have any difficulty chewing or swallowing food?</td>
              <td>{nutrition.chewingOrSwallowingDifficulty || "N/A"}</td>
            </tr>
            <tr>
              <td>How often do you consume fruits and vegetables?</td>
              <td>{nutrition.fruitVegConsumption || "N/A"}</td>
            </tr>
            <tr>
              <td>Do you drink enough water daily (at least 8 glasses)?</td>
              <td>{nutrition.enoughWaterDaily || "N/A"}</td>
            </tr>
            <tr>
              <td>Do you have any appetite issues?</td>
              <td>{nutrition.appetiteIssues || "N/A"}</td>
            </tr>
            <tr>
              <td>Do you consume sugary or processed foods frequently?</td>
              <td>{nutrition.consumesSugaryProcessedFoods || "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nutrition;
