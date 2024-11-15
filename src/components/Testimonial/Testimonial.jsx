import Slider from "react-slick";
import Img1 from "../../assets/testimonial/testimonial-1.jpg";
import Img2 from "../../assets/testimonial/testimonial-2.jpg";
import Img3 from "../../assets/testimonial/testimonial-3.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint quaerat tempora iste provident tenetur doloribus debitis maxime suscipit amet.",
    img: Img1,
  },
  {
    id: 2,
    name: "John",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint quaerat tempora iste provident tenetur doloribus debitis maxime suscipit amet.",
    img: Img2,
  },
  {
    id: 3,
    name: "Maria",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint quaerat tempora iste provident tenetur doloribus debitis maxime suscipit amet.",
    img: Img3,
  },
  {
    id: 4,
    name: "Sam",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint quaerat tempora iste provident tenetur doloribus debitis maxime suscipit amet.",
    img: Img1,
  },
  {
    id: 5,
    name: "Sam",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint quaerat tempora iste provident tenetur doloribus debitis maxime suscipit amet.",
    img: Img2,
  },
  {
    id: 6,
    name: "Ramesh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint quaerat tempora iste provident tenetur doloribus debitis maxime suscipit amet.",
    img: Img3,
  },
];

const Testimonial = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 6024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor, siaut consequatur necessitatibus corporis porr
          </p>
        </div>
        {/* Testimonial Card */}
        <div data-aos="zoom-in"  >
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20 "
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 ">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
