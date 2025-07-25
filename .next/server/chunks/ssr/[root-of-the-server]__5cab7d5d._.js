module.exports = {

"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/assets/logo1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/logo1.10760d19.png");}}),
"[project]/src/app/assets/logo1.png.mjs { IMAGE => \"[project]/src/app/assets/logo1.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$logo1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/logo1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$logo1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1414,
    height: 2000,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAm0lEQVR42nWNPQ6CMABGew2BGh2MDibQRisIpIEQNMRz0Dp166ZxIJGkiUdtb9DKz8ybvnzDewAssRrACJ1hEJA1hGTc4wdY24rP660LWpnkmhvV95ozJkBBqdzCjY2jxIVH4va7g73XtQRVWUoURrYpY3ejqcvTzD6aRk6qb9fpLEtMfDmZn1L6ybmY4mgI+p5HAt8nGOM5vsQfjGovxhKbtfEAAAAASUVORK5CYII=",
    blurWidth: 6,
    blurHeight: 8
};
}}),
"[project]/src/app/landingpage/LandingPage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { Truck, Store } from "lucide-react";
// import Logo from "../app/assets/logo1.png";
// import { useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// export default function Home() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const popupType = searchParams.get("popup");
//   const location = searchParams.get("location");
//   const [showSecondPopup, setShowSecondPopup] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");
//   const handleOptionClick = (option: string) => {
//     setSelectedOption(option);
//     setShowSecondPopup(true);
//   };
//   const handleCloseSecondPopup = () => {
//     setShowSecondPopup(false);
//   };
//   const handleCloseFirstPopup = () => {
//     setShowSecondPopup(false);
//     router.push("/");
//   };
//   return (
//     <>
//       <main className="flex flex-col md:flex-row min-h-screen">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 shadow-2xs flex flex-col justify-center items-center text-center p-6 md:p-10 bg-gradient-to-b from-black to-gray-800">
//           <Image src={Logo} alt="Logo" className="w-28 h-36 md:w-60 md:h-75 mb-0" />
//           <h1 className="text-3xl md:text-4xl font-extrabold text-white">
//             Al Gowzaa Flowers Trading Est.
//           </h1>
//           <p className="text-lg pb-10 md:text-xl text-white mt-2">
//             Muth Nabi Street, Al Malaz Dist, Riyadh, KSA
//           </p>
//           <div className="items-start">
//             <p className="text-left pb-4 text-2xl">AL GOWZAA FLOWERS</p>
//             <p className="text-left pl-4">“ Where Global Blooms Meet Local Hearts”</p>
//             <p className="text-left">
//               Welcome to AL GOWZAA, a renowned flower outlet celebrated for bringing the world’s most exquisite blooms right to your doorstep. From the romantic roses of Ecuador to the vibrant tulips of the Netherlands and the delicate orchids of Thailand, Algowzaa curates fresh, premium flowers from across the globe. More than just a flower shop, Algowzaa is a destination for those who appreciate beauty, quality, and heartfelt gifting. Whether you are celebrating love, expressing gratitude, or simply brightening someones day, each arrangement is crafted with care and delivered with precision. Experience the magic of real flowers—globally sourced, locally delivered—only at Algowzaa.
//             </p>
//           </div>
//         </div>
//         {/* Right Section */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-8 p-6 md:p-10 bg-white text-white">
//           <div className="p-2 rounded-3xl shadow-none w-full max-w-sm text-center">
//             <h2 className="text-2xl font-bold mb-8 text-black">Admin Login</h2>
//             <form className="flex flex-col space-y-4">
//               <input
//                 type="text"
//                 placeholder="User ID"
//                 className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-900 border-black"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-900 border-black"
//               />
//               <Link href="/hom">
//                 <button
//                   type="submit"
//                   className="mt-2 mb-20 px-5 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
//                 >
//                   Login
//                 </button>
//               </Link>
//             </form>
//           </div>
//         </div>
//         {/* First Popup */}
//         {popupType === "sales" && !showSecondPopup && (
//           <div className="fixed inset-0 flex justify-end items-center backdrop-blur-lg p-4 z-40">
//             <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-3xl shadow-lg w-full max-w-md text-center">
//               <h2 className="text-xl font-bold mb-3 text-white">
//                 Sales Access - {location}
//               </h2>
//               <div className="grid grid-cols-3 gap-3 mt-4">
//                 <button
//                   className="border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center"
//                   onClick={() => handleOptionClick(location === "Riyadh" ? "R Shop" : "H Shop")}
//                 >
//                   <Store size={32} className="text-white mb-1" />
//                   <span className="text-white font-semibold">
//                     {location === "Riyadh" ? "R Shop" : "H-Shop"}
//                   </span>
//                 </button>
//                 {[...Array(8)].map((_, index) => (
//                   <button
//                     key={index}
//                     className="border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center"
//                     onClick={() =>
//                       handleOptionClick(location === "Riyadh" ? `RT-${index + 1}` : `HT-${index + 1}`)
//                     }
//                   >
//                     <Truck size={32} className="text-white mb-1" />
//                     <span className="text-white font-semibold">
//                       {location === "Riyadh" ? `RT-${index + 1}` : `HT-${index + 1}`}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//               <Link href="/">
//                 <button className="mt-4 px-4 py-2 text-lg bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
//                   Close
//                 </button>
//               </Link>
//             </div>
//           </div>
//         )}
//         {/* Second Popup */}
//         {showSecondPopup && (
//           <div className="fixed inset-0 flex justify-end items-center backdrop-blur-lg p-4 z-50">
//             <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-3xl shadow-lg w-full max-w-md text-center">
//               <h2 className="text-xl font-bold mb-6 text-white">Invoice Options - {selectedOption}</h2>
//               <div className="flex flex-col space-y-4">
//                 <Link href="/products">
//                   <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
//                     A4 Invoice
//                   </button>
//                 </Link>
//                 <Link href="">
//                   <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
//                     DOT_M Invoice
//                   </button>
//                 </Link>
//                 <div className="flex justify-between pt-4 space-x-4">
//                   <button
//                     onClick={handleCloseSecondPopup}
//                     className="w-full bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
//                   >
//                     Back
//                   </button>
//                   <button
//                     onClick={handleCloseFirstPopup}
//                     className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//       {/* ✅ Responsive Footer */}
//       <footer className="bg-black border-t-2 border-white text-white py-6 px-4">
//         <div className="max-w-7xl border-b border-gray-500 pb-10 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
//           {/* Left Half */}
//           <div className="text-center sm:text-left">
//             <h3 className="text-2xl font-semibold " >Al Gowzaa Flowers</h3>
//             <h3 className="text-lg font-semibold pt-6 text-left pb-4 ">Locations</h3>
//             <p className="text-sm text-gray-400">
//              <div className="flex xl:flex-row flex-row gap-24">
//                 <div>
//                     <p className="text-sm text-left xl:text-xl">Head Quaters,
//                     </p>
//                     <p className="text-sm xl:text-xl text-left">
//                       Muth Nabi Street,
//                     </p>
//                     <p className="text-sm xl:text-xl text-left">
//                       Al Malaz Dist, 
//                     </p>
//                     <p className="text-sm xl:text-xl text-left"> Riyadh, KSA</p>
//                 </div>
//                 <div>
//                     <p className="text-sm xl:text-xl text-left">
//                       Branch Outlet,
//                     </p>
//                     <p className="text-sm xl:text-xl text-left">
//                       ________ Street,
//                     </p>
//                     <p className="text-sm xl:texxt-xl text-left">
//                       Hafer AL Batin,  
//                     </p>
//                     <p className="text-sm xl:text-xl text-left"> Riyadh, KSA</p>
//                 </div>
//              </div>
//               {/* © {new Date().getFullYear()} All rights reserved. */}
//             </p>
//           </div>
//           {/* Right Half */}
//           <div className="xl:text-center text-left items-start sm:text-left">
//             <h3 className="text-lg text-left font-semibold pt-12 pb-6 ml-[-20%]">Contact Us</h3>
//             <p className="text-sm text-gray-400">
//              <div className="flex text-left ml-[-20%] xl:flex-row flex-col gap-40">
//                 <div>
//                     <p className="text-sm xl:text-xl">Riyadh: 0558223636
//                     </p>
//                     <p className="text-sm xl:text-xl">
//                     Hafer AL Batin: 0502427888
//                     </p>
//                     <p className="text-sm xl:text-xl">
//                     E-mail : gowzaaflowers@gmail.com
//                     </p>
//                     <p className="text-sm xl:text-xl"> Business: admin@algowzaa.online</p>
//                 </div>
//              </div>
//               {/* © {new Date().getFullYear()} All rights reserved. */}
//             </p>
//           </div>
//         </div>
//         <p className="text-center pt-4 text-gray-500">© 2025 All rights reserved by EL JAH SOFTWARE SOLUTION.</p>
//       </footer>
//     </>
//   );
// }
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { Truck, Store } from "lucide-react";
// import Logo from "../app/assets/logo1.png";
// import { useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// export default function Home() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const popupType = searchParams.get("popup");
//   const location = searchParams.get("location");
//   const [showSecondPopup, setShowSecondPopup] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [activeTab, setActiveTab] = useState<"login" | "register">("login");
//   const handleOptionClick = (option: string) => {
//     setSelectedOption(option);
//     setShowSecondPopup(true);
//   };
//   const handleCloseSecondPopup = () => {
//     setShowSecondPopup(false);
//   };
//   const handleCloseFirstPopup = () => {
//     setShowSecondPopup(false);
//     router.push("/");
//   };
//   return (
//     <>
//       <main className="flex flex-col md:flex-row min-h-screen">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 shadow-2xs flex flex-col justify-center items-center text-center p-6 md:p-10 bg-gradient-to-b from-black to-gray-800">
//           <Image src={Logo} alt="Logo" className="w-28 h-36 md:w-60 md:h-75 mb-0" />
//           <h1 className="text-3xl md:text-4xl font-extrabold text-white">
//             Al Gowzaa Flowers Trading Est.
//           </h1>
//           <p className="text-lg pb-10 md:text-xl text-white mt-2">
//             Muth Nabi Street, Al Malaz Dist, Riyadh, KSA
//           </p>
//           <div className="items-start">
//             <p className="text-left pb-4 text-2xl">AL GOWZAA FLOWERS</p>
//             <p className="text-left pl-4">“ Where Global Blooms Meet Local Hearts”</p>
//             <p className="text-left">
//               Welcome to AL GOWZAA, a renowned flower outlet celebrated for bringing the world’s most exquisite blooms right to your doorstep...
//             </p>
//           </div>
//         </div>
//         {/* Right Section */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-8 p-6 md:p-10 bg-white text-white">
//           {/* Top Nav for Login/Register */}
//           <div className="flex justify-center space-x-8 mb-6">
//             <button
//               onClick={() => setActiveTab("login")}
//               className={`text-lg font-semibold ${activeTab === "login" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-700"}`}
//             >
//               Login
//             </button>
//             <button
//               onClick={() => setActiveTab("register")}
//               className={`text-lg font-semibold ${activeTab === "register" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-700"}`}
//             >
//               Register
//             </button>
//           </div>
//           {/* Conditional Form Rendering */}
//           {activeTab === "login" ? (
//             <div className="p-2 rounded-3xl w-full max-w-sm text-center">
//               <h2 className="text-2xl font-bold mb-8 text-black">Admin Login</h2>
//               <form className="flex flex-col space-y-4">
//                 <input
//                   type="text"
//                   placeholder="User ID"
//                   className="w-full px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
//                 />
//                 <Link href="/home">
//                   <button
//                     type="submit"
//                     className="mt-2 mb-20 px-5 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
//                   >
//                     Login
//                   </button>
//                 </Link>
//               </form>
//             </div>
//           ) : (
//             <div className="p-2 rounded-3xl w-full max-w-sm text-center">
//               <h2 className="text-2xl font-bold mb-8 text-black">Register</h2>
//               <form className="flex flex-col space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   className="w-full px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
//                 />
//                 <button
//                   type="submit"
//                   className="mt-2 mb-20 px-5 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
//                 >
//                   Register
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>
//         {/* First Popup */}
//         {popupType === "sales" && !showSecondPopup && (
//           <div className="fixed inset-0 flex justify-end items-center backdrop-blur-lg p-4 z-40">
//             <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-3xl shadow-lg w-full max-w-md text-center">
//               <h2 className="text-xl font-bold mb-3 text-white">
//                 Sales Access - {location}
//               </h2>
//               <div className="grid grid-cols-3 gap-3 mt-4">
//                 <button
//                   className="border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center"
//                   onClick={() => handleOptionClick(location === "Riyadh" ? "R Shop" : "H Shop")}
//                 >
//                   <Store size={32} className="text-white mb-1" />
//                   <span className="text-white font-semibold">
//                     {location === "Riyadh" ? "R Shop" : "H-Shop"}
//                   </span>
//                 </button>
//                 {[...Array(8)].map((_, index) => (
//                   <button
//                     key={index}
//                     className="border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center"
//                     onClick={() =>
//                       handleOptionClick(location === "Riyadh" ? `RT-${index + 1}` : `HT-${index + 1}`)
//                     }
//                   >
//                     <Truck size={32} className="text-white mb-1" />
//                     <span className="text-white font-semibold">
//                       {location === "Riyadh" ? `RT-${index + 1}` : `HT-${index + 1}`}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//               <Link href="/">
//                 <button className="mt-4 px-4 py-2 text-lg bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
//                   Close
//                 </button>
//               </Link>
//             </div>
//           </div>
//         )}
//         {/* Second Popup */}
//         {showSecondPopup && (
//           <div className="fixed inset-0 flex justify-end items-center backdrop-blur-lg p-4 z-50">
//             <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-3xl shadow-lg w-full max-w-md text-center">
//               <h2 className="text-xl font-bold mb-6 text-white">Invoice Options - {selectedOption}</h2>
//               <div className="flex flex-col space-y-4">
//                 <Link href="/products">
//                   <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
//                     A4 Invoice
//                   </button>
//                 </Link>
//                 <Link href="">
//                   <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
//                     DOT_M Invoice
//                   </button>
//                 </Link>
//                 <div className="flex justify-between pt-4 space-x-4">
//                   <button
//                     onClick={handleCloseSecondPopup}
//                     className="w-full bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
//                   >
//                     Back
//                   </button>
//                   <button
//                     onClick={handleCloseFirstPopup}
//                     className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//       {/* Footer */}
//       <footer className="bg-black border-t-2 border-white text-white py-6 px-4">
//         <div className="max-w-7xl border-b border-gray-500 pb-10 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
//           <div className="text-center sm:text-left">
//             <h3 className="text-2xl font-semibold ">Al Gowzaa Flowers</h3>
//             <h3 className="text-lg font-semibold pt-6 text-left pb-4">Locations</h3>
//             <div className="flex xl:flex-row flex-row gap-24">
//               <div>
//                 <p className="text-sm xl:text-xl text-left">Head Quaters,</p>
//                 <p className="text-sm xl:text-xl text-left">Muth Nabi Street,</p>
//                 <p className="text-sm xl:text-xl text-left">Al Malaz Dist,</p>
//                 <p className="text-sm xl:text-xl text-left">Riyadh, KSA</p>
//               </div>
//               <div>
//                 <p className="text-sm xl:text-xl text-left">Branch Outlet,</p>
//                 <p className="text-sm xl:text-xl text-left">________ Street,</p>
//                 <p className="text-sm xl:text-xl text-left">Hafer AL Batin,</p>
//                 <p className="text-sm xl:text-xl text-left">Riyadh, KSA</p>
//               </div>
//             </div>
//           </div>
//           <div className="xl:text-center text-left items-start sm:text-left">
//             <h3 className="text-lg text-left font-semibold pt-12 pb-6 ml-[-20%]">Contact Us</h3>
//             <div className="flex text-left ml-[-20%] xl:flex-row flex-col gap-40">
//               <div>
//                 <p className="text-sm xl:text-xl">Riyadh: 0558223636</p>
//                 <p className="text-sm xl:text-xl">Hafer AL Batin: 0502427888</p>
//                 <p className="text-sm xl:text-xl">E-mail: gowzaaflowers@gmail.com</p>
//                 <p className="text-sm xl:text-xl">Business: admin@algowzaa.online</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <p className="text-center pt-4 text-gray-500">© 2025 All rights reserved by EL JAH SOFTWARE SOLUTION.</p>
//       </footer>
//     </>
//   );
// }
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.js [app-ssr] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$logo1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$logo1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/logo1.png.mjs { IMAGE => "[project]/src/app/assets/logo1.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
//import useAuthGuard from "../utils/authGuard";
const Home = ()=>{
    //useAuthGuard();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const popupType = searchParams.get("popup");
    const location = searchParams.get("location");
    const [showSecondPopup, setShowSecondPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("login");
    // Main Function to login Functionality modify this only
    // function handleLogin() {
    //   //localStorage.setItem('token', 'dummy-token')
    //   router.replace('/landingpage')  // Redirect to home after login
    // }
    //const router = useRouter();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [emailError, setEmailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passwordError, setPasswordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // const handleLogin = async () => {
    //   try {
    //     const res = await fetch('https://testing.algowzaa.online/api/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ email, password }),
    //     });
    //     const result = await res.json();
    //     if (result.status && result.data.token) {
    //       localStorage.setItem('token', result.data.token);
    //       localStorage.setItem('role', result.data.user.role);
    //       // Navigate based on role
    //       if (result.data.user.role === 'admin') {
    //         router.push('/landingpage');
    //       } else if (result.data.user.role === 'salesperson') {
    //         router.push('/dashboard/salesperson');
    //       } else {
    //         setError('Unsupported role');
    //       }
    //     } else {
    //       setError('Invalid credentials');
    //     }
    //   } catch (err) {
    //     console.error(err);
    //     setError('Login failed');
    //   }
    // };
    // function handleLogout(){
    //   localStorage.clear();
    //   router.replace('/landingpage') 
    // }
    // Main Function to login Functionality modify this only
    const handleLogin = async (e)=>{
        e.preventDefault();
        let valid = true;
        setError('');
        if (!email.trim()) {
            setEmailError(true);
            valid = false;
        } else {
            setEmailError(false);
        }
        if (!password.trim()) {
            setPasswordError(true);
            valid = false;
        } else {
            setPasswordError(false);
        }
        if (!valid) return;
        try {
            const res = await fetch('https://testing.algowzaa.online/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const result = await res.json();
            if (result.status && result.data.token) {
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('role', result.data.user.role);
                if (result.data.user.role === 'admin') {
                    router.push('/home');
                } else if (result.data.user.role === 'salesperson') {
                    router.push('/dashboard/salesperson');
                } else {
                    setError('Unsupported role');
                }
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            console.error(err);
            setError('Login failed');
        }
    };
    const handleOptionClick = (option)=>{
        setSelectedOption(option);
        setShowSecondPopup(true);
    };
    const handleCloseSecondPopup = ()=>{
        setShowSecondPopup(false);
    };
    const handleCloseFirstPopup = ()=>{
        setShowSecondPopup(false);
        router.push("/");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-col md:flex-row min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-1/2 shadow-2xs flex flex-col justify-center items-center text-center p-6 md:p-10 bg-gradient-to-b from-black to-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$logo1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$logo1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "Logo",
                                className: "w-28 h-36 md:w-60 md:h-75 mb-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                lineNumber: 630,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-4xl font-extrabold text-white",
                                children: "Al Gowzaa Flowers Trading Est."
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                lineNumber: 631,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg pb-10 md:text-xl text-white mt-2",
                                children: "Muth Nabi Street, Al Malaz Dist, Riyadh, KSA"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                lineNumber: 634,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-left pb-4 text-2xl",
                                        children: "AL GOWZAA FLOWERS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                        lineNumber: 638,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-left pl-4",
                                        children: "“ Where Global Blooms Meet Local Hearts”"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                        lineNumber: 639,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-left",
                                        children: "Welcome to AL GOWZAA, a renowned flower outlet celebrated for bringing the world’s most exquisite blooms right to your doorstep..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                        lineNumber: 640,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                lineNumber: 637,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                        lineNumber: 629,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-1/2 flex flex-col justify-start items-center space-y-8 p-6 md:p-10  text-white bg-gradient-to-r from-yellow-100 via-pink-100 to-red-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex justify-center space-x-8 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("login"),
                                        className: `text-lg font-semibold ${activeTab === "login" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-700"}`,
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                        lineNumber: 650,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("register"),
                                        className: `text-lg font-semibold ${activeTab === "register" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-700"}`,
                                        children: "Register"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                        lineNumber: 656,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 xl:pt-[20%] w-full max-w-sm text-center",
                                children: activeTab === "login" ? // <div className="p-2 rounded-3xl w-full max-w-sm text-center">
                                //   <h2 className="text-2xl font-bold mb-8 text-black">Login</h2>
                                //   <form className="flex flex-col space-y-4">
                                //     <input
                                //       type="text"
                                //       value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" 
                                //       className="w-full bg-white px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
                                //     />
                                //     <input
                                //       type="password"
                                //       value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password"
                                //       className="w-full bg-white px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
                                //     />
                                //     {/* <Link href="/home"> */}
                                //       <button
                                //        onClick={handleLogin}
                                //         type="submit"
                                //         className="mt-2 mb-20 px-5 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
                                //       >
                                //         Login
                                //       </button>
                                //     {/* </Link> */}
                                //   </form>
                                // </div>
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 rounded-3xl w-full max-w-sm text-center mx-auto mt-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-8 text-black",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                            lineNumber: 694,
                                            columnNumber: 7
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm mb-4",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                            lineNumber: 696,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "flex flex-col space-y-4",
                                            onSubmit: handleLogin,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    placeholder: "Email",
                                                    className: `w-full px-4 py-2 rounded-lg border-2 ${emailError ? 'border-red-500' : 'border-black'} bg-white text-gray-900`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    value: password,
                                                    onChange: (e)=>setPassword(e.target.value),
                                                    placeholder: "Password",
                                                    className: `w-full px-4 py-2 rounded-lg border-2 ${passwordError ? 'border-red-500' : 'border-black'} bg-white text-gray-900`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "mt-2 mb-20 px-5 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition",
                                                    children: "Login"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                    lineNumber: 719,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                            lineNumber: 698,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                    lineNumber: 693,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 rounded-3xl w-full max-w-sm text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-8 text-black",
                                            children: "Register"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                            lineNumber: 729,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "flex flex-col space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Full Name",
                                                    className: "w-full px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Email",
                                                    className: "w-full px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    placeholder: "Password",
                                                    className: "w-full px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "mt-2 mb-20 px-5 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition",
                                                    children: "Register"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                    lineNumber: 746,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                            lineNumber: 730,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                    lineNumber: 728,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                lineNumber: 665,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                        lineNumber: 647,
                        columnNumber: 9
                    }, this),
                    popupType === "sales" && !showSecondPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 flex justify-end items-center backdrop-blur-lg p-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-b from-gray-800 to-black p-6 rounded-3xl shadow-lg w-full max-w-md text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mb-3 text-white",
                                    children: [
                                        "Sales Access - ",
                                        location
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                    lineNumber: 762,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center",
                                            onClick: ()=>handleOptionClick(location === "Riyadh" ? "R Shop" : "H Shop"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                    size: 32,
                                                    className: "text-white mb-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                    lineNumber: 770,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-semibold",
                                                    children: location === "Riyadh" ? "R Shop" : "H-Shop"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                            lineNumber: 766,
                                            columnNumber: 17
                                        }, this),
                                        [
                                            ...Array(8)
                                        ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center",
                                                onClick: ()=>handleOptionClick(location === "Riyadh" ? `RT-${index + 1}` : `HT-${index + 1}`),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                        size: 32,
                                                        className: "text-white mb-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                        lineNumber: 783,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-semibold",
                                                        children: location === "Riyadh" ? `RT-${index + 1}` : `HT-${index + 1}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                        lineNumber: 784,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                lineNumber: 776,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                    lineNumber: 765,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "mt-4 px-4 py-2 text-lg bg-red-600 text-white rounded-lg hover:bg-red-700 transition",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                        lineNumber: 791,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                    lineNumber: 790,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                            lineNumber: 761,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                        lineNumber: 760,
                        columnNumber: 11
                    }, this),
                    showSecondPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 flex justify-end items-center backdrop-blur-lg p-4 z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-b from-gray-800 to-black p-6 rounded-3xl shadow-lg w-full max-w-md text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mb-6 text-white",
                                    children: [
                                        "Invoice Options - ",
                                        selectedOption
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                    lineNumber: 803,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/products",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition",
                                                children: "A4 Invoice"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                lineNumber: 806,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                            lineNumber: 805,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition",
                                                children: "DOT_M Invoice"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                lineNumber: 811,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                            lineNumber: 810,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between pt-4 space-x-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleCloseSecondPopup,
                                                    className: "w-full bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition",
                                                    children: "Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleCloseFirstPopup,
                                                    className: "w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition",
                                                    children: "Close"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                            lineNumber: 815,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                    lineNumber: 804,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                            lineNumber: 802,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                        lineNumber: 801,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                lineNumber: 627,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-black border-t-2 border-white text-white py-6 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl border-b border-gray-500 pb-10 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-semibold ",
                                children: "Al Gowzaa Flowers"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                lineNumber: 839,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold pt-6 text-left pb-4",
                                children: "Locations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                lineNumber: 840,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex xl:flex-row flex-row gap-24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xl:text-xl text-left",
                                                children: "Head Quaters,"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                lineNumber: 843,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xl:text-xl text-left",
                                                children: "Muth Nabi Street,"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                lineNumber: 844,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xl:text-xl text-left",
                                                children: "Al Malaz Dist,"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                lineNumber: 845,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xl:text-xl text-left",
                                                children: "Riyadh, KSA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                lineNumber: 846,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                        lineNumber: 842,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xl:text-xl text-left",
                                                children: "Riyadh Branch,"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                lineNumber: 849,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xl:text-xl text-left",
                                                children: "King AbdulAziz Rd,"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                lineNumber: 850,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xl:text-xl text-left",
                                                children: "Al Mughrizat Dist,"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                lineNumber: 851,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm xl:text-xl text-left",
                                                children: "Riyadh, KSA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                                lineNumber: 852,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                        lineNumber: 848,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                                lineNumber: 841,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                        lineNumber: 838,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                    lineNumber: 837,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landingpage/LandingPage.tsx",
                lineNumber: 836,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Home;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5cab7d5d._.js.map