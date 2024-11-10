import Img1 from "../../assets/products/product-1.png";
import Img2 from "../../assets/products/product-2.jpg";
import Img3 from "../../assets/products/product-3.jpg";
import Img4 from "../../assets/products/product-4.jpg";
import Img5 from "../../assets/products/product-5.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Ethnic",
    rating: 4.0,
    color: "black",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Ethnic",
    rating: 4.5,
    color: "blue",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Women Ethnic",
    rating: 3.8,
    color: "green",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Women Ethnic",
    rating: 4.8,
    color: "yellow",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for You</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor, siaut consequatur necessitatibus corporis porr
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
            {ProductsData.map((data) => (
              <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-3">
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400"/>
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;