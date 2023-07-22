import { useEffect, useState } from "react";
import Navbar from "../../Components/Shared/Nav/Navbar";
import { Link } from "react-router-dom";


const Admission = () => {
    const [Colleges, setCollege] = useState([]);
    useEffect(() => {
      fetch("data.json").then((res) =>
        res.json().then((data) => setCollege(data))
      );
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="heading">Get Admitted</h1>
            <div>
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
                <td>{clg.name}</td>
                <td>{clg.admissionDates}</td>
                <td><Link className="btn-custom">Apply</Link></td>
               
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