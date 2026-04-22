import React from "react";

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-8 text-center">

        {/* Icon */}
        <div className="text-4xl mb-4">✅</div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Sign Up Successful
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          Your account has been created successfully. You can now continue to your dashboard and start using the platform.
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-gray-100"></div>

        {/* Button */}
        <button
          className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition"
        >
          Go to Dashboard
        </button>

      </div>
    </div>
  );
};

export default WelcomePage;