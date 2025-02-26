import FeatureCard from "./FeatureCard";

const AdcancedFeatured = () => {
      return (
            <div className='my-20 px-[10%] max-w-[1900px] mx-auto'>
                  <h1 className='text-center font-bold text-3xl md:text-5xl '>Advanced features for <br /> <span className="text-teal-600">Our Users</span> </h1>
                  {/* advanced Featured section */}
                  <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <FeatureCard tittle="Maintenance windows" description="Set up maintenance windows to prevent alarms during planned maintenance." />
                        <FeatureCard tittle="Share incident updates" description="Send status updates via email to your Status page subscribers." />
                        <FeatureCard tittle="White-labeled Status pages" description="Customize colors, add your logo or even link your custom domain." />
                        <FeatureCard tittle="Custom HTTP requests" description="Need to set an advanced HTTP header? We've got you covered!" />
                        <FeatureCard tittle="Response time monitoring" description="See your response times in a chart to reveal performance hiccups." />
                        <FeatureCard tittle="Multi-location checks" description="We verify incidents from multiple locations to prevent false-positives." />
                    
                  </div>
            </div>
      );
};

export default AdcancedFeatured;