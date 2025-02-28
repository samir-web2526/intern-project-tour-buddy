import { useEffect, useState } from "react";
import ProfileOfGuide from "../ProfileOfGuide/ProfileOfGuide";
import { MdClose, MdMenu, MdOutlineDateRange } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";

const GuidesProfiles = () => {
  const [guides, setGuides] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAvailabilityOpen,setAvailabilityOpen] = useState(false)
  const [isLanguageOpen, setLanguageOpen] = useState(false);
  const [isDurationOpen, setDurationOpen] = useState(false);
  const [isDestinationOpen, setDestinationOpen] = useState(false);

  useEffect(() => {
    fetch("/guide.json")
      .then((res) => res.json())
      .then((data) => setGuides(data));
  }, []);

  return (
    <div>
      <div className="bg-[#F6ECEC] text-center md:text-left py-2 mb-10">
        <h1 className="text-2xl font-bold md:ml-10">Choose your Tour guide:</h1>
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="md:hidden bg-[#7BBCB0] text-white text-3xl rounded-md mb-4"
        >
          {isSidebarOpen ? <MdClose></MdClose> : <MdMenu></MdMenu>}
        </button>
      </div>



      <div className="md:flex px-3 mb-8">
    
        <div
          className={`flex flex-col py-4 mb-5 md:w-60 w-full md:block ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <div className="card bg-base-100 w-full mb-2 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-3">
                Availability
                <span
                  className="md:hidden cursor-pointer"
                  onClick={() => setAvailabilityOpen(!isAvailabilityOpen)}
                >
                  <MdOutlineArrowDropDown />
                </span>
              </h2>
              <hr />
              <div  className={`md:block ${isAvailabilityOpen ? "block" : "hidden"} `}>
                <h3 className="font-bold mt-3">From</h3>
                <div className="flex bg-base-200 py-2 px-3 items-center justify-between">
                  <h4>27/02/2025</h4>
                  <span>
                    <MdOutlineDateRange></MdOutlineDateRange>
                  </span>
                </div>
                <h3 className="font-bold">To</h3>
                <div className="flex bg-base-200 py-2 px-3 items-center justify-between">
                  <h4>01/01/2025</h4>
                  <span>
                    <MdOutlineDateRange></MdOutlineDateRange>
                  </span>
                </div>
                <div className="bg-[#7BBCB0] text-xl font-medium text-center mt-3 text-white py-2">
                  <p className="">Check Availability</p>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 mb-2 w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title flex justify-between mb-3">
                Languages
                <span
                  className="md:hidden cursor-pointer"
                  onClick={() => setLanguageOpen(!isLanguageOpen)}
                >
                  <MdOutlineArrowDropDown />
                </span>
              </h2>
              <hr />
              <div
                className={`md:block ${isLanguageOpen ? "block" : "hidden"} `}
              >
                <div className="flex gap-2 mt-3 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">English</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Bangla</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Hindi</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Urdu</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">French</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Korean</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Arabic</label>
                </div>
                <p className="mt-3 text-[#7BBCB0] font-medium">
                  Show more languages
                </p>
              </div>
            </div>
          </div>

   
          <div className="card bg-base-100 mb-2 w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title flex justify-between mb-3">
                Duration
                <span
                  className="md:hidden cursor-pointer"
                  onClick={() => setDurationOpen(!isDurationOpen)}
                >
                  <MdOutlineArrowDropDown />
                </span>
              </h2>
              <hr />
              <div
                className={`md:block ${isDurationOpen ? "block" : "hidden"}`}
              >
                <div className="flex gap-2 mt-3 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">0-3 hours</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">3-5 hours</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">5-7 hours</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Full day (7+ hours)</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Multi-day</label>
                </div>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 mb-2 w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title flex justify-between mb-3">
                Destination
                <span
                  className="md:hidden cursor-pointer"
                  onClick={() => setDestinationOpen(!isDestinationOpen)}
                >
                  <MdOutlineArrowDropDown />
                </span>
              </h2>
              <hr />
              <div
                className={`md:block ${isDestinationOpen ? "block" : "hidden"} `}
              >
                <div className="flex gap-2 mb-2 items-center mt-3">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Dhaka</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Khulna</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Chittagang</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Sylhet</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Barishal</label>
                </div>
                <div className="flex gap-2 mb-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Mymensingh</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="">Rangpur</label>
                </div>
                <p className="mt-3 text-[#7BBCB0] font-medium">
                  Show more destinations
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:ml-6 flex-col w-full md:w-[calc(100%-240px)]">
          <div className="grid grid-cols-1 gap-3">
            {guides.map((guide) => (
              <ProfileOfGuide key={guide.id} guide={guide}></ProfileOfGuide>
            ))}
          </div>
          <div className="py-2 mt-4 border border-[#7BBCB0] text-center rounded-full">
            <h1 className="text-xl text-[#7BBCB0] font-medium">Learn More</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesProfiles;
