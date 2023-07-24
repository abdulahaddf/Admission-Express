import { useLocation } from "react-router-dom";
import { useContext } from "react";
import Navbar from "../../Components/Shared/Nav/Navbar";
import { useForm, Controller } from 'react-hook-form';
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Apply = () => {
    const location = useLocation();
// // console.log(props)

    const  clg  = location.state;
    console.log(clg);


const {user} = useContext(AuthContext);
const { handleSubmit, control, reset } = useForm();

  const onSubmit = (info) => {
    
    // console.log(data);
    const data = {
        info , clg
      };
      fetch("http://localhost:5000/info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.acknowledged) {
            reset()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Applied successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      console.log(data);
  };


    return (
        <div>
           <Helmet>
        <title>Express Admission | Apply</title>
      </Helmet>
            <Navbar></Navbar>
            <h1 className="heading">Apply For Your College</h1>
            <div>
            <div className="flex justify-center items-center p-5 md:px-10">
      <form className="w-2/5 max-w-4/5 bg-gray-100 p-4 rounded-md shadow-md" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Candidate Name
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue={user.name}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="name"
                defaultValue={user.name}
                placeholder="Enter candidate name"
                className="w-full px-3 py-2 rounded-md border border-blue focus:outline-none focus:border-blue-500"
                required
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
            Subject
          </label>
          <Controller
            name="subject"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="subject"
                placeholder="Enter subject"
                className="w-full px-3 py-2 rounded-md border border-blue focus:outline-none focus:border-blue-500"
                required
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Candidate Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue={user.email}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                id="email"
                value={user.email}
                defaultValue={user.email}
                placeholder="Enter candidate email"
                className="w-full px-3 py-2 rounded-md border border-blue focus:outline-none focus:border-blue-500"
                required
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Candidate Phone Number
          </label>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                id="phone"
                placeholder="Enter candidate phone number"
                className="w-full px-3 py-2 rounded-md border border-blue focus:outline-none focus:border-blue-500"
                required
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="address"
                placeholder="Enter address"
                className="w-full px-3 py-2 rounded-md border border-blue focus:outline-none focus:border-blue-500"
                required
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
            Date of Birth
          </label>
          <Controller
            name="dob"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="date"
                id="dob"
                placeholder="Enter date of birth"
                className="w-full px-3 py-2 rounded-md border border-blue focus:outline-none focus:border-blue-500"
                required
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image
          </label>
          <Controller
            name="image"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="url"
                id="image"
                placeholder="Enter a URL of your image"
                className="w-full px-3 py-2 rounded-md border border-blue focus:outline-none focus:border-blue-500"
               
              />
            )}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn-custom"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
             </div>
        </div>
    );
};

export default Apply;