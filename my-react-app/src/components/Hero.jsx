import React from 'react'
 function Hero() {
    return (
        <section className="bg-gray-100 min-h-screen flex items-center justify-center px-6"> 
            <div className="text-center max-w-2xl">

                <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Designing Code. Building Impact</h1>
        
                <p className="text-lg md:text-xl text-gray-700 mt-8">We create beautiful, functional websites and applications that deliver real value to our clients.</p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                    <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">View My Projects</button>
                    <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition">Let us Collaborate</button>

                </div>
            </div>
        </section>
    );
}

export default Hero;
