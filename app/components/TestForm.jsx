// components/TestLoginForm.jsx
"use client";
import { useState } from "react";

// এটি একটি ক্লায়েন্ট কম্পোনেন্ট

const TestLoginForm = () => {
  const [formData, setFirnData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-8 border border-gray-700 rounded-lg shadow-lg bg-gray-800 text-white max-w-sm mx-auto my-10">
      <h3 className="text-2xl font-bold mb-5 text-center">Test Login Form</h3>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col gap-4"
      >
        {/* Email Input */}
        <div>
          <label
            htmlFor="test-email"
            className="block text-sm font-medium mb-1"
          >
            Email:
          </label>
          <input
            type="email"
            id="test-email"
            name="email"
            placeholder="test@example.com"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="test-password"
            className="block text-sm font-medium mb-1"
          >
            Password:
          </label>
          <input
            type="password"
            id="test-password"
            name="password"
            placeholder="********"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          disabled={loading} // লোডিং অবস্থায় বাটন ডিজেবল থাকবে
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* মেসেজ ডিসপ্লে */}
      {message && (
        <p
          className={`mt-4 text-center text-sm ${
            message.includes("successful") ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default TestLoginForm;
