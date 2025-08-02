


// 'use client';

// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment, useState, } from 'react';

// interface StockData {
//   name: string;
//   date: string;
//   inward: number;
//   outward: number;
//   category: string;
// }

// interface Props {
//   open: boolean;
//   onClose: () => void;
// }

// export default function StocksPopup({ open, onClose }: Props) {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [view, setView] = useState<'initial' | 'stocks'>('initial');
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [stocks, setStocks] = useState<StockData[]>([]);
//   const [form, setForm] = useState({ name: '', date: '', inward: '', outward: '' });
//   const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
//   const [successMessage, setSuccessMessage] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const validateForm = () => {
//     const errors: { [key: string]: string } = {};
//     if (!form.name.trim()) errors.name = 'Product name is required';
//     if (!form.date) errors.date = 'Date is required';
//     if (!form.inward || isNaN(Number(form.inward))) errors.inward = 'Inward quantity is required';
//     if (!form.outward || isNaN(Number(form.outward))) errors.outward = 'Outward quantity is required';
//     setFormErrors(errors);

//     // Auto-clear validation messages after 2 seconds
//     if (Object.keys(errors).length > 0) {
//       setTimeout(() => setFormErrors({}), 2000);
//     }

//     return Object.keys(errors).length === 0;
//   };

//   const handleAddStock = () => {
//     if (!validateForm()) return;

//     const newStock: StockData = {
//       name: form.name,
//       date: form.date,
//       inward: Number(form.inward),
//       outward: Number(form.outward),
//       category: selectedCategory,
//     };
//     setStocks((prev) => [...prev, newStock]);
//     setForm({ name: '', date: '', inward: '', outward: '' });
//     setSuccessMessage('Product added successfully');
//     setShowAddForm(false);

//     // Clear success message after 2 seconds
//     setTimeout(() => setSuccessMessage(''), 2000);
//   };

//   const filteredStocks = stocks.filter(
//     stock =>
//       stock.category === selectedCategory &&
//       stock.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Transition appear show={open} as={Fragment}>
//       <Dialog
//         as="div"
//         className="relative z-50"
//         onClose={() => {
//           onClose();
//           setView('initial');
//           setSelectedCategory('');
//           setShowAddForm(false);
//           setFormErrors({});
//         }}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
//         </Transition.Child>

//         <div className="fixed inset-0 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-full p-4">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <Dialog.Panel
//                 className={`relative w-full max-w-3xl bg-white text-black rounded-xl p-6 shadow-2xl ${
//                   view === 'initial' ? 'h-[40vh]' : 'h-[85vh]'
//                 }`}
//               >
//                 {/* Close Button */}
//                 <button
//                   onClick={() => {
//                     onClose();
//                     setView('initial');
//                     setSelectedCategory('');
//                     setShowAddForm(false);
//                   }}
//                   className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
//                   aria-label="Close"
//                 >
//                   &times;
//                 </button>

//                 {/* INITIAL VIEW */}
//                 {view === 'initial' && (
//                 <div className="flex flex-col justify-center h-full relative">
//                 <h2 className="text-xl font-bold text-indigo-700 mb-6 absolute top-0 left-0">
//                      Select Product Category
//                 </h2>

//                     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                       <select
//                         value={selectedCategory}
//                         onChange={(e) => setSelectedCategory(e.target.value)}
//                         className="border px-4 py-2 rounded-md min-w-[180px]"
//                       >
//                         <option value="">Select Category</option>
//                         <option value="Flowers">Flowers</option>
//                         <option value="Fruits">Fruits</option>
//                         <option value="Vegetables">Vegetables</option>
//                       </select>

//                       <button
//                         disabled={!selectedCategory}
//                         onClick={() => setView('stocks')}
//                         className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
//                       >
//                         Add Stocks
//                       </button>

//                       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                         Stock Settled
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* STOCKS VIEW */}
//                 {view === 'stocks' && (
//                   <div className="flex flex-col h-full">
//                     <div className="flex justify-between items-center mb-4">
//                       <h2 className="text-xl font-bold text-indigo-700">Stocks - {selectedCategory}</h2>
//                       {/* <button
//                         onClick={() => {
//                           setView('initial');
//                           setShowAddForm(false);
//                         }}
//                         className="text-sm bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
//                       >
//                         Back
//                       </button> */}
//                     </div>

//                     {/* Add Product Form */}
//                     {showAddForm && (
//                       <div className="grid grid-cols-2 gap-4 mb-2 overflow-y-auto max-h-[160px] text-sm">
//                         {[
//                           { label: 'Product Name', name: 'name', type: 'text' },
//                           { label: 'Date', name: 'date', type: 'date' },
//                           { label: 'Inward Quantity', name: 'inward', type: 'number' },
//                           { label: 'Outward Quantity', name: 'outward', type: 'number' },
//                         ].map((field) => (
//                           <div key={field.name}>
//                             <label className="font-medium">{field.label}</label>
//                             <input
//                               type={field.type}
//                               value={form[field.name as keyof typeof form]}
//                               onChange={(e) =>
//                                 setForm({ ...form, [field.name]: e.target.value })
//                               }
//                               className={`w-full border px-3 py-1 rounded text-sm ${
//                                 formErrors[field.name] ? 'border-red-500' : ''
//                               }`}
//                             />
//                             {formErrors[field.name] && (
//                               <p className="text-red-500 text-xs mt-1">
//                                 {formErrors[field.name]}
//                               </p>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     {/* Form Controls */}
//                     <div className="flex justify-between items-center mb-2">
//                       <div className="text-green-600 text-sm">{successMessage}</div>

//                       <div className="text-right w-full">
//                         {showAddForm ? (
//                           <div className="flex gap-2 justify-end">
//                             <button
//                               onClick={handleAddStock}
//                               className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
//                             >
//                               Add
//                             </button>
//                             <button
//                               onClick={() => {
//                                 setShowAddForm(false);
//                                 setFormErrors({});
//                               }}
//                               className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600"
//                             >
//                               Cancel
//                             </button>
//                           </div>
//                         ) : (
//                           <button
//                             onClick={() => setShowAddForm(true)}
//                             className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
//                           >
//                             Add a Product
//                           </button>
//                         )}
//                       </div>
//                     </div>

//                     {/* Search */}
//                     <div className="mb-2">
//                       <input
//                         type="text"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         placeholder="Search product..."
//                         className="w-full px-4 py-2 border rounded-md text-sm"
//                       />
//                     </div>

//                     {/* Table */}
//                     <div className="overflow-y-auto border rounded-md flex-1 text-sm">
//                       <table className="min-w-full">
//                         <thead className="bg-gray-200 sticky top-0">
//                           <tr>
//                             <th className="px-4 py-2 border text-left">S.No</th>
//                             <th className="px-4 py-2 border text-left">Product Name</th>
//                             <th className="px-4 py-2 border text-left">Date</th>
//                             <th className="px-4 py-2 border text-left">Inward</th>
//                             <th className="px-4 py-2 border text-left">Outward</th>
//                             <th className="px-4 py-2 border text-left">Available</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {filteredStocks.length > 0 ? (
//                             filteredStocks.map((stock, idx) => (
//                               <tr key={idx}>
//                                 <td className="px-4 py-2 border">{idx + 1}</td>
//                                 <td className="px-4 py-2 border">{stock.name}</td>
//                                 <td className="px-4 py-2 border">{stock.date}</td>
//                                 <td className="px-4 py-2 border">{stock.inward}</td>
//                                 <td className="px-4 py-2 border">{stock.outward}</td>
//                                 <td className="px-4 py-2 border">
//                                   {stock.inward - stock.outward}
//                                 </td>
//                               </tr>
//                             ))
//                           ) : (
//                             <tr>
//                               <td colSpan={6} className="text-center py-4 text-gray-500">
//                                 No stocks available for {selectedCategory}
//                               </td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 )}
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// }










