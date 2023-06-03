

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-3 border-b border-gray-600">
            <h2 className="text-4xl font-semibold italic text-white">
                {'< Freelancer />'}
                {/* Sunil G. */}
            </h2>

            <ul className="flex items-center justify-between w-[35%]">
                <li
                    className="text-xl text-white font-light italic cursor-pointer
                    hover:underline underline-offset-4">
                    About
                </li>
                <li
                    className="text-xl text-white font-light italic cursor-pointer
                    hover:underline underline-offset-4">
                    Expertise
                </li>
                <li
                    className="text-xl text-white font-light italic cursor-pointer
                    hover:underline underline-offset-4">
                    Projects
                </li>
                <li
                    className="text-xl text-white font-light italic cursor-pointer
                    hover:underline underline-offset-4">
                    Contact
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;