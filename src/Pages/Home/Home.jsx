import Banner from "../../Components/Banner/Banner";
import CollegeSection from "../../Components/Banner/CollegeSection/CollegeSection";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import Research from "../../Components/Research/Research";
import Footer from "../../Components/Shared/Footer/Footer";



import Navbar from "../../Components/Shared/Nav/Navbar";

const Home = () => {
  return (
    <div>



        <div className="md:h-[100vh] bg-[url(https://i.ibb.co/xjYgNHV/e21f0c78-80d5-49df-9e0f-cf98927bf4b7.jpg)] bg-cover bg-center bg-no-repeat">

<Navbar></Navbar>

<Banner></Banner>

</div>
<CollegeSection></CollegeSection>
    <PhotoGallery></PhotoGallery>
    <Research></Research>
   <Footer></Footer>
    </div>
  );
};

export default Home;
