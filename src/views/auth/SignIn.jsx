// src/SignIn.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthContext";

const SignIn = () => {
  const { currentUser, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/admin');
    }
  }, [currentUser, navigate]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format");
      return;
    }
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }
    setIsSigningIn(true);
    try {
      await login(email, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsSigningIn(false);
  };

  return (
    <div>
      <div className="lg:mt-16 mb-16 flex md:flex-auto sm:flex-auto h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
        <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-2 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Login
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Masukkan Email dan Password
          </p>
          <form onSubmit={onSubmit}>
            <label htmlFor="email" className={`text-sm ml-3 font-bold text-navy-700 dark:text-white`} >
              Email
            </label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className={`mt-1 mb-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
            />

            <label htmlFor="email" className={`text-sm ml-3 font-bold text-navy-700 dark:text-white`} >
              Password
            </label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className={`mt-1 mb-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
            />
            {errorMessage && (
              <span className='text-red-600 font-bold'>{errorMessage}</span>
            )}
            <button
              type="submit"
              disabled={isSigningIn}
              className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
