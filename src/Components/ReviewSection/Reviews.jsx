/* eslint-disable react/prop-types */


import { AiFillStar } from "react-icons/ai";


const Reviews = ({ rev }) => {
  const { image, name, createAt,college } = rev;
  const { rating, review } = rev.rating;
  const createdAt = new Date(createAt);
  const formattedDate = createdAt.toDateString();
  const defaultImage ="https://i.ibb.co/g9Q7939/user-alt.png";
//   console.log(rating);

  return (
    <div data-aos="zoom-in-up">
      

          <div className="flex gap-10  rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
            <div className="w-1/3">
              <img
                alt="Reviewer"
                src={image || defaultImage}
                className="h-16 rounded-lg object-cover shadow-sm"
              />
              <p className="mt-1 w-full text-xs font-medium text-gray-600">
                By {name}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-lg"> {college}</p>
              <p className="text-sm text-gray-500 flex items-center ">Ratings: {rating} <AiFillStar></AiFillStar></p>
              <p className="text-md">{review}</p>
            
              <dd className="text-xs text-gray-500">{formattedDate}</dd>
            </div>
          </div>
       
        {/* Add more SwiperSlides here */}
 
    </div>
  );
};

export default Reviews;
