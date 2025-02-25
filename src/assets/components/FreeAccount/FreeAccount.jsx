
const FreeAccount = () => {
    return (
        <div className="my-20 py-10">
            <h1 className="font-bold text-center  text-4xl">Get your <span className="text-[#3bd671]">FREE account</span> now,<br />
                50 monitors included!</h1>
            <div className="flex justify-center items-center">
                <button className="mt-4 font-semibold bg-[#3bd671] hover:bg-green-500  text-white py-3 px-4 rounded-4xl shadow-[0px_4px_10px_rgba(0,0,0,0.2)]   transition-all">
                    Start Monitoring in 30 seconds
                </button>
            </div>
            <p className="text-center my-5 text-gray-500 mb-10">No credit card required!</p>
            {/* button */}
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center font-semibold">Available also on:</h1>
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                    {/* buttons  */}
                    <button className="flex items-center cursor-pointer gap-2 bg-black text-white px-4 py-2 rounded-lg">
                        {/* button icon  */}
                        <img className="h-10"
                            src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000" alt="" />
                        <span> <span className="text-sm">Get it on</span> <br /> Google Play</span>
                    </button>

                    <button className="flex items-center cursor-pointer gap-2 bg-black text-white px-4 py-2 rounded-lg">
                        <img className="h-10"
                            src="https://img.icons8.com/?size=100&id=48112&format=png&color=000000" alt="" />
                        <span> <span className="text-sm">Download on the</span> <br />App Store</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FreeAccount;