import WebsiteMonitoringCard from "./MonitoringCard";

const Monitoring = () => {
    return (
        <div className="max-w-[1900px] px-[10%] mx-auto">
            <h1 className="font-bold md:text-5xl pt-20 text-center w-[50%] mx-auto">All you really care about <br />
                <span className="text-[#3bd671]">monitored</span> in one place.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>
                <WebsiteMonitoringCard></WebsiteMonitoringCard>

            </div>
        </div>
    );
};

export default Monitoring;