import { useEffect } from "react";
import { Banner, Hero, Navbar, Products, Subscribe, Testimonial, TopProducts } from "./components";
import AOS from "aos";
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial />
    </div>
  );
};

export default App;
