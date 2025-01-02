import whiteLogo from "../../assets/E-Club Logo White.svg";
import qrCode from "../../assets/QR code.png";
import miniQrCode from "../../assets/Mini Qr code.png";
import {
  ArrowUpRight,
  FacebookLogo,
  LinkedinLogo,
  MapPin,
  PhoneCall,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div>
      <div
        className="w-full mx-auto p-5 md:p-10 lg:p-20"
        style={{
          background:
            "linear-gradient(288deg, rgba(245, 171, 177, 0.15) 0%, rgba(245, 171, 177, 0.01) 35%, rgba(245, 171, 177, 0) 100%), linear-gradient(288deg, rgba(235, 255, 176, 0) 0%, rgba(235, 255, 176, 0) 35%, rgba(235, 255, 176, 0.20) 100%), #022D22",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <img src={whiteLogo} alt="E-Club White Logo" />
            </div>
            <p className="text-[#FCFCFD] lg:w-3/4">
              The Entrepreneurs Club of Bangladesh is a non-profit organization
              based in Bangladesh that focuses on supporting and promoting
              entrepreneurship in the country. The club provides resources,
              networking opportunities, and support to entrepreneurs, helping
              them to start and grow successful businesses.
            </p>

            <div>
              <h3 className="text-[#FCFCFD] font-medium text-">
                Office Time: Sunday – Thursday 11am-5pm
              </h3>

              <p className="text-[#FCFCFD]">Email : query.eclub@gmail.com</p>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="text-xl font-semibold text-white mb-8">
              Join Our Community
            </h3>
            <ul className="text-[#FCFCFD] space-y-4 font-normal">
              <li className="flex items-center gap-2">
                Online Forums
                <span>
                  <ArrowUpRight size={24} />
                </span>
              </li>
              <li className="flex items-center gap-2">
                Networking Groups
                <span>
                  <ArrowUpRight size={24} />
                </span>
              </li>
              <li className="flex items-center gap-2">
                Volunteer Opportunities
                <span>
                  <ArrowUpRight size={24} />
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-[24px] font-semibold text-white mb-4">Blog</h3>
            <ul className="text-[#FCFCFD] space-y-4 font-normal">
              <li className="flex items-center gap-2">
                Read Blogs{" "}
                <span>
                  <ArrowUpRight size={24} />
                </span>
              </li>
              <li className="flex items-center gap-2">
                Latest Blogs{" "}
                <span>
                  <ArrowUpRight size={24} />
                </span>
              </li>
              <li className="flex items-center gap-2">
                Guest Articles{" "}
                <span>
                  <ArrowUpRight size={24} />
                </span>
              </li>
              <li className="flex items-center gap-2">
                Entrepreneurial Insights{" "}
                <span>
                  <ArrowUpRight size={24} />
                </span>
              </li>
              <li className="flex items-center gap-2">
                Industry Trends{" "}
                <span>
                  <ArrowUpRight size={24} />
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-[24px] font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="text-[#FCFCFD] space-y-4 font-normal mb-4">
              <li className="flex items-center gap-2">
                <span>
                  <PhoneCall size={24} />
                </span>
                +8801792111113{" "}
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <PhoneCall size={24} />
                </span>
                +8801819800006{" "}
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <PhoneCall size={24} />
                </span>
                +8801740443638{" "}
              </li>
            </ul>

            <h3 className="font-semibold text-[#FCFCFD] mb-2">
              Visit Time: 11am to 6pm
            </h3>
            <p className="text-[#FCFCFD]">
              Please call respective branch number before visiting offices
            </p>
          </div>

          <div className="col-span-2 px-8">
            <div>
              <img className="w-full" src={qrCode} alt="Qr Code" />
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#051830] px-2 py-1 rounded-[50px] mt-4">
              <img src={miniQrCode} alt="" />
              <p className="text-[#FCFCFD]">Scan Me</p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white mb-4">
                Follow Us On
              </h3>
              <div className="flex items-center justify-start gap-8 text-white">
                <p>
                  <FacebookLogo size={32} />
                </p>
                <p>
                  <LinkedinLogo size={32} />
                </p>
                <p>
                  <YoutubeLogo size={32} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="divider  bg-white h-[1px]"></div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Bangladesh Collaboration Addresses
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="flex items-start gap-2">
              <div className="py-8 px-4 bg-[#378873] rounded-xl text-white">
                <p>
                  <MapPin size={32} />
                </p>
              </div>
              <div>
                <p className="text-white">
                  Branch Office in Gulshan/Banani <br /> Address: House-108,
                  Road-12, Floor-3rd, Block-E, Gulshan, Banani, (Beside
                  Prescription Point), Dhaka, Bangladesh <br />
                  <span className="font-semibold">Contact: +880707-929811</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="py-8 px-4 bg-[#378873] rounded-xl text-white">
                <p>
                  <MapPin size={32} />
                </p>
              </div>
              <div>
                <p className="text-white">
                  <span className="font-semibold">Contact: +880707-929811</span>
                  Branch Office in Panthapath/Banglamotor <br /> Address: 50,
                  Lake Circus, 5th Floor, Kalabagan, Dhaka, Dhaka Division,
                  Bangladesh <br />
                  <span className="font-semibold">
                    Contact: +8801819-800006
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="py-8 px-4 bg-[#378873] rounded-xl text-white">
                <p>
                  <MapPin size={32} />
                </p>
              </div>
              <div>
                <p className="text-white">
                  Branch Office in Dhanmondi/Lalmatia/ Mohammadpur <br />{" "}
                  Address: 275/D, Suite # C11, Lift Level-11, Rd 27, Dhaka 1207{" "}
                  <br /> Dhaka Division, Bangladesh <br />
                  <span className="font-semibold">
                    {" "}
                    Contact: +8801711-661665
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="py-8 px-4 bg-[#378873] rounded-xl text-white">
                <p>
                  <MapPin size={32} />
                </p>
              </div>
              <div>
                <p className="text-white">
                  Branch Office in Niketon/Badda <br /> Address: H# 87-89, R# 4,
                  Bl# B, 1st Floor, Nikon, Gulshan, Dhaka 1212, Bangladesh{" "}
                  <br />{" "}
                  <span className="font-semibold">
                    Contact: +8801331-546622
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="py-8 px-4 bg-[#378873] rounded-xl text-white">
                <p>
                  <MapPin size={32} />
                </p>
              </div>
              <div>
                <p className="text-white">
                  <span className="font-semibold">Contact: +880707-929811</span>
                  Branch in Motijheel/Palton <br /> Address: Suite# F-11, Level#
                  11, TROPICANA TOWER, 45 Purana Paltan, Dhaka 1000 <br />{" "}
                  <span className="font-semibold">
                    Contact: +8801988-121212
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="divider  bg-white h-[1px]"></div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            International Collaboration Addresses
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="flex items-start gap-2">
              <div className="py-8 px-4 bg-[#378873] rounded-xl text-white">
                <p>
                  <MapPin size={32} />
                </p>
              </div>
              <div>
                <p className="text-white">
                  <span className="font-semibold">Dubai</span> <br /> House-108,
                  Road-12, Floor-3rd, Block-E, Gulshan, Banani, (Beside
                  Prescription Point), Dhaka, Bangladesh <br />{" "}
                  <span className="font-semibold">Contact: +880707-929811</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="py-8 px-4 bg-[#378873] rounded-xl text-white">
                <p>
                  <MapPin size={32} />
                </p>
              </div>
              <div>
                <p className="text-white">
                  <span className="font-semibold">Malaysia</span> <br />{" "}
                  House-108, Road-12, Floor-3rd, Block-E, Gulshan, Banani,
                  (Beside Prescription Point), Dhaka, Bangladesh <br />{" "}
                  <span className="font-semibold">Contact: +880707-929811</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="py-8 px-4 bg-[#378873] rounded-xl text-white">
                <p>
                  <MapPin size={32} />
                </p>
              </div>
              <div>
                <p className="text-white">
                  <span className="font-semibold">Canada</span> <br />{" "}
                  House-108, Road-12, Floor-3rd, Block-E, Gulshan, Banani,
                  (Beside Prescription Point), Dhaka, Bangladesh <br />{" "}
                  <span className="font-semibold">Contact: +880707-929811</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="py-8 px-4 bg-[#378873] rounded-xl text-white">
                <p>
                  <MapPin size={32} />
                </p>
              </div>
              <div>
                <p className="text-white">
                  <span className="font-semibold">USA</span> <br /> House-108,
                  Road-12, Floor-3rd, Block-E, Gulshan, Banani, (Beside
                  Prescription Point), Dhaka, Bangladesh <br />{" "}
                  <span className="font-semibold">Contact: +880707-929811</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="py-8 px-4 bg-[#378873] rounded-xl text-white">
                <p>
                  <MapPin size={32} />
                </p>
              </div>
              <div>
                <p className="text-white">
                  <span className="font-semibold">Singapore</span> <br />{" "}
                  House-108, Road-12, Floor-3rd, Block-E, Gulshan, Banani,
                  (Beside Prescription Point), Dhaka, Bangladesh <br />{" "}
                  <span className="font-semibold">Contact: +880707-929811</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="py-8 px-4 bg-[#378873] rounded-xl text-white">
                <p>
                  <MapPin size={32} />
                </p>
              </div>
              <div>
                <p className="text-white">
                  <span className="font-semibold">Thailand</span> <br />{" "}
                  House-108, Road-12, Floor-3rd, Block-E, Gulshan, Banani,
                  (Beside Prescription Point), Dhaka, Bangladesh <br />{" "}
                  <span className="font-semibold">Contact: +880707-929811</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gradient-to-r from-[#B42318] to-[#b42218ee] px-5 md:px-10 lg:px-20 py-4">
        <p className="text-white font-semibold text-sm">
          © 2025. All Rights Reserved
        </p>
        <p className="text-white font-semibold text-sm">
          Designed & Managed by Nexkraft
        </p>
      </div>
    </div>
  );
};

export default Footer;
