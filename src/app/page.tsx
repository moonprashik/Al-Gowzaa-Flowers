// import React from 'react'

// //import LandingPage from './landingpage/page'
// import DotMatrix from './dotmatrix/page'
// //import Admin from './admin/page'

// export default function page() {
  
//   return (
//     <DotMatrix/>
//   //<LandingPage/>
//   //<Admin/>
//   )
// }

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // wait until client renders

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    console.log('Token:', token);
    console.log('Role:', role);

    if (token && role) {
      if (role === 'admin') {
        router.replace('/home');
      } else if (role === 'sales_man') {
        router.replace('/dashboard/salesperson');
      } else {
        router.replace('/login');
      }
    } else {
      router.replace('/landingpage');
    }
  }, [isClient, router]);

  return <div className="p-6 text-center">Redirecting...</div>;
}


// admin
// sales_man
//super_admin



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



// 'use client';

// import React, { useEffect, useState } from 'react';

// const ApiTestPage = () => {
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
//   const [message, setMessage] = useState<string>('');

//   useEffect(() => {
//     const sendData = async () => {
//       setStatus('loading');
//       setMessage('Sending request...');

//       const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZWI3ZjRjMjQzODE0Y2M5N2ZmNWY0ZWUyMzgwYTc2MzAyNDBiMjM0NmNiNGRhNWJhNWQ5MDNhYmVhMDkzYzFiZGRkMmFlMDExYTRkOTM4NGMiLCJpYXQiOjE3NTQzMjkxNjYuNjMxNjU0OTc3Nzk4NDYxOTE0MDYyNSwibmJmIjoxNzU0MzI5MTY2LjYzMTY1Njg4NTE0NzA5NDcyNjU2MjUsImV4cCI6MTc4NTg2NTE2Ni42MjY1OTUwMjAyOTQxODk0NTMxMjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.gw3JMLo4zuc3Pr4k3_eqUjC82IqAQnq1zHMCso3isHO63fHOEm_hdKwrFIGvHUaEoUfRb9nIn5iSroYNXfphpWIkpMsAhGn5djwJYJ7OBvohReWbySwPnFadsjW42tkMI81kP3n3eTKJU2qhiX9YREarVV7a8dOR4mmpX2hJ_ueCesZPo780KFPCo_f-bqtXcSvEpajdLnXZ4fG4STGYFCkGKvwHALjrxOQ3U3Psfn_ZH-8zw5QAKuIFSHqRnlPc1oLlxroH0gjNIPdC0RBT1-7nHpkuve3thgxIqZ-YMzNgqmVdSM4Km5gaL8ntyxpFy_UfW9YrQlN988DxO7LECQ--Hf4shrAZps3gtZM5o2c_3IxdmQAof0wizmGm8eRCw_ANHJ7YkHLqitvR3En5usodasmt8dtEreVsoWNZ7Uh-3kNXHyZMGRn_KUFD898kTfkXwlJr_CLDYYtJJ2UWOqEev7M-SD299gWue3cSB7BYgcRb7trjp2rLSjuskbG9YYebJbHkED7t3iz3hzBrKg_GWMWKacZsv5V7CNwxpTGNccuKYInRJ3tVcw71H3O_RqzVqLGSy4YaZJaCMokBsViWZIYl5dIhMULv6qFcYwAt47GKoOzdqiQ76HVPVWiB0qUu5mCjeUjL9fmc_SSneNfdwCN87ECSJd75-f6-GrY'; // 🔁 Replace with valid token

//       const data = {
//         customer_id: 1,
//         vat_number: '310122393500003',
//         location: 'Riyadh',
//         product: [7, 37, 32],
//         price: [149.99, 59.50, 199.00],
//         quantity: [2, 1, 3],
//         branch: 'riyadh',
//         branch_category: 'shop',
//       };

//       try {
//         const response = await fetch('https://testing.algowzaa.online/api/invoice/create', {
//           method: 'POST',
//           headers: {
            
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//           },
//           body: JSON.stringify(data),
//         });

//         const text = await response.text();
//         console.log('Raw Response:', text);

//         if (!response.ok) {
//           setStatus('error');
//           setMessage(`❌ Error ${response.status}: ${text}`);
//           return;
//         }

//         setStatus('success');
//         setMessage('✅ Invoice created successfully!');
//       } catch (error: any) {
//         setStatus('error');
//         setMessage(`🚨 API Error: ${error.message}`);
//         console.error('Error:', error);
//       }
//     };

//     sendData();
//   }, []);

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">📡 Invoice API Call Test</h1>

//       <div className="text-lg font-medium">
//         Status:{' '}
//         <span
//           className={`${
//             status === 'success'
//               ? 'text-green-600'
//               : status === 'error'
//               ? 'text-red-600'
//               : status === 'loading'
//               ? 'text-yellow-600'
//               : 'text-gray-600'
//           }`}
//         >
//           {status.toUpperCase()}
//         </span>
//       </div>

//       {message && <p className="mt-2 text-sm text-gray-800">{message}</p>}
//     </div>
//   );
// };

// export default ApiTestPage;
