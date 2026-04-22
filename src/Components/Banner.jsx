const Banner = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white px-4">

      <div className="text-center max-w-2xl">

        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to King<span className="text-green-500">Space</span>
        </h1>

        <p className="text-gray-300 mt-4 text-sm md:text-base">
          Simple, fast and secure authentication system for your project.
        </p>

        <button className="mt-6 bg-green-500 hover:bg-green-600 transition px-6 py-2 rounded-lg font-semibold">
          Get Started
        </button>

      </div>

    </div>
  );
};

export default Banner;