import { useState } from 'react';

export const useMultiStepForm = (steps: React.ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    console.log('next');
    setCurrentStepIndex((i) => (i < steps.length - 1 ? i + 1 : i));
  };

  const back = () => {
    setCurrentStepIndex((i) => (i > 0 ? i - 1 : i));
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};
