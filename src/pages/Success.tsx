import React from "react";
import { Link } from "react-router-dom";

const Success: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Registration Successful! 🎉</h1>
      <p className="text-lg text-gray-700 mb-6">You are now a seller on our platform.</p>
      <Link to="/" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Success;
