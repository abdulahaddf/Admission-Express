import { useForm } from "react-hook-form";
import Navbar from "../../Components/Shared/Nav/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const ResetForm = () => {
  const { auth, sendPasswordResetEmail } = useContext(AuthContext);
  const { handleSubmit, register } = useForm();

  const handleReset = (data) => {
    const email = data.email;
    console.log(email);
    sendPasswordResetEmail(auth, email)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sent Password Reset mail",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Check Your Mail ",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="heading ">Reset Your Password</h1>
      <div className="flex justify-center items-center">
        <form
          className="w-96 bg-gray-100 p-4 rounded-md shadow-md"
          onSubmit={handleSubmit(handleReset)}
        >
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Enter Your Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="block w-full px-4 py-2 mt-2 text-blue bg-white border rounded-md focus:border-blue focus:ring-green focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="btn-custom">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetForm;
