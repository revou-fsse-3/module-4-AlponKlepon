import { ReactElement, useState } from "react";

{
  /* Membuat Hook untuk merender current step dari component yang nanti di pass ke parameter */
}
const Steps = (steps: ReactElement[]) => {
  {
    /* Membuat state untuk menampung pada step */
  }
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
    back,
  };
};

export default Steps;
