import React from "react";

export default function Header() {
    const userEmail = localStorage.getItem('userEmail'); // Retrieve user's email from localStorage

    return (
        <div>
            <nav className="bg-white border-gray-200">
                <div className="flex items-center justify-end -mx-40 py-3" style={{ "background": "#8E3E63" }}>
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="font-medium flex flex-col gap-4 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white" style={{ "background": "#8E3E63" }}>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 text-white rounded-2xl hover:bg-gray-100 md:hover:bg-transparent text-sm md:border-0"
                                    style={{ "background": "#D2649A" }}
                                >
                                    <i className="fa-solid fa-users" style={{ "paddingRight": "10px" }}></i>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 text-white rounded-2xl hover:bg-gray-100 md:hover:bg-transparent text-sm md:border-0"
                                    style={{ "background": "#D2649A" }}
                                >
                                    <i className="fa-solid fa-clock-rotate-left" style={{ "paddingRight": "10px" }}></i>
                                    History
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 text-white rounded-2xl hover:bg-gray-100 md:hover:bg-transparent text-sm md:border-0"
                                    style={{ "background": "#D2649A" }}
                                >
                                    <i className="fa-solid fa-arrow-right-from-bracket" style={{ "paddingRight": "10px" }}></i>
                                    Log Out
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-4 ml-20 mr-9 text-white">
                        <div>
                            <img src="https://imgs.search.brave.com/mR-qTglzpGl8uw83n_ErbMNuZKXcqnfulrRGN17nsn0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc" alt="" className="h-12 w-12 rounded-full" />
                        </div>
                        <div>
                            <p className="font-bold">Hello {userEmail}</p>
                            <span>Admin</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
