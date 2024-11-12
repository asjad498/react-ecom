import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import Banner from "../../assets/footer-img.jpg";
import FooterLogo from "../../assets/logo.png";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={FooterLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              maiores dolore inventore, corrupti ad alias sunt fuga maxime
              temporibus.
            </p>
          </div>
          {/*Footer Link */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li
                      className="cursor-pointer hover:translate-x-1 duration-300 text-gray-200"
                      key={index}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  UseFul Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li
                      className="cursor-pointer hover:translate-x-1 duration-300 text-gray-200"
                      key={index}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Social Links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="">
                  <FaInstagram className="text-3xl"/>
                </a>
                <a href="">
                  <FaFacebook className="text-3xl"/>
                </a>
                <a href="">
                  <FaLinkedin className="text-3xl"/>
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 1234567890</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;