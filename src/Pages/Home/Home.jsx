import Banner from "../../Components/Banner/Banner";
import CollegeSection from "../../Components/Banner/CollegeSection/CollegeSection";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";


import Navbar from "../../Components/Shared/Nav/Navbar";

const Home = () => {
  return (
    <div>



        <div className="md:h-[100vh] bg-[url(https://i.ibb.co/X3LqdPc/dcdf6d2c62407dffdcdf6d2c62407dffpang-yuhao-kd5cxw-ZOK4-unsplash-min-1.jpg)] bg-cover bg-center bg-no-repeat">

<Navbar></Navbar>

<Banner></Banner>

</div>
<CollegeSection></CollegeSection>
    <PhotoGallery></PhotoGallery>

    </div>
  );
};

export default Home;
