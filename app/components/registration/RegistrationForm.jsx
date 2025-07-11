"use client";

import Link from "next/link";
import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // New state for success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    setRegistrationSuccess(false);
    try {
      const response = await fetch(
        "https://api.mnimedu.com/api/auth/registration/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            first_name: formData.first_name,
            email: formData.email,
            username: formData.username,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage("Registration successful! You can now log in.");
        setRegistrationSuccess(true);
        setFormData({
          first_name: "",
          email: "",
          username: "",
          password: "",
        });
        console.log("Registration success:", data);
      } else {
        const errorMessages =
          Object.values(data.error || data)
            .flat()
            .join("; ") ||
          data.message ||
          "Something went wrong.";
        setMessage(`Registration failed: ${errorMessages}`);
        console.error("Registration error:", data);
      }
    } catch (err) {
      setMessage(
        "Network error or API is unavailable. Please try again later."
      );
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {registrationSuccess ? (
        <h2 className="text-3xl text-white font-bold z-20">
          Registration success!{" "}
          <Link href="/login" className="text-primary cursor-pointer">
            Log in
          </Link>{" "}
        </h2>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="md:w-96 w-80 flex flex-col items-center justify-center z-10"
        >
          <h2 className="text-3xl text-white font-bold">Open your account</h2>
          <p className="text-sm text-white mt-3">
            Already have an account?{" "}
            <Link className="text-primary" href={`/`}>
              Sign In
            </Link>
          </p>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 has-[input:focus]:border has-[input:focus]:border-[#05AF2B] h-12 rounded-full overflow-hidden pl-6 gap-2 mt-10">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full "
              required
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center w-full bg-transparent border border-gray-300/60 has-[input:focus]:border has-[input:focus]:border-[#05AF2B] h-12 rounded-full overflow-hidden pl-6 gap-2 mt-10">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="email"
              placeholder="Email id"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full "
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center w-full bg-transparent border border-gray-300/60 has-[input:focus]:border has-[input:focus]:border-[#05AF2B] h-12 rounded-full overflow-hidden pl-6 gap-2 mt-10">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full "
              required
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 has-[input:focus]:border has-[input:focus]:border-[#05AF2B] h-12 rounded-full overflow-hidden pl-6 gap-2 mt-10">
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity cursor-pointer "
          >
            Create Account
          </button>
        </form>
      )}
    </>
  );
};

export default RegistrationForm;
