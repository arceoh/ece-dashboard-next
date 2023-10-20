"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: Props) => {
  console.error(error);
  return (
    <div>
      <h1>Error</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default error;
