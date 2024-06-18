import React from "react";

export default function Header() {
    return (
        <div>
            <nav class="bg-white border-gray-200 " >
                <div class=" flex items-center justify-end -mx-44 py-6" style={{"background":"#8E3E63"}}>
                    <div class="hidden w-full md:block md:w-auto">
                        <ul class="font-medium flex flex-col gap-8 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white " style={{"background":"#8E3E63"}}>
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 text-white rounded-2xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                                    style={{"background":"#D2649A"}}
                                >
                                    <i class="fa-solid fa-users" style={{"paddingRight":"10px"}}></i>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 text-white rounded-2xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                                    style={{"background":"#D2649A"}}
                                >
                                    <i class="fa-solid fa-clock-rotate-left" style={{"paddingRight":"10px"}}></i>
                                    History
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 text-white rounded-2xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                                    style={{"background":"#D2649A"}}
                                >
                                    <i class="fa-solid fa-arrow-right-from-bracket" style={{"paddingRight":"10px"}}></i>
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
                            <p className="font-bold">Hello Hiolkh</p>
                            <span>Admin</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
