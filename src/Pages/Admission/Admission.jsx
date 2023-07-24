import { useEffect, useState } from "react";
import Navbar from "../../Components/Shared/Nav/Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Admission = () => {
  const [Colleges, setCollege] = useState([]);
  useEffect(() => {
    fetch(
      "https://express-server-production-3274.up.railway.app/colleges"
    ).then((res) => res.json().then((data) => setCollege(data)));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Express Admission | Admission</title>
      </Helmet>
      <Navbar></Navbar>
      <h1 className="heading ">Get Admitted</h1>
      <div className="md:w-11/12 mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra shadow-xl w-full text-center">
            {/* head */}
            <thead className="bg-blue text-white">
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Researches</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Colleges.map((clg, index) => (
                <tr key={clg._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-32 rounded-md"
                      src={clg.imageLink}
                      alt="college"
                    />
                  </td>
                  <td className="text-xl hover:underline hover:text-green">
                    <Link to="/apply" state={clg}>
                      {clg.name}
                    </Link>
                  </td>
                  <td>{clg.admissionDates}</td>
                  <td>
                    {" "}
                    <Link to="/apply" state={clg} className="btn-custom">
                      Apply
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admission;
