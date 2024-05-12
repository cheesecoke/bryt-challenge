import { useState } from 'react';

export const useMultiStepForm = (steps: React.ReactElement[], handleTransitionUpdate: (callback: () => void, direction: string) => void) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    handleTransitionUpdate(() => {
      setCurrentStepIndex(i => i < steps.length - 1 ? i + 1 : i);
    }, 'next');
  };

  const back = () => {
    handleTransitionUpdate(() => {
      setCurrentStepIndex(i => i > 0 ? i - 1 : i);
    }, 'back');
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
