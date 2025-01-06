import { useState } from "react";
import eClubLogo from "../../assets/E-Club Logo.svg";
import companyLogo from "../../assets/companyLogo.svg";
import img1 from "../../assets/navyblue.svg";
import img2 from "../../assets/blue.svg";
import img3 from "../../assets/dark red.svg";
import img4 from "../../assets/red.svg";
import img5 from "../../assets/dark green.svg";
import img6 from "../../assets/green.svg";
import { CalendarDots } from "@phosphor-icons/react";

const CompanyInformation = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (selectedFile.size > 250 * 1024) {
      setError("File size must be less than 250KB.");
      return;
    }

    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(selectedFile.type)) {
      setError("Only JPG, JPEG, or PNG files are allowed.");
      return;
    }

    setFile(selectedFile);
    setError("");
  };

  const handleUpload = () => {
    if (!file) {
      setError("Please select a valid file.");
      return;
    }

    alert(`File "${file.name}" is ready for upload!`);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="border border-[#D0D5DD] rounded-2xl p-8">
      <div className="flex items-center justify-center gap-2 mb-8">
        <h1 className="text-2xl font-semibold text-[#056A50]">
          Member Registration
        </h1>
        <div className="hidden lg:block">
          <img src={eClubLogo} alt="E-Club Logo" />
        </div>
      </div>

      <div className="w-11/12 lg:w-10/12 mx-auto">
        <h1 className="text-2xl font-semibold text-[#101828] mb-8">
          Company Information
        </h1>

        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-lg">
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded Logo Preview"
                  className="w-full h-full object-contain"
                />
              ) : (
                <img src={companyLogo} alt="Company Logo Placeholder" />
              )}
            </div>

            <div className="w-full">
              {/* <p className="text-sm text-gray-700 font-medium mb-1">
                Company Logo less than 250kb (300 X 350)
                <span className="text-red-500">*</span>
              </p> */}
              <label className="form-control">
                <div className="label">
                  <span className="label-text">
                    Company Logo less than 250kb (300 X 350)
                  </span>
                </div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full"
                />
              </label>
              <p className="text-sm text-gray-500">
                Upload a white logo with a transparent background.
              </p>
            </div>
          </div>

          {file && (
            <p className="text-sm text-gray-600">
              Selected File: <strong>{file.name}</strong>
            </p>
          )}

          {error && <p className="text-sm text-red-500">{error}</p>}

          {/* <button
            onClick={handleUpload}
            className="py-2 px-4 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 w-fit"
          >
            Upload
          </button> */}
        </div>

        <div>
          <p className="text-[#1D2939] font-semibold mb-6">
            Choose a cover (for the logo)
          </p>
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
            <img className="rounded-lg" src={img1} alt="" />
            <img className="rounded-lg" src={img2} alt="" />
            <img className="rounded-lg" src={img3} alt="" />
            <img className="rounded-lg" src={img4} alt="" />
            <img className="rounded-lg" src={img5} alt="" />
            <img className="rounded-lg" src={img6} alt="" />
          </div>
        </div>

        <div className="my-6">
          <p className="text-[#1D2939] font-semibold ">
            Company General Information
          </p>

          <div className="my-6 flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-16">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Company Name <span className="text-red-500">*</span>{" "}
                </span>
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full relative">
              <label className="label">
                <span className="label-text font-semibold">
                  Establishment Date <span className="text-red-500">*</span>{" "}
                </span>
              </label>
              <input
                type="email"
                placeholder="Select a date"
                className="input input-bordered"
                required
              />

              <div className="absolute top-12 right-4">
                <CalendarDots className="text-gray-400" size={24} />
              </div>
            </div>
          </div>

          <div className="divider my-8"></div>

          <p className="text-[#1D2939] font-semibold ">
            Company Contact Information
          </p>

          <div className="my-6 flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-16">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Company Email <span className="text-red-500">*</span>{" "}
                </span>
              </label>
              <input
                type="text"
                placeholder="Company Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Company Mobile <span className="text-red-500">*</span>{" "}
                </span>
              </label>
              <input
                type="number"
                placeholder="Company Mobile"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="my-6 flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-16">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Company Whatsapp Number
                </span>
              </label>
              <input
                type="number"
                placeholder="Company Whatsapp"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Company website <span className="text-red-500">*</span>{" "}
                </span>
              </label>
              <input
                type="text"
                placeholder="Company Website"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="divider my-8"></div>

          <p className="text-[#1D2939] font-semibold mb-6">
            Company Address Information
          </p>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">
                Office Address <span className="text-red-500">*</span>{" "}
              </span>
            </label>
            <input
              type="text"
              placeholder="Company Address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="my-6 flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-16">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Area <span className="text-red-500">*</span>
                </span>{" "}
              </label>
              <input
                type="text"
                placeholder="Choose Area"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Nearest Landmark<span className="text-red-500">*</span>{" "}
                </span>
              </label>
              <input
                type="text"
                placeholder="Nearest Landmark"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="my-6 flex flex-col lg:flex-row items-center lg:justify-between gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Division <span className="text-red-500">*</span>
                </span>{" "}
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select
                </option>
                <option>Dhaka</option>
                <option>Rajshahi</option>
                <option>Sylhet</option>
                <option>Chittagong</option>
                <option>Rangpur</option>
                <option>Mymensingh</option>
                <option>Barishal</option>
                <option>Khulna</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  District <span className="text-red-500">*</span>
                </span>{" "}
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select
                </option>
                <option>Dhaka</option>
                <option>Narayanganj</option>
                <option>Gaibandha</option>
                <option>Gopalganj</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Thana/Post Office <span className="text-red-500">*</span>
                </span>{" "}
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Select
                </option>
                <option>Kafrul</option>
                <option>Mirpur2</option>
                <option>Shewrapara</option>
                <option>Gulshan</option>
                <option>Farmget</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Postal Code<span className="text-red-500">*</span>{" "}
                </span>
              </label>
              <input
                type="number"
                placeholder="Postal Code"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="divider my-8"></div>

          <p className="text-[#1D2939] font-semibold mb-6">
            Company Social Information
          </p>

          <div className="my-6 flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-16">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Company Facebook <span className="text-red-500">*</span>
                </span>{" "}
              </label>
              <input
                type="text"
                placeholder="Company Facebook URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Company LinkedIn<span className="text-red-500">*</span>{" "}
                </span>
              </label>
              <input
                type="text"
                placeholder="Company LinkedIn URL"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="my-6 flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-16">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Company Youtube
                </span>{" "}
              </label>
              <input
                type="text"
                placeholder="Company Youtube URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Company X (Formaly Twitter)
                </span>
              </label>
              <input
                type="text"
                placeholder="Company X URL"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="my-6 flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-16">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Company Tiktok</span>{" "}
              </label>
              <input
                type="text"
                placeholder="Company Tiktok URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Company other social media
                </span>
              </label>
              <input
                type="text"
                placeholder="Other Social Media"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="divider my-8"></div>
          <p className="text-[#1D2939] font-semibold mb-6">
            Company Legal Information
          </p>

          <div className="flex items-center gap-8 lg:gap-32">
            <span className="text-[#344054] font-medium">Trade License</span>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="tradeLicense"
                value="yes"
                checked={selectedOption === "yes"}
                onChange={() => handleOptionChange("yes")}
                className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <span className="text-gray-800 font-semibold">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="tradeLicense"
                value="no"
                checked={selectedOption === "no"}
                onChange={() => handleOptionChange("no")}
                className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <span className="text-gray-800 font-semibold">No</span>
            </label>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-[#344054]  font-medium">
                Type of Company
              </span>
            </div>
            <div className="flex items-center gap-8 lg:gap-16 my-8">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyType"
                  value="proprietor"
                  checked={selectedOption === "proprietor"}
                  onChange={() => handleOptionChange("proprietor")}
                  className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 "
                />
                <span className="text-gray-800 font-semibold">Proprietor</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyType"
                  value="limited"
                  checked={selectedOption === "limited"}
                  onChange={() => handleOptionChange("limited")}
                  className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                />
                <span className="text-gray-800 font-semibold">Limited</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyType"
                  value="partnership"
                  checked={selectedOption === "partnership"}
                  onChange={() => handleOptionChange("partnership")}
                  className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                />
                <span className="text-gray-800 font-semibold">Partnership</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="companyType"
                  value="others"
                  checked={selectedOption === "others"}
                  onChange={() => handleOptionChange("others")}
                  className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                />
                <span className="text-gray-800 font-semibold">Others</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="lg:col-span-1 space-y-6">
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">
                      Upload Trade License{" "}
                      <span className="text-red-500 font-semibold">*</span>{" "}
                    </span>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">
                      Upload Incorporation Certificate
                      <span className="text-red-500 font-semibold">*</span>{" "}
                    </span>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                  />
                </label>
              </div>

              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">
                      Upload IRC / ERC / BOD / IDB / Others Certificate
                      <span className="text-red-500 font-semibold">*</span>{" "}
                    </span>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                  />
                </label>
              </div>

              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">
                      Company TIN Certificate / TAX Return [Latest Year]
                      <span className="text-red-500 font-semibold">*</span>{" "}
                    </span>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                  />
                </label>
              </div>

              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">
                      Company VAT / BIN Certificate
                      <span className="text-red-500 font-semibold">*</span>{" "}
                    </span>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                  />
                </label>
              </div>

              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">
                      Membership with other associations and chambers
                    </span>
                  </div>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Update Trade Licence No{" "}
                      <span className="text-red-500">*</span>
                    </span>{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Trade Licence No."
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control w-full relative">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Validate Date(TL) <span className="text-red-500">*</span>{" "}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Select a date"
                    className="input input-bordered"
                    required
                  />

                  <div className="absolute top-12 right-4">
                    <CalendarDots className="text-gray-400" size={24} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Incorporation Certificate No.
                      <span className="text-red-500">*</span>
                    </span>{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="IC No."
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control w-full relative">
                  <label className="label">
                    <span className="label-text font-semibold">
                      {" "}
                      Date of Registration
                      <span className="text-red-500">*</span>{" "}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Select a date"
                    className="input input-bordered"
                    required
                  />
                  <div className="absolute top-12 right-4">
                    <CalendarDots className="text-gray-400" size={24} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Related Certificate No.
                      <span className="text-red-500">*</span>
                    </span>{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Related Cert No."
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control w-full relative">
                  <label className="label">
                    <span className="label-text font-semibold">
                      {" "}
                      Date of Registration(IRC/ERC)
                      <span className="text-red-500">*</span>{" "}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Select a date"
                    className="input input-bordered"
                    required
                  />
                  <div className="absolute top-12 right-4">
                    <CalendarDots className="text-gray-400" size={24} />
                  </div>
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">
                    Company TIN Number
                    <span className="text-red-500">*</span>
                  </span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="Company TIN Number"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">
                    VAT / BIN Certificate No.
                    <span className="text-red-500">*</span>
                  </span>{" "}
                </label>
                <input
                  type="text"
                  placeholder=" VAT / BIN Certificate No. "
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">
                  Membership with other associations Cert. No.
                    <span className="text-red-500">*</span>
                  </span>{" "}
                </label>
                <input
                  type="text"
                  placeholder=" Membership with other associations Cert. No. "
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>

          <div className="divider my-8"></div>

        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