// 'use client';

// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment, useState } from 'react';

// interface StockData {
//   name: string;
//   date: string;
//   inward: number;
//   outward: number;
//   category: string;
// }

// interface Props {
//   open: boolean;
//   onClose: () => void;
// }

// export default function StocksPopup({ open, onClose }: Props) {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [view, setView] = useState<'initial' | 'stocks'>('initial');
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [stocks, setStocks] = useState<StockData[]>([]);
//   const [form, setForm] = useState({ name: '', date: '', inward: '', outward: '' });
//   const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
//   const [successMessage, setSuccessMessage] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [stockSettledOpen, setStockSettledOpen] = useState(false);

//   const validateForm = () => {
//     const errors: { [key: string]: string } = {};
//     if (!form.name.trim()) errors.name = 'Product name is required';
//     if (!form.date) errors.date = 'Date is required';
//     if (!form.inward || isNaN(Number(form.inward))) errors.inward = 'Inward quantity is required';
//     if (!form.outward || isNaN(Number(form.outward))) errors.outward = 'Outward quantity is required';
//     setFormErrors(errors);

//     if (Object.keys(errors).length > 0) {
//       setTimeout(() => setFormErrors({}), 2000);
//     }

//     return Object.keys(errors).length === 0;
//   };

//   const handleAddStock = () => {
//     if (!validateForm()) return;

//     const newStock: StockData = {
//       name: form.name,
//       date: form.date,
//       inward: Number(form.inward),
//       outward: Number(form.outward),
//       category: selectedCategory,
//     };
//     setStocks((prev) => [...prev, newStock]);
//     setForm({ name: '', date: '', inward: '', outward: '' });
//     setSuccessMessage('Product added successfully');
//     setShowAddForm(false);

//     setTimeout(() => setSuccessMessage(''), 2000);
//   };

//   const filteredStocks = stocks.filter(
//     stock =>
//       stock.category === selectedCategory &&
//       stock.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       {/* Main Stocks Popup */}
//       <Transition appear show={open} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative z-50"
//           onClose={() => {
//             onClose();
//             setView('initial');
//             setSelectedCategory('');
//             setShowAddForm(false);
//             setFormErrors({});
//           }}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex items-center justify-center min-h-full p-4">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel
//                   className={`relative w-full max-w-3xl bg-white text-black rounded-xl p-6 shadow-2xl ${
//                     view === 'initial' ? 'h-[40vh]' : 'h-[85vh]'
//                   }`}
//                 >
//                   {/* Close Button */}
//                   <button
//                     onClick={() => {
//                       onClose();
//                       setView('initial');
//                       setSelectedCategory('');
//                       setShowAddForm(false);
//                     }}
//                     className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
//                     aria-label="Close"
//                   >
//                     &times;
//                   </button>

//                   {/* INITIAL VIEW */}
//                   {view === 'initial' && (
//                     <div className="flex flex-col justify-center h-full relative">
//                       <h2 className="text-xl font-bold text-indigo-700 mb-6 absolute top-0 left-0">
//                         Select Product Category
//                       </h2>

//                       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                         <select
//                           value={selectedCategory}
//                           onChange={(e) => setSelectedCategory(e.target.value)}
//                           className="border px-4 py-2 rounded-md min-w-[180px]"
//                         >
//                           <option value="">Select Category</option>
//                           <option value="Flowers">Flowers</option>
//                           <option value="Fruits">Fruits</option>
//                           <option value="Vegetables">Vegetables</option>
//                         </select>

//                         <button
//                           disabled={!selectedCategory}
//                           onClick={() => setView('stocks')}
//                           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
//                         >
//                           Add Stocks
//                         </button>

//                         <button
//                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                           onClick={() => setStockSettledOpen(true)}
//                         >
//                           Stock Settled
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   {/* STOCKS VIEW */}
//                   {view === 'stocks' && (
//                     <div className="flex flex-col h-full">
//                       <div className="flex justify-between items-center mb-4">
//                         <h2 className="text-xl font-bold text-indigo-700">
//                           Stocks - {selectedCategory}
//                         </h2>
//                       </div>

//                       {/* Add Product Form */}
//                       {showAddForm && (
//                         <div className="grid grid-cols-2 gap-4 mb-2 overflow-y-auto max-h-[160px] text-sm">
//                           {[
//                             { label: 'Product Name', name: 'name', type: 'text' },
//                             { label: 'Date', name: 'date', type: 'date' },
//                             { label: 'Inward Quantity', name: 'inward', type: 'number' },
//                             { label: 'Outward Quantity', name: 'outward', type: 'number' },
//                           ].map((field) => (
//                             <div key={field.name}>
//                               <label className="font-medium">{field.label}</label>
//                               <input
//                                 type={field.type}
//                                 value={form[field.name as keyof typeof form]}
//                                 onChange={(e) =>
//                                   setForm({ ...form, [field.name]: e.target.value })
//                                 }
//                                 className={`w-full border px-3 py-1 rounded text-sm ${
//                                   formErrors[field.name] ? 'border-red-500' : ''
//                                 }`}
//                               />
//                               {formErrors[field.name] && (
//                                 <p className="text-red-500 text-xs mt-1">
//                                   {formErrors[field.name]}
//                                 </p>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {/* Form Controls */}
//                       <div className="flex justify-between items-center mb-2">
//                         <div className="text-green-600 text-sm">{successMessage}</div>

//                         <div className="text-right w-full">
//                           {showAddForm ? (
//                             <div className="flex gap-2 justify-end">
//                               <button
//                                 onClick={handleAddStock}
//                                 className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
//                               >
//                                 Add
//                               </button>
//                               <button
//                                 onClick={() => {
//                                   setShowAddForm(false);
//                                   setFormErrors({});
//                                 }}
//                                 className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600"
//                               >
//                                 Cancel
//                               </button>
//                             </div>
//                           ) : (
//                             <button
//                               onClick={() => setShowAddForm(true)}
//                               className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
//                             >
//                               Add a Product
//                             </button>
//                           )}
//                         </div>
//                       </div>

//                       {/* Search */}
//                       <div className="mb-2">
//                         <input
//                           type="text"
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                           placeholder="Search product..."
//                           className="w-full px-4 py-2 border rounded-md text-sm"
//                         />
//                       </div>

//                       {/* Table */}
//                       <div className="overflow-y-auto border rounded-md flex-1 text-sm">
//                         <table className="min-w-full">
//                           <thead className="bg-gray-200 sticky top-0">
//                             <tr>
//                               <th className="px-4 py-2 border text-left">S.No</th>
//                               <th className="px-4 py-2 border text-left">Product Name</th>
//                               <th className="px-4 py-2 border text-left">Date</th>
//                               <th className="px-4 py-2 border text-left">Inward</th>
//                               <th className="px-4 py-2 border text-left">Outward</th>
//                               <th className="px-4 py-2 border text-left">Available</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {filteredStocks.length > 0 ? (
//                               filteredStocks.map((stock, idx) => (
//                                 <tr key={idx}>
//                                   <td className="px-4 py-2 border">{idx + 1}</td>
//                                   <td className="px-4 py-2 border">{stock.name}</td>
//                                   <td className="px-4 py-2 border">{stock.date}</td>
//                                   <td className="px-4 py-2 border">{stock.inward}</td>
//                                   <td className="px-4 py-2 border">{stock.outward}</td>
//                                   <td className="px-4 py-2 border">
//                                     {stock.inward - stock.outward}
//                                   </td>
//                                 </tr>
//                               ))
//                             ) : (
//                               <tr>
//                                 <td colSpan={6} className="text-center py-4 text-gray-500">
//                                   No stocks available for {selectedCategory}
//                                 </td>
//                               </tr>
//                             )}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   )}
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>

