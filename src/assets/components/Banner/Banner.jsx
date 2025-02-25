import banner from '../../images/Screenshot (511).png'
const Banner = () => {
    return (
        <div className="bg-[#131a26]  max-w-[1900px] mx-auto  px-[10%]">

            <div className="  mx-auto">
                <div
                    className="relative  bg-cover bg-center bg-no-repeat"
                >
                    <div
                        className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    ></div>

                    <div className="flex flex-col md:flex-row items-center">
                        <div
                            className="relative  mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center "
                        >
                            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                                <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                                    The world's leading
                                    <strong className="block font-extrabold text-[#3bd671]"> uptime monitoring <span className="text-white">service.</span> </strong>
                                </h1>

                                <p className="mt-4 md:font-bold max-w-lg text-white sm:text-xl/relaxed">
                                    Get 50 monitors with 5-minute checks <span className="text-[#3bd671]">totally FREE.</span>
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4 text-center">
                                    <a
                                        href="#"
                                        className="block w-full rounded-4xl bg-[#3bd671] px-12 py-4 text-xl font-medium text-white shadow-sm  focus:ring-3 focus:outline-hidden sm:w-auto"
                                    >
                                        Start monitoring in 30 seconds
                                    </a>


                                </div>
                            </div>
                        </div>
                        {/* image div */}
                        <div className=''>
                            <img className='h-[400px]' src={banner} alt="" />
                        </div>
                    </div>
                </div>
                <p className="text-center text-white relative text-xl bottom-[80px]">Currently, we keep an eye on <strong>7,570,000</strong> monitors for more than <strong>2,100,000</strong> users and companies.                </p>

            </div>
        </div>
    );
};

export default Banner;