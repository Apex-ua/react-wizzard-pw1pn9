import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import Step1 from './Step1';


function Step() {
  let { stepId } = useParams();
  let currentStep;
  if (stepId == 1) {
    currentStep = <Step1 />;
  }
  return (
    <div>
      <h3>{stepId}</h3>
      {currentStep}
    </div>
  );
}

export default Step;