
const Card = () => {
    return (
        <div data-aos='fade-up' className=" rounded-2xl  overflow-hidden shadow-2xl bg-[#ffffff] p-5">
            <img className="w-34 object-cover" src="https://uptimerobot.com/assets/images/monitor-icons/website-monitoring.svg" alt="Card Image" />
            <div className="px-4 py-3">
                <h2 className="text-3xl font-bold text-gray-800">Website monitoring</h2>
                <p className="text-gray-600 mt-2 text-xl">
                    Be the first to know that your website is down! Reliable monitoring warns you before any significant trouble and saves you money
                </p>
                <button className="mt-4 font-semibold text-[#3bd671] hover:bg-[#3bd671] hover:text-white py-2 px-4 rounded-4xl shadow-[0px_4px_10px_rgba(0,0,0,0.2)]   transition-all">
                    Website Monitoring
                </button>
            </div>
        </div>
    );
};

export default Card;