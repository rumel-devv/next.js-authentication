import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold">
          About <span className="text-green-500">KingSpace</span>
        </h1>

        <p className="mt-4 text-gray-300 max-w-2xl">
          KingSpace is a modern authentication system designed to make your
          web apps secure, fast, and easy to manage.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 px-6 md:px-16 pb-20">

        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-green-400">
            🔐 Secure
          </h2>
          <p className="text-gray-300 mt-2 text-sm">
            Advanced authentication system with strong security practices.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-green-400">
            ⚡ Fast
          </h2>
          <p className="text-gray-300 mt-2 text-sm">
            Optimized performance for smooth and quick user experience.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-green-400">
            🎯 Simple
          </h2>
          <p className="text-gray-300 mt-2 text-sm">
            Easy integration and developer-friendly design.
          </p>
        </div>

      </div>

      <Link href='/auth/signup' className="flex items-center justify-center pb-16">
        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition">
          Get Started
        </button>
      </Link>

    </div>
  );
};

export default AboutPage;