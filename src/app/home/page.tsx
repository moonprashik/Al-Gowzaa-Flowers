
"use client";

import Link from "next/link";
import Image from "next/image";
import { Truck, Store } from "lucide-react";
import Logo from "../assets/logo1.png";
import { useState } from "react";
import {  useRouter } from "next/navigation";
//import useAuthGuard from "../utils/authGuard";
//import middleware from '../middleware/middleWare'


export default function Home() {
  //const searchParams = useSearchParams();
  const router = useRouter();

  //useAuthGuard();
  //const popupType = searchParams.get("popup");
  //const location = searchParams.get("location");

 

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupVisible1, setPopupVisible1] = useState(false);
  const [location] = useState("Riyadh"); 
  const [location2] = useState("Hafer Al Batin"); 

  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [selectedOption] = useState("");

  const handleRiyadhLocation = () => {
    //router.push(`/products?location=${loc1}`)
    setPopupVisible(true); 
    
  }

  const handleHaferLocation = () => {
    //router.push(`/products?location=${loc2}`)
    setPopupVisible1(true); 
  }

  // const handleOptionClick = (option: string) => {
  //   setSelectedOption(option);
  //   setShowSecondPopup(true);
  // };

  const handleOptionClick1 = (option: string) => {
    setPopupVisible(false);  // Hide the popup
    // Navigate to the products page with both location and the selected option in query params
    router.push(`/products?location=${location}&option=${option}`);
  };

  const handleOptionClick2 = (option: string) => {
    setPopupVisible1(false);  // Hide the popup
    // Navigate to the products page with both location and the selected option in query params
    router.push(`/products?location=${location2}&option=${option}`);
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
              Welcome to AL GOWZAA, a renowned flower outlet celebrated for bringing the world’s most exquisite blooms right to your doorstep. From the romantic roses of Ecuador to the vibrant tulips of the Netherlands and the delicate orchids of Thailand, Algowzaa curates fresh, premium flowers from across the globe. More than just a flower shop, Algowzaa is a destination for those who appreciate beauty, quality, and heartfelt gifting. Whether you are celebrating love, expressing gratitude, or simply brightening someones day, each arrangement is crafted with care and delivered with precision. Experience the magic of real flowers—globally sourced, locally delivered—only at Algowzaa.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-8 p-6 md:p-10 bg-gradient-to-r from-yellow-100 via-pink-100 to-red-100 text-white">  
        {/* Sales Buttons */}
          <div className="flex flex-col lg:flex-row gap-8">
            
              <button onClick={handleRiyadhLocation} className="flex flex-col items-center justify-center w-48 md:w-56 px-6 py-3 md:py-4 text-lg md:text-xl bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:bg-green-800 transition space-y-1">
                <div className="flex items-center">
                  <Truck size={24} />
                  <span className="ml-2">Sales</span>
                </div>
                <span className="text-sm md:text-base">Riyadh</span>
              </button>
           

            <p className="text-black text-center lg:pt-[6%]">OR</p>

           
              <button onClick={handleHaferLocation} className="flex flex-col items-center justify-center w-48 md:w-56 px-6 py-3 md:py-4 text-lg md:text-xl bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:bg-green-800 transition space-y-1">
                <div className="flex items-center">
                  <Truck size={24} />
                  <span className="ml-2">Sales</span>
                </div>
                <span className="text-sm md:text-base">Hafer Al Batin</span>
              </button>
            
          </div>
        </div>

        {/* First Popup */}
        {/* {popupType === "sales" && !showSecondPopup && (
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
        )} */}

        {/* Another popup */}

        {popupVisible && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-lg p-4 z-40">
          <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-3xl shadow-lg w-full max-w-md text-center">
            <h2 className="text-xl font-bold mb-3 text-white">
              Sales Access - {location}
            </h2>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {/* First Option: R Shop */}
              <button
                className="border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center"
                onClick={() => handleOptionClick1("R Shop")}
              >
                <Store size={32} className="text-white mb-1" />
                <span className="text-white font-semibold">R Shop</span>
              </button>

              {/* Other Options: RT-1, RT-2, ..., RT-8 */}
              {[...Array(8)].map((_, index) => (
                <button
                  key={index}
                  className="border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center"
                  onClick={() => handleOptionClick1(`RT-${index + 1}`)}
                >
                  <Truck size={32} className="text-white mb-1" />
                  <span className="text-white font-semibold">
                    {`RT-${index + 1}`}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setPopupVisible(false)} // Close popup
              className="mt-4 px-4 py-2 text-lg bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
        {/* Another popup */}

         {/* Another popup 2 */}

         {popupVisible1 && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-lg p-4 z-40">
          <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-3xl shadow-lg w-full max-w-md text-center">
            <h2 className="text-xl font-bold mb-3 text-white">
              Sales Access - {location2}
            </h2>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {/* First Option: R Shop */}
              <button
                className="border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center"
                onClick={() => handleOptionClick2("H Shop")}
              >
                <Store size={32} className="text-white mb-1" />
                <span className="text-white font-semibold">H Shop</span>
              </button>

              {/* Other Options: RT-1, RT-2, ..., RT-8 */}
              {[...Array(8)].map((_, index) => (
                <button
                  key={index}
                  className="border border-gray-400 rounded-lg p-3 hover:bg-gray-200 transition flex flex-col items-center"
                  onClick={() => handleOptionClick2(`HT-${index + 1}`)}
                >
                  <Truck size={32} className="text-white mb-1" />
                  <span className="text-white font-semibold">
                    {`HT-${index + 1}`}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setPopupVisible(false)} // Close popup
              className="mt-4 px-4 py-2 text-lg bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
        {/* Another popup 2 */}

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

      {/* ✅ Responsive Footer */}
      <footer className="bg-black border-t-2 border-white text-white py-6 px-4">
        <div className="max-w-7xl border-b border-gray-500 pb-10 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left Half */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold " >Al Gowzaa Flowers</h3>
            <h3 className="text-lg font-semibold pt-6 text-left pb-4 ">Locations</h3>
            <p className="text-sm text-gray-400">
             <div className="flex xl:flex-row flex-row gap-24">
                <div>
                    <p className="text-sm text-left xl:text-xl">Head Quaters,
                    </p>
                    <p className="text-sm xl:text-xl text-left">
                      Muth Nabi Street,
                    </p>
                    <p className="text-sm xl:text-xl text-left">
                      Al Malaz Dist, 
                    </p>
                    <p className="text-sm xl:text-xl text-left"> Riyadh, KSA</p>
                </div>
                <div>
                    <p className="text-sm xl:text-xl text-left">
                      Branch Outlet,
                    </p>
                    <p className="text-sm xl:text-xl text-left">
                      ________ Street,
                    </p>
                    <p className="text-sm xl:texxt-xl text-left">
                      Hafer AL Batin,  
                    </p>
                    <p className="text-sm xl:text-xl text-left"> Riyadh, KSA</p>
                </div>
             </div>
              {/* © {new Date().getFullYear()} All rights reserved. */}
            </p>
          </div>

          {/* Right Half */}
          <div className="xl:text-center text-left items-start sm:text-left">
            <h3 className="text-lg text-left font-semibold pt-12 pb-6 ml-[-20%]">Contact Us</h3>
           
            <p className="text-sm text-gray-400">
             <div className="flex text-left ml-[-20%] xl:flex-row flex-col gap-40">
                <div>
                    <p className="text-sm xl:text-xl">Riyadh: 0558223636
                    </p>
                    <p className="text-sm xl:text-xl">
                    Hafer AL Batin: 0502427888
                    </p>
                    <p className="text-sm xl:text-xl">
                    E-mail : gowzaaflowers@gmail.com
                    </p>
                    <p className="text-sm xl:text-xl"> Business: admin@algowzaa.online</p>
                </div>
               
             </div>
              {/* © {new Date().getFullYear()} All rights reserved. */}
            </p>
          </div>
          
        </div>
        <p className="text-center pt-4 text-gray-500">© 2025 All rights reserved by EL JAH SOFTWARE SOLUTION.</p>
      </footer>
    </>
  );
}




// export default Home