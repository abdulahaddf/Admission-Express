/* eslint-disable react/prop-types */

import { Rating } from "@smastrom/react-rating";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MyCollegeCard = ({ data }) => {
  // console.log(data);
  const {
    name,
    imageLink,
    admissionDates,
    events,
    researchHistory,
    sports,

    researchWorks,
  } = data.clg;

  const { subject, email, phone, address, dob, image } = data.info;
  // console.log(data.info);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      review: "",
      rating: 0,
    },
  });

  function onSubmit(rating) {
    const review = {
      rating: rating,
      image: image,
      college: name,
      name: data?.info?.name || "Unknown",
    };
    console.log(review);
    fetch("https://express-server-production-3274.up.railway.app/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }

  return (
    <div className="md:w-4/5 mx-auto">
      <div className="block rounded-lg p-4 m-2 shadow-sm shadow-indigo-100">
        <img
          alt={name}
          src={imageLink}
          className="w-full rounded-md object-cover"
        />

        <div className="mt-2 md:flex justify-around">
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
              {researchWorks.map((rec) => (
                <div key={rec.title}>
                  <p>{rec.title}</p>
                  <p>Author: {rec.author}</p>
                  <p>Published: {rec.publicationDate}</p>
                </div>
              ))}
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Research History</p>
                <p className="font-medium">{researchHistory}</p>
              </div>
            </div>

            <div className=" sm:shrink-0 sm:items-center sm:gap-2">
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Sports</p>
                <p className="font-medium">{sports}</p>
              </div>
            </div>
          </div>
          {/* Display data.info properties */}
          <div>
            <p className="text-center text-lg">Applicant Details</p>
            <div className="md:flex gap-32 ">
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
            <div>
              {/* rating Form */}

              <div className="w-96 p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p>Your Review</p>
                  <label className="flex" htmlFor="review">
                    <textarea
                      className="textarea border-green md:w-64"
                      type="text"
                      id="review"
                      {...register("review", { required: true })}
                    />
                  </label>
                  {errors.review && <div>Review is required.</div>}

                  <div>
                    <div id="rating_label">Rating</div>
                    <Controller
                      control={control}
                      name="rating"
                      rules={{
                        validate: (rating) => rating > 0,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Rating
                          value={value}
                          isRequired
                          onChange={onChange}
                          visibleLabelId="rating_label"
                          onBlur={onBlur}
                        />
                      )}
                    />
                    {errors.rating && <div>Rating is required.</div>}
                  </div>

                  <button className="btn-custom" type="submit">
                    Submit review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollegeCard;
