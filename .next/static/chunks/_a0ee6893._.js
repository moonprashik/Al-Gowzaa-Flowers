(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// import React from 'react'
// //import LandingPage from './landingpage/page'
// //import DotMatrix from './dotmatrix/page'
// import Admin from './admin/page'
// export default function page() {
//   return (
//   //  <DotMatrix/>
//   //<LandingPage/>
//   <Admin/>
//   )
// }
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function HomePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            // Ensure we're on the client side
            setIsClient(true);
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (!isClient) return; // wait until client renders
            const token = localStorage.getItem('token');
            const role = localStorage.getItem('role');
            console.log('Token:', token);
            console.log('Role:', role);
            if (token && role) {
                if (role === 'admin') {
                    router.replace('/home');
                } else if (role === 'salesperson') {
                    router.replace('/dashboard/salesperson');
                } else {
                    router.replace('/login');
                }
            } else {
                router.replace('/landingpage');
            }
        }
    }["HomePage.useEffect"], [
        isClient,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 text-center",
        children: "Redirecting..."
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 52,
        columnNumber: 10
    }, this);
} // 'use client';
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
_s(HomePage, "UvnF/WCiTa8LGtgDB7RI5jzVZK0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_a0ee6893._.js.map