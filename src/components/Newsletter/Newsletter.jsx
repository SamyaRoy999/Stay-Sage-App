import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newsletter = () => {
    
    useEffect(() => {
        AOS.init({ duration: 1500, });
    }, [])
    return (
        <div>

            <div className="container my-24 mx-auto md:px-6 xl:px-32 font-Poppins">

                <section className="mb-32 text-center lg:text-left">
                    <div
                        className="block  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex flex-wrap items-center">
                            <div data-aos="fade-right" className=" relative w-full  shrink-0 grow-0 basis-auto lg:flex lg:w-6/12">
                                <img src="https://i.ibb.co/mv6PZH8/point3d-commercial-imaging-ltd-oxe-CZrodz78-unsplash.jpg" alt="Trendy Pants and Shoes"
                                    className="w-full   h-[500px]" />

                                <div className=" right-0 lg:-right-20 font-bold top-[0%]  lg:top-[40%] lg:rotate-90  flex justify-center items-center  absolute  text-4xl py-6 px-6  text-white  bg-[#90B0B7]">
                                    <h1>50% off</h1>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                                <div className="px-6 py-12 md:px-12 lg:ml-6">
                                    <h4 className=" font-bold text-3xl mb-6 relative"><div className=" bg-[#90B0B7] h-2  w-12 absolute top-4  right-14  lg:right-44"></div> Join Our</h4>
                                    <h4 className=" font-bold text-5xl text-[#90B0B7] mb-4">NEWSLETTER</h4>
                                    <h2 className="mb-6 text-xl font-bold">
                                        <Typewriter
                                            words={['Do not miss any updates.', 'Subscribe to the newsletter']}
                                            loop={0}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}

                                        />
                                    </h2>
                                    <p className="mb-12 text-neutral-500 ">
                                        We will write rarely and only high-quality content.
                                    </p>
                                    <div className="mb-6 flex-row md:mb-0 md:flex">
                                        <div className="relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
                                            <input type="text"
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlInput2" placeholder="Enter your email" />
                                            <label
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Enter
                                                your email
                                            </label>
                                        </div>
                                        <button type="submit"
                                            className="inline-block rounded bg-[#90B0B7] px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default Newsletter