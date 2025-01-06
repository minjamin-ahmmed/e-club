import loginImage from "../../assets/loginPageImg.svg";
import eClubLogo from "../../assets/E-Club Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="my-12 w-11/12 lg:w-9/12 mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-20 border border-gray-300 rounded-3xl">
      <div className="lg:w-1/2 h-full">
        <img
          className="rounded-t-3xl lg:rounded-r-none lg:rounded-l-3xl h-full w-full object-contain"
          src={loginImage}
          alt=""
        />
      </div>

      <div className="lg:w-1/2">
        <form className="card-body lg:w-3/4 mx-auto">
          <div className="flex items-center justify-center">
            <img className="w-32 h-32 object-contain" src={eClubLogo} alt="" />
          </div>
          <h1 className="text-[#056A50] font-bold text-4xl text-center mb-4">
            Member Login
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#344054]">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-[#344054]">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="absolute top-12 right-4"
            >
              {showPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
            </button>

            <div className="label">
              <div>
                <input className="mr-2" type="checkbox" />
                <label>Remember Me</label>
              </div>
              <a
                href="#"
                className="label-text-alt link link-hover text-[#2E90FA]"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#056049] text-white hover:bg-green-800">
              Login
            </button>
            <p className="mt-4 text-center">
              Don&lsquo;t Have an account?{" "}
              <Link className="text-blue-500" to="/joinAsMember">
                Become a Member
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
