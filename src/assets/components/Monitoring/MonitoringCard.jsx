
const Card = () => {
    return (
        <div data-aos='fade-up' className=" rounded-2xl  overflow-hidden shadow-2xl bg-[#ffffff] p-5">
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
                <img
                    alt=""
                    src="data:image/jpeg;base64,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"
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                    <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                    <a href="#">
                        <h3 className="mt-0.5 text-lg text-gray-900">SSL monitoring                        </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Keep your online presence secure and avoid any potential damage by monitoring your domain's expiration date.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default Card;