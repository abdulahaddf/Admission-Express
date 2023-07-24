import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";



const Banner = () => {
    return (
        <div className="z-10 max-h-[92vh] bg-white bg-opacity-0 ">
          <SearchBox></SearchBox>
            

<section>
  <div
    className=" bg-gradient-to-r "></div>

  <div
    className=" flex justify-center items-start w-4/5 mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-screen  lg:px-8   z-20   ">
    <div className="max-w-2xl text-black bg-white bg-opacity-80 p-10  md:rounded-ss-[60px] border-r-green border-r-8  ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us help you to find

        <strong className="block font-extrabold text-green">
          Your College
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Discover the perfect educational journey that matches your aspirations and goals.
Explore a world of possibilities and find your ideal college experience.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to="#"
          className="btn-new"
        >
          Get Started
        </Link>

      
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Banner;