



// "use client";

// import React, { ChangeEvent, FormEvent, useEffect, useState, } from "react";
// import {  useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { Listbox } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// import ProductCrudTable from './productsCrud'
// //import InvoicePage from "./products";
// interface ApiProduct {
//   id: number;
//   name_en: string;
//   name_ar: string;
// }

// interface Product {
//   id: number;
//   name_en: string;
//   // add other fields if needed
// }

// interface RequestBody {
//   customer_name: string;
//   vat_number: string;
//   location: string;
//   product: number[];
//   quantity: number[];
//   price: number[];
// }



// function Products () {


//   const router = useRouter();





//   const [apiProducts, setApiProducts] = useState<ApiProduct[]>([]);
//   const [, setFilteredProducts] = useState<ApiProduct[]>([]);
//   const [searchTerm,] = useState<string>("");

//   const searchParams = useSearchParams();
//   const location = searchParams.get('location');
//   const option = searchParams.get('option');
  
  
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
 

//   const [locations, setLocations] = useState<string>("");
  

//   const [selectedTab, setSelectedTab] = useState<string>("home");

//   // Product Functions

//   const [productsList, setProductsList] = useState<Product[]>([]);
//     const [selectedProducts, setSelectedProducts] = useState<(number | '')[]>([]);
//     const [quantities, setQuantities] = useState<{ [key: number]: string }>({});
//     const [prices, setPrices] = useState<{ [key: number]: string }>({});
  
//     const [customerName, setCustomerName] = useState('');
//     const [vatNumber, setVatNumber] = useState('');
//     const [loc, setLocation] = useState('');

//  useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const res = await fetch('https://testing.algowzaa.online/api/products');
//         const data = await res.json();

//         if (Array.isArray(data.data)) {
//           setProductsList(data.data);
//         } else {
//           setProductsList([]);
//         }
//       } catch (error) {
//         console.error('Failed to fetch products', error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   useEffect(()=>{
//     setLocation(`${location} ( ${option} )`)
//     console.log("Loc ---->", locations)
//   },[])



// const handleProductChange = (value: number | '', index: number) => {
//   const newSelected = [...selectedProducts];
//   newSelected[index] = value;
//   setSelectedProducts(newSelected);
// };


//   const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
//     const value = e.target.value;
//     setQuantities(prev => ({ ...prev, [index]: value }));
//   };

//   const handlePriceChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
//     const value = e.target.value;
//     setPrices(prev => ({ ...prev, [index]: value }));
//   };

//   const addProductRow = () => {
//     setSelectedProducts([...selectedProducts, '']);
//   };

//   const removeProductRow = (index: number) => {
//     setSelectedProducts(selectedProducts.filter((_, i) => i !== index));

//     setQuantities(prev => {
//       const copy = { ...prev };
//       delete copy[index];
//       return copy;
//     });

//     setPrices(prev => {
//       const copy = { ...prev };
//       delete copy[index];
//       return copy;
//     });
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     if (!customerName.trim() || !vatNumber.trim() || !loc.trim()) {
//       alert('Please fill in customer name, VAT number, and location');
//       return;
//     }

//     const filteredProducts = selectedProducts.filter((p): p is number => p !== '');

//     if (filteredProducts.length === 0) {
//       alert('Please select at least one product');
//       return;
//     }

//     const body: RequestBody = {
//       customer_name: customerName,
//       vat_number: vatNumber,
//       location: locations,
//       product: filteredProducts,
//       quantity: filteredProducts.map((_, i) => parseInt(quantities[i]) || 1),
//       price: filteredProducts.map((_, i) => parseFloat(prices[i]) || 0),
//     };

//     console.log('Request body:', body);

//     try {
//       const res = await fetch('https://testing.algowzaa.online/api/invoice/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//       });

//       if (res.ok) {
//         const responseData = await res.json();
//         const invoiceId = responseData.data.invoice_id;
//         console.log('API Response:', invoiceId);
//         alert('Order submitted successfully');
               
//         setSelectedProducts([]);
//         setQuantities({});
//         setPrices({});
//         setCustomerName('');
//         setVatNumber('');
//        router.push(`/invoice?invoice_id=${invoiceId}`);

        
//         console.log("LOC ------> ",locations)
//       } else {
//         alert('Failed to submit order');
//       }
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Error submitting order');
//     }
//   };

//      // Product Functions

//   useEffect(() => {
    
//     fetchProducts();
//   },[]);


// const fetchProducts = async () => {
//   setLoading(true);
//   try {
//     const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2QwYWRjYjQwNTJiZjg3YmRjOTlhZGU4YjBlYWRhMDY4NDRiYjg5M2NjNWEyYTI5MDQ2MjQxYmI4YzUzZWY5NjdmMzQ1NjcxN2M2NzVhMDUiLCJpYXQiOjE3NTE3ODgzNjMuNjU0MDUwMTExNzcwNjI5ODgyODEyNSwibmJmIjoxNzUxNzg4MzYzLjY1NDA1MjAxOTExOTI2MjY5NTMxMjUsImV4cCI6MTc4MzMyNDM2My42NDk2NjAxMTA0NzM2MzI4MTI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.igdSA4vkVzbcutbdZ-5LQ1BHL_clASYcx_6QtnAcPocvWHFx_jGh2ViYMDvpuvNqFGMNall1KETKnp3C39C78XQSuetH5qDrpeAPcbPLUH6eqJ3EVSxo-vy64PyUm-yZ_qqyaSCVEAVbvLlvGPuAcLmfI081usjQsbKyDgRyFKEZrk37U_mveM2jWnYsn8T9L7BejYtGcj8CBHG4cT3O4oDumdRez1AQjP5LklvD3i74-npRx1W-qj48-35RzxFGOai5NVahUErerCYh5DxDD2ChDjEgFBm4nDFO5HTGGrLqBkRnJo3MD8mN5BC2VIFT5lFL8XG7o4c6QpnNZ1NPeE6YsV1Yy9pcoAj74xs3vq-mpHkm-o7DVyTpjGoiW4Br77n3C6IAKciSFcpjEZuXaxWpJ4yKdrxomk8hwrFscP7UbHMsHcFi54HuxkJ0fRmyyuKeT75gAx-eefQvI7QpOFJOcKpc39MOgDkpZN7fDM9Xak_wd3RypEZE24D7X6y_sTq15Ug60qsMUC3UWsQccil5nnW4wuRzh5ajGrCPhazAzrfiFLjZwhPfNdDAqbThBg-IZChrEEtje1vhuw_LQXDdsaBHbepfTPJ2ADPFhHBpg8JaLGa0PQrIDdx0DWnH-BVmIRLEU28rGOEsf4NPX6Wlli3_cavmUxB9-J_VABw'; // Replace with actual token logic

//     const response = await fetch("https://testing.algowzaa.online/api/products", {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) throw new Error("Failed to fetch products");

//     const json: { status: boolean; message: string; data: ApiProduct[] } = await response.json();

//     console.log("API Response --> ", json.data);
//     console.log("Product IDs -->", json.data.map((p) => p.id));

//     setApiProducts(json.data);
//     setFilteredProducts(json.data);
//     setLocations(`${location} ( ${option} )`);
//     console.log("Loc ---->", loc);
//     console.log("Location", location);
//     console.log("Sub Location", option);
//   } catch (err: unknown) {
//     setError(err instanceof Error ? err.message : "An unknown error occurred");
//   } finally {
//     setLoading(false);
//   }
// };
//   useEffect(() => {
//     const filtered = apiProducts.filter((product) =>
//       `${product.name_en} ${product.name_ar}`.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchTerm, apiProducts]);

 


//   if (loading) return <div className="p-6 text-center">Loading products...</div>;
//   if (error) return <div className="p-6 text-center text-red-500">Error: {error}</div>;

   

//   return (
//     <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-red-100">
//       {/* Header with Tabs */}
//       <div className="flex items-center justify-between bg-blue-500 text-white p-4 rounded-md shadow-md mb-6">
//         <div className="text-xl font-semibold">Al-Gowzaa Flowers</div>
//         <div className="flex space-x-6">
//           <button
//             onClick={() => setSelectedTab("home")}
//             className={`${
//               selectedTab === "home" ? "border-b-2 border-white" : ""
//             } hover:text-blue-200`}
//           >
//             Home
//           </button>
//           <button
//             onClick={() => setSelectedTab("products")}
//             className={`${
//               selectedTab === "products" ? "border-b-2 border-white" : ""
//             } hover:text-blue-200`}
//           >
//             Products
//           </button>
//         </div>
//       </div>

//       {/* Content under Home Tab */}
//       {selectedTab === "home" && (
   
  
//   <div className="w-full px-4 md:px-8 lg:px-16 py-6 text-black">
//   {/* <h1 className="text-2xl font-bold mb-6">Order Form</h1> */}
//   <form onSubmit={handleSubmit} className="space-y-6">

//     {/* Customer Details Card */}
//     <div className="bg-white p-6  rounded-lg shadow-md border border-gray-300">
//       <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
      
//      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
//   <input
//     type="text"
//     placeholder="Customer Name"
//     value={customerName}
//     onChange={(e) => setCustomerName(e.target.value)}
//     className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//     required
//   />
//   <input
//     type="text"
//     placeholder="VAT Number"
//     value={vatNumber}
//     onChange={(e) => setVatNumber(e.target.value)}
//     className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//     required
//   />
//   <input
//     type="text"
//     placeholder="Location"
//     readOnly
//     value={locations}
//     className="border border-black rounded p-3 w-full text-black shadow-sm bg-gray-200 focus:outline-none"
//     required
//   />
//   <input
//     type="text"
//     placeholder="Building Number"
//     className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
//   <input
//     type="email"
//     placeholder="Postal Code"
//     className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
//   <input
//     type="text"
//     placeholder="District"
//     className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />

//   {/* Save Button */}
//   <div className="md:col-span-3 flex justify-end">
//     <button
//       onClick={() => alert('User saved!')} // placeholder
//       className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition w-full md:w-auto"
//     >
//       Save
//     </button>
//   </div>
// </div>



//     </div>

//     {/* Product Cards */}
//     {selectedProducts.map((selected, idx) => (
//   <div
//     key={idx}
//     className="bg-white rounded-lg shadow-md border border-gray-300 p-6 mb-6"
//     style={{ minHeight: '180px' }}
//   >
//     {/* Label */}
//     <div className="text-lg font-semibold text-gray-700 mb-4">
//       Product {idx + 1}
//     </div>

//     <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center">
      
//       {/* Dropdown */}
//       <div className="flex-1 w-full">
//         <Listbox value={selected} onChange={(val) => handleProductChange(val, idx)}>
//           <div className="relative w-full">
//             <Listbox.Button className="relative w-full cursor-default rounded border border-black bg-white py-3 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
//               <span className="block truncate">
//                 {productsList.find((p) => p.id === selected)?.name_en || 'Select product'}
//               </span>
//               <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                 <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//               </span>
//             </Listbox.Button>

//             <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black">
//               {productsList.map((product) => (
//                 <Listbox.Option
//                   key={product.id}
//                   value={product.id}
//                   className={({ active }) =>
//                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                       active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
//                     }`
//                   }
//                 >
//                   {({ selected }) => (
//                     <>
//                       <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
//                         {product.name_en}
//                       </span>
//                       {selected ? (
//                         <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
//                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                         </span>
//                       ) : null}
//                     </>
//                   )}
//                 </Listbox.Option>
//               ))}
//             </Listbox.Options>
//           </div>
//         </Listbox>
//       </div>

//       {/* Quantity Input */}
//       <input
//         type="number"
//         min={1}
//         placeholder="Quantity"
//         value={quantities[idx] || ''}
//         onChange={(e) => handleQuantityChange(e, idx)}
//         className="border border-black rounded p-3 flex-1 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         required
//       />

//       {/* Price Input */}
//       <input
//         type="number"
//         min={0}
//         step={0.01}
//         placeholder="Price"
//         value={prices[idx] || ''}
//         onChange={(e) => handlePriceChange(e, idx)}
//         className="border border-black rounded p-3 flex-1 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         required
//       />

//       {/* Delete Button */}
//       <button
//         type="button"
//         onClick={() => removeProductRow(idx)}
//         className="text-red-600 hover:text-red-800 transition self-start md:self-auto"
//         title="Remove product"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-7 w-7"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0H7m4-2h2a1 1 0 011 1v1H8V6a1 1 0 011-1z" />
//         </svg>
//       </button>
//     </div>
//   </div>
// ))}


//     {/* Add Product Button */}
//     {/* Buttons Container */}
// <div className="flex justify-end space-x-4 mt-6">
//   {/* Add Product Button */}
//   <button
//     type="button"
//     onClick={addProductRow}
//     className="bg-blue-600 text-white px-5 py-3 rounded shadow hover:bg-blue-700 transition"
//   >
//     + Add Product
//   </button>

//   {/* Submit Button */}
//   <button
//     type="submit"
//     className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
//   >
//     Submit Order
//   </button>
// </div>

//   </form>
// </div>




//       )}

//       {/* Product Update Section */}
//       {selectedTab === "products" && (

//       <ProductCrudTable/>
//       )}
      
//     </div>
//   );
// };

//  export default Products;



"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import ProductCrudTable from './productsCrud';

interface ApiProduct {
  id: number;
  name_en: string;
  name_ar: string;
}

interface Product {
  id: number;
  name_en: string;
}

interface RequestBody {
  customer_name: string;
  vat_number: string;
  location: string;
  product: number[];
  quantity: number[];
  price: number[];
}

function Products() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const location = searchParams.get('location');
  const option = searchParams.get('option');

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [locations, setLocations] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<string>("home");

  const [productsList, setProductsList] = useState<Product[]>([]);
  const [, setApiProducts] = useState<ApiProduct[]>([]);
  const [, setFilteredProducts] = useState<ApiProduct[]>([]);
  //const [searchTerm] = useState<string>("");

  const [selectedProducts, setSelectedProducts] = useState<(number | '')[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: string }>({});
  const [prices, setPrices] = useState<{ [key: number]: string }>({});
  const [customerName, setCustomerName] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  //const [loc, setLocation] = useState('');



  const token = localStorage.getItem('token') 
console.log( "Token from Async storage. ----->",token)


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2QwYWRjYjQwNTJiZjg3YmRjOTlhZGU4YjBlYWRhMDY4NDRiYjg5M2NjNWEyYTI5MDQ2MjQxYmI4YzUzZWY5NjdmMzQ1NjcxN2M2NzVhMDUiLCJpYXQiOjE3NTE3ODgzNjMuNjU0MDUwMTExNzcwNjI5ODgyODEyNSwibmJmIjoxNzUxNzg4MzYzLjY1NDA1MjAxOTExOTI2MjY5NTMxMjUsImV4cCI6MTc4MzMyNDM2My42NDk2NjAxMTA0NzM2MzI4MTI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.igdSA4vkVzbcutbdZ-5LQ1BHL_clASYcx_6QtnAcPocvWHFx_jGh2ViYMDvpuvNqFGMNall1KETKnp3C39C78XQSuetH5qDrpeAPcbPLUH6eqJ3EVSxo-vy64PyUm-yZ_qqyaSCVEAVbvLlvGPuAcLmfI081usjQsbKyDgRyFKEZrk37U_mveM2jWnYsn8T9L7BejYtGcj8CBHG4cT3O4oDumdRez1AQjP5LklvD3i74-npRx1W-qj48-35RzxFGOai5NVahUErerCYh5DxDD2ChDjEgFBm4nDFO5HTGGrLqBkRnJo3MD8mN5BC2VIFT5lFL8XG7o4c6QpnNZ1NPeE6YsV1Yy9pcoAj74xs3vq-mpHkm-o7DVyTpjGoiW4Br77n3C6IAKciSFcpjEZuXaxWpJ4yKdrxomk8hwrFscP7UbHMsHcFi54HuxkJ0fRmyyuKeT75gAx-eefQvI7QpOFJOcKpc39MOgDkpZN7fDM9Xak_wd3RypEZE24D7X6y_sTq15Ug60qsMUC3UWsQccil5nnW4wuRzh5ajGrCPhazAzrfiFLjZwhPfNdDAqbThBg-IZChrEEtje1vhuw_LQXDdsaBHbepfTPJ2ADPFhHBpg8JaLGa0PQrIDdx0DWnH-BVmIRLEU28rGOEsf4NPX6Wlli3_cavmUxB9-J_VABw'; // Replace with actual token
      const response = await fetch("https://testing.algowzaa.online/api/products", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error("Failed to fetch products");

      const json: { status: boolean; message: string; data: ApiProduct[] } = await response.json();

      setApiProducts(json.data);
      setFilteredProducts(json.data);
      setProductsList(json.data); // ✅ For dropdown
      setLocations(`${location} ( ${option} )`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleProductChange = (value: number | '', index: number) => {
    const newSelected = [...selectedProducts];
    newSelected[index] = value;
    setSelectedProducts(newSelected);
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    setQuantities(prev => ({ ...prev, [index]: value }));
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    setPrices(prev => ({ ...prev, [index]: value }));
  };

  const addProductRow = () => {
    setSelectedProducts([...selectedProducts, '']);
  };

  const removeProductRow = (index: number) => {
    setSelectedProducts(selectedProducts.filter((_, i) => i !== index));
    setQuantities(prev => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
    setPrices(prev => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !vatNumber.trim() || !locations.trim()) {
      alert('Please fill in customer name, VAT number, and location');
      return;
    }

    const filteredProducts = selectedProducts.filter((p): p is number => p !== '');
    if (filteredProducts.length === 0) {
      alert('Please select at least one product');
      return;
    }

    const body: RequestBody = {
      customer_name: customerName,
      vat_number: vatNumber,
      location: locations,
      product: filteredProducts,
      quantity: filteredProducts.map((_, i) => parseInt(quantities[i]) || 1),
      price: filteredProducts.map((_, i) => parseFloat(prices[i]) || 0),
    };

    try {
            // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2QwYWRjYjQwNTJiZjg3YmRjOTlhZGU4YjBlYWRhMDY4NDRiYjg5M2NjNWEyYTI5MDQ2MjQxYmI4YzUzZWY5NjdmMzQ1NjcxN2M2NzVhMDUiLCJpYXQiOjE3NTE3ODgzNjMuNjU0MDUwMTExNzcwNjI5ODgyODEyNSwibmJmIjoxNzUxNzg4MzYzLjY1NDA1MjAxOTExOTI2MjY5NTMxMjUsImV4cCI6MTc4MzMyNDM2My42NDk2NjAxMTA0NzM2MzI4MTI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.igdSA4vkVzbcutbdZ-5LQ1BHL_clASYcx_6QtnAcPocvWHFx_jGh2ViYMDvpuvNqFGMNall1KETKnp3C39C78XQSuetH5qDrpeAPcbPLUH6eqJ3EVSxo-vy64PyUm-yZ_qqyaSCVEAVbvLlvGPuAcLmfI081usjQsbKyDgRyFKEZrk37U_mveM2jWnYsn8T9L7BejYtGcj8CBHG4cT3O4oDumdRez1AQjP5LklvD3i74-npRx1W-qj48-35RzxFGOai5NVahUErerCYh5DxDD2ChDjEgFBm4nDFO5HTGGrLqBkRnJo3MD8mN5BC2VIFT5lFL8XG7o4c6QpnNZ1NPeE6YsV1Yy9pcoAj74xs3vq-mpHkm-o7DVyTpjGoiW4Br77n3C6IAKciSFcpjEZuXaxWpJ4yKdrxomk8hwrFscP7UbHMsHcFi54HuxkJ0fRmyyuKeT75gAx-eefQvI7QpOFJOcKpc39MOgDkpZN7fDM9Xak_wd3RypEZE24D7X6y_sTq15Ug60qsMUC3UWsQccil5nnW4wuRzh5ajGrCPhazAzrfiFLjZwhPfNdDAqbThBg-IZChrEEtje1vhuw_LQXDdsaBHbepfTPJ2ADPFhHBpg8JaLGa0PQrIDdx0DWnH-BVmIRLEU28rGOEsf4NPX6Wlli3_cavmUxB9-J_VABw'; // Replace with actual token

      const res = await fetch('https://testing.algowzaa.online/api/invoice/create', {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const responseData = await res.json();
        const invoiceId = responseData.data.invoice_id;
        alert('Order submitted successfully');
        setSelectedProducts([]);
        setQuantities({});
        setPrices({});
        setCustomerName('');
        setVatNumber('');
        router.push(`/invoice?invoice_id=${invoiceId}`);
      } else {
        alert('Failed to submit order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Error submitting order');
    }
  };

  if (loading) return <div className="p-6 text-center">Loading products...</div>;
  if (error) return <div className="p-6 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-red-100">
      <div className="flex items-center justify-between bg-blue-500 text-white p-4 rounded-md shadow-md mb-6">
        <div className="text-xl font-semibold">Al-Gowzaa Flowers</div>
        <div className="flex space-x-6">
          <button onClick={() => setSelectedTab("home")} className={`${selectedTab === "home" ? "border-b-2 border-white" : ""} hover:text-blue-200`}>
            Home
          </button>
          <button onClick={() => setSelectedTab("products")} className={`${selectedTab === "products" ? "border-b-2 border-white" : ""} hover:text-blue-200`}>
            Products
          </button>
        </div>
      </div>

      {selectedTab === "home" && (
        <div className="w-full px-4 md:px-8 lg:px-16 py-6 text-black">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
              <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <input type="text" placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500" required />
                <input type="text" placeholder="VAT Number" value={vatNumber} onChange={(e) => setVatNumber(e.target.value)} className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500" required />
                <input type="text" placeholder="Location" readOnly value={locations} className="border border-black rounded p-3 w-full text-black shadow-sm bg-gray-200" required />
                <input type="text" placeholder="Building Number" className="border bg-white border-black rounded p-3 w-full text-black shadow-sm" />
                <input type="text" placeholder="Postal Code" className="border bg-white border-black rounded p-3 w-full text-black shadow-sm" />
                <input type="text" placeholder="District" className="border bg-white border-black rounded p-3 w-full text-black shadow-sm" />
                <div className="md:col-span-3 flex justify-end">
                  <button onClick={() => alert('User saved!')} className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 w-full md:w-auto">Save</button>
                </div>
              </div>
            </div>

            {selectedProducts.map((selected, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md border border-gray-300 p-6 mb-6">
                <div className="text-lg font-semibold text-gray-700 mb-4">Product {idx + 1}</div>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center">
                  <div className="flex-1 w-full">
                    <Listbox value={selected} onChange={(val) => handleProductChange(val, idx)}>
                      <div className="relative w-full">
                        <Listbox.Button className="relative w-full cursor-default rounded border border-black bg-white py-3 pl-3 pr-10 text-left shadow-sm focus:ring-2 focus:ring-blue-500 text-black">
                          <span className="block truncate">
                            {productsList.find((p) => p.id === selected)?.name_en || 'Select product'}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </Listbox.Button>
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black">
                          {productsList.map((product) => (
                            <Listbox.Option key={product.id} value={product.id} className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}`}>
                              {({ selected }) => (
                                <>
                                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{product.name_en}</span>
                                  {selected && (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  )}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                  </div>

                  <input type="number" min={1} placeholder="Quantity" value={quantities[idx] || ''} onChange={(e) => handleQuantityChange(e, idx)} className="border border-black rounded p-3 flex-1 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500" required />
                  <input type="number" min={0} step={0.01} placeholder="Price" value={prices[idx] || ''} onChange={(e) => handlePriceChange(e, idx)} className="border border-black rounded p-3 flex-1 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500" required />
                  <button type="button" onClick={() => removeProductRow(idx)} className="text-red-600 hover:text-red-800 self-start md:self-auto" title="Remove product">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0H7m4-2h2a1 1 0 011 1v1H8V6a1 1 0 011-1z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-end space-x-4 mt-6">
              <button type="button" onClick={addProductRow} className="bg-blue-600 text-white px-5 py-3 rounded shadow hover:bg-blue-700 transition">+ Add Product</button>
              <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition">Submit Order</button>
            </div>
          </form>
        </div>
      )}

      {selectedTab === "products" && <ProductCrudTable />}
    </div>
  );
}

export default Products;
