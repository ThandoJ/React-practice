function Navbar() {
    return (
        //Main navigation wrapper (full width with bottom border and white background)
        <nav className="w-full border-b border-gray-200 bg-white">

            {/*Container to center content and limit max width, with padding and flex layout*/}
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                {/*Logo */}
                <h1 className="text-lg font-semibold">Portfolio</h1>

                {/*Navigation Links - hidden on small screens, visible from md screens onwards*/}
                <ul className="hidden md:flex gap-8 text-gray-600">
                    <li><a href="#home" className="hover:text-black transition">Home</a></li>
                    <li><a href="#about" className="hover:text-black transition">About</a></li>
                    <li><a href="#skills" className="hover:text-black transition">Skills</a></li>
                    <li><a href="#projects" className="hover:text-black transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
                </ul>

                {/*Call to action button*/}
                <button className="bg-black text-white px-4 py-2 text-sm hover:opacity-80 transition">Get in Touch</button>
                </div>
                </nav>
    );
}
export default Navbar;