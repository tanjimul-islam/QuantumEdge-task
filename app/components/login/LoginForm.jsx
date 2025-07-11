"use client";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Default prevented!"); // Check if this logs

    setMessage("");
    setLoading(true);
    setLoginSuccess(false);

    try {
      const response = await fetch("/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        setLoginSuccess(true);
        console.log("Login success:", data);

        if (data.token) {
          console.log(data.token);
        }

        setFormData({ username: "", password: "" });
      }
    } catch (error) {
      setMessage(
        "Network error or API is unavailable. Please try again later."
      );
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loginSuccess ? (
        <h2 className="text-3xl text-white font-bold z-20">
          Login success! Redirecting...{" "}
        </h2>
      ) : (
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="md:w-96 w-80 flex flex-col items-center justify-center z-10"
        >
          <h2 className="text-3xl text-white font-bold">Login your account</h2>
          <p className="text-sm text-white mt-3">
            Don’t have an account?{" "}
            <Link className="text-primary" href={`/`}>
              Sign Up
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

          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-5 border  " type="checkbox" id="checkbox" />
              <label className="text-sm text-white" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <a className="text-sm text-white" href="#">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity cursor-pointer"
          >
            Login
          </button>
        </form>
      )}
    </>
  );
};

export default LoginForm;
