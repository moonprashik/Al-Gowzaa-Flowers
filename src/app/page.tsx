import React from 'react'

//import LandingPage from './landingpage/page'
//import DotMatrix from './dotmatrix/page'
import Admin from './admin/page'

export default function page() {
  
  return (
  //  <DotMatrix/>
  //<LandingPage/>
  <Admin/>
  )
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function HomePage() {
//   const router = useRouter();
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     // Ensure we're on the client side
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     if (!isClient) return; // wait until client renders

//     const token = localStorage.getItem('token');
//     const role = localStorage.getItem('role');

//     console.log('Token:', token);
//     console.log('Role:', role);

//     if (token && role) {
//       if (role === 'admin') {
//         router.replace('/home');
//       } else if (role === 'salesperson') {
//         router.replace('/dashboard/salesperson');
//       } else {
//         router.replace('/login');
//       }
//     } else {
//       router.replace('/landingpage');
//     }
//   }, [isClient, router]);

//   return <div className="p-6 text-center">Redirecting...</div>;
// }




// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState('admin@algowza.com');
//   const [password, setPassword] = useState('123456');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const res = await fetch('https://testing.algowzaa.online/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const result = await res.json();

//       if (result.status && result.data.token) {
//         localStorage.setItem('token', result.data.token);
//         localStorage.setItem('role', result.data.user.role);

//         // Navigate based on role
//         if (result.data.user.role === 'admin') {
//           router.push('/landingpage');
//         } else if (result.data.user.role === 'salesperson') {
//           router.push('/dashboard/salesperson');
//         } else {
//           setError('Unsupported role');
//         }
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Login failed');
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Login</h2>
//       <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//       <br />
//       <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
//       <br />
//       <button onClick={handleLogin}>Login</button>
//       <p style={{ color: 'red' }}>{error}</p>
//     </div>
//   );
// }