//       {/* Stock Settled Popup */}
//       <Transition appear show={stockSettledOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={() => setStockSettledOpen(false)}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex items-center justify-center min-h-full p-4">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="relative w-full max-w-3xl bg-white text-black rounded-xl p-6 shadow-2xl h-[60vh]">
//                   <button
//                     onClick={() => setStockSettledOpen(false)}
//                     className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
//                   >
//                     &times;
//                   </button>

//                   <h2 className="text-xl font-bold text-indigo-700 mb-4">Settled Stocks Summary</h2>

//                   <div className="overflow-y-auto border rounded-md h-full text-sm">
//                     <table className="min-w-full">
//                       <thead className="bg-gray-200 sticky top-0">
//                         <tr>
//                           <th className="px-4 py-2 border text-left">S.No</th>
//                           <th className="px-4 py-2 border text-left">Product Name</th>
//                           <th className="px-4 py-2 border text-left">Category</th>
//                           <th className="px-4 py-2 border text-left">Date</th>
//                           <th className="px-4 py-2 border text-left">Available</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {stocks.length > 0 ? (
//                           stocks.map((stock, idx) => (
//                             <tr key={idx}>
//                               <td className="px-4 py-2 border">{idx + 1}</td>
//                               <td className="px-4 py-2 border">{stock.name}</td>
//                               <td className="px-4 py-2 border">{stock.category}</td>
//                               <td className="px-4 py-2 border">{stock.date}</td>
//                               <td className="px-4 py-2 border">{stock.inward - stock.outward}</td>
//                             </tr>
//                           ))
//                         ) : (
//                           <tr>
//                             <td colSpan={5} className="text-center py-4 text-gray-500">
//                               No stocks data available
//                             </td>
//                           </tr>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// }




// 'use client';

// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment, useState, useEffect } from 'react';

// interface StockData {
//   name: string;
//   date: string;
//   inward: number;
//   outward: number;
//   category: string;
// }

// interface Props {
//   open: boolean;
//   onClose: () => void;
// }

// export default function StocksPopup({ open, onClose }: Props) {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [view, setView] = useState<'initial' | 'stocks'>('initial');
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [stocks, setStocks] = useState<StockData[]>([]);
//   const [form, setForm] = useState({ name: '', date: '', inward: '', outward: '' });
//   const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
//   const [successMessage, setSuccessMessage] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [stockSettledOpen, setStockSettledOpen] = useState(false);
//   const [settledCategory, setSettledCategory] = useState('');
//   const [settledSearchTerm, setSettledSearchTerm] = useState('');

//   // Add some mock data only once on initial render
//   useEffect(() => {
//     if (stocks.length === 0) {
//       setStocks([
//         { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
//         { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//         { name: 'Apple', date: '2025-07-23', inward: 150, outward: 50, category: 'Fruits' },
//         { name: 'Banana', date: '2025-07-26', inward: 120, outward: 60, category: 'Fruits' },
//         { name: 'Carrot', date: '2025-07-22', inward: 90, outward: 40, category: 'Vegetables' },
//         { name: 'Spinach', date: '2025-07-21', inward: 70, outward: 10, category: 'Vegetables' },
//       ]);
//     }
//   }, []);

//   const validateForm = () => {
//     const errors: { [key: string]: string } = {};
//     if (!form.name.trim()) errors.name = 'Product name is required';
//     if (!form.date) errors.date = 'Date is required';
//     if (!form.inward || isNaN(Number(form.inward))) errors.inward = 'Inward quantity is required';
//     if (!form.outward || isNaN(Number(form.outward))) errors.outward = 'Outward quantity is required';
//     setFormErrors(errors);
//     if (Object.keys(errors).length > 0) {
//       setTimeout(() => setFormErrors({}), 2000);
//     }
//     return Object.keys(errors).length === 0;
//   };

//   const handleAddStock = () => {
//     if (!validateForm()) return;
//     const newStock: StockData = {
//       name: form.name,
//       date: form.date,
//       inward: Number(form.inward),
//       outward: Number(form.outward),
//       category: selectedCategory,
//     };
//     setStocks((prev) => [...prev, newStock]);
//     setForm({ name: '', date: '', inward: '', outward: '' });
//     setSuccessMessage('Product added successfully');
//     setShowAddForm(false);
//     setTimeout(() => setSuccessMessage(''), 2000);
//   };

//   const filteredStocks = stocks.filter(
//     stock =>
//       stock.category === selectedCategory &&
//       stock.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const settledFilteredStocks = stocks.filter(
//     stock =>
//       stock.category === settledCategory &&
//       stock.name.toLowerCase().includes(settledSearchTerm.toLowerCase())
//   );

//   return (
//     <>
//       {/* MAIN STOCK POPUP */}
//       <Transition appear show={open} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative z-50"
//           onClose={() => {
//             onClose();
//             setView('initial');
//             setSelectedCategory('');
//             setShowAddForm(false);
//             setFormErrors({});
//           }}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex items-center justify-center min-h-full p-4">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel
//                   className={`relative w-full max-w-3xl bg-white text-black rounded-xl p-6 shadow-2xl ${
//                     view === 'initial' ? 'h-[40vh]' : 'h-[85vh]'
//                   }`}
//                 >
//                   {/* Close Button */}
//                   <button
//                     onClick={() => {
//                       onClose();
//                       setView('initial');
//                       setSelectedCategory('');
//                       setShowAddForm(false);
//                     }}
//                     className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
//                   >
//                     &times;
//                   </button>

//                   {/* Initial Category Selection */}
//                   {view === 'initial' && (
//                     <div className="flex flex-col justify-center h-full relative">
//                       <h2 className="text-xl font-bold text-indigo-700 mb-6 absolute top-0 left-0">
//                         Select Product Category
//                       </h2>

//                       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                         <select
//                           value={selectedCategory}
//                           onChange={(e) => setSelectedCategory(e.target.value)}
//                           className="border px-4 py-2 rounded-md min-w-[180px]"
//                         >
//                           <option value="">Select Category</option>
//                           <option value="Flowers">Flowers</option>
//                           <option value="Fruits">Fruits</option>
//                           <option value="Vegetables">Vegetables</option>
//                         </select>

//                         <button
//                           disabled={!selectedCategory}
//                           onClick={() => setView('stocks')}
//                           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
//                         >
//                           Add Stocks
//                         </button>

//                         <button
//                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                           onClick={() => {
//                             setStockSettledOpen(true);
//                             setSettledCategory('Flowers');
//                           }}
//                         >
//                           Stock Settled
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   {/* STOCKS ADD VIEW */}
//                   {view === 'stocks' && (
//                     <div className="flex flex-col h-full">
//                       <div className="flex justify-between items-center mb-4">
//                         <h2 className="text-xl font-bold text-indigo-700">
//                           Stocks - {selectedCategory}
//                         </h2>
//                       </div>

//                       {showAddForm && (
//                         <div className="grid grid-cols-2 gap-4 mb-2 overflow-y-auto max-h-[160px] text-sm">
//                           {[
//                             { label: 'Product Name', name: 'name', type: 'text' },
//                             { label: 'Date', name: 'date', type: 'date' },
//                             { label: 'Inward Quantity', name: 'inward', type: 'number' },
//                             { label: 'Outward Quantity', name: 'outward', type: 'number' },
//                           ].map((field) => (
//                             <div key={field.name}>
//                               <label className="font-medium">{field.label}</label>
//                               <input
//                                 type={field.type}
//                                 value={form[field.name as keyof typeof form]}
//                                 onChange={(e) =>
//                                   setForm({ ...form, [field.name]: e.target.value })
//                                 }
//                                 className={`w-full border px-3 py-1 rounded text-sm ${
//                                   formErrors[field.name] ? 'border-red-500' : ''
//                                 }`}
//                               />
//                               {formErrors[field.name] && (
//                                 <p className="text-red-500 text-xs mt-1">
//                                   {formErrors[field.name]}
//                                 </p>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {/* Form Control Buttons */}
//                       <div className="flex justify-between items-center mb-2">
//                         <div className="text-green-600 text-sm">{successMessage}</div>

