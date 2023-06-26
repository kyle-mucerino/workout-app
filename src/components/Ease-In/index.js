import React, { useState } from "react";

const EaseIn = () => {
  const [showBackWorkouts, setShowBackWorkouts] = useState(false);

  const toggleBackWorkouts = () => {
    setShowBackWorkouts(!showBackWorkouts);
  };

  return (
    <div>
      <h2>Ease-In Workout</h2>
      <button onClick={toggleBackWorkouts}>Back</button>
      {showBackWorkouts && (
        <div>
          <h3>Back Workouts - Ease-In Level</h3>
          <p>Lat Pull downs</p>
        </div>
      )}
      {/* Add other body parts logic */}
    </div>
  );
};

export default EaseIn;
