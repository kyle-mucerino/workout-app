import React, { useState } from "react";

const EaseIn = () => {
  const [showBackWorkouts, setShowBackWorkouts] = useState(false);

  const toggleBackWorkouts = () => {
    setShowBackWorkouts(!showBackWorkouts);
  }
  
  const [showChestWorkouts, setChestWorkouts] =useState(false);

  const toggleChestWorkouts = () => {
    setChestWorkouts(!showChestWorkouts);
  };

  return (
    <div>
      <h2>Ease-In Workout (click to expand)</h2>
      <button onClick={toggleBackWorkouts}>Back Workout</button>
      {showBackWorkouts && (
        <div>
          <h3>Back Workouts - Ease-In Level</h3>
          <p>Lat Pull downs</p>
        </div>
      )}
      <button onClick={toggleChestWorkouts}>Chest Workout</button>
      {showChestWorkouts && (
        <div>
          <h3>Chest Workouts - Ease-In Level </h3>
          <p>Bench Press</p>
        </div>
      )}
    </div>
  );
};

export default EaseIn;
