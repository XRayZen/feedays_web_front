"use client";

import React, { useState } from 'react';

function Count() {
  const [power, setPower] = useState(false);

  return (
    <div>
      <h1>電源 {power ? 'ON' : 'OFF'} </h1>
      <button onClick={() => setPower((prevState) => !prevState)}>ON/OFF</button>
    </div>
  );
}

export default Count;


