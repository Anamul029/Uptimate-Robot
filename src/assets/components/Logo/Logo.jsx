
const Logo = () => {
    return (
        <div className="bg-[#ffffff] my-10 max-w-[1900px] w-[70%] mx-auto">
            <marquee direction="left" >
                <div className="flex px-[10%]  items-center md:flex-row gap-5 md:justify-between">
                    <img className=" w-34 h-16" src="https://uptimerobot.com/assets/images/godaddy-logo.svg" alt="" />
                    <img className=" w-32 h-16" src="https://uptimerobot.com/assets/images/nasa.svg" alt="" />
                    <img className=" w-32 h-16" src="https://uptimerobot.com/assets/images/moodys-logo.svg" alt="" />
                    <img className=" w-32 h-16" src="https://uptimerobot.com/assets/images/ibm-logo.svg" alt="" />
                    <img className=" w-32 h-16" src="https://uptimerobot.com/assets/images/expedia-logo.svg" alt="" />
                </div>
            </marquee>

        </div>
    );
};

export default Logo;