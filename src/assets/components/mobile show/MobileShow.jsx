
import { TbExternalLink } from 'react-icons/tb';
import uptimeMobile from '../../images/uptime-removebg-preview.png'
import uptimeVoice from '../../images/Uptime-voice.jpg'

const MobileShow = () => {
    return (
        <>
            <section className="relative max-w-[1900px] px-[10%] mx-auto md:flex flex-col lg:flex-row items-center justify-between min-h-screen">

                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="absolute top-[8vw] w-[500px] h-[500px] bg-[#3bd671] rounded-full"></div>
                    <img src={uptimeMobile} alt="Monitoring App" className="relative z-10 w-[90%]" />
                </div>

                {/* text content  */}

                <div className="w-full md:w-1/2 text-center space-y-12 md:text-left">
                    <h2 className="text-5xl font-bold">
                        <span className="text-[#3bd671]">Keep monitoring</span> <br /> everywhere you go.
                    </h2>
                    <p className="text-xl mt-2">
                        Get instant notifications, manage monitors and <br /> check your uptime statistics on the go.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                        {/* buttons  */}
                        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
                            {/* button icon  */}
                            <img className="h-10"
                                src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000" alt="" />
                            <span> <span className="text-sm">Get it on</span> <br /> Google Play</span>
                        </button>

                        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
                            <img className="h-10"
                                src="https://img.icons8.com/?size=100&id=48112&format=png&color=000000" alt="" />
                            <span> <span className="text-sm">Download on the</span> <br />App Store</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="relative max-w-[1900px] px-[10%] border-t-1 border-t-gray-600 mx-auto md:flex flex-col lg:flex-row-reverse items-center justify-between min-h-screen">

                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="absolute top-[8vw] w-[450px] h-[450px] bg-[#3bd671] rounded-full"></div>
                    <img src={uptimeVoice} alt="Monitoring App" className="relative z-10 w-full shadow-lg" />
                </div>

                {/* text content  */}

                <div className="w-full md:w-1/2 text-center space-y-12 md:text-left">
                    <h2 className="text-5xl font-bold">
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
        </>
    );
};

export default MobileShow;