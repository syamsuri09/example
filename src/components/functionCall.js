import React, { useState } from 'react';

const FunctionCall = () => {
  // State variable to store the current greeting
  const [greeting, setGreeting] = useState('Hello');

  // Function to toggle the greeting when the button is clicked
  //   const toggleGreeting = () => {
  //     setGreeting('Goodbye');
  //   };

  return (
    <div>
      <h1 style={{ color: greeting === 'Hello' ? 'green' : 'purple' }}>
        {greeting}
      </h1>
      <button
        onClick={() => setGreeting(greeting === 'Hello' ? 'GoodBye' : 'Hello')}
      >
        Click
      </button>
    </div>
  );
};

export default FunctionCall;
