import { useEffect, useState } from "react";
import ClgCard from "../../../Pages/Colleges/ClgCard";

const CollegeSection = () => {
  const [Colleges, setCollege] = useState([]);
  useEffect(() => {
    fetch(
      "https://express-server-production-3274.up.railway.app/colleges"
    ).then((res) => res.json().then((data) => setCollege(data)));
  }, []);
  return (
    <div>
      <h1 className="heading my-10">Featured Colleges</h1>

      <div className="grid md:grid-cols-2 gap-5 w-11/12 mx-auto">
        {Colleges.slice(0, 4).map((clg) => (
          <ClgCard key={clg.name} clg={clg}>
            {" "}
          </ClgCard>
        ))}
      </div>
    </div>
  );
};

export default CollegeSection;
