
const Header = () => {
    return (
        <div className="my-8 p-8">
            <p className="text-white text-xl ">
                Hi, my name is
            </p>
            <br />

            <h1 className="text-white text-8xl font-bold font-mono">
                Sunil Gawai
            </h1>
            <br />

            <h2 className="text-gray-400 text-3xl font-semibold italic  ">
                Freelancer and student by proffesion.
            </h2>
            <br />

            <p className="text-gray-300 text-[18px] font-mono">
                I am a computer science graduate and skilled web developer with <br />
                expertise in React Js, Typescript, MongoDB and Node Js/Express Rest API's <br />
                I create elegant solutions for web complex problems and I'am commited with <br />
                staying up-to-date with latest web development technologies and best practices.
            </p>
            <br />

            <button
                className="font-semibold text-lg font-mono border
                hover:border-2 hover:bg-purple-600
                hover:border-purple-600 py-4 px-10 my-4">
                Checkout my work.
            </button>
        </div>
    )
}

export default Header;