import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';


function Step() {
  let { stepId } = useParams();
  let currentStep;
  if (stepId == 1) {
    currentStep = <Step1 />;
  } else if (stepId == 2) {
    currentStep = <Step2 />;
  }
  return (
    <div>
      <h3>{stepId}</h3>
      {currentStep}
    </div>
  );
}

export default Step;