//                         <div className="text-right w-full">
//                           {showAddForm ? (
//                             <div className="flex gap-2 justify-end">
//                               <button
//                                 onClick={handleAddStock}
//                                 className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
//                               >
//                                 Add
//                               </button>
//                               <button
//                                 onClick={() => {
//                                   setShowAddForm(false);
//                                   setFormErrors({});
//                                 }}
//                                 className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600"
//                               >
//                                 Cancel
//                               </button>
//                             </div>
//                           ) : (
//                             <button
//                               onClick={() => setShowAddForm(true)}
//                               className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
//                             >
//                               Add a Product
//                             </button>
//                           )}
//                         </div>
//                       </div>

//                       {/* Search */}
//                       <div className="mb-2">
//                         <input
//                           type="text"
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                           placeholder="Search product..."
//                           className="w-full px-4 py-2 border rounded-md text-sm"
//                         />
//                       </div>

//                       {/* Table */}
//                       <div className="overflow-y-auto border rounded-md flex-1 text-sm">
//                         <table className="min-w-full">
//                           <thead className="bg-gray-200 sticky top-0">
//                             <tr>
//                               <th className="px-4 py-2 border text-left">S.No</th>
//                               <th className="px-4 py-2 border text-left">Product Name</th>
//                               <th className="px-4 py-2 border text-left">Date</th>
//                               <th className="px-4 py-2 border text-left">Inward</th>
//                               <th className="px-4 py-2 border text-left">Outward</th>
//                               <th className="px-4 py-2 border text-left">Available</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {filteredStocks.length > 0 ? (
//                               filteredStocks.map((stock, idx) => (
//                                 <tr key={idx}>
//                                   <td className="px-4 py-2 border">{idx + 1}</td>
//                                   <td className="px-4 py-2 border">{stock.name}</td>
//                                   <td className="px-4 py-2 border">{stock.date}</td>
//                                   <td className="px-4 py-2 border">{stock.inward}</td>
//                                   <td className="px-4 py-2 border">{stock.outward}</td>
//                                   <td className="px-4 py-2 border">
//                                     {stock.inward - stock.outward}
//                                   </td>
//                                 </tr>
//                               ))
//                             ) : (
//                               <tr>
//                                 <td colSpan={6} className="text-center py-4 text-gray-500">
//                                   No stocks available for {selectedCategory}
//                                 </td>
//                               </tr>
//                             )}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   )}
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>

//       {/* STOCK SETTLED POPUP */}
//       <Transition appear show={stockSettledOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={() => setStockSettledOpen(false)}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex items-center justify-center min-h-full p-4">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="relative w-full max-w-3xl bg-white text-black rounded-xl p-6 shadow-2xl h-[85vh]">
//                   <button
//                     onClick={() => setStockSettledOpen(false)}
//                     className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
//                   >
//                     &times;
//                   </button>

//                   <h2 className="text-xl font-bold text-indigo-700 mb-4">Settled Stocks Summary</h2>

//                   {/* Filters */}
//                   <div className="flex flex-col sm:flex-row gap-4 mb-4">
//                     <select
//                       value={settledCategory}
//                       onChange={(e) => setSettledCategory(e.target.value)}
//                       className="border px-4 py-2 rounded-md min-w-[180px]"
//                     >
//                       <option value="">Select Category</option>
//                       <option value="Flowers">Flowers</option>
//                       <option value="Fruits">Fruits</option>
//                       <option value="Vegetables">Vegetables</option>
//                     </select>
//                     <input
//                       type="text"
//                       value={settledSearchTerm}
//                       onChange={(e) => setSettledSearchTerm(e.target.value)}
//                       placeholder="Search product..."
//                       className="w-full px-4 py-2 border rounded-md text-sm"
//                     />
//                   </div>

//                   <div className="overflow-y-auto border rounded-md h-full text-sm">
//                     <table className="min-w-full">
//                       <thead className="bg-gray-200 sticky top-0">
//                         <tr>
//                           <th className="px-4 py-2 border text-left">S.No</th>
//                           <th className="px-4 py-2 border text-left">Product Name</th>
//                           <th className="px-4 py-2 border text-left">Category</th>
//                           <th className="px-4 py-2 border text-left">Date</th>
//                           <th className="px-4 py-2 border text-left">Available</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {settledFilteredStocks.length > 0 ? (
//                           settledFilteredStocks.map((stock, idx) => (
//                             <tr key={idx}>
//                               <td className="px-4 py-2 border">{idx + 1}</td>
//                               <td className="px-4 py-2 border">{stock.name}</td>
//                               <td className="px-4 py-2 border">{stock.category}</td>
//                               <td className="px-4 py-2 border">{stock.date}</td>
//                               <td className="px-4 py-2 border">{stock.inward - stock.outward}</td>
//                             </tr>
//                           ))
//                         ) : (
//                           <tr>
//                             <td colSpan={5} className="text-center py-4 text-gray-500">
//                               No settled stock data found
//                             </td>
//                           </tr>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// }





// Main Code until now

// 'use client';

// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment, useState, useEffect } from 'react';

// interface StockData {
//   name: string;
//   date: string;
//   inward: number;
//   outward: number;
//   category: string;
// }

// interface Props {
//   open: boolean;
//   onClose: () => void;
// }

// export default function StocksPopup({ open, onClose }: Props) {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [view, setView] = useState<'initial' | 'stocks'>('initial');
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [stocks, setStocks] = useState<StockData[]>([]);
//   const [form, setForm] = useState({ name: '', date: '', inward: '', outward: '' });
//   const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
//   const [successMessage, setSuccessMessage] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [stockSettledOpen, setStockSettledOpen] = useState(false);
//   const [settledCategory, setSettledCategory] = useState('');
//   const [settledSearchTerm, setSettledSearchTerm] = useState('');

//   useEffect(() => {
//     if (stocks.length === 0) {
//       setStocks([
//         { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
//         { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//         { name: 'Apple', date: '2025-07-23', inward: 150, outward: 50, category: 'Fruits' },
//         { name: 'Banana', date: '2025-07-26', inward: 120, outward: 60, category: 'Fruits' },
//         { name: 'Carrot', date: '2025-07-22', inward: 90, outward: 40, category: 'Vegetables' },
//         { name: 'Spinach', date: '2025-07-21', inward: 70, outward: 10, category: 'Vegetables' },
//       ]);
//     }
//   }, []);

//   const validateForm = () => {
//     const errors: { [key: string]: string } = {};
//     if (!form.name.trim()) errors.name = 'Product name is required';
//     if (!form.date) errors.date = 'Date is required';
//     if (!form.inward || isNaN(Number(form.inward))) errors.inward = 'Inward quantity is required';
//     if (!form.outward || isNaN(Number(form.outward))) errors.outward = 'Outward quantity is required';
//     setFormErrors(errors);
//     if (Object.keys(errors).length > 0) setTimeout(() => setFormErrors({}), 2000);
//     return Object.keys(errors).length === 0;
//   };

