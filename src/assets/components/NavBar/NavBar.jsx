
const NavBar = () => {
    return (
        <div className="fixed z-50 w-full">
            <header className="bg-black text-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* left side */}
                        <div className="flex items-center gap-10 justify-center">
                            <div className="md:flex md:items-center md:gap-12">
                                <a className="block font-semibold text-2xl " href="#">
                                    {/* <span className="sr-only">Home</span> */}
                                     Uptime Robot
                                </a>
                            </div>

                            <div className="hidden md:block">
                                <nav aria-label="Global">
                                    <ul className="flex items-center gap-6 text-sm">
                                        <li>
                                            <a className=" transition hover:text-gray-500/75" href="#"> Monitoring </a>
                                        </li>

                                        <li>
                                            <a className=" transition hover:text-gray-500/75" href="#"> Intregation </a>
                                        </li>

                                        <li>
                                            <a className=" transition hover:text-gray-500/75" href="#"> Status Page </a>
                                        </li>

                                        <li>
                                            <a className=" transition hover:text-gray-500/75" href="#"> Pricing </a>
                                        </li>

                                        <li>
                                            <a className=" transition hover:text-gray-500/75" href="#"> Enterprice </a>
                                        </li>

                                        <li>
                                            <a className=" transition hover:text-gray-500/75" href="#"> Resourses </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                                    href="#"
                                >
                                    Login
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                        href="#"
                                    >
                                        Register for free
                                    </a>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button
                                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;