import { Link } from "react-router-dom";
import eClubLogo from "../../assets/E-Club Logo.svg";

const BasicInformation = ({ onNextStep }) => {
  return (
    <div className="border border-[#D0D5DD] rounded-2xl p-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <h1 className="text-2xl font-semibold text-[#056A50]">
          Want to be a member of
        </h1>
        <div className="hidden lg:block">
          <img src={eClubLogo} alt="" />
        </div>
      </div>

      <h1 className="text-[#101828] font-semibold text-2xl text-center mb-8">
        Member Registration
      </h1>

      <form>
        <div className="form-control w-11/12 lg:w-10/12 mx-auto mb-6">
          <label className="label">
            <span className="label-text text-[#344054] font-semibold">
              Company Name
              <span className="text-red-500 font-semibold">*</span>{" "}
            </span>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-11/12 lg:w-10/12 mx-auto mb-2 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2">
            <label className="label">
              <span className="label-text text-[#344054] font-semibold">
                Email(Representative)
                <span className="text-red-500 font-semibold">*</span>{" "}
              </span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="lg:w-1/2">
            <label className="label">
              <span className="label-text text-[#344054] font-semibold">
                Mobile Number(Representative)
                <span className="text-red-500 font-semibold">*</span>{" "}
              </span>
            </label>
            <input
              type="number"
              placeholder="Mobile Number"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div className="form-control w-11/12 lg:w-10/12 mx-auto mb-8 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2">
            <label className="label">
              <span className="label-text text-[#344054] font-semibold">
                Password
                <span className="text-red-500 font-semibold">*</span>{" "}
              </span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="lg:w-1/2">
            <label className="label">
              <span className="label-text text-[#344054] font-semibold">
                Confirm Password
                <span className="text-red-500 font-semibold">*</span>{" "}
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </form>

      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-0">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <input className="mr-2" type="checkbox" />
          <label>
            Agree with{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms and Conditions
            </span>
          </label>
        </div>

        <div>
          <button
            onClick={onNextStep}
            className="btn bg-[#056049] hover:bg-green-900 text-white px-20 rounded-lg"
          >
            Next
          </button>
          <p className="flex justify-end mt-4 text-[12px] mr-4">
            Already Have an Account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
