
import { useTypewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2"

import { Pagination } from 'swiper/modules';
import { useEffect } from 'react';




const Banner = () => {
  
    useEffect(() => {
        AOS.init({ duration: 1500, });
    }, [])


    const [text] = useTypewriter({
        words: ['Limited Time Offer', 'Donot Miss Out', 'Book Now!'],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const offerbutton=() => {
        Swal.fire({
            title: "50% off",
            text: "Limited Time Offer Donot Miss Out Book Now!",
            imageUrl: "https://i.ibb.co/mv6PZH8/point3d-commercial-imaging-ltd-oxe-CZrodz78-unsplash.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
    }

    return (
        <div className=' '>
            <div className=' relative bg-cover h-[90vh] bg-center  bg-no-repeat    bottom-0 bg-[url("https://i.ibb.co/vLM7SPH/yuliya-pankevich-oyxs-G2-Lh-u-A-unsplash.jpg")]'>
                <div className='absolute inset-0 bg-gradient-to-r  from-[#00000092] '></div>
                <div className=' relative mx-auto container h-[40vh]'>
                    <div className=' font-Poppins absolute   top-20 text-5xl  w-3/4  font-bold' data-aos="fade-up">
                        Exclusive Deals Await <br />
                        <span></span>
                        {text}|
                    </div>
                    <div className="  absolute bottom-1 top-60 lg:bottom-5 container" data-aos="fade-down">
                        <div style={{ "transform": "none" }}>
                            <a >
                                <button
                                    className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"><span
                                        className="absolute inset-0 overflow-hidden rounded-xl"><span
                                            className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        </span>
                                    </span>
                                    <div onClick={offerbutton}
                                        className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
                                        <span>Special Offers</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                            data-slot="icon" className="w-6 h-6">
                                            <path fillRule="evenodd"
                                                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <span
                                        className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=' ml-32 hidden lg:block' data-aos="fade-down">
                    <Swiper
                        slidesPerView={4}
                        centeredSlides={true}
                        spaceBetween={30}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}

                        className="mySwiper lg:w-full "
                    >
                        <SwiperSlide >
                            <div className="   bg-white border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a >
                                    <img className="rounded-lg  h-[45vh]" src="https://i.ibb.co/FWsS9CT/bilderboken-rlw-E8f8an-Oc-unsplash.jpg" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a>
                                    <img className="rounded-lg h-[45vh]" src="https://i.ibb.co/xYPfqrD/sasha-kaunas-x-Ea-Aoiz-NFV8-unsplash.jpg" alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a >
                                    <img className="rounded-lg h-[45vh]" src="https://i.ibb.co/gZ5zdqc/manuel-moreno-DGa0-LQ0y-DPc-unsplash.jpg" alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a >
                                    <img className="rounded-lg h-[45vh]" src="https://i.ibb.co/kcjSmgj/kelsey-curtis-27u-Gzl-AFw-unsplash.jpg" alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a >
                                    <img className="rounded-lg h-[45vh]" src="https://i.ibb.co/n0fXF1b/eddi-aguirre-ZAVHbp-On4-Jk-unsplash.jpg" alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Banner

