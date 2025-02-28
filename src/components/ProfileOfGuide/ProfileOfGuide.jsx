import { FaStar } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";
import { MdOutlineDirectionsTransitFilled } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { RiGroup3Fill } from "react-icons/ri";
import { FaWalking } from "react-icons/fa";
import PropTypes from "prop-types";


const ProfileOfGuide = ({ guide }) => {
  const {
    image,
    location,
    name,
    reviews,
    rating,
    duration,
    transport,
    people,
    family_plan,
    price,
    currency,
  } = guide;

  const maxStarsRating = 5;
  let ratingStars = [];
  for (let i = 0; i < maxStarsRating; i++) {
    ratingStars.push(<FaStar color={i < rating ? "gold" : "gray"}></FaStar>);
  }

  return (
    <div>
      <div>
        <div className="card items-center bg-base-100 py-1 px-2  shadow-sm">
          <div className="grid md:grid-cols-4">
            <figure>
              <img className="md:w-full md:h-56" src={image} alt="Guides"/>
            </figure>
            <div className="card-body md:col-span-3">
              <div className="md:flex items-center mb-3">
                <div className="bg-[#7BBCB0] w-full md:w-60 py-1 rounded-3xl mr-5 mb-3 md:mb-0">
                  <h2 className="card-title text-2xl justify-center">
                    {location}
                  </h2>
                </div>
          
                <p className="flex items-center ml-3 md:ml-0">
                  <span className="flex gap-1 mr-3">{ratingStars}</span> (
                  {reviews} reviews)
                </p>
              </div>

              <div className="grid grid-cols-2 justify-between items-center">
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold">{name}</h1>
                  <div className="grid md:grid-cols-2 mt-4">
                    <p className="flex items-center md:text-xl gap-1">
                      <MdOutlineUpdate></MdOutlineUpdate>
                      {duration}
                    </p>
                    <p className="flex items-center gap-1 md:text-xl">
                      {transport ? (
                        <MdOutlineDirectionsTransitFilled></MdOutlineDirectionsTransitFilled>
                      ) : (
                        <FaWalking></FaWalking>
                      )}
                      <span>transfort</span>
                    </p>
                    <p className="md:text-xl">
                      {family_plan ? (
                        <span className="flex items-center gap-1">
                          <HiUserGroup></HiUserGroup><span>Family</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <RiGroup3Fill></RiGroup3Fill>
                          {people} Peoples
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="md:ml-40 ml-10">
                  <h1 className="text-[#7BBCB0] text-3xl flex font-bold">
                    {currency} <span>{price}</span>
                  </h1>
                  <p className="ml-2">per person</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

ProfileOfGuide.propTypes = {
  guide:PropTypes.object
}

export default ProfileOfGuide;
