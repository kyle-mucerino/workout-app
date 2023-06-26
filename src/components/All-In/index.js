import React, { useState } from 'react';

const AllIn = () => {
  const [showBackWorkouts, setShowBackWorkouts] = useState(false);

  const toggleBackWorkouts = () => {
    setShowBackWorkouts(!showBackWorkouts);
  };

  return (
    <div>
      <h2>All-In Workout</h2>
      <button onClick={toggleBackWorkouts}>Back</button>
      {showBackWorkouts && (
        <div>
          <h3>Back Workouts - All-In Level</h3>
          <p>Lat Pull downs</p>
        </div>
      )}
      {/* Add other body parts logic */}
    </div>
  );
};

export default AllIn;