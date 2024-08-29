import React from 'react';



const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 font-bold">Deals in HSN Code</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    
                </div>

                {/* HSN Code Table */}<div className="mx-auto my-8 overflow-x-auto">
                    <table className="w-3/4 max-w-lg mx-auto border-collapse border border-gray-300">
                        <thead className="bg-blue-900 text-white">
                            <tr>
                                <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold">HSN Code</th>
                                <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold">HSN Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white">
                                <td className="px-6 py-4 border-b border-gray-300 text-sm">84569990</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm">Machine-tools for working any material by removal of material, by laser or other light or photon beam, ultra-sonic, electro-discharge, electrochemical, electron beam, ionic-beam or plasma arc processes - other: other - other</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="px-6 py-4 border-b border-gray-300 text-sm">84592100</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm">Machine-tools (including way-type unit head machines) for drilling, boring, milling, threading or tapping by removing metal, other than lathes (including turning centres) of heading 8458 - other drilling machines: numerically controlled</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>
        </div>
    )
}

export default Clients;
