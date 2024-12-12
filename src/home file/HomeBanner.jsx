

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


const HomeBanner = () => {

    return (
        <div>

    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div>
        <div>
        <div
        className="hero min-h-screen"
        style={{
        backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/024/473/582/non_2x/tasty-homemade-dark-chocolate-cake-with-dark-background-generative-ai-free-photo.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
        <h1 className="mb-5 text-6xl play font-bold text-white ">WELCOME</h1>
        <p className="mb-5 text-white nav text-2xl ">
        "People who love to eat are always the best people." – Julia Child
        </p>
        <div>
        <a href="#_" class="relative inline-block text-lg group">
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span class="relative play ">Book Table</span>
        </span>
        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <div>
        <div
        className="hero min-h-screen"
        style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1625604086816-4bfaf603e842?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGZvb2QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
        <h1 className="mb-5 text-6xl play font-bold text-white ">WELCOME</h1>
        <p className="mb-5 text-white nav text-2xl ">
        "People who love to eat are always the best people." – Julia Child
        </p>
        <div>
        <a href="#_" class="relative inline-block text-lg group">
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span class="relative play ">Book Table</span>
        </span>
        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        </SwiperSlide>
        <SwiperSlide>

        <div>
        <div>
        <div
        className="hero min-h-screen"
        style={{
        backgroundImage: "url(https://images.pexels.com/photos/5702766/pexels-photo-5702766.jpeg?cs=srgb&dl=pexels-ekaterina-bolovtsova-5702766.jpg&fm=jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
        <h1 className="mb-5 text-6xl play font-bold text-white ">WELCOME</h1>
        <p className="mb-5 text-white nav text-2xl ">
        "People who love to eat are always the best people." – Julia Child
        </p>
        <div>
        <a href="#_" class="relative inline-block text-lg group">
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span class="relative play ">Book Table</span>
        </span>
        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        </SwiperSlide>
       
      </Swiper>
    </>
            
        </div>
    );
};

export default HomeBanner;