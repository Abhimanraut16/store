// pages/register.js
'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Register() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onRegister = async () => {
    try {
      setLoading(true);
      const response = await axios.post("./api/users/register", user);
      toast.success('Registration successful');
      router.push('./login');
    } catch (error) {
      console.error('Registration failed', error);
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Enable button if all fields are filled
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          {loading ? 'Registering...' : 'Register'}
        </h1>
  
        {/* Username Field */}
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter your username"
          />
        </div>
  
        {/* Email Field */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email"
          />
        </div>
  
        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password"
          />
        </div>
  
        {/* Register Button */}
        <button
          onClick={onRegister}
          disabled={buttonDisabled}
          className={`w-full py-3 px-4 text-white font-semibold rounded-lg 
                    transition duration-200 ease-in-out
                    ${buttonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-600 transform hover:scale-105'}`}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
  
        {/* Already have an account */}
        <div className="text-center mt-6">
          <Link href="/login" className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
  

}













// 'use client'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { toast } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'

// export default function Signup() {
//   const router = useRouter();
//   const [user, setUser] = useState({
//     email: '',
//     password: '',
//     username: ''
//   });
//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const onSignup = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("/api/users/signup", user);
//       console.log("Signup success", response.data);
//       toast.success('Signup successful');
//       router.push('/login');
//     } catch (error) {
//       console.log('Signup failed', error);
//       toast.error(error.message || 'Signup failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Enable button only if all fields are filled
//     if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   }, [user]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
//         <h1 className="text-2xl font-semibold text-center mb-6">
//           {loading ? 'Processing...' : 'Sign Up'}
//         </h1>

//         <div className="mb-4">
//           <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//           <input
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="text"
//             id="username"
//             value={user.username}
//             onChange={(e) => setUser({ ...user, username: e.target.value })}
//             placeholder="Enter your username"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="email"
//             id="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="password"
//             id="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             placeholder="Enter your password"
//           />
//         </div>

//         <button
//           onClick={onSignup}
//           disabled={buttonDisabled}
//           className={`w-full py-2 px-4 text-white font-semibold rounded-md 
//                       ${buttonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
//         >
//           {loading ? 'Signing up...' : 'Sign Up'}
//         </button>

//         <div className="text-center mt-4">
//           <Link href="/login" className="text-blue-500 hover:text-blue-700">
//             Already have an account? Log in
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }





// 'use client'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { toast } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'

// export default function Signup() {
//   const router = useRouter();
//   const [user, setUser] = useState({
//     email: '',
//     password: '',
//     username: ''
//   });
//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const onSignup = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("/api/users/signup", user);
//       console.log("Signup success", response.data);
//       router.push('/login');
//       toast.success('Signup successful');
//     } catch (error) {
//       console.log('Signup failed');
//       toast.error(error.message || 'Signup failed');
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   }, [user]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
//         <h1 className="text-2xl font-semibold text-center mb-6">
//           {loading ? 'Processing...' : "Signup"}
//         </h1>

//         <div className="mb-4">
//           <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//           <input
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="text"
//             id="username"
//             value={user.username}
//             onChange={(e) => setUser({ ...user, username: e.target.value })}
//             placeholder='Enter your username'
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="email"
//             id="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             placeholder='Enter your email'
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             type="password"
//             id="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             placeholder='Enter your password'
//           />
//         </div>

//         <button
//           onClick={onSignup}
//           disabled={buttonDisabled}
//           className={`w-full py-2 px-4 text-white font-semibold rounded-md
//                       ${buttonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
//         >
//           {buttonDisabled ? "No signup" : "Signup"}
//         </button>

//         <div className="text-center mt-4">
//           <Link href="/login" className="text-blue-500 hover:text-blue-700">
//             Already have an account? Go to login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
