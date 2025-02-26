
const FeatureCard = ({tittle,description}) => {
    return (
        <div className="rounded-2xl  overflow-hidden shadow-2xl bg-blue-50 p-5 border " data-aos="fade-up">
            <h1 className='text-2xl font-bold'>{tittle} </h1>
            <p className='text-lg text-gray-600'>{description}</p>
        </div>
    );
};

export default FeatureCard;
