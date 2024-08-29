import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/web/logo.jpg';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setTop(window.pageYOffset <= 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex justify-between items-center py-2">
                <div className="flex items-center md:px-12 md:mx-12 text-center font-semibold">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                    <HashLink smooth to="/#hero">
                        <h1 className="font-extrabold text-4xl text-blue-900">Safal</h1>
                    </HashLink>
                </div>
                <div className="flex items-center">
                    <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={toggleMenu}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className="hidden lg:flex space-x-6 p-5">
                        <NavLinks />
                    </div>
                    {isOpen && (
                        <div className="fixed top-14 left-0 w-full p-24 bg-white shadow-xl lg:hidden">
                            <div className="flex flex-col space-y-6">
                                <NavLinks />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
