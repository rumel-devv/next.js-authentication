import React from "react";

const DashboardPage = ({user}) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">

      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">
          King<span className="text-green-500">Space</span>
        </h2>

        <ul className="space-y-4">
          <li className="bg-white text-green-700 px-3 py-2 rounded-lg cursor-pointer">
            Dashboard
          </li>
          <li className="hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
            Profile
          </li>
          <li className="hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
            Settings
          </li>
          <li className="hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">
            Dashboard Overview
          </h1>

          <div className="bg-gray-800 px-4 py-2 rounded-lg">
            👋 Hello, {user.name}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur border border-white/20">
            <h3 className="text-gray-300 text-sm">Total Users</h3>
            <p className="text-2xl font-bold mt-2">1,245</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur border border-white/20">
            <h3 className="text-gray-300 text-sm">Active Sessions</h3>
            <p className="text-2xl font-bold mt-2">342</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur border border-white/20">
            <h3 className="text-gray-300 text-sm">Tasks Completed</h3>
            <p className="text-2xl font-bold mt-2">876</p>
          </div>

        </div>

        {/* Activity Section */}
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur border border-white/20">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>✅ User John signed up</li>
            <li>🔐 Password updated</li>
            <li>📊 New stats generated</li>
            <li>⚡ Server response improved</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;