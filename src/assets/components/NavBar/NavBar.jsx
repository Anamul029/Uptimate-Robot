import { useState } from "react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed z-50 w-full">
            <header className="bg-black text-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* left side */}
                        <div className="flex items-center gap-10 justify-center">
                            <div className="md:flex md:items-center md:gap-12">
                                <a className="block font-semibold text-2xl" href="#" title="Home">
                                   Monitoring Company
                                </a>
                            </div>

                            <div className="hidden md:block">
                                <nav aria-label="Global">
                                    <ul className="flex items-center gap-6 text-sm">
                                        <li><a className="transition hover:text-gray-400" href="#">Monitoring</a></li>
                                        <li><a className="transition hover:text-gray-400" href="#">Integration</a></li>
                                        <li><a className="transition hover:text-gray-400" href="#">Status Page</a></li>
                                        <li><a className="transition hover:text-gray-400" href="#">Pricing</a></li>
                                        <li><a className="transition hover:text-gray-400" href="#">Enterprise</a></li>
                                        {/* <li><a className="transition hover:text-gray-400" href="#">Resources</a></li> */}
                                        <div className="relative group">
                                            <summary style={{ listStyle: "none" }} className="cursor-pointer text-white hover:text-blue-600">
                                                Resourses
                                            </summary>
                                            <ul className="menu  gap-2 dropdown-content z-50 bg-base-100 text-[16px] hover:border-2 hover:border-black bg-white text-black cursor-pointer hover:text-green-500 rounded-box w-52 p-2 shadow hidden group-hover:block absolute">
                                                <li>
                                                    <a>
                                                        Knoledge Hub
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Case Study
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Blog
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Help
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        API Docs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        FAQs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Location
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Roadmaps
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* right side */}
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a className="rounded-4xl bg-[red] px-5 py-2.5 text-sm font-medium text-white shadow-sm" href="#">Login</a>
                                <div className="hidden sm:flex">
                                    <a className=" bg-teal-600 px-5 py-2.5 text-sm font-medium rounded-4xl text-white hover:bg-blue-500" href="#">Register for free</a>
                                </div>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="block md:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-gray-900 text-white p-4">
                            <nav>
                                <ul className="flex flex-col gap-4 text-sm">
                                    <li><a className="transition hover:text-gray-400" href="#">Monitoring</a></li>
                                    <li><a className="transition hover:text-gray-400" href="#">Integration</a></li>
                                    <li><a className="transition hover:text-gray-400" href="#">Status Page</a></li>
                                    <li><a className="transition hover:text-gray-400" href="#">Pricing</a></li>
                                    <li><a className="transition hover:text-gray-400" href="#">Enterprise</a></li>
                                    {/* <li><a className="transition hover:text-gray-400" href="#">Resources</a></li> */}
                                    <div className="relative group">
                                    <summary style={{ listStyle: "none" }} className="cursor-pointer text-white hover:text-blue-600">
                                                Resourses
                                            </summary>
                                        <ul className="menu  gap-2 dropdown-content z-50  text-[16px] hover:border-2 hover:border-black bg-white text-black cursor-pointer hover:text-green-500 rounded-box w-52 p-2 shadow hidden group-hover:block absolute">
                                        <li>
                                                <a>
                                                    Knoledge Hub
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    Case Study
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    Help
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    API Docs
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    FAQs
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    Location
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    Roadmaps
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default NavBar;
