'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/forgot-password", { email });
      console.log("Password reset email sent", response.data);
      toast.success('Password reset link sent to your email.');
      router.push('/login');
    } catch (error) {
      console.log('Password reset failed', error);
      toast.error(error.message || 'Failed to send reset link.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setButtonDisabled(!value); // Disable button if input is empty
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">
          {loading ? 'Processing...' : 'Forgot Password'}
        </h1>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        <button
          onClick={onSubmit}
          disabled={buttonDisabled}
          className={`w-full py-2 px-4 text-white font-semibold rounded-md 
                      ${buttonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {buttonDisabled ? 'Enter your email' : 'Send reset link'}
        </button>

        <div className="text-center mt-4">
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Remembered your password? Go to login
          </Link>
        </div>
      </div>
    </div>
  );
}