//   const handleAddStock = () => {
//     if (!validateForm()) return;
//     const newStock: StockData = {
//       name: form.name,
//       date: form.date,
//       inward: Number(form.inward),
//       outward: Number(form.outward),
//       category: selectedCategory,
//     };
//     setStocks((prev) => [...prev, newStock]);
//     setForm({ name: '', date: '', inward: '', outward: '' });
//     setSuccessMessage('Product added successfully');
//     setShowAddForm(false);
//     setTimeout(() => setSuccessMessage(''), 2000);
//   };

//   const filteredStocks = stocks.filter(
//     (s) => s.category === selectedCategory && s.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const settledFilteredStocks = stocks.filter(
//     (s) => s.category === settledCategory && s.name.toLowerCase().includes(settledSearchTerm.toLowerCase())
//   );

//   return (
//     <>
//       {/* Main Stocks Popup */}
//       <Transition appear show={open} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative z-50"
//           onClose={() => {
//             onClose();
//             setView('initial');
//             setSelectedCategory('');
//             setShowAddForm(false);
//             setFormErrors({});
//           }}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex items-center justify-center min-h-full p-4 text-sm">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="relative w-full max-w-4xl bg-white text-black rounded-xl p-6 shadow-2xl h-[85vh] flex flex-col">
//                   {/* Close Button */}
//                   <button
//                     onClick={() => {
//                       onClose();
//                       setView('initial');
//                       setSelectedCategory('');
//                       setShowAddForm(false);
//                     }}
//                     className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
//                   >
//                     &times;
//                   </button>

//                   {/* Initial View */}
//                   {view === 'initial' && (
//                     <div className="flex flex-col justify-center h-full">
//                       <h2 className="text-xl font-bold text-indigo-700 mb-6">Select Product Category</h2>
//                       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                         <select
//                           value={selectedCategory}
//                           onChange={(e) => setSelectedCategory(e.target.value)}
//                           className="border px-4 py-2 rounded-md min-w-[180px]"
//                         >
//                           <option value="">Select Category</option>
//                           <option value="Flowers">Flowers</option>
//                           <option value="Fruits">Fruits</option>
//                           <option value="Vegetables">Vegetables</option>
//                         </select>
//                         <button
//                           disabled={!selectedCategory}
//                           onClick={() => setView('stocks')}
//                           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
//                         >
//                           Add Stocks
//                         </button>
//                         <button
//                           onClick={() => {
//                             setStockSettledOpen(true);
//                             setSettledCategory('Flowers');
//                           }}
//                           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                         >
//                           Stock Settled
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   {/* Stocks View */}
//                   {view === 'stocks' && (
//                     <>
//                       <div className="flex justify-between items-center mb-4">
//                         <h2 className="text-xl font-bold text-indigo-700">Stocks - {selectedCategory}</h2>
//                       </div>

//                       {showAddForm && (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2 max-h-[160px] overflow-y-auto">
//                           {[
//                             { label: 'Product Name', name: 'name', type: 'text' },
//                             { label: 'Date', name: 'date', type: 'date' },
//                             { label: 'Inward Quantity', name: 'inward', type: 'number' },
//                             { label: 'Outward Quantity', name: 'outward', type: 'number' },
//                           ].map((field) => (
//                             <div key={field.name}>
//                               <label className="font-medium">{field.label}</label>
//                               <input
//                                 type={field.type}
//                                 value={form[field.name as keyof typeof form]}
//                                 onChange={(e) =>
//                                   setForm({ ...form, [field.name]: e.target.value })
//                                 }
//                                 className={`w-full border px-3 py-1 rounded text-sm ${
//                                   formErrors[field.name] ? 'border-red-500' : ''
//                                 }`}
//                               />
//                               {formErrors[field.name] && (
//                                 <p className="text-red-500 text-xs mt-1">
//                                   {formErrors[field.name]}
//                                 </p>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {/* Action Buttons */}
//                       <div className="flex justify-between items-center mb-2">
//                         <div className="text-green-600 text-sm">{successMessage}</div>
//                         <div className="text-right w-full">
//                           {showAddForm ? (
//                             <div className="flex gap-2 justify-end">
//                               <button
//                                 onClick={handleAddStock}
//                                 className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
//                               >
//                                 Add
//                               </button>
//                               <button
//                                 onClick={() => {
//                                   setShowAddForm(false);
//                                   setFormErrors({});
//                                 }}
//                                 className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600"
//                               >
//                                 Cancel
//                               </button>
//                             </div>
//                           ) : (
//                             <button
//                               onClick={() => setShowAddForm(true)}
//                               className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
//                             >
//                               Add a Product
//                             </button>
//                           )}
//                         </div>
//                       </div>

//                       {/* Search */}
//                       <input
//                         type="text"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         placeholder="Search product..."
//                         className="mb-2 px-4 py-2 border rounded-md w-full text-sm"
//                       />

//                       {/* Table */}
//                       <div className="overflow-auto border rounded-md flex-1">
//                         <table className="min-w-full text-sm">
//                           <thead className="bg-gray-200 sticky top-0">
//                             <tr>
//                               <th className="px-4 py-2 border text-left">S.No</th>
//                               <th className="px-4 py-2 border text-left">Product</th>
//                               <th className="px-4 py-2 border text-left">Date</th>
//                               <th className="px-4 py-2 border text-left">Inward</th>
//                               <th className="px-4 py-2 border text-left">Outward</th>
//                               <th className="px-4 py-2 border text-left">Available</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {filteredStocks.length > 0 ? (
//                               filteredStocks.map((stock, idx) => (
//                                 <tr key={idx}>
//                                   <td className="px-4 py-2 border">{idx + 1}</td>
//                                   <td className="px-4 py-2 border">{stock.name}</td>
//                                   <td className="px-4 py-2 border">{stock.date}</td>
//                                   <td className="px-4 py-2 border">{stock.inward}</td>
//                                   <td className="px-4 py-2 border">{stock.outward}</td>
//                                   <td className="px-4 py-2 border">
//                                     {stock.inward - stock.outward}
//                                   </td>
//                                 </tr>
//                               ))
//                             ) : (
//                               <tr>
//                                 <td colSpan={6} className="text-center py-4 text-gray-500">
//                                   No stock found for {selectedCategory}
//                                 </td>
//                               </tr>
//                             )}
//                           </tbody>
//                         </table>
//                       </div>
//                     </>
//                   )}
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>

//       {/* STOCK SETTLED Popup (reused styling) */}
//       <Transition appear show={stockSettledOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={() => setStockSettledOpen(false)}>
//           <Transition.Child as={Fragment}>
//             <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
//           </Transition.Child>
//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex items-center justify-center min-h-full p-4">
//               <Dialog.Panel className="relative w-full max-w-4xl bg-white text-black rounded-xl p-6 shadow-2xl h-[85vh] flex flex-col">
//                 <button
//                   onClick={() => setStockSettledOpen(false)}
//                   className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
//                 >
//                   &times;
//                 </button>
//                 <h2 className="text-xl font-bold text-indigo-700 mb-4">Settled Stocks Summary</h2>

//                 <div className="flex flex-col sm:flex-row gap-4 mb-4">
//                   <select
//                     value={settledCategory}
//                     onChange={(e) => setSettledCategory(e.target.value)}
//                     className="border px-4 py-2 rounded-md min-w-[180px]"
//                   >
//                     <option value="">Select Category</option>
//                     <option value="Flowers">Flowers</option>
//                     <option value="Fruits">Fruits</option>
//                     <option value="Vegetables">Vegetables</option>
//                   </select>
//                   <input
//                     type="text"
//                     value={settledSearchTerm}
//                     onChange={(e) => setSettledSearchTerm(e.target.value)}
//                     placeholder="Search product..."
//                     className="w-full px-4 py-2 border rounded-md text-sm"
//                   />
//                 </div>

