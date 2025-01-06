import { useState } from "react";
import eClubLogo from "../../assets/E-Club Logo.svg";

const Verification = ({ onNextStep }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (element, index) => {
    if (!/^[0-9]?$/.test(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Automatically focus the next input
    if (element.value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleBackspace = (element, index) => {
    if (!element.value && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  //   const handleSubmit = async () => {
  //     setIsSubmitting(true);
  //     const otpCode = otp.join("");

  //     try {
  //       const response = await fetch("/api/verify-otp", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ otp: otpCode }),
  //       });

  //       const data = await response.json();

  //       if (response.ok) {
  //         alert("OTP Verified Successfully!");
  //         // Redirect or perform further actions
  //       } else {
  //         alert(data.message || "Verification failed!");
  //       }
  //     } catch (error) {
  //       console.error("Error verifying OTP:", error);
  //       alert("Something went wrong!");
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  return (
    <div className="border border-[#D0D5DD] rounded-2xl p-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <h1 className="text-2xl font-semibold text-[#056A50]">
          Member Registration
        </h1>
        <div className="hidden lg:block">
          <img src={eClubLogo} alt="" />
        </div>
      </div>

      <h1 className="text-[#101828] font-semibold text-2xl text-center mb-8">
        Verification
      </h1>

      <p className="text-center text-gray-500 mb-8">
        We have sent a verification code to your mobile number{" "}
        <strong>+88012334567</strong>. Enter the code below:
      </p>

      <div className="w-11/12 lg:w-1/4 mx-auto">
        <div className="flex justify-center gap-2">
          {otp.map((_, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={otp[index]}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") handleBackspace(e.target, index);
              }}
              className="w-12 h-12 border border-[#056049] rounded-sm text-center text-lg focus:ring-2 focus:ring-green-800 focus:outline-none"
            />
          ))}
        </div>

        <button
          //   onClick={handleSubmit}
          onClick={onNextStep}
          disabled={isSubmitting}
          className={`mt-6 w-full py-2 text-white font-medium rounded-lg ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#056049] hover:bg-green-800 "
          }`}
        >
          {isSubmitting ? "Verifying..." : "Verify & Proceed"}
        </button>

        <button
          onClick={() => alert("Skipping to payment...")}
          className="mt-4 w-full py-2 text-gray-400 font-medium rounded-lg"
        >
          Verify & Skip to Payment
        </button>
      </div>
    </div>
  );
};

export default Verification;
