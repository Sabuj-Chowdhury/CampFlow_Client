import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[55vh] md:h-[60vh] lg:h-[70vh]"
      style={{
        "--navbar-height": "72px",
      }}
    >
      <Swiper
        modules={[Parallax, Pagination, Autoplay]}
        parallax={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative">
          <img
            src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Success Stories"
            className="absolute inset-0 w-full h-full object-cover"
            data-swiper-parallax="-20%"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div
            className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full"
            data-swiper-parallax="-200"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Inspiring Success Stories
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
              Experience the life-changing moments of our medical campaigns.
              Together, we make a difference.
            </p>
            <Link
              to="/available-camps"
              className="bg-teal-600 hover:bg-teal-500 px-6 py-3 text-lg font-semibold rounded-lg transition"
            >
              Join Our Journey
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative">
          <img
            src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Impactful Moments"
            className="absolute inset-0 w-full h-full object-cover"
            data-swiper-parallax="-20%"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div
            className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full"
            data-swiper-parallax="-200"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Impactful Moments
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
              Witness the transformative power of compassion and medical care in
              action.
            </p>
            <Link
              to="/available-camps"
              className="bg-teal-600 hover:bg-teal-500 px-6 py-3 text-lg font-semibold rounded-lg transition"
            >
              Explore More
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative">
          <img
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Achievements"
            className="absolute inset-0 w-full h-full object-cover"
            data-swiper-parallax="-20%"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div
            className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full"
            data-swiper-parallax="-200"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Celebrating Achievements
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
              Discover the milestones we’ve reached together and the lives we’ve
              touched.
            </p>
            <Link
              to="/available-camps"
              className="bg-teal-600 hover:bg-teal-500 px-6 py-3 text-lg font-semibold rounded-lg transition"
            >
              Get Involved
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
