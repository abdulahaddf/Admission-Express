/* eslint-disable react/prop-types */
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ClgCard = ({clg}) => {
    const {
        name,
        imageLink,
        admissionDates,
        events,
        researchHistory,
        sports,
     
      } = clg;
    return (
        <div className="">
              <div className="block rounded-lg p-4 m-2 shadow-sm shadow-indigo-100">
      <img
        alt={name}
        src={imageLink}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Admission Dates</dt>
            <dd className="text-sm text-gray-500">{admissionDates}</dd>
          </div>
          <div>
          
            <p className="font-bold text-xl">{name}</p>
          </div>
          
        </dl>
        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Events</p>
              <p className="font-medium">{events}</p>
            </div>
          </div>
        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Research History</p>
              <p className="font-medium">{researchHistory}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Sports</p>
              <p className="font-medium">{sports}</p>
            </div>
          </div>
        </div>
        <Link to="/details"  state= { clg } className="flex justify-end text-3xl hover:text-green">

              <FaArrowAltCircleRight/>
        </Link>
      </div>
    </div>
        </div>
    );
};

export default ClgCard;