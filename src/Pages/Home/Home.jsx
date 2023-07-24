import Banner from "../../Components/Banner/Banner";
import CollegeSection from "../../Components/Banner/CollegeSection/CollegeSection";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import Research from "../../Components/Research/Research";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";
import Footer from "../../Components/Shared/Footer/Footer";



import Navbar from "../../Components/Shared/Nav/Navbar";

const Home = () => {
  return (
    <div>



        <div className="md:h-[100vh] bg-[url(https://i.ibb.co/GCvzwr3/ryan-ledbetter-218-VIk-NIxjg-unsplash.jpg)] bg-cover bg-center bg-no-repeat">

<Navbar></Navbar>

<Banner></Banner>

</div>
<CollegeSection></CollegeSection>
    <PhotoGallery></PhotoGallery>
    <Research></Research>
    <ReviewSection></ReviewSection>
   <Footer></Footer>
    </div>
  );
};

export default Home;
