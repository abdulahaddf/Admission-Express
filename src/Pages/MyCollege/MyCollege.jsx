/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Shared/Nav/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import MyCollegeCard from "./MyCollegeCard";
import { Helmet } from "react-helmet";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [info, setInfo] = useState();
  useEffect(() => {
    if (user?.email) {
      // Check if user.email is available before making the API call
      fetch(
        `https://express-server-production-3274.up.railway.app/myinfo/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setInfo(data))
        .catch((error) => console.error(error));
    }
  }, [user?.email]);
  console.log(info);
  return (
    <div>
      <Helmet>
        <title>Express Admission | My College</title>
      </Helmet>
      <Navbar></Navbar>
      {info?.length > 0 && info ? (
        <>
          {" "}
          <h1 className="heading">All My Applied Colleges</h1>
          <div>
            {info?.map((data) => (
              <MyCollegeCard key={data.info._id} data={data}></MyCollegeCard>
            ))}
          </div>
        </>
      ) : (
        <p className="heading">You Did not applied in any College</p>
      )}
    </div>
  );
};

export default MyCollege;
