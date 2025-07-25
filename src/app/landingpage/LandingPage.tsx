
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


"use client";

import Link from "next/link";
import Image from "next/image";
import { Truck, Store } from "lucide-react";
import Logo from "../assets/logo1.png"
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
//import useAuthGuard from "../utils/authGuard";




const Home: React.FC = () => {

  //useAuthGuard();

  const searchParams = useSearchParams();
  const router = useRouter();
  const popupType = searchParams.get("popup");
  const location = searchParams.get("location");

  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

 
  

  // Main Function to login Functionality modify this only

  // function handleLogin() {
  //   //localStorage.setItem('token', 'dummy-token')
  //   router.replace('/landingpage')  // Redirect to home after login
  // }

  //const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState('');

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
 

   const handleLogin = async (e: React.FormEvent) => {
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
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
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowSecondPopup(true);
  };

  const handleCloseSecondPopup = () => {
    setShowSecondPopup(false);
  };

  const handleCloseFirstPopup = () => {
    setShowSecondPopup(false);
    router.push("/");
  };

  return (
    <>
      <main className="flex flex-col md:flex-row min-h-screen">
        {/* Left Section */}
        <div className="w-full md:w-1/2 shadow-2xs flex flex-col justify-center items-center text-center p-6 md:p-10 bg-gradient-to-b from-black to-gray-800">
          <Image src={Logo} alt="Logo" className="w-28 h-36 md:w-60 md:h-75 mb-0" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Al Gowzaa Flowers Trading Est.
          </h1>
          <p className="text-lg pb-10 md:text-xl text-white mt-2">
            Muth Nabi Street, Al Malaz Dist, Riyadh, KSA
          </p>
          <div className="items-start">
            <p className="text-left pb-4 text-2xl">AL GOWZAA FLOWERS</p>
            <p className="text-left pl-4">“ Where Global Blooms Meet Local Hearts”</p>
            <p className="text-left">
              Welcome to AL GOWZAA, a renowned flower outlet celebrated for bringing the world’s most exquisite blooms right to your doorstep...
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center space-y-8 p-6 md:p-10  text-white bg-gradient-to-r from-yellow-100 via-pink-100 to-red-100">
          {/* Top Nav for Login/Register (Fixed at the top) */}
          <div className="w-full flex justify-center space-x-8 mb-6">
            <button
              onClick={() => setActiveTab("login")}
              className={`text-lg font-semibold ${activeTab === "login" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-700"}`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`text-lg font-semibold ${activeTab === "register" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-700"}`}
            >
              Register
            </button>
          </div>

          {/* Content Below the Navigation */}
          <div className="flex-1 xl:pt-[20%] w-full max-w-sm text-center">
            {/* Conditional Form Rendering */}
            {activeTab === "login" ? (
              // <div className="p-2 rounded-3xl w-full max-w-sm text-center">
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
              <div className="p-2 rounded-3xl w-full max-w-sm text-center mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-8 text-black">Login</h2>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`w-full px-4 py-2 rounded-lg border-2 ${
            emailError ? 'border-red-500' : 'border-black'
          } bg-white text-gray-900`}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={`w-full px-4 py-2 rounded-lg border-2 ${
            passwordError ? 'border-red-500' : 'border-black'
          } bg-white text-gray-900`}
        />

        <button
          type="submit"
          className="mt-2 mb-20 px-5 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
        >
          Login
        </button>
      </form>
    </div>
            ) : (
              <div className="p-2 rounded-3xl w-full max-w-sm text-center">
                <h2 className="text-2xl font-bold mb-8 text-black">Register</h2>
                <form className="flex flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border-2 rounded-lg text-gray-900 border-black"
                  />
                  <button
                    type="submit"
                    className="mt-2 mb-20 px-5 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                  >
                    Register
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* First Popup */}
        {popupType === "sales" && !showSecondPopup && (
          <div className="fixed inset-0 flex justify-end items-center backdrop-blur-lg p-4 z-40">
            <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-3xl shadow-lg w-full max-w-md text-center">
              <h2 className="text-xl font-bold mb-3 text-white">
                Sales Access - {location}
              </h2>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <button
                  className="border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center"
                  onClick={() => handleOptionClick(location === "Riyadh" ? "R Shop" : "H Shop")}
                >
                  <Store size={32} className="text-white mb-1" />
                  <span className="text-white font-semibold">
                    {location === "Riyadh" ? "R Shop" : "H-Shop"}
                  </span>
                </button>
                {[...Array(8)].map((_, index) => (
                  <button
                    key={index}
                    className="border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center"
                    onClick={() =>
                      handleOptionClick(location === "Riyadh" ? `RT-${index + 1}` : `HT-${index + 1}`)
                    }
                  >
                    <Truck size={32} className="text-white mb-1" />
                    <span className="text-white font-semibold">
                      {location === "Riyadh" ? `RT-${index + 1}` : `HT-${index + 1}`}
                    </span>
                  </button>
                ))}
              </div>
              <Link href="/">
                <button className="mt-4 px-4 py-2 text-lg bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  Close
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Second Popup */}
        {showSecondPopup && (
          <div className="fixed inset-0 flex justify-end items-center backdrop-blur-lg p-4 z-50">
            <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-3xl shadow-lg w-full max-w-md text-center">
              <h2 className="text-xl font-bold mb-6 text-white">Invoice Options - {selectedOption}</h2>
              <div className="flex flex-col space-y-4">
                <Link href="/products">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    A4 Invoice
                  </button>
                </Link>
                <Link href="">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                    DOT_M Invoice
                  </button>
                </Link>
                <div className="flex justify-between pt-4 space-x-4">
                  <button
                    onClick={handleCloseSecondPopup}
                    className="w-full bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCloseFirstPopup}
                    className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-white text-white py-6 px-4">
        <div className="max-w-7xl border-b border-gray-500 pb-10 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold ">Al Gowzaa Flowers</h3>
            <h3 className="text-lg font-semibold pt-6 text-left pb-4">Locations</h3>
            <div className="flex xl:flex-row flex-row gap-24">
              <div>
                <p className="text-sm xl:text-xl text-left">Head Quaters,</p>
                <p className="text-sm xl:text-xl text-left">Muth Nabi Street,</p>
                <p className="text-sm xl:text-xl text-left">Al Malaz Dist,</p>
                <p className="text-sm xl:text-xl text-left">Riyadh, KSA</p>
              </div>
              <div>
                <p className="text-sm xl:text-xl text-left">Riyadh Branch,</p>
                <p className="text-sm xl:text-xl text-left">King AbdulAziz Rd,</p>
                <p className="text-sm xl:text-xl text-left">Al Mughrizat Dist,</p>
                <p className="text-sm xl:text-xl text-left">Riyadh, KSA</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
