import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import PropTypes from "prop-types";

const Banner = ({ onPress }) => {
  // Array of banner data
  const banners = [
    {
      backgroundImage: "url(banner4.jpeg)",
      title: "Welcome to Nittyoponner Bazar",
      description: "Discover a world of fresh, quality groceries delivered with convenience and care right to your door.",
      buttonText: "Order Now",
      buttonUrl: "/order",
    },
    {
      backgroundImage: "url(grocery_banner.png)",
      title: "Fresh Groceries Delivered Right to Your Doorstep",
      description: "Enjoy the best of local and international foods, delivered with freshness and care.",
      buttonText: "Order Now",
      buttonUrl: "/grocery",
    },
    {
      backgroundImage: "url(beverage_banner.png)",
      title: "Refresh with Premium Beverages",
      description: "From energizing coffees to refreshing juices, explore a wide range of quality beverages.",
      buttonText: "Order Now",
      buttonUrl: "/beverage",
    },
    {
      backgroundImage: "url(snacks_banner.png)",
      title: "Snack Smart, Snack Happy",
      description: "Indulge in our delicious selection of snacks, from crispy treats to savory bites.",
      buttonText: "Order Now",
      buttonUrl: "/snacks",
    },
    {
      backgroundImage: "url(bakery_banner.png)",
      title: "Freshly Baked, Just for You",
      description: "Discover the aroma and taste of fresh-baked breads, pastries, and sweets.",
      buttonText: "Order Now",
      buttonUrl: "/bakery",
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero min-h-[30rem] shadow-[#1967D2] shadow-2xl"
              style={{
                backgroundImage: banner.backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                  <h1 className="mb-5 text-3xl font-extrabold">
                    {banner.title}
                  </h1>
                  <p className="mb-5 text-lg">
                    {banner.description}
                  </p>
                  <div className="text-center">
                    {banner.buttonUrl.startsWith("http") ? (
                      <a
                        href={banner.buttonUrl}
                        className="px-5 py-3 bg-teal-500 text-white text-base rounded-md border-0"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => onPress(index)}
                      >
                        {banner.buttonText}
                      </a>
                    ) : (
                      <Link
                        to={banner.buttonUrl}
                        className="px-5 py-3 bg-teal-500 text-white text-base rounded-md border-0"
                        onClick={() => onPress(index)}
                      >
                        {banner.buttonText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Prop validation for onPress
Banner.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Banner;