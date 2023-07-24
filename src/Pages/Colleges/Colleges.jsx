import { useEffect, useState } from "react";
import Navbar from "../../Components/Shared/Nav/Navbar";
import ClgCard from "./ClgCard";
import { Helmet } from "react-helmet";


const Colleges = () => {
    const [Colleges, setCollege] = useState([]);
    useEffect(() => {
      fetch("data.json").then((res) =>
        res.json().then((data) => setCollege(data))
      );
    }, []);
    return (
        <div>
           <Helmet>
        <title>Express Admission | Colleges</title>
      </Helmet>
            <Navbar></Navbar>
            <h1 className="heading my-10">All Colleges</h1>

            <div className="grid md:grid-cols-2 gap-5 w-11/12 mx-auto">

            {
                Colleges.map(clg => <ClgCard  key={clg.name} clg={clg}> </ClgCard>)
            }
            </div>
        </div>
    );
};

export default Colleges;