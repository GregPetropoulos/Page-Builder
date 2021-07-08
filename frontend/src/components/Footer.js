import React from "react";

export const Footer = () => {
    return (
            <div className="bg-linear-pink-invert">
                <div className="mx-auto container flex flex-col items-center justify-center">
                    <div className="text-black flex flex-col md:items-center f-f-l pt-1">
                        <h1 className="text-xl font-black">Build-A-Page</h1>
                    
                        <div className="my-1 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-1 lg:py-0">About</li>
                                <li className=" md:mr-6 cursor-pointer pt-1 lg:py-0">Team</li>
                                <li className="cursor-pointer pt-1 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-1 f-f-l">
                            <p> © 2021 Build-A-Page Corp. All rights reserved. </p>
                        </div>
                    </div>
                </div>
            </div>
    );
};