//                 <div className="overflow-auto border rounded-md flex-1 text-sm">
//                   <table className="min-w-full">
//                     <thead className="bg-gray-200 sticky top-0">
//                       <tr>
//                         <th className="px-4 py-2 border text-left">S.No</th>
//                         <th className="px-4 py-2 border text-left">Product</th>
//                         <th className="px-4 py-2 border text-left">Category</th>
//                         <th className="px-4 py-2 border text-left">Date</th>
//                         <th className="px-4 py-2 border text-left">Available</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {settledFilteredStocks.length > 0 ? (
//                         settledFilteredStocks.map((stock, idx) => (
//                           <tr key={idx}>
//                             <td className="px-4 py-2 border">{idx + 1}</td>
//                             <td className="px-4 py-2 border">{stock.name}</td>
//                             <td className="px-4 py-2 border">{stock.category}</td>
//                             <td className="px-4 py-2 border">{stock.date}</td>
//                             <td className="px-4 py-2 border">{stock.inward - stock.outward}</td>
//                           </tr>
//                         ))
//                       ) : (
//                         <tr>
//                           <td colSpan={5} className="text-center py-4 text-gray-500">
//                             No stock found
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </Dialog.Panel>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// }




// 'use client';

// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment, useState, useEffect } from 'react';

// interface StockData {
//   name: string;
//   date: string;
//   inward: number;
//   outward: number;
//   category: string;
// }

// interface Props {
//   open: boolean;
//   onClose: () => void;
// }

// export default function StocksPopup({ open, onClose }: Props) {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [view, setView] = useState<'initial' | 'stocks'>('initial');
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [stocks, setStocks] = useState<StockData[]>([]);
//   const [form, setForm] = useState({ name: '', date: '', inward: '', outward: '' });
//   const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
//   const [successMessage, setSuccessMessage] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [stockSettledOpen, setStockSettledOpen] = useState(false);
//   const [settledCategory, setSettledCategory] = useState('');
//   const [settledSearchTerm, setSettledSearchTerm] = useState('');

//   useEffect(() => {
//     setStocks([
//       { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
//       { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//       { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//       { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//       { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//       { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//       { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//       { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//       { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//       { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//       { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//       { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
//       { name: 'Apple', date: '2025-07-23', inward: 150, outward: 50, category: 'Fruits' },
//       { name: 'Banana', date: '2025-07-26', inward: 120, outward: 60, category: 'Fruits' },
//       { name: 'Banana', date: '2025-07-26', inward: 120, outward: 60, category: 'Fruits' },
//       { name: 'Banana', date: '2025-07-26', inward: 120, outward: 60, category: 'Fruits' },
//       { name: 'Banana', date: '2025-07-26', inward: 120, outward: 60, category: 'Fruits' },
//       { name: 'Banana', date: '2025-07-26', inward: 120, outward: 60, category: 'Fruits' },
//       { name: 'Banana', date: '2025-07-26', inward: 120, outward: 60, category: 'Fruits' },
//       { name: 'Banana', date: '2025-07-26', inward: 120, outward: 60, category: 'Fruits' },
//       { name: 'Banana', date: '2025-07-26', inward: 120, outward: 60, category: 'Fruits' },
//       { name: 'Carrot', date: '2025-07-22', inward: 90, outward: 40, category: 'Vegetables' },
//       { name: 'Spinach', date: '2025-07-21', inward: 70, outward: 10, category: 'Vegetables' },
//     ]);
//   }, []);

//   const validateForm = () => {
//     const errors: { [key: string]: string } = {};
//     if (!form.name.trim()) errors.name = 'Product name is required';
//     if (!form.date) errors.date = 'Date is required';
//     if (!form.inward || isNaN(Number(form.inward))) errors.inward = 'Inward quantity is required';
//     if (!form.outward || isNaN(Number(form.outward))) errors.outward = 'Outward quantity is required';
//     setFormErrors(errors);
//     if (Object.keys(errors).length > 0) setTimeout(() => setFormErrors({}), 2000);
//     return Object.keys(errors).length === 0;
//   };

//   const handleAddStock = () => {
//     if (!validateForm()) return;
//     const newStock: StockData = {
//       name: form.name,
//       date: form.date,
//       inward: Number(form.inward),
//       outward: Number(form.outward),
//       category: selectedCategory,
//     };
//     setStocks((prev) => [...prev, newStock]);
//     setForm({ name: '', date: '', inward: '', outward: '' });
//     setSuccessMessage('Product added successfully');
//     setShowAddForm(false);
//     setTimeout(() => setSuccessMessage(''), 2000);
//   };

//   const filteredStocks = stocks.filter(
//     (s) => s.category === selectedCategory && s.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const settledFilteredStocks = stocks.filter(
//     (s) => s.category === settledCategory && s.name.toLowerCase().includes(settledSearchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <Transition appear show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={() => {
//           onClose();
//           setView('initial');
//           setSelectedCategory('');
//           setShowAddForm(false);
//         }}>
//           <Transition.Child as={Fragment}>
//             <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
//           </Transition.Child>
//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex items-center justify-center min-h-full p-4">
//               <Dialog.Panel
//                 className={`relative w-full ${
//                   view === 'initial' ? 'max-w-md' : 'max-w-5xl'
//                 } bg-white text-black rounded-xl p-6 shadow-2xl h-auto max-h-[90vh] flex flex-col`}
//               >
//                 <button
//                   onClick={() => onClose()}
//                   className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
//                 >
//                   &times;
//                 </button>

