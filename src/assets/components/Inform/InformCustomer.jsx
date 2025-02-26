
import { TbExternalLink } from 'react-icons/tb';
import uptimeVoice from '../../images/stutus.jpg'

const InformCustomer = () => {
    return (
        <div>
            <section className="relative max-w-[1900px] px-[10%] border-t-1 border-t-gray-600 mx-auto md:flex flex-col lg:flex-row-reverse items-center justify-between min-h-screen ">

                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="absolute hidden lg:block top-[8vw] w-[450px] h-[450px] bg-blue-400 rounded-full"></div>
                    <img src={uptimeVoice} alt="Monitoring App" data-aos="fade-up" className="mt-12 lg:mt-0 relative z-10 w-full shadow-lg" />
                </div>

                {/* text content  */}

                <div className="w-full mt-8 lg:mt-0 md:w-1/2 text-center space-y-12 md:text-left">
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Inform your <br /> customers about <br />incidents with  <br />
                        <span className='text-[#3bd671]'> status pages.</span>
                    </h2>
                    <p className="text-xl mt-2">
                        Be transparent. Inform customers of <br /> planned outages. Show them that you <br />
                        strive to keep your service 100% online.
                    </p>
                    <div className="flex justify-center items-center md:justify-start gap-4 mt-4">
                        {/* buttons  */}
                        <button className='flex  gap-2text-left underline hover:no-underline cursor-pointer text-xl font-semibold text-green-600'>
                            <span>Check LIVE demo</span> <TbExternalLink />
                        </button>

                        <span className='text-xl'>or</span>

                        <button className='text-left underline hover:no-underline cursor-pointer text-xl font-semibold text-green-600'> Explore Status Pages</button>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default InformCustomer;