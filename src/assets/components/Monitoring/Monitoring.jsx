import WebsiteMonitoringCard from "./MonitoringCard";

const Monitoring = () => {
    return (
        <div className="max-w-[1900px] px-[10%] mx-auto">
            <h1 className="font-bold text-3xl md:text-5xl pt-20 text-center md:w-[50%] mx-auto">All you really care about <br />
                <span className="text-teal-600">monitored</span> in one place.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
            </div>
            <div className="flex justify-center items-center">
                <button className="mt-4 font-semibold bg-teal-600 hover:bg-blue-400 cursor-pointer text-white py-2 px-4 rounded-4xl shadow-[0px_4px_10px_rgba(0,0,0,0.2)]   transition-all">
                    Start Monitoring in 30 seconds
                </button>
            </div>
        </div>
    );
};

export default Monitoring;