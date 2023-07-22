


const PhotoGallery = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="heading">Gallery</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="">
            <img
                 alt="Graduates"
                 src="https://i.ibb.co/vQPT0bf/e45ec13d-0fe0-4f77-9519-abb6da094132.webp"
                 className=" object-cover "/>
            </div>
            <div className="">
            <img
                 alt="Graduates"
                 src="https://i.ibb.co/mSCCB9D/istockphoto-482362583-612x612.jpg"
                 className=" object-cover "/>
            </div>
            <div className="">
            <img
                 alt="Graduates"
                 src="https://i.ibb.co/yfWgDYn/istockphoto-484741611-612x612.jpg"
                 className=" object-cover "/>
            </div>
            <div className="">
            <img
                 alt="Graduates"
                 src="https://i.ibb.co/kJW8gMP/825a3922-b853-44c4-abff-80bbf9ba1508.webp"
                 className=" object-cover "/>
            </div>
            <div className="">
            <img
                 alt="Graduates"
                 src="https://i.ibb.co/xjYgNHV/e21f0c78-80d5-49df-9e0f-cf98927bf4b7.jpg"
                 className=" object-cover "/>
            </div>
            <div className="">
            <img
                 alt="Graduates"
                 src="https://i.ibb.co/RpBPZj3/stock-photo-happy-group-students-graduation-gowns.jpg"
                 className=" object-cover "/>
            </div>
            </div>
        </div>
    );
};

export default PhotoGallery;