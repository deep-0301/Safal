import React from 'react';
import { Link } from 'react-router-dom';

// Images
import img1 from '../images/web/products/mobile-motor-pump-auto-switch-500x500.webp';
import img2 from '../images/web/products/industrial-gsm-gprs-modem-500x500.webp';
import img3 from '../images/web/products/security-sensing-device-500x500.webp';
import img4 from '../images/web/products/gsm-gprs-modbus-modem-500x500 (2).webp';
import img5 from '../images/web/products/gsm-based-main-gate-lock-controller-500x500.webp';
import img6 from '../images/web/products/16139079-product-1568286563221-500x500.webp';
import img7 from '../images/web/products/16139079-product-1568286564763-500x500.webp';
import img8 from '../images/web/products/16139079-product-1568286565714-500x500.webp';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='products'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <img src={img1} alt="Business Management System" className="rounded-lg mb-4 w-full h-48 object-cover" />
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Mobile Pump Starter</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    <li>Password can be set or change by authorized cell number</li>
                                    <li>Clear Audio can be heard on system call
                                    </li>
                                    <li>Audio range up to 6 meters
                                    </li>
                                    <li>3 phase motor or pump can be turn on / off on demand
                                    </li>
                                    <li>Password can be set or change by authorized cell number
                                    </li>
                                    <li>low powered system Internal back up rechargeable battery
                                    </li>
                                    <li>Password protection
                                    </li>
                                    <li>4.2V Battery Backup</li>
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <img src={img2} alt="School Management Portal" className="rounded-lg mb-4 w-full h-48 object-cover" />
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Industrial GSM GPRS Modem</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    <li>GPRS modem can be used for wireless virtual comport</li>
                                    <li>
                                        Wireless communication between PC and PLC or SCADA
                                    </li>
                                    <li>
                                        GPRS Mode Remote Data Logging
                                    </li>
                                    <li>
                                        Tracking system
                                    </li>
                                    <li>
                                        Wireless monitoring & control of system application
                                    </li>
                                    <li>
                                        Security applications
                                    </li>
                                    <li>
                                        SMS based Remote Control & Alerts
                                    </li>
                                    <li>
                                        Sensor Monitoring
                                    </li>

                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <img src={img3} alt="Payroll Management System" className="rounded-lg mb-4 w-full h-48 object-cover" />
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Security Device</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">

                                    <li>
                                        6 to 8 meter sensing range
                                    </li>
                                    <li>
                                        Highly accurate to identify Human body Movement
                                    </li>
                                    <li>
                                        All false alarm is avoided with intelligent software
                                    </li>
                                    <li>
                                        3 authorized cell numbers can be stored
                                    </li>
                                    <li>
                                        Pass word can be set or change by authorized cell number
                                    </li>
                                    <li>
                                        Ultra low powered system
                                    </li>
                                    <li>
                                        Internal back up rechargeable battery
                                    </li>
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <img src={img4} alt="Event Management System" className="rounded-lg mb-4 w-full h-48 object-cover" />
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">GSM GPRS Modbus Modem</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    <li>Ultra low powered system
                                    </li>
                                    <li>Command from remote will read and write to SCADA unit
                                    </li>
                                    <li>RS232 & RS485 interface
                                    </li>
                                    <li>Support Modbus protocols
                                    </li>
                                    <li>LED Indication for GSM network availability
                                    </li>
                                    <li>GPRS Mode Remote Data Logging
                                    </li>
                                    <li>Tracking system
                                    </li>
                                    <li>Wireless monitoring & control of system application
                                    </li>
                                    <li>Security Applications
                                    </li>

                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <img src={img5} alt="Inventory Management System" className="rounded-lg mb-4 w-full h-48 object-cover" />
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">GSM Based Main Gate Lock Controller</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    <li>Ultra low powered system</li>
                                    <li>Internal back up rechargeable battery</li>
                                    <li>Clear Audio can be heard on system call</li>
                                    <li>Password protection
                                    </li>
                                    <li>12V DC Input
                                    </li>
                                    <li>Battery Backup
                                    </li>
                                    <li>Calls authorized cell number till system off
                                    </li>
                                    <li>System alert by call or SMS when lock OPEN or CLOSED
                                    </li>
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <img src={img6} alt="Customer Relationship Management System" className="rounded-lg mb-4 w-full h-48 object-cover" />
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">PCB Design</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    <li>
                                        Compact PCB layout.
                                    </li>
                                    <li>

                                        2200µF capacitor.
                                    </li>
                                    <li>
                                        SIM card slot.

                                    </li>
                                    <li>                                    LED indicators.
                                    </li>
                                    <li>                                    Antenna connector.
                                    </li>
                                    <li>                                    Surface-mounted components.
                                    </li>
                                    <li>                                    Voltage regulator.
                                    </li>
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <img src={img7} alt="Employee Training Management System" className="rounded-lg mb-4 w-full h-48 object-cover" />
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">LED Display</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    <li>
                                        7-segment LED display.
                                    </li>
                                    <li>
                                        Single-digit numerical display.

                                    </li>
                                    <li>                                    Directional arrows (up and down) included.
                                    </li>
                                    <li>                                    Mounted on a green PCB.
                                    </li>
                                    <li>                                    LED technology for energy-efficient display.
                                    </li>
                                    <li>                                    Multiple connection pins for interfacing.
                                    </li>
                                    <li>                                    Compact design for easy integration.
                                    </li>
                                    <li>

                                        Commonly used in elevator control panels.
                                    </li>
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <img src={img8} alt="E-Commerce Platform" className="rounded-lg mb-4 w-full h-48 object-cover" />
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">LED PCB</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    <li>
                                        Matrix LED display.
                                    </li>
                                    <li>
                                        Dual display units.

                                    </li>
                                    <li>
                                        Compact PCB design.

                                    </li>
                                    <li>
                                        Green PCB color.

                                    </li>
                                    <li>                                    Pin connectors.
                                    </li>
                                    <li>                                    Mounting holes.
                                    </li>
                                    <li>                                    Surface-mounted LEDs.
                                    </li>
                                    <li>

                                        Potential application in digital displays or signage.
                                    </li>
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Portfolio;