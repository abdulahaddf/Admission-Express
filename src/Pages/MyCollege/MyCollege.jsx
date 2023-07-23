/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Shared/Nav/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import MyCollegeCard from "./MyCollegeCard";


const MyCollege = () => {
    const {user} = useContext(AuthContext);
    // console.log(user.email);
    const [info, setInfo] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/colleges?emeil=${user.email}`)
        .then(res => res.json())
        .then(data => setInfo(data))
    },[info])
    console.log(info);
    return (
        <div>
            <Navbar></Navbar>
           {
            info.length > 0 && info ? <> <h1 className="heading">All My Applied Colleges</h1>
            <div>
                {
                    info?.map(data => <MyCollegeCard key={data.info._id} data={data}></MyCollegeCard>)
                }
            </div></> : <p>You Did not applied in any College</p>
           }
        </div>
    );
};

export default MyCollege;