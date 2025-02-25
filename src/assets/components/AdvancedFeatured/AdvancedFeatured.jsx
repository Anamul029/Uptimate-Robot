
const AdcancedFeatured = () => {
    return (
        <div className='my-16 px-[10%] max-w-[1900px] mx-auto'>
            <h1 className='text-center font-bold text-3xl'><span className='text-[#3bd671]'>Advanced features</span> for advanced users. </h1>
            {/* advanced Featured section */}
            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* feature one */}
                  <div data-aos="fade-up">
                        <h1 className='text-2xl font-bold'>Share incident updates</h1>
                        <p className='text-lg text-gray-600'>Send status updates via email to your Status page subscribers.</p>
                  </div>
                {/* feature two */}
                  <div data-aos="fade-up">
                        <h1 className='text-2xl font-bold'>Maintenance windows </h1>
                        <p className='text-lg text-gray-600'>Set up maintenance windows to prevent alarms during planned maintenance.</p>
                  </div>
                {/* feature three */}
                  <div data-aos="fade-up">
                        <h1 className='text-2xl font-bold'>White-labeled Status pages </h1>
                        <p className='text-lg text-gray-600'>Customize colors, add your logo or even link your custom domain.</p>
                  </div>
                {/* feature four */}
                  <div data-aos="fade-up">
                        <h1 className='text-2xl font-bold'>Custom HTTP requests  </h1>
                        <p className='text-lg text-gray-600'>Need to set an advanced HTTP header? We've got you covered!</p>
                  </div>
                {/* feature five */}
                  <div data-aos="fade-up">
                        <h1 className='text-2xl font-bold'>Response time monitoring </h1>
                        <p className='text-lg text-gray-600'>See your response times in a chart to reveal performance hiccups.</p>
                  </div>
                {/* feature six */}
                  <div data-aos="fade-up">
                        <h1 className='text-2xl font-bold'>Multi-location checks</h1>
                        <p className='text-lg text-gray-600'>We verify incidents from multiple locations to prevent false-positives.</p>
                  </div>
            </div>
        </div>
    );
};

export default AdcancedFeatured;