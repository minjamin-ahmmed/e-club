import { useState } from "react";

const StepBar = ({ activeStep, onStepChange }) => {
  const steps = [
    "Membership Selection",
    "Basic Information",
    "Verification",
    "Company Information",
    "Personal Information",
    "Business Information",
    "Overview",
    "Payment & Confirmation",
  ];

  const handleStepClick = (index) => {
    onStepChange(index);
  };

  return (
    <div className="flex flex-col items-start sticky top-8">
      <div className="relative bg-[#056049] text-white rounded-2xl w-full p-6">
        {/* Render steps */}
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-center gap-2 mb-6">
            {/* Step circle */}
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full ${
                index < activeStep
                  ? "bg-[#B7E82C] text-black"
                  : index === activeStep
                  ? "bg-yellow-500 text-black"
                  : "bg-[#056049] text-white border border-white"
              }`}
            >
              {index + 1}
            </div>

            {/* Step text */}
            <span
              className={`text-sm cursor-pointer ${
                index < activeStep
                  ? "text-[#B7E82C]"
                  : index === activeStep
                  ? "text-[#FDB022]"
                  : ""
              }`}
              onClick={() => handleStepClick(index)}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepBar;
