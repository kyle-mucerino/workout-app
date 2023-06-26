import React, { useState } from "react";

const StepUp = () => {
  const [showBackWorkouts, setShowBackWorkouts] = useState(false);

  const toggleBackWorkouts = () => {
    setShowBackWorkouts(!showBackWorkouts);
  };

  return (
    <div>
      <h2>Step-Up Workout</h2>
      <button onClick={toggleBackWorkouts}>Back</button>
      {showBackWorkouts && (
        <div>
          <h3>Back Workouts - Step-Up Level</h3>
          <p>Lat Pull downs</p>
        </div>
      )}
      {/* Add other body parts logic */}
    </div>
  );
};

export default StepUp;
