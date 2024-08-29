import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import IndiaMart from '../images/web/Indiamart.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
                        <div className="col-span-12 lg:col-span-4">
                            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                                <h5 className="font-bold text-4xl mb-4">Safal Embedded Solutions</h5>
                                <div className='text-md font-medium text-gray-600'>
                                    <h5>55 Bhoomi Industrial and Business Park</h5>
                                    <p>Sardar Patel Ring Rd</p>
                                    <p>Ahmedabad- 382330</p>
                                    <p>Gujarat, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <HashLink to="/about" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#services" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="/contact" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <a href="#services" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Embedded Design Services</a>
                                </li>
                                <li className="mb-2">
                                    <a href='#services' className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">PCB Design Services</a>
                                </li>
                                <li className="mb-2">
                                    <a href='#services' className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"> VLSI Design Services</a>
                                </li>
                                <li className="mb-2">
                                    <a href='#services' className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">GSM GPRS Services</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                            <div className="text-xl mb-6">
                                Social Media Links.
                            </div>

                            <div className="text-md font-medium mb-6">
                                Follow us on social media.
                            </div>
                            <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li className="ml-4">
                                        <div className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                            <a href='https://www.facebook.com/share/VttvRzjTEAU3Gycv/?mibextid=LQQJ4d' target='_blank' rel="noopener noreferrer">
                                                <FaFacebook className="w-8 h-8" />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="ml-4">
                                        <div className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="IndiaMART">
                                            <a href='https://www.indiamart.com/safalembeddedsolution/' target='_blank' rel="noopener noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
                                                <img src={IndiaMart} alt="Indiamart" />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="ml-4">
                                        <div className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Google">
                                            <a href='https://g.co/kgs/v4HJwBh' target='_blank' rel="noopener noreferrer">
                                                <FaGoogle className="w-8 h-8" />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-gray-200 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()}{" "}
                                <HashLink to="#" className="hover:text-gray-900">
                                    Safal Embedded Solution
                                </HashLink>. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
