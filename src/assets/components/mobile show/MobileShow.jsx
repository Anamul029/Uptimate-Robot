
import uptimeMobile from '../../images/uptime-removebg-preview.png'

const MobileShow = () => {
    return (
        <section className="relative max-w-[1900px] px-[10%] mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen">

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
    );
};

export default MobileShow;