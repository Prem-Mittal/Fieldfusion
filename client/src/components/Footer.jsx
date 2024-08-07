import React from "react";

function Footer(){

    return (
        <footer className="bg-gray-100">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center text-teal-600">
                    <div className="flex gap-5 items-center">
                        <div className="text-blue-800 text-6xl font-dancing_script font-bold">Field</div>
                        <div className="text-blue-500 text-8xl font-dancing_script font-bold">Fusion</div>
                    </div>
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                    Step into a world of endless play and excitement on out playgrounds and turfs-book your experience
                    now!
                </p>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                  

                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75"
                           href="https://www.linkedin.com/in/premmittal88/" target="_blank"> LinkedIn </a>
                    </li>

                   

                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75"
                           href="https://github.com/Prem-Mittal/Fieldfusion"
                           target="_blank"> Projects </a>
                    </li>

                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
                    </li>


                    <li>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Blog </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;