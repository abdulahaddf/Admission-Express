import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Shared/Nav/Navbar";
import { useEffect } from "react";

const SingleCollege = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const clg = location.state;
  console.log(clg);
  const {
    name,
    imageLink,
    admissionDates,
    events,
    researchHistory,
    sports,
    admissionProcess,
    researchWorks,
    sportsCategories,
  } = clg;
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="heading ">College Details</h1>
      <div>
        <div className="block rounded-lg p-4 m-2 shadow-sm shadow-indigo-100">
          <img
            alt={name}
            src={imageLink}
            className="w-full rounded-md object-cover"
          />

          <div className="p-5 md:py-10 md:flex justify-evenly border-4 border-x-green">
            <div>
              <dl>
                <div>
                  <dt className="sr-only">Admission Dates</dt>
                  <dd className=" text-green text-xl">{admissionDates}</dd>
                </div>
                <div>
                  <p className="font-bold py-2 text-2xl">{name}</p>
                </div>
              </dl>
              <div className="mt-1.5 sm:mt-0">
                <p className="text-green text-xl">Admission Details</p>
                <p className="font-medium whitespace-pre-line">
                  {admissionProcess}
                </p>
              </div>
              <div className="py-3 space-y-2">
                <p className="text-green text-xl">Research Works</p>
                {researchWorks.map((rec) => (
                  <div key={rec.title}>
                    <p>{rec.title}</p>
                    <p>Author: {rec.author}</p>
                    <p>Published: {rec.publicationDate}</p>
                  </div>
                ))}
              </div>

              <div className="">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-green text-xl">Research History</p>
                    <p className="font-medium">{researchHistory}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-green text-xl">Events</p>
                  <p className="font-medium">{events}</p>
                </div>
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-green text-xl">Sports</p>
                  <p className="font-medium">{sports}</p>
                </div>
              </div>
              <div className="mt-1.5 sm:mt-0">
                <div className="py-3 space-y-2">
                  <p className="text-green text-xl">Sports Categories</p>
                  {sportsCategories.map((spt) => (
                    <div key={spt.category}>
                      <p>Category : {spt.category}</p>
                      <p>Coach : {spt.coach}</p>
                      <p>Training Schedule: {spt.trainingSchedule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollege;
