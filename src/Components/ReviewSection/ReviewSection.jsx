import { useEffect, useState } from "react";
import Reviews from "./Reviews";


const ReviewSection = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/review')
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    console.log(data);
    return (
        <div>
            <h1 className="heading">Latest Reviews</h1>
<div className="grid grid-cols-3 gap-5">
    {
        data?.map(rev => <Reviews key={rev._id} rev={rev}></Reviews>)
    }
</div>
        </div>
    );
};

export default ReviewSection;