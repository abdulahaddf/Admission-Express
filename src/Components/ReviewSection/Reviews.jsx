/* eslint-disable react/prop-types */


const Reviews = ({ rev }) => {
  const { image, name, createAt,college } = rev;
  const { rating, review } = rev.rating;
  const createdAt = new Date(createAt);
  const formattedDate = createdAt.toDateString();
  console.log(rating);

  return (
    <div>
      

          <div className="flex gap-10  rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
            <div className="">
              <img
                alt="Reviewer"
                src={image}
                className="h-16 w-16 rounded-lg object-cover shadow-sm"
              />
              <p className="mt-1 text-xs font-medium text-gray-600">
                By {name}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-lg"> {college}</p>
              <p className="text-sm text-gray-500">Ratings: {rating}</p>
              <p className="text-sm text-gray-500">{review}</p>
            
              <dd className="text-xs text-gray-500">{formattedDate}</dd>
            </div>
          </div>
       
        {/* Add more SwiperSlides here */}
 
    </div>
  );
};

export default Reviews;
