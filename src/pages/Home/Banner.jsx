import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Swiper
      spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen shadow-[#1967D2] shadow-2xl"
            style={{
              backgroundImage: "url(banner4.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">
                  {" "}
                  Welcome to Nittyoponner Bazar
                </h1>
                <p className="mb-5 font-semibold text-xl">
                  Discover a world of fresh, quality groceries delivered with
                  convenience and care right to your door.
                </p>
                <div className="text-center">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-teal-500 text-white border-0">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen shadow-[#1967D2] shadow-2xl"
            style={{
              backgroundImage: "url(dairy.jpg)",
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">
                  {" "}
                  Shop Smart, Save Big
                </h1>
                <p className="mb-5 font-semibold text-xl">
                  Explore daily deals and special discounts to fill your cart
                  with quality items while staying within budget.
                </p>
                <div className="text-center">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-teal-500 text-white border-0">
                    <Link to="/error">See Offers</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen shadow-[#1967D2] shadow-2xl"
            style={{
              backgroundImage: "url(pizza.jpeg)",
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">
                  Quality You Trust, Convenience You Love
                </h1>
                <p className="mb-5 font-semibold text-xl">
                  Experience easy, reliable grocery shopping with a selection
                  you can trust and delivery that fits your schedule.
                </p>
                <div className="text-center">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-teal-500 text-white border-0">
                    Go to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen shadow-[#1967D2] shadow-2xl"
            style={{
              backgroundImage: "url(coffee.jpg)",
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">
                  Easy Grocery Shopping, Anytime, Anywhere
                </h1>
                <p className="mb-5 font-semibold text-xl">
                  Enjoy hassle-free shopping from anywhere and have your
                  groceries delivered straight to your home, effortlessly.
                </p>
                <div className="text-center">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-teal-500 text-white border-0">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 bg-gray-200 border-1 border-slate-700 rounded-b-lg shadow-lg mx-1 md:mx-4 py-8">
        <div className="flex flex-row gap-2 py-6 px-10 items-center">
          <div>
            <PiSuitcaseSimpleBold className="text-4xl text-teal-600" />
          </div>
          <div className="text-neutral-700">
            <p className="font-bold">Privacy Policy</p>
            <p>Check before dealing</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 py-6 px-10 items-center">
          <div>
            <TbTruckDelivery className="text-4xl text-teal-600" />
          </div>
          <div className="text-neutral-700">
            <p className="font-bold">Safe Delivery Service</p>
            <p>Get products in time safely</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 py-6 px-10 items-center">
          <div>
            <TbMoneybag className="text-4xl text-teal-600" />
          </div>
          <div className="text-neutral-700">
            <p className="font-bold">Fast & Secure Payment</p>
            <p>Enjoy secure payment</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 py-6 px-10 items-center">
          <div>
            <FaPhone className="text-3xl text-teal-600" />
          </div>
          <div className="text-neutral-700">
            <p className="font-bold">Customer Support</p>
            <p>Call us at +996627381</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