//                 {view === 'initial' && (
//                   <div className="flex flex-col gap-6 items-center justify-center text-center">
//                     <h2 className="text-xl font-bold text-indigo-700">Select Product Category</h2>
//                     <select
//                       value={selectedCategory}
//                       onChange={(e) => setSelectedCategory(e.target.value)}
//                       className="border px-4 py-2 rounded-md w-full"
//                     >
//                       <option value="">Select Category</option>
//                       <option value="Flowers">Flowers</option>
//                       <option value="Fruits">Fruits</option>
//                       <option value="Vegetables">Vegetables</option>
//                     </select>
//                     <div className="flex gap-4 flex-col sm:flex-row">
//                       <button
//                         disabled={!selectedCategory}
//                         onClick={() => setView('stocks')}
//                         className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
//                       >
//                         Add Stocks
//                       </button>
//                       <button
//                         onClick={() => {
//                           setStockSettledOpen(true);
//                           setSettledCategory('Flowers');
//                         }}
//                         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                       >
//                         Stock Settled
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {view === 'stocks' && (
//                   <>
//                     <h2 className="text-xl font-bold text-indigo-700 mb-4">Stocks - {selectedCategory}</h2>

//                     {showAddForm && (
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 max-h-[160px] overflow-y-auto hide-scrollbar">
//                         {[
//                           { label: 'Product Name', name: 'name', type: 'text' },
//                           { label: 'Date', name: 'date', type: 'date' },
//                           { label: 'Inward Quantity', name: 'inward', type: 'number' },
//                           { label: 'Outward Quantity', name: 'outward', type: 'number' },
//                         ].map((field) => (
//                           <div key={field.name}>
//                             <label className="font-medium">{field.label}</label>
//                             <input
//                               type={field.type}
//                               value={form[field.name as keyof typeof form]}
//                               onChange={(e) =>
//                                 setForm({ ...form, [field.name]: e.target.value })
//                               }
//                               className={`w-full border px-3 py-1 rounded text-sm ${
//                                 formErrors[field.name] ? 'border-red-500' : ''
//                               }`}
//                             />
//                             {formErrors[field.name] && (
//                               <p className="text-red-500 text-xs mt-1">
//                                 {formErrors[field.name]}
//                               </p>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     <div className="flex justify-between mb-2">
//                       <div className="text-green-600 text-sm">{successMessage}</div>
//                       <div className="text-right">
//                         {showAddForm ? (
//                           <div className="flex gap-2">
//                             <button onClick={handleAddStock} className="bg-green-600 text-white px-4 py-1 rounded">Add</button>
//                             <button onClick={() => setShowAddForm(false)} className="bg-gray-500 text-white px-4 py-1 rounded">Cancel</button>
//                           </div>
//                         ) : (
//                           <button onClick={() => setShowAddForm(true)} className="bg-indigo-600 text-white px-4 py-1 rounded">Add a Product</button>
//                         )}
//                       </div>
//                     </div>

//                     <input
//                       type="text"
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       placeholder="Search product..."
//                       className="mb-2 px-4 py-2 border rounded-md w-full text-sm"
//                     />

//                     <div className="overflow-auto border rounded-md flex-1 hide-scrollbar">
//                       <table className="min-w-full text-sm">
//                         <thead className="bg-gray-200 sticky top-0">
//                           <tr>
//                             <th className="px-4 py-2 border text-left">S.No</th>
//                             <th className="px-4 py-2 border text-left">Product</th>
//                             <th className="px-4 py-2 border text-left">Date</th>
//                             <th className="px-4 py-2 border text-left">Inward</th>
//                             <th className="px-4 py-2 border text-left">Outward</th>
//                             <th className="px-4 py-2 border text-left">Available</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {filteredStocks.length > 0 ? filteredStocks.map((s, i) => (
//                             <tr key={i}>
//                               <td className="px-4 py-2 border">{i + 1}</td>
//                               <td className="px-4 py-2 border">{s.name}</td>
//                               <td className="px-4 py-2 border">{s.date}</td>
//                               <td className="px-4 py-2 border">{s.inward}</td>
//                               <td className="px-4 py-2 border">{s.outward}</td>
//                               <td className="px-4 py-2 border">{s.inward - s.outward}</td>
//                             </tr>
//                           )) : (
//                             <tr>
//                               <td colSpan={6} className="text-center py-4 text-gray-500">
//                                 No stock found for {selectedCategory}
//                               </td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </>
//                 )}
//               </Dialog.Panel>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>

    //   {/* Settled Stocks Popup */}
    //   <Transition appear show={stockSettledOpen} as={Fragment}>
    //     <Dialog as="div" className="relative z-50" onClose={() => setStockSettledOpen(false)}>
    //       <Transition.Child as={Fragment}>
    //         <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
    //       </Transition.Child>
    //       <div className="fixed inset-0 overflow-y-auto">
    //         <div className="flex items-center justify-center min-h-full p-4">
    //           <Dialog.Panel className="relative w-full max-w-5xl bg-white text-black rounded-xl p-6 shadow-2xl h-[85vh] flex flex-col">
    //             <button
    //               onClick={() => setStockSettledOpen(false)}
    //               className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
    //             >
    //               &times;
    //             </button>
    //             <h2 className="text-xl font-bold text-indigo-700 mb-4">Settled Stocks Summary</h2>

    //             <div className="flex flex-col sm:flex-row gap-4 mb-4">
    //               <select
    //                 value={settledCategory}
    //                 onChange={(e) => setSettledCategory(e.target.value)}
    //                 className="border px-4 py-2 rounded-md min-w-[180px]"
    //               >
    //                 <option value="">Select Category</option>
    //                 <option value="Flowers">Flowers</option>
    //                 <option value="Fruits">Fruits</option>
    //                 <option value="Vegetables">Vegetables</option>
    //               </select>
    //               <input
    //                 type="text"
    //                 value={settledSearchTerm}
    //                 onChange={(e) => setSettledSearchTerm(e.target.value)}
    //                 placeholder="Search product..."
    //                 className="w-full px-4 py-2 border rounded-md text-sm"
    //               />
    //             </div>

    //             <div className="overflow-auto border rounded-md flex-1 text-sm hide-scrollbar">
    //               <table className="min-w-full">
    //                 <thead className="bg-gray-200 sticky top-0">
    //                   <tr>
    //                     <th className="px-4 py-2 border text-left">S.No</th>
    //                     <th className="px-4 py-2 border text-left">Product</th>
    //                     <th className="px-4 py-2 border text-left">Category</th>
    //                     <th className="px-4 py-2 border text-left">Date</th>
    //                     <th className="px-4 py-2 border text-left">Available</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   {settledFilteredStocks.length > 0 ? settledFilteredStocks.map((s, i) => (
    //                     <tr key={i}>
    //                       <td className="px-4 py-2 border">{i + 1}</td>
    //                       <td className="px-4 py-2 border">{s.name}</td>
    //                       <td className="px-4 py-2 border">{s.category}</td>
    //                       <td className="px-4 py-2 border">{s.date}</td>
    //                       <td className="px-4 py-2 border">{s.inward - s.outward}</td>
    //                     </tr>
    //                   )) : (
    //                     <tr>
    //                       <td colSpan={5} className="text-center py-4 text-gray-500">
    //                         No stock found
    //                       </td>
    //                     </tr>
    //                   )}
    //                 </tbody>
    //               </table>
    //             </div>
    //           </Dialog.Panel>
    //         </div>
    //       </div>
    //     </Dialog>
    //   </Transition>

//       {/* Custom styles */}
//       <style jsx>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </>
//   );
// }




'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';

interface StockData {
  name: string;
  date: string;
  inward: number;
  outward: number;
  category: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function StocksPopup({ open, onClose }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [view, setView] = useState<'initial' | 'stocks'>('initial');
  const [showAddForm, setShowAddForm] = useState(false);
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [form, setForm] = useState({ name: '', date: '', inward: '', outward: '' });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [stockSettledOpen, setStockSettledOpen] = useState(false);
  const [settledCategory, setSettledCategory] = useState('');
  const [settledSearchTerm, setSettledSearchTerm] = useState('');

  useEffect(() => {
    if (stocks.length === 0) {
      setStocks([
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Rose', date: '2025-07-24', inward: 100, outward: 20, category: 'Flowers' },
        { name: 'Tulip', date: '2025-07-25', inward: 80, outward: 30, category: 'Flowers' },
        { name: 'Apple', date: '2025-07-23', inward: 150, outward: 50, category: 'Fruits' },
        { name: 'Banana', date: '2025-07-26', inward: 120, outward: 60, category: 'Fruits' },
        { name: 'Carrot', date: '2025-07-22', inward: 90, outward: 40, category: 'Vegetables' },
        { name: 'Spinach', date: '2025-07-21', inward: 70, outward: 10, category: 'Vegetables' },
      ]);
    }
  }, []);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!form.name.trim()) errors.name = 'Product name is required';
    if (!form.date) errors.date = 'Date is required';
    if (!form.inward || isNaN(Number(form.inward))) errors.inward = 'Inward quantity is required';
    if (!form.outward || isNaN(Number(form.outward))) errors.outward = 'Outward quantity is required';
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) setTimeout(() => setFormErrors({}), 2000);
    return Object.keys(errors).length === 0;
  };

  const handleAddStock = () => {
    if (!validateForm()) return;
    const newStock: StockData = {
      name: form.name,
      date: form.date,
      inward: Number(form.inward),
      outward: Number(form.outward),
      category: selectedCategory,
    };
    setStocks((prev) => [...prev, newStock]);
    setForm({ name: '', date: '', inward: '', outward: '' });
    setSuccessMessage('Product added successfully');
    setShowAddForm(false);
    setTimeout(() => setSuccessMessage(''), 2000);
  };

  const filteredStocks = stocks.filter(
    (s) => s.category === selectedCategory && s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const settledFilteredStocks = stocks.filter(
    (s) => s.category === settledCategory && s.name.toLowerCase().includes(settledSearchTerm.toLowerCase())
  );

  return (
    <>
      {/* Main Stocks Popup */}
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            onClose();
            setView('initial');
            setSelectedCategory('');
            setShowAddForm(false);
            setFormErrors({});
          }}
        >
          <Transition.Child as={Fragment}>
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4">
              {/* <Dialog.Panel
                className={`relative w-full ${
                  view === 'initial' ? 'sm:max-w-[35%] h-auto' : 'max-w-6xl h-[85vh]'
                } bg-white text-black rounded-xl p-6 shadow-2xl flex flex-col`}
              > */}

              <Dialog.Panel
  className={`relative w-full 
    ${view === 'initial' 
      ? 'h-auto max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[35%]' 
      : 'h-[85vh] max-w-[95%] sm:max-w-[90%] md:max-w-3xl lg:max-w-6xl'
    } 
    bg-white text-black rounded-xl p-6 shadow-2xl flex flex-col`}
>

                <button
                  onClick={() => {
                    onClose();
                    setView('initial');
                    setSelectedCategory('');
                    setShowAddForm(false);
                  }}
                  className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
                >
                  &times;
                </button>

                {/* INITIAL VIEW */}
                {view === 'initial' && (
                  <div className="flex flex-col w-full space-y-6">
                    <h2 className="text-xl font-bold text-indigo-700">Select Product Category</h2>
                    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 w-full">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border px-4 py-2 rounded-md min-w-[180px] w-full sm:w-auto"
                      >
                        <option value="">Select Category</option>
                        <option value="Flowers">Flowers</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                      </select>
                      <button
                        disabled={!selectedCategory}
                        onClick={() => setView('stocks')}
                        className="bg-green-600 md:text-sm xl:text-[2vh] text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400 w-full sm:w-auto"
                      >
                    
                        Add Stocks
                      </button>
                      <button
                        onClick={() => {
                          setStockSettledOpen(true);
                          setSettledCategory('Flowers');
                        }}
                        className="bg-blue-600 md:text-sm xl:text-[2vh] text-white  px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
                      >
                        Stock Settled
                      </button>
                    </div>
                  </div>
                )}

                {/* STOCKS VIEW */}
                {view === 'stocks' && (
                  <>
                    <h2 className="text-xl font-bold text-indigo-700 mb-4">Stocks - {selectedCategory}</h2>

                    {/* Form Section */}
                    {showAddForm && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        {[
                          { label: 'Product Name', name: 'name', type: 'text' },
                          { label: 'Date', name: 'date', type: 'date' },
                          { label: 'Inward Quantity', name: 'inward', type: 'number' },
                          { label: 'Outward Quantity', name: 'outward', type: 'number' },
                        ].map((field) => (
                          <div key={field.name}>
                            <label className="font-medium">{field.label}</label>
                            <input
                              type={field.type}
                              value={form[field.name as keyof typeof form]}
                              onChange={(e) =>
                                setForm({ ...form, [field.name]: e.target.value })
                              }
                              className={`w-full border px-3 py-1 rounded text-sm ${
                                formErrors[field.name] ? 'border-red-500' : ''
                              }`}
                            />
                            {formErrors[field.name] && (
                              <p className="text-red-500 text-xs mt-1">
                                {formErrors[field.name]}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Controls */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-green-600 text-sm">{successMessage}</span>
                      <div>
                        {showAddForm ? (
                          <div className="flex gap-2">
                            <button
                              onClick={handleAddStock}
                              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                            >
                              Add
                            </button>
                            <button
                              onClick={() => {
                                setShowAddForm(false);
                                setFormErrors({});
                              }}
                              className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setShowAddForm(true)}
                            className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
                          >
                            Add a Product
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Search */}
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search product..."
                      className="mb-2 px-4 py-2 border rounded-md w-full text-sm"
                    />

                    {/* Table */}
                    <div className="flex-1 overflow-y-auto border rounded-md hide-scrollbar">
                      <table className="min-w-full text-sm table-fixed">
                        <thead className="bg-gray-200 sticky top-0">
                          <tr>
                            <th className="px-2 py-2 border w-[5%]">S.No</th>
                            <th className="px-2 py-2 border w-[20%]">Product</th>
                            <th className="px-2 py-2 border w-[20%]">Date</th>
                            <th className="px-2 py-2 border w-[15%]">Inward</th>
                            <th className="px-2 py-2 border w-[15%]">Outward</th>
                            <th className="px-2 py-2 border w-[15%]">Available</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredStocks.length > 0 ? (
                            filteredStocks.map((stock, idx) => (
                              <tr key={idx}>
                                <td className="px-2 py-2 border">{idx + 1}</td>
                                <td className="px-2 py-2 border">{stock.name}</td>
                                <td className="px-2 py-2 border">{stock.date}</td>
                                <td className="px-2 py-2 border">{stock.inward}</td>
                                <td className="px-2 py-2 border">{stock.outward}</td>
                                <td className="px-2 py-2 border">
                                  {stock.inward - stock.outward}
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={6} className="text-center py-4 text-gray-500">
                                No stock found for {selectedCategory}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>


        
      </Transition>

      
      {/* Settled Stocks Popup */}
      <Transition appear show={stockSettledOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setStockSettledOpen(false)}>
          <Transition.Child as={Fragment}>
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4">
              <Dialog.Panel className="relative w-full max-w-5xl bg-white text-black rounded-xl p-6 shadow-2xl h-[85vh] flex flex-col">
                <button
                  onClick={() => setStockSettledOpen(false)}
                  className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600"
                >
                  &times;
                </button>
                <h2 className="text-xl font-bold text-indigo-700 mb-4">Settled Stocks Summary</h2>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <select
                    value={settledCategory}
                    onChange={(e) => setSettledCategory(e.target.value)}
                    className="border px-4 py-2 rounded-md min-w-[180px]"
                  >
                    <option value="">Select Category</option>
                    <option value="Flowers">Flowers</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                  </select>
                  <input
                    type="text"
                    value={settledSearchTerm}
                    onChange={(e) => setSettledSearchTerm(e.target.value)}
                    placeholder="Search Seller..."
                    className="w-full px-4 py-2 border rounded-md text-sm"
                  />
                </div>

                <div className="overflow-auto border rounded-md flex-1 text-sm hide-scrollbar">
                  <table className="min-w-full">
                    <thead className="bg-gray-200 sticky top-0">
                      <tr>
                        <th className="px-4 py-2 border text-left">S.No</th>
                        <th className="px-4 py-2 border text-left">Seller Code</th>
                        <th className="px-4 py-2 border text-left">Product Name</th>
                        <th className="px-4 py-2 border text-left">Calender</th>
                        <th className="px-4 py-2 border text-left">Stock Added</th>
                        <th className="px-4 py-2 border text-left">Stock Remaining</th>
                      </tr>
                    </thead>
                    <tbody>
                      {settledFilteredStocks.length > 0 ? settledFilteredStocks.map((s, i) => (
                        <tr key={i}>
                          <td className="px-4 py-2 border">{i + 1}</td>
                          <td className="px-4 py-2 border">{s.name}</td>
                          <td className="px-4 py-2 border">{s.category}</td>
                          <td className="px-4 py-2 border">{s.date}</td>
                          <td className="px-4 py-2 border"></td>
                          <td className="px-4 py-2 border">{s.inward - s.outward}</td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={5} className="text-center py-4 text-gray-500">
                            No stock found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
      

      {/* STOCK SETTLED popup is identical in style (use same sizing as above) */}
      {/* You can reuse the same layout logic here with search bar, table, and fixed dimensions */}
    </>
  );
}
