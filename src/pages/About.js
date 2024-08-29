import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import img1 from '../images/web/gallery/undefined (1).jpg';
import img2 from '../images/web/gallery/undefined (2).jpg';
import img3 from '../images/web/gallery/undefined (3).jpg';
import img4 from '../images/web/gallery/undefined.jpg';
import img5 from '../images/web/gallery/visiting.jpg';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <NavBar />
      <div id='contact' className="flex flex-col justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto my-8 px-4 lg:px-20">
          <div className='why'>
            <h1 className="font-bold mb-8 text-center text-3xl text-blue-900 uppercase" data-aos="fade-up">Why Us?</h1>
            <p className="text-lg text-center mb-6" data-aos="fade-up" data-aos-delay="100">
              With the efforts of our deft professionals, we have been able to offer the finest quality range of products and reliable services to our clients.
              These products are available in numerous technical specifications and delivered within the assured time-frame.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white rounded-lg shadow-md p-4">
                <li className="text-lg">Dexterous team of professionals</li>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <li className="text-lg">Qualitative products</li>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <li className="text-lg">Transparent dealings</li>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <li className="text-lg">Advanced infrastructure</li>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <li className="text-lg">Cost-effective pricing</li>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <li className="text-lg">Wide distribution network</li>
              </div>
            </div>
          </div>
          {/* Image gallery */}
          <div className='gallery'>
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-center text-3xl text-blue-900 uppercase" data-aos="fade-up">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <img
                  src={img1}
                  alt="Gallery Image 1"
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:rotate-1 hover:translate-y-1"
                  data-aos="zoom-in"
                />
                <img
                  src={img2}
                  alt="Gallery Image 2"
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:rotate-1 hover:translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
                <img
                  src={img3}
                  alt="Gallery Image 3"
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:rotate-1 hover:translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
                <img
                  src={img4}
                  alt="Gallery Image 4"
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:rotate-1 hover:translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                />
                <img
                  src={img5}
                  alt="Gallery Image 5"
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:rotate-1 hover:translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
                <img
                  src={img1}
                  alt="Gallery Image 6"
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:rotate-1 hover:translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
              </div>
            </div>
          </div>
          <div className='fact'>
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-center text-3xl text-blue-900 uppercase" data-aos="fade-up">Factsheet</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-lg">
                <div data-aos="fade-right" data-aos-delay="300">
                  <h3 className="font-semibold mb-2 text-blue-900">Basic Information</h3>
                  <p><span className="font-semibold text-blue-900">Nature of Business:</span> Exporter and Manufacturer</p>
                  <p><span className="font-semibold text-blue-900">Additional Business:</span> Service Provider</p>
                  <p><span className="font-semibold text-blue-900">Total Number of Employees:</span> 11 to 25 People</p>
                  <p><span className="font-semibold text-blue-900">Year of Establishment:</span> 2010</p>
                  <p><span className="font-semibold text-blue-900">Legal Status of Firm:</span> Partnership Firm</p>
                </div>
                <div data-aos="fade-left" data-aos-delay="300">
                  <h3 className="font-semibold mb-2 text-blue-900">Company USP</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-blue-900">Provide after Sales Support:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Installation Services</li>
                        <li>Onsite Support</li>
                        <li>User Manual</li>
                        <li>Operational Training</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">Primary Competitive Advantage:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Experienced R & D Department</li>
                        <li>Large Product Line</li>
                        <li>Large Production Capacity</li>
                        <li>Good Financial Position & TQM</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
