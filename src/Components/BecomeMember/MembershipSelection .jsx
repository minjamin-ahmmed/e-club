import { Link } from "react-router-dom";
import eClubLogo from "../../assets/E-Club Logo.svg";
import teamImg from "../../assets/teamGossip.png";

const MembershipSelection = ({ onNextStep }) => {
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
        <div className="form-control w-11/12 lg:w-2/4 mx-auto">
          <label className="label">
            <span className="label-text text-[#344054] font-semibold">
              Select a Membership type{" "}
              <span className="text-red-500 font-semibold">*</span>{" "}
            </span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              Select
            </option>
            <option>Governing Body</option>
            <option>Founding Member</option>
            <option>Corporate</option>
            <option>General Manager</option>
            <option>Associate</option>
            <option>Non-Dhaka Member</option>
            <option>Others</option>
          </select>
        </div>
      </form>

      <div className="flex items-center justify-center my-8">
        <img src={teamImg} alt="" />
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNextStep}
          className="btn bg-[#056049] hover:bg-green-900 text-white px-20 rounded-lg"
        >
          Next
        </button>
      </div>
      <p className="flex justify-end mt-4 text-[12px] mr-4">
        Already Have an Account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default MembershipSelection;
