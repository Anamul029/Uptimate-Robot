
import uptimeUser from '../../images/uptimeUsers.png'
const AddMembers = () => {
    return (
        <div>
            <section className="relative max-w-[1900px] px-[10%] border-t-1 border-t-gray-600 mx-auto md:flex flex-col lg:flex-row items-center justify-between gap-10 min-h-screen">

                <div className="w-full md:w-1/2 flex justify-center">
                    {/* <div className="hidden lg:block absolute top-[8vw] w-[450px] h-[450px] bg-[#3bd671] rounded-full"></div> */}
                    <img src={uptimeUser} alt="Monitoring App" data-aos="fade-up" className=" md:w-[500px] md:h-[400px] my-8 lg:my-0 z-10 w-[90%] lg:left-[8%] shadow-lg" />
                </div>

                {/* text content  */}

                <div className="w-full md:w-1/2 text-center space-y-12 md:text-left">
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Add your <span className='text-teal-600'> team members</span> <br /> to keep them notified.
                    </h2>
                    <p className="text-xl mt-2">
                        You can invite all your team members to access <br /> your monitors, keep them notified and manage <br /> incidents. Choose from three levels of user access: <br /> read, write and notify-only.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AddMembers;