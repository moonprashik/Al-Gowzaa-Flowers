module.exports = {

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
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/products/CreateInvoice.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { Listbox } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
// import ProductCrudTable from './productsCrud';
// interface ApiProduct {
//   id: number;
//   name_en: string;
//   name_ar: string;
// }
// interface Product {
//   id: number;
//   name_en: string;
// }
// // interface RequestBody {
// //   customer_name: string;
// //   vat_number: string;
// //   location: string;
// //   product: number[];
// //   quantity: number[];
// //   price: number[];
// //   branch: string;
// //   branch_category: string;
// // }
// function Products() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const location = searchParams.get('location');
//   const option = searchParams.get('option');
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [locations, setLocations ] = useState<string>("");
//   const [selectedTab, setSelectedTab] = useState<string>("home");
//   const [productsList, setProductsList] = useState<Product[]>([]);
//   const [, setApiProducts] = useState<ApiProduct[]>([]);
//   const [, setFilteredProducts] = useState<ApiProduct[]>([]);
//   //const [searchTerm] = useState<string>("");
//   //const [loc, setLocation] = useState('');
//   const [customerId, setCustomerId] = useState<number | null>(null);
// const [vatNumber, setVatNumber] = useState('');
// const [branch, setBranch] = useState('');
// const [branchCategory, setBranchCategory] = useState('');
// const [selectedProducts, setSelectedProducts] = useState<(number | '')[]>([]);
// const [quantities, setQuantities] = useState<Record<number, string>>({});
// const [prices, setPrices] = useState<Record<number, string>>({});
//    const token = localStorage.getItem('token') 
//   //const token = JSON.parse(localStorage.getItem('token') || '');
// console.log( "Token from Async storage. ----->",token)
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2QwYWRjYjQwNTJiZjg3YmRjOTlhZGU4YjBlYWRhMDY4NDRiYjg5M2NjNWEyYTI5MDQ2MjQxYmI4YzUzZWY5NjdmMzQ1NjcxN2M2NzVhMDUiLCJpYXQiOjE3NTE3ODgzNjMuNjU0MDUwMTExNzcwNjI5ODgyODEyNSwibmJmIjoxNzUxNzg4MzYzLjY1NDA1MjAxOTExOTI2MjY5NTMxMjUsImV4cCI6MTc4MzMyNDM2My42NDk2NjAxMTA0NzM2MzI4MTI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.igdSA4vkVzbcutbdZ-5LQ1BHL_clASYcx_6QtnAcPocvWHFx_jGh2ViYMDvpuvNqFGMNall1KETKnp3C39C78XQSuetH5qDrpeAPcbPLUH6eqJ3EVSxo-vy64PyUm-yZ_qqyaSCVEAVbvLlvGPuAcLmfI081usjQsbKyDgRyFKEZrk37U_mveM2jWnYsn8T9L7BejYtGcj8CBHG4cT3O4oDumdRez1AQjP5LklvD3i74-npRx1W-qj48-35RzxFGOai5NVahUErerCYh5DxDD2ChDjEgFBm4nDFO5HTGGrLqBkRnJo3MD8mN5BC2VIFT5lFL8XG7o4c6QpnNZ1NPeE6YsV1Yy9pcoAj74xs3vq-mpHkm-o7DVyTpjGoiW4Br77n3C6IAKciSFcpjEZuXaxWpJ4yKdrxomk8hwrFscP7UbHMsHcFi54HuxkJ0fRmyyuKeT75gAx-eefQvI7QpOFJOcKpc39MOgDkpZN7fDM9Xak_wd3RypEZE24D7X6y_sTq15Ug60qsMUC3UWsQccil5nnW4wuRzh5ajGrCPhazAzrfiFLjZwhPfNdDAqbThBg-IZChrEEtje1vhuw_LQXDdsaBHbepfTPJ2ADPFhHBpg8JaLGa0PQrIDdx0DWnH-BVmIRLEU28rGOEsf4NPX6Wlli3_cavmUxB9-J_VABw'; // Replace with actual token
//       const response = await fetch("https://testing.algowzaa.online/api/products", {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       if (!response.ok) throw new Error("Failed to fetch products");
//       const json: { status: boolean; message: string; data: ApiProduct[] } = await response.json();
//       setApiProducts(json.data);
//       setFilteredProducts(json.data);
//       setProductsList(json.data); // ✅ For dropdown
//       setBranch(`${location}`);
//       setBranchCategory(`${option}`);
//     } catch (err: unknown) {
//       setError(err instanceof Error ? err.message : "An unknown error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleProductChange = (value: number | '', index: number) => {
//     const newSelected = [...selectedProducts];
//     newSelected[index] = value;
//     setSelectedProducts(newSelected);
//   };
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
//   e.preventDefault();
//   if (
//     !customerId || // customer_id is now a number
//     !vatNumber.trim() ||
//     !locations.trim() ||
//     !branch.trim() ||
//     !branchCategory.trim()
//   ) {
//     alert('Please fill in all required customer and branch details');
//     return;
//   }
//   const filteredProducts = selectedProducts.filter((p): p is number => p !== '');
//   if (filteredProducts.length === 0) {
//     alert('Please select at least one product');
//     return;
//   }
//   const body = {
//     customer_id: customerId, // changed from customer_name
//     vat_number: vatNumber,
//     location: locations,
//     product: filteredProducts,
//     quantity: filteredProducts.map((_, i) => parseInt(quantities[i]) || 1),
//     price: filteredProducts.map((_, i) => parseFloat(prices[i]) || 0),
//     branch: branch,
//     branch_category: branchCategory,
//   };
//   try {
//     //const token = 'your_token_here'; // Replace with your valid token
//     const res = await fetch('https://testing.algowzaa.online/api/invoice/create', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });
//     if (res.ok) {
//       const responseData = await res.json();
//       const invoiceId = responseData?.data?.invoice_id;
//       alert('Order submitted successfully');
//       setSelectedProducts([]);
//       setQuantities({});
//       setPrices({});
//       setCustomerId(null);
//       setVatNumber('');
//       setLocations('');
//       setBranch('');
//       setBranchCategory('');
//       router.push(`/invoice?invoice_id=${invoiceId}`);
//     } else {
//       const errorData = await res.json();
//       console.error('Submit failed:', errorData);
//       alert('Failed to submit order: ' + (errorData?.message || 'Unknown error'));
//     }
//   } catch (error) {
//     console.error('Error submitting order:', error);
//     alert('Error submitting order');
//   }
// };
//   if (loading) return <div className="p-6 text-center">Loading products...</div>;
//   if (error) return <div className="p-6 text-center text-red-500">Error: {error}</div>;
//   return (
//     <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-red-100">
//       <div className="flex items-center justify-between bg-blue-500 text-white p-4 rounded-md shadow-md mb-6">
//         <div className="text-xl font-semibold">Al-Gowzaa Flowers</div>
//         <div className="flex space-x-6">
//           <button onClick={() => setSelectedTab("home")} className={`${selectedTab === "home" ? "border-b-2 border-white" : ""} hover:text-blue-200`}>
//             Home
//           </button>
//           <button onClick={() => setSelectedTab("products")} className={`${selectedTab === "products" ? "border-b-2 border-white" : ""} hover:text-blue-200`}>
//             Products
//           </button>
//         </div>
//       </div>
//       {selectedTab === "home" && (
//   <div className="w-full px-4 md:px-8 lg:px-16 py-6 text-black">
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
//         <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
//           {/* <input type="text" placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500" required /> */}
//           <input
//   type="number"
//   placeholder="Customer ID"
//   value={customerId || ''}
//   onChange={(e) => setCustomerId(Number(e.target.value))}
//   className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500"
//   required
// />
//           <input type="text" placeholder="VAT Number" value={vatNumber} onChange={(e) => setVatNumber(e.target.value)} className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500" required />
//           <input type="text" placeholder="Location" value={locations} onChange={(e) => setLocations(e.target.value)} className="border border-black rounded p-3 w-full text-black shadow-sm bg-gray-200" required />
//           <input type="text" placeholder="Building Number" className="border bg-white border-black rounded p-3 w-full text-black shadow-sm" />
//           <input type="text" placeholder="Postal Code" className="border bg-white border-black rounded p-3 w-full text-black shadow-sm" />
//           <input type="text" placeholder="District" className="border bg-white border-black rounded p-3 w-full text-black shadow-sm" />
//           <input type="text" placeholder="Branch" value={branch} onChange={(e) => setBranch(e.target.value)} className="border bg-white border-black rounded p-3 w-full text-black shadow-sm" required />
//           <input type="text" placeholder="Branch Category" value={branchCategory} onChange={(e) => setBranchCategory(e.target.value)} className="border bg-white border-black rounded p-3 w-full text-black shadow-sm" required />
//           <div className="md:col-span-3 flex justify-end">
//             <button onClick={() => alert('User saved!')} type="button" className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 w-full md:w-auto">Save</button>
//           </div>
//         </div>
//       </div>
//       {selectedProducts.map((selected, idx) => (
//         <div key={idx} className="bg-white rounded-lg shadow-md border border-gray-300 p-6 mb-6">
//           <div className="text-lg font-semibold text-gray-700 mb-4">Product {idx + 1}</div>
//           <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center">
//             <div className="flex-1 w-full">
//               <Listbox value={selected} onChange={(val) => handleProductChange(val, idx)}>
//                 <div className="relative w-full">
//                   <Listbox.Button className="relative w-full cursor-default rounded border border-black bg-white py-3 pl-3 pr-10 text-left shadow-sm focus:ring-2 focus:ring-blue-500 text-black">
//                     <span className="block truncate">
//                       {productsList.find((p) => p.id === selected)?.name_en || 'Select product'}
//                     </span>
//                     <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                       <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                     </span>
//                   </Listbox.Button>
//                   <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black">
//                     {productsList.map((product) => (
//                       <Listbox.Option key={product.id} value={product.id} className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}`}>
//                         {({ selected }) => (
//                           <>
//                             <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{product.name_en}</span>
//                             {selected && (
//                               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
//                                 <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                               </span>
//                             )}
//                           </>
//                         )}
//                       </Listbox.Option>
//                     ))}
//                   </Listbox.Options>
//                 </div>
//               </Listbox>
//             </div>
//             <input type="number" min={1} placeholder="Quantity" value={quantities[idx] || ''} onChange={(e) => handleQuantityChange(e, idx)} className="border border-black rounded p-3 flex-1 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500" required />
//             <input type="number" min={0} step={0.01} placeholder="Price" value={prices[idx] || ''} onChange={(e) => handlePriceChange(e, idx)} className="border border-black rounded p-3 flex-1 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500" required />
//             <button type="button" onClick={() => removeProductRow(idx)} className="text-red-600 hover:text-red-800 self-start md:self-auto" title="Remove product">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0H7m4-2h2a1 1 0 011 1v1H8V6a1 1 0 011-1z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       ))}
//       <div className="flex justify-end space-x-4 mt-6">
//         <button type="button" onClick={addProductRow} className="bg-blue-600 text-white px-5 py-3 rounded shadow hover:bg-blue-700 transition">+ Add Product</button>
//         <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition">Submit Order</button>
//       </div>
//     </form>
//   </div>
// )}
//       {selectedTab === "products" && <ProductCrudTable />}
//     </div>
//   );
// }
// export default Products;
// "use client";
// import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { Listbox } from '@headlessui/react';
// //import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
// import ProductCrudTable from './productsCrud';
// interface ApiProduct {
//   id: number;
//   name_en: string;
//   name_ar: string;
// }
// const Products = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const location = searchParams.get('location');
//   const option = searchParams.get('option');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedTab, setSelectedTab] = useState("home");
//   const [productsList, setProductsList] = useState<ApiProduct[]>([]);
//   const [customerId, setCustomerId] = useState<number | null>(null);
//   const [vatNumber, setVatNumber] = useState('');
//   const [locations, setLocations] = useState('');
//   const [branch, setBranch] = useState('');
//   const [branchCategory, setBranchCategory] = useState('');
//   const [selectedProducts, setSelectedProducts] = useState<(number | '')[]>([]);
//   const [quantities, setQuantities] = useState<Record<number, string>>({});
//   const [prices, setPrices] = useState<Record<number, string>>({});
//   const [showCustomerPopup, setShowCustomerPopup] = useState(false);
//   const token = typeof window !== "undefined" ? localStorage.getItem('token') : null;
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("https://testing.algowzaa.online/api/products", {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       if (!response.ok) throw new Error("Failed to fetch products");
//       const json = await response.json();
//       setProductsList(json.data);
//       setBranch(location || '');
//       setBranchCategory(option || '');
//     } catch (err: any) {
//       setError(err.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleProductChange = (value: number | '', index: number) => {
//     const updated = [...selectedProducts];
//     updated[index] = value;
//     setSelectedProducts(updated);
//   };
//   const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
//     const pid = selectedProducts[index];
//     if (typeof pid === 'number') {
//       setQuantities(prev => ({ ...prev, [pid]: e.target.value }));
//     }
//   };
//   const handlePriceChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
//     const pid = selectedProducts[index];
//     if (typeof pid === 'number') {
//       setPrices(prev => ({ ...prev, [pid]: e.target.value }));
//     }
//   };
//   const addProductRow = () => {
//     setSelectedProducts([...selectedProducts, '']);
//   };
//   const removeProductRow = (index: number) => {
//     const pid = selectedProducts[index];
//     setSelectedProducts(selectedProducts.filter((_, i) => i !== index));
//     if (typeof pid === 'number') {
//       const newQuantities = { ...quantities };
//       const newPrices = { ...prices };
//       delete newQuantities[pid];
//       delete newPrices[pid];
//       setQuantities(newQuantities);
//       setPrices(newPrices);
//     }
//   };
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!customerId || !vatNumber || !locations || !branch || !branchCategory) {
//       alert('Please fill in all required fields.');
//       return;
//     }
//     const filteredProducts = selectedProducts.filter((p): p is number => p !== '');
//     const quantityArray = filteredProducts.map(pid => parseInt(quantities[pid]) || 1);
//     const priceArray = filteredProducts.map(pid => parseFloat(prices[pid]) || 0);
//     const body = {
//       customer_id: customerId,
//       vat_number: vatNumber,
//       location: locations,
//       product: filteredProducts,
//       quantity: quantityArray,
//       price: priceArray,
//       branch,
//       branch_category: branchCategory,
//     };
//     try {
//       const res = await fetch('https://testing.algowzaa.online/api/invoice/create', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//       });
//       if (!res.ok) throw new Error('Failed to create invoice');
//       const data = await res.json();
//       const invoiceId = data?.data?.invoice_id;
//       alert('Order submitted');
//       router.push(`/invoice?invoice_id=${invoiceId}`);
//     } catch (err) {
//       alert('Error submitting order');
//     }
//   };
//   const handleCustomerSave = async (e: FormEvent, customerData: any) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("https://testing.algowzaa.online/api/customers", {
//         method: "POST",
//         headers: {
//           "Authorization": `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(customerData),
//       });
//       if (!res.ok) {
//         const err = await res.text();
//         alert("Failed to save customer: " + err);
//         return;
//       }
//       alert("Customer saved successfully");
//       setShowCustomerPopup(false);
//     } catch (err: any) {
//       alert("Error: " + err.message);
//     }
//   };
//   if (loading) return <div className="p-6 text-center">Loading products...</div>;
//   if (error) return <div className="p-6 text-center text-red-500">Error: {error}</div>;
//   return (
//     <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-red-100">
//       <div className="flex items-center justify-between bg-blue-500 text-white p-4 rounded-md shadow-md mb-6">
//         <div className="text-xl font-semibold">Al-Gowzaa Flowers</div>
//         <div className="flex space-x-6">
//           <button onClick={() => setSelectedTab("home")} className={`${selectedTab === "home" ? "border-b-2 border-white" : ""}`}>Home</button>
//           <button onClick={() => setSelectedTab("products")} className={`${selectedTab === "products" ? "border-b-2 border-white" : ""}`}>Products</button>
//         </div>
//       </div>
//       {selectedTab === "home" && (
//         <div className="w-full px-4 md:px-8 lg:px-16 py-6 text-black">
//           <div className="flex justify-end mb-4">
//             <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700" onClick={() => setShowCustomerPopup(true)}>+ Add Customer</button>
//           </div>
//           {/* Main form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
//               <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <input type="number" placeholder="Customer ID" value={customerId || ''} onChange={(e) => setCustomerId(Number(e.target.value))} className="border border-black rounded p-3" required />
//                 <input type="text" placeholder="VAT Number" value={vatNumber} onChange={(e) => setVatNumber(e.target.value)} className="border border-black rounded p-3" required />
//                 <input type="text" placeholder="Location" value={locations} onChange={(e) => setLocations(e.target.value)} className="border border-black rounded p-3" required />
//                 <input type="text" placeholder="Branch" value={branch} onChange={(e) => setBranch(e.target.value)} className="border border-black rounded p-3" required />
//                 <input type="text" placeholder="Branch Category" value={branchCategory} onChange={(e) => setBranchCategory(e.target.value)} className="border border-black rounded p-3" required />
//               </div>
//             </div>
//             {/* Product Rows */}
//             {selectedProducts.map((selected, idx) => (
//               <div key={idx} className="bg-white rounded-lg shadow-md border border-gray-300 p-6 mb-6">
//                 <div className="text-lg font-semibold mb-4">Product {idx + 1}</div>
//                 <div className="flex flex-col md:flex-row gap-4 items-center">
//                   <div className="flex-1">
//                     <Listbox value={selected} onChange={(val) => handleProductChange(val, idx)}>
//                       <div className="relative w-full">
//                         <Listbox.Button className="relative w-full border border-black rounded p-3 bg-white text-left">{productsList.find((p) => p.id === selected)?.name_en || 'Select product'}</Listbox.Button>
//                         <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg border border-black">
//                           {productsList.map((product) => (
//                             <Listbox.Option key={product.id} value={product.id} className="cursor-pointer px-4 py-2 hover:bg-blue-100">
//                               {product.name_en}
//                             </Listbox.Option>
//                           ))}
//                         </Listbox.Options>
//                       </div>
//                     </Listbox>
//                   </div>
//                   <input type="number" placeholder="Qty" value={quantities[selected as number] || ''} onChange={(e) => handleQuantityChange(e, idx)} className="border border-black rounded p-3 w-1/4" />
//                   <input type="number" placeholder="Price" value={prices[selected as number] || ''} onChange={(e) => handlePriceChange(e, idx)} className="border border-black rounded p-3 w-1/4" />
//                   <button onClick={() => removeProductRow(idx)} type="button" className="text-red-600">❌</button>
//                 </div>
//               </div>
//             ))}
//             <div className="flex justify-end space-x-4">
//               <button type="button" onClick={addProductRow} className="bg-blue-600 text-white px-4 py-2 rounded">+ Add Product</button>
//               <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">Submit Order</button>
//             </div>
//           </form>
//           {/* Customer Popup */}
//           {showCustomerPopup && (
//             <CustomerPopup onClose={() => setShowCustomerPopup(false)} onSubmit={handleCustomerSave} />
//           )}
//         </div>
//       )}
//       {selectedTab === "products" && <ProductCrudTable />}
//     </div>
//   );
// };
// const CustomerPopup = ({ onClose, onSubmit }: { onClose: () => void, onSubmit: (e: FormEvent, data: any) => void }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     cr_number: '',
//     vat_number: '',
//     building_number: '',
//     street: '',
//     area: '',
//     city: '',
//     postal_code: '',
//     branch: '',
//   });
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
//       <form onSubmit={(e) => onSubmit(e, formData)} className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
//         <h2 className="text-lg font-bold mb-4">Add Customer</h2>
//         <div className="grid grid-cols-1 gap-3">
//           {Object.entries(formData).map(([key, value]) => (
//             <input
//               key={key}
//               name={key}
//               value={value}
//               onChange={handleChange}
//               placeholder={key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
//               className="border border-gray-300 rounded p-2"
//               required
//             />
//           ))}
//         </div>
//         <div className="flex justify-end gap-3 mt-4">
//           <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
//           <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Products;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/listbox/listbox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash.debounce/index.js [app-ssr] (ecmascript)"); // ⬅️ install via: npm install lodash.debounce
"use client";
;
;
;
;
;
const Products = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [productsList, setProductsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedProducts, setSelectedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [quantities, setQuantities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [prices, setPrices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [customerQuery, setCustomerQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [customerResults, setCustomerResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCustomer, setSelectedCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const token = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchProducts();
    }, []);
    const fetchProducts = async ()=>{
        setLoading(true);
        try {
            const response = await fetch("https://testing.algowzaa.online/api/products", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            setProductsList(json.data);
        } catch (err) {
            console.error("Error fetching products", err);
        } finally{
            setLoading(false);
        }
    };
    const debouncedSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async (query)=>{
        if (!query.trim()) {
            setCustomerResults([]);
            return;
        }
        try {
            const res = await fetch(`https://testing.algowzaa.online/api/customers?search=${query}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await res.json();
            setCustomerResults(data.data || []);
        } catch (error) {
            console.error("Search error", error);
        }
    }, 500);
    const handleCustomerSearchChange = (e)=>{
        const value = e.target.value;
        setCustomerQuery(value);
        debouncedSearch(value);
    };
    const handleSelectCustomer = (customer)=>{
        setSelectedCustomer(customer);
        setCustomerQuery(customer.name);
        setCustomerResults([]);
    };
    const handleProductChange = (value, index)=>{
        const updated = [
            ...selectedProducts
        ];
        updated[index] = value;
        setSelectedProducts(updated);
    };
    const handleQuantityChange = (e, index)=>{
        const pid = selectedProducts[index];
        if (typeof pid === 'number') {
            setQuantities((prev)=>({
                    ...prev,
                    [pid]: e.target.value
                }));
        }
    };
    const handlePriceChange = (e, index)=>{
        const pid = selectedProducts[index];
        if (typeof pid === 'number') {
            setPrices((prev)=>({
                    ...prev,
                    [pid]: e.target.value
                }));
        }
    };
    const addProductRow = ()=>{
        setSelectedProducts([
            ...selectedProducts,
            ''
        ]);
    };
    const removeProductRow = (index)=>{
        const pid = selectedProducts[index];
        setSelectedProducts(selectedProducts.filter((_, i)=>i !== index));
        if (typeof pid === 'number') {
            const newQuantities = {
                ...quantities
            };
            const newPrices = {
                ...prices
            };
            delete newQuantities[pid];
            delete newPrices[pid];
            setQuantities(newQuantities);
            setPrices(newPrices);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!selectedCustomer) {
            alert("Please select a customer");
            return;
        }
        const filteredProducts = selectedProducts.filter((p)=>p !== '');
        const quantityArray = filteredProducts.map((pid)=>parseInt(quantities[pid]) || 1);
        const priceArray = filteredProducts.map((pid)=>parseFloat(prices[pid]) || 0);
        const body = {
            customer_id: selectedCustomer.id,
            vat_number: selectedCustomer.vat_number,
            location: selectedCustomer.city,
            product: filteredProducts,
            quantity: quantityArray,
            price: priceArray,
            branch: selectedCustomer.branch.name,
            branch_category: "vehicle_a"
        };
        try {
            const res = await fetch('https://testing.algowzaa.online/api/invoice/create', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (!res.ok) throw new Error('Failed to create invoice');
            const data = await res.json();
            const invoiceId = data?.data?.invoice_id;
            alert('Order submitted');
            router.push(`/invoice?invoice_id=${invoiceId}`);
        } catch (err) {
            alert('Error submitting order');
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 text-center",
        children: "Loading products..."
    }, void 0, false, {
        fileName: "[project]/src/app/products/CreateInvoice.tsx",
        lineNumber: 782,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 bg-gradient-to-r from-yellow-100 via-pink-100 to-red-100 min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl font-semibold mb-6",
                children: "Al-Gowzaa Flowers - Create Invoice"
            }, void 0, false, {
                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                lineNumber: 786,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded shadow border border-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold mb-4",
                                children: "Search Customer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                lineNumber: 791,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: customerQuery,
                                onChange: handleCustomerSearchChange,
                                placeholder: "Type customer name",
                                className: "w-full border border-black rounded p-3 mb-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                lineNumber: 792,
                                columnNumber: 11
                            }, this),
                            customerResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "border border-black rounded bg-white max-h-60 overflow-y-auto",
                                children: customerResults.map((cust)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>handleSelectCustomer(cust),
                                        className: "px-4 py-2 hover:bg-blue-100 cursor-pointer",
                                        children: [
                                            cust.name,
                                            " - ",
                                            cust.branch?.name
                                        ]
                                    }, cust.id, true, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 802,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                lineNumber: 800,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                        lineNumber: 790,
                        columnNumber: 9
                    }, this),
                    selectedCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded shadow border border-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold mb-4",
                                children: "Customer Details"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                lineNumber: 817,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: selectedCustomer.id,
                                        disabled: true,
                                        className: "border border-black rounded p-3",
                                        placeholder: "Customer ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 819,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: selectedCustomer.vat_number,
                                        disabled: true,
                                        className: "border border-black rounded p-3",
                                        placeholder: "VAT Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 820,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: selectedCustomer.city,
                                        disabled: true,
                                        className: "border border-black rounded p-3",
                                        placeholder: "Location"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 821,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: selectedCustomer.branch?.name || '',
                                        disabled: true,
                                        className: "border border-black rounded p-3",
                                        placeholder: "Branch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 822,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: "vehicle_a",
                                        disabled: true,
                                        className: "border border-black rounded p-3",
                                        placeholder: "Branch Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 823,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                lineNumber: 818,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                        lineNumber: 816,
                        columnNumber: 11
                    }, this),
                    selectedProducts.map((selected, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded shadow border border-gray-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Listbox"], {
                                            value: selected,
                                            onChange: (val)=>handleProductChange(val, idx),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Listbox"].Button, {
                                                        className: "w-full border border-black rounded p-3 text-left",
                                                        children: productsList.find((p)=>p.id === selected)?.name_en || 'Select product'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                        lineNumber: 835,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Listbox"].Options, {
                                                        className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg border border-black",
                                                        children: productsList.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Listbox"].Option, {
                                                                value: product.id,
                                                                className: "cursor-pointer px-4 py-2 hover:bg-blue-100",
                                                                children: product.name_en
                                                            }, product.id, false, {
                                                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                                lineNumber: 840,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                lineNumber: 834,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                            lineNumber: 833,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 832,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        placeholder: "Qty",
                                        value: quantities[selected] || '',
                                        onChange: (e)=>handleQuantityChange(e, idx),
                                        className: "border border-black rounded p-3 w-1/4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 848,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        placeholder: "Price",
                                        value: prices[selected] || '',
                                        onChange: (e)=>handlePriceChange(e, idx),
                                        className: "border border-black rounded p-3 w-1/4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 855,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>removeProductRow(idx),
                                        type: "button",
                                        className: "text-red-600",
                                        children: "❌"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 862,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                lineNumber: 831,
                                columnNumber: 13
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                            lineNumber: 830,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: addProductRow,
                                className: "bg-blue-600 text-white px-4 py-2 rounded",
                                children: "+ Add Product"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                lineNumber: 868,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "bg-green-600 text-white px-6 py-2 rounded",
                                children: "Submit Order"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                lineNumber: 869,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                        lineNumber: 867,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                lineNumber: 788,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/CreateInvoice.tsx",
        lineNumber: 785,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Products;
}}),
"[project]/src/app/utils/authGuard.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>useAuthGuard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function useAuthGuard() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = localStorage.getItem('token');
        if (!token) {
            router.replace('/');
        }
    }, []);
}
}}),
"[project]/src/app/products/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$CreateInvoice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/CreateInvoice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$authGuard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/authGuard.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$authGuard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 14,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$CreateInvoice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8bd8d831._.js.map