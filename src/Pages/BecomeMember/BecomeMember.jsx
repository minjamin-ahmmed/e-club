/* eslint-disable react/jsx-key */
import { useState } from "react";
import StepBar from "../../Components/BecomeMember/StepBar";
import MembershipSelection from "../../Components/BecomeMember/MembershipSelection ";
import BasicInformation from "../../Components/BecomeMember/BasicInformation ";
import Verification from "../../Components/BecomeMember/Verification";
import CompanyInformation from "../../Components/BecomeMember/CompanyInformation";
import Information from "../../Components/BecomeMember/Information";
import BusinessInformation from "../../Components/BecomeMember/BusinessInformation";
import Overview from "../../Components/BecomeMember/Overview";
import Payment from "../../Components/BecomeMember/Payment";

const BecomeMember = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepComponents = [
    <MembershipSelection
      onNextStep={() => setActiveStep((prev) => prev + 1)}
    />,
    <BasicInformation onNextStep={() => setActiveStep((prev) => prev + 1)} />,
    <Verification onNextStep={() => setActiveStep((prev) => prev + 1)} />,
    <CompanyInformation />,
    <Information />,
    <BusinessInformation />,
    <Overview />,
    <Payment />,
  ];

  //   const handleStepChange = (index) => {
  //     setActiveStep(index);
  //   };

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <StepBar activeStep={activeStep} onStepChange={setActiveStep} />
        </div>
        <div className="lg:col-span-3">
          {stepComponents[activeStep] || <p>Step not found.</p>}
        </div>
      </div>
    </div>
  );
};

export default BecomeMember;
