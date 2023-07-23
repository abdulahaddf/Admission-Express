/* eslint-disable react/prop-types */




const MyCollegeCard = ({ data }) => {
    console.log(data);
    const {
      name,
      imageLink,
      admissionDates,
      events,
      researchHistory,
      sports,
     
      researchWorks,
     
    } = data.clg;
  
    const { subject, email, phone, address, dob, } = data.info;
  
    return (
      <div className="w-4/5 mx-auto">
        <div className="block rounded-lg p-4 m-2 shadow-sm shadow-indigo-100">
          <img alt={name} src={imageLink} className="w-full rounded-md object-cover" />
  
          <div className="mt-2 flex justify-evenly">
          <div>
            <dl>
              <div>
                <dt className="sr-only">Admission Dates</dt>
                <dd className="text-sm text-gray-500">{admissionDates}</dd>
              </div>
              <div>
                <p className="font-bold text-xl">{name}</p>
              </div>
            </dl>
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Events</p>
                <p className="font-medium">{events}</p>
              </div>
            </div>

<div className="py-3 space-y-2">
<p className="text-gray-500">Research Works</p>
    {
        researchWorks.map(rec  => <div key={rec.title}>
             <p>{rec.title}</p>
             <p>Author: {rec.author}</p>
             <p>Published: {rec.publicationDate}</p>
        
        </div>)
    }
</div>

           





            <div className="mt-6 flex items-center gap-8">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Research History</p>
                  <p className="font-medium">{researchHistory}</p>
                </div>
              </div>
  
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Sports</p>
                  <p className="font-medium">{sports}</p>
                </div>
              </div>
            </div>
  </div>
            {/* Display data.info properties */}
            <div>

          
            <p className="text-center text-lg">Applicant Details</p>
            <div className="flex gap-32 ">

           
         <div className="space-y-2">
            <div>
              <p className="text-gray-500">Name</p>
              <p className="font-medium">{data.info.name}</p>
            </div>
            <div>
              <p className="text-gray-500">Subject</p>
              <p className="font-medium">{subject}</p>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">{email}</p>
            </div>
            </div>
           <div className="space-y-2">
        
            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium">{phone}</p>
            </div>
            <div>
              <p className="text-gray-500">Address</p>
              <p className="font-medium">{address}</p>
            </div>
            <div>
              <p className="text-gray-500">Date of Birth</p>
              <p className="font-medium">{dob}</p>
            </div>
           </div>

           </div>
          </div>
          </div>
     
        </div>
      </div>
    );
  };
  

  

export default MyCollegeCard;