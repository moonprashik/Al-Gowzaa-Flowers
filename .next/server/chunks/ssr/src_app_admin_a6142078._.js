module.exports = {

"[project]/src/app/admin/CustomerPopup.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 'use client';
// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment, useState } from 'react';
// export interface CustomerData {
//   name: string;
//   id: string;
//   crNumber: string;
//   vatNumber: string;
//   buildingNumber: string;
//   postalCode: string;
//   district: string;
//   managedBy: string;
// }
// interface Props {
//   open: boolean;
//   onClose: () => void;
//   popups: string[];
//   index: number;
//   database: CustomerData[];
//   setDatabase: React.Dispatch<React.SetStateAction<CustomerData[]>>;
// }
// export default function CustomerPopup({
//   open,
//   onClose,
//   popups,
//   index,
//   database,
//   setDatabase,
// }: Props) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('Riyadh');
//   const [customerData, setCustomerData] = useState<CustomerData | null>(null);
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [hasSelectedCustomer, setHasSelectedCustomer] = useState(false);
//   const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof CustomerData, string>>>({});
//   const [statusMessage, setStatusMessage] = useState<string>('');
//   const filteredUsers = searchTerm.trim()
//     ? database.filter(
//         (user) =>
//           user.managedBy === selectedLocation &&
//           user.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
//       )
//     : [];
//   const handleInputChange = (field: keyof CustomerData, value: string) => {
//     if (!customerData) return;
//     setCustomerData({ ...customerData, [field]: value });
//     setValidationErrors((prev) => ({ ...prev, [field]: '' }));
//   };
//   const handleCustomerSelect = (id: string) => {
//     const index = database.findIndex((u) => u.id === id);
//     if (index !== -1) {
//       setSelectedIndex(index);
//       setCustomerData(database[index]);
//       setSearchTerm(database[index].name);
//       setHasSelectedCustomer(true);
//       setStatusMessage('');
//     }
//   };
//   const handleUpdate = () => {
//     if (selectedIndex === null || !customerData) return;
//     if (!validateCustomer(customerData)) return;
//     const updated = [...database];
//     updated[selectedIndex] = customerData;
//     setDatabase(updated);
//     setStatusMessage('Customer data updated successfully.');
//     clearForm();
//   };
//   const handleAdd = () => {
//     if (!customerData) return;
//     if (!validateCustomer(customerData)) return;
//     const newCustomer: CustomerData = {
//       ...customerData,
//       managedBy: selectedLocation,
//     };
//     setDatabase([...database, newCustomer]);
//     setStatusMessage('Customer added successfully.');
//     clearForm();
//   };
//   const handleDelete = () => {
//     if (selectedIndex === null) return;
//     const updated = [...database];
//     updated.splice(selectedIndex, 1);
//     setDatabase(updated);
//     setStatusMessage('Customer deleted successfully.');
//     clearForm();
//   };
//   const validateCustomer = (data: CustomerData) => {
//     const requiredFields: (keyof CustomerData)[] = [
//       'name',
//       'id',
//       'crNumber',
//       'vatNumber',
//       'buildingNumber',
//       'postalCode',
//       'district',
//     ];
//     const errors: Partial<Record<keyof CustomerData, string>> = {};
//     for (const field of requiredFields) {
//       if (!data[field]?.trim()) {
//         errors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
//       }
//     }
//     setValidationErrors(errors);
//     return Object.keys(errors).length === 0;
//   };
//   const clearForm = () => {
//     setSelectedIndex(null);
//     setCustomerData(null);
//     setSearchTerm('');
//     setIsAddingNew(false);
//     setHasSelectedCustomer(false);
//     setValidationErrors({});
//   };
//   return (
//     <Transition appear show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-50" onClose={onClose}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black/30 backdrop-blur-md" />
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
//               <Dialog.Panel className="w-full max-w-5xl bg-white text-black rounded-2xl p-8 shadow-2xl">
//                 <Dialog.Title className="text-2xl font-bold mb-6 text-indigo-700">
//                   {popups[index]}
//                 </Dialog.Title>
//                 {index === 2 ? (
//                   <>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium mb-1">Managed By:</label>
//                       <select
//                         value={selectedLocation}
//                         onChange={(e) => {
//                           setSelectedLocation(e.target.value);
//                           setSearchTerm('');
//                           clearForm();
//                         }}
//                         className="w-full border px-3 py-2 rounded-md"
//                       >
//                         <option value="Riyadh">Riyadh</option>
//                         <option value="Hafar Al Batin">Hafar Al Batin</option>
//                       </select>
//                     </div>
//                     {!isAddingNew && !hasSelectedCustomer && (
//                       <div className="relative mb-6">
//                         <label className="block mb-1 font-medium text-sm">Search Customer:</label>
//                         <input
//                           type="text"
//                           placeholder="Start typing name..."
//                           value={searchTerm}
//                           onChange={(e) => {
//                             setSearchTerm(e.target.value);
//                             setCustomerData(null);
//                             setSelectedIndex(null);
//                             setStatusMessage('');
//                           }}
//                           className="w-full border border-gray-300 px-3 py-2 rounded-md"
//                         />
//                         {filteredUsers.length > 0 && !customerData && (
//                           <ul className="absolute bg-white border w-full mt-1 rounded-md shadow z-10 max-h-52 overflow-y-auto">
//                             {filteredUsers.map((user) => (
//                               <li
//                                 key={user.id}
//                                 className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
//                                 onClick={() => handleCustomerSelect(user.id)}
//                               >
//                                 {user.name}
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     )}
//                     {!isAddingNew && !hasSelectedCustomer && (
//                       <button
//                         className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                         onClick={() => {
//                           setCustomerData({
//                             name: '',
//                             id: '',
//                             crNumber: '',
//                             vatNumber: '',
//                             buildingNumber: '',
//                             postalCode: '',
//                             district: '',
//                             managedBy: selectedLocation,
//                           });
//                           setSelectedIndex(null);
//                           setIsAddingNew(true);
//                           setStatusMessage('');
//                         }}
//                       >
//                         Add Customer
//                       </button>
//                     )}
//                     {customerData && (
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                         {(Object.keys(customerData) as (keyof CustomerData)[]).map((key) => {
//                           if (key === 'managedBy') return null;
//                           return (
//                             <div key={key}>
//                               <label className="block mb-1 font-medium capitalize text-sm">
//                                 {key.replace(/([A-Z])/g, ' $1')}
//                               </label>
//                               <input
//                                 type="text"
//                                 value={customerData[key]}
//                                 onChange={(e) =>
//                                   handleInputChange(key, e.target.value)
//                                 }
//                                 className={`w-full border px-3 py-2 rounded-md ${
//                                   validationErrors[key] ? 'border-red-500' : 'border-gray-300'
//                                 }`}
//                               />
//                               {validationErrors[key] && (
//                                 <p className="text-red-500 text-sm mt-1">
//                                   {validationErrors[key]}
//                                 </p>
//                               )}
//                             </div>
//                           );
//                         })}
//                       </div>
//                     )}
//                     {statusMessage && (
//                       <div className="mb-4 text-green-600 font-medium">
//                         {statusMessage}
//                       </div>
//                     )}
//                     {customerData && (
//                       <div className="flex flex-col sm:flex-row gap-4">
//                         <button
//                           onClick={selectedIndex !== null ? handleUpdate : handleAdd}
//                           className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
//                         >
//                           {selectedIndex !== null ? 'Update' : 'Add'}
//                         </button>
//                         {selectedIndex !== null && (
//                           <button
//                             onClick={handleDelete}
//                             className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700"
//                           >
//                             Delete
//                           </button>
//                         )}
//                         <button
//                           onClick={clearForm}
//                           className="bg-gray-500 text-white px-5 py-2 rounded-md hover:bg-gray-600"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <div className="text-center text-gray-700">
//                     <p className="text-base">Coming soon: {popups[index]} details.</p>
//                   </div>
//                 )}
//                 <div className="mt-8 text-right">
//                   <button
//                     className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600"
//                     onClick={() => {
//                       onClose();
//                       clearForm();
//                       setStatusMessage('');
//                     }}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// }
// components/CustomerPopup.tsx
__turbopack_context__.s({
    "default": (()=>CustomerPopup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/transition/transition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function CustomerPopup({ open, onClose, popups, index, database, setDatabase }) {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Riyadh');
    const [customerData, setCustomerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAddingNew, setIsAddingNew] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasSelectedCustomer, setHasSelectedCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (statusMessage) {
            const timer = setTimeout(()=>setStatusMessage(''), 2000);
            return ()=>clearTimeout(timer);
        }
    }, [
        statusMessage
    ]);
    const filteredUsers = searchTerm.trim() ? database.filter((user)=>user.managedBy === selectedLocation && user.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase())) : [];
    const handleInputChange = (field, value)=>{
        if (!customerData) return;
        setCustomerData({
            ...customerData,
            [field]: value
        });
        setValidationErrors((prev)=>({
                ...prev,
                [field]: ''
            }));
    };
    const handleCustomerSelect = (id)=>{
        const index = database.findIndex((u)=>u.id === id);
        if (index !== -1) {
            setSelectedIndex(index);
            setCustomerData(database[index]);
            setSearchTerm(database[index].name);
            setHasSelectedCustomer(true);
            setStatusMessage('');
        }
    };
    const handleUpdate = ()=>{
        if (selectedIndex === null || !customerData) return;
        if (!validateCustomer(customerData)) return;
        const updated = [
            ...database
        ];
        updated[selectedIndex] = customerData;
        setDatabase(updated);
        setStatusMessage('Customer data updated successfully.');
        clearForm();
    };
    const handleAdd = ()=>{
        if (!customerData) return;
        if (!validateCustomer(customerData)) return;
        const newCustomer = {
            ...customerData,
            managedBy: selectedLocation
        };
        setDatabase([
            ...database,
            newCustomer
        ]);
        setStatusMessage('Customer added successfully.');
        clearForm();
    };
    const handleDelete = ()=>{
        if (selectedIndex === null) return;
        const updated = [
            ...database
        ];
        updated.splice(selectedIndex, 1);
        setDatabase(updated);
        setStatusMessage('Customer deleted successfully.');
        clearForm();
    };
    const validateCustomer = (data)=>{
        const requiredFields = [
            'name',
            'id',
            'crNumber',
            'vatNumber',
            'buildingNumber',
            'postalCode',
            'district'
        ];
        const errors = {};
        for (const field of requiredFields){
            if (!data[field]?.trim()) {
                errors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
            }
        }
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const clearForm = ()=>{
        setSelectedIndex(null);
        setCustomerData(null);
        setSearchTerm('');
        setIsAddingNew(false);
        setHasSelectedCustomer(false);
        setValidationErrors({});
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
        appear: true,
        show: open,
        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
            as: "div",
            className: "relative z-50",
            onClose: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"].Child, {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/30 backdrop-blur-md"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                    lineNumber: 476,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center min-h-full p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                className: "w-full max-w-5xl bg-white text-black rounded-2xl p-8 shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"].Title, {
                                        className: "text-2xl font-bold mb-6 text-indigo-700",
                                        children: popups[index]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                        lineNumber: 500,
                                        columnNumber: 17
                                    }, this),
                                    index === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Managed By:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedLocation,
                                                        onChange: (e)=>{
                                                            setSelectedLocation(e.target.value);
                                                            setSearchTerm('');
                                                            clearForm();
                                                        },
                                                        className: "w-full border px-3 py-2 rounded-md",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Riyadh",
                                                                children: "Riyadh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Hafar Al Batin",
                                                                children: "Hafar Al Batin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                                lineNumber: 518,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                lineNumber: 506,
                                                columnNumber: 21
                                            }, this),
                                            !isAddingNew && !hasSelectedCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block mb-1 font-medium text-sm",
                                                        children: "Search Customer:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Start typing name...",
                                                        value: searchTerm,
                                                        onChange: (e)=>{
                                                            setSearchTerm(e.target.value);
                                                            setCustomerData(null);
                                                            setSelectedIndex(null);
                                                            setStatusMessage('');
                                                        },
                                                        className: "w-full border border-gray-300 px-3 py-2 rounded-md"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 25
                                                    }, this),
                                                    filteredUsers.length > 0 && !customerData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "absolute bg-white border w-full mt-1 rounded-md shadow z-10 max-h-52 overflow-y-auto",
                                                        children: filteredUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "px-4 py-2 hover:bg-indigo-100 cursor-pointer",
                                                                onClick: ()=>handleCustomerSelect(user.id),
                                                                children: user.name
                                                            }, user.id, false, {
                                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                                lineNumber: 541,
                                                                columnNumber: 31
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                lineNumber: 523,
                                                columnNumber: 23
                                            }, this),
                                            !isAddingNew && !hasSelectedCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "mb-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
                                                onClick: ()=>{
                                                    setCustomerData({
                                                        name: '',
                                                        id: '',
                                                        crNumber: '',
                                                        vatNumber: '',
                                                        buildingNumber: '',
                                                        postalCode: '',
                                                        district: '',
                                                        managedBy: selectedLocation
                                                    });
                                                    setSelectedIndex(null);
                                                    setIsAddingNew(true);
                                                    setStatusMessage('');
                                                },
                                                children: "Add Customer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                lineNumber: 555,
                                                columnNumber: 23
                                            }, this),
                                            customerData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",
                                                children: Object.keys(customerData).map((key)=>{
                                                    if (key === 'managedBy') return null;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block mb-1 font-medium capitalize text-sm",
                                                                children: key.replace(/([A-Z])/g, ' $1')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: customerData[key],
                                                                onChange: (e)=>handleInputChange(key, e.target.value),
                                                                className: `w-full border px-3 py-2 rounded-md ${validationErrors[key] ? 'border-red-500' : 'border-gray-300'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                                lineNumber: 586,
                                                                columnNumber: 31
                                                            }, this),
                                                            validationErrors[key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-red-500 text-sm mt-1",
                                                                children: validationErrors[key]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                                lineNumber: 597,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, key, true, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                lineNumber: 578,
                                                columnNumber: 23
                                            }, this),
                                            statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 text-green-600 font-medium",
                                                children: statusMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                lineNumber: 608,
                                                columnNumber: 23
                                            }, this),
                                            customerData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: selectedIndex !== null ? handleUpdate : handleAdd,
                                                        className: "bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700",
                                                        children: selectedIndex !== null ? 'Update' : 'Add'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 25
                                                    }, this),
                                                    selectedIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleDelete,
                                                        className: "bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: clearForm,
                                                        className: "bg-gray-500 text-white px-5 py-2 rounded-md hover:bg-gray-600",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                lineNumber: 614,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base",
                                            children: [
                                                "Coming soon: ",
                                                popups[index],
                                                " details."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                            lineNumber: 642,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                        lineNumber: 641,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600",
                                            onClick: ()=>{
                                                onClose();
                                                clearForm();
                                                setStatusMessage('');
                                            },
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                            lineNumber: 647,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                        lineNumber: 646,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                lineNumber: 499,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                            lineNumber: 490,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                        lineNumber: 489,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                    lineNumber: 488,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/CustomerPopup.tsx",
            lineNumber: 475,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
        lineNumber: 474,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/admin/LoginPopup.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 'use client';
// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment, useEffect, useState } from 'react';
// export interface LoginUser {
//   email: string;
//   password: string;
// }
// interface Props {
//   open: boolean;
//   onClose: () => void;
//   users: LoginUser[];
//   setUsers: React.Dispatch<React.SetStateAction<LoginUser[]>>;
// }
// export default function LoginPopup({ open, onClose, users, setUsers }: Props) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusMessage, setStatusMessage] = useState('');
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [validationErrors, setValidationErrors] = useState<{ email?: string; password?: string }>({});
//   useEffect(() => {
//     if (statusMessage) {
//       const timer = setTimeout(() => setStatusMessage(''), 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [statusMessage]);
//   const handleAddOrUpdate = () => {
//     const errors: { email?: string; password?: string } = {};
//     if (!email.trim()) errors.email = 'Email is required';
//     if (!password.trim()) errors.password = 'Password is required';
//     setValidationErrors(errors);
//     if (Object.keys(errors).length > 0) return;
//     if (selectedIndex !== null) {
//       const updated = [...users];
//       updated[selectedIndex] = { email, password };
//       setUsers(updated);
//       setStatusMessage('User updated');
//     } else {
//       setUsers([...users, { email, password }]);
//       setStatusMessage('User added');
//     }
//     clearForm();
//     setShowAddForm(false);
//   };
//   const handleEdit = (index: number) => {
//     setEmail(users[index].email);
//     setPassword(users[index].password);
//     setSelectedIndex(index);
//     setShowAddForm(true);
//   };
//   const handleDelete = (index: number) => {
//     const updated = [...users];
//     updated.splice(index, 1);
//     setUsers(updated);
//     setStatusMessage('User deleted');
//     clearForm();
//   };
//   const clearForm = () => {
//     setEmail('');
//     setPassword('');
//     setSelectedIndex(null);
//     setValidationErrors({});
//   };
//   const filteredUsers = users.filter((user) =>
//     user.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   return (
//     <Transition appear show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-50" onClose={onClose}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black/30 backdrop-blur-md" />
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
//               <Dialog.Panel className="w-full max-w-xl h-[600px] bg-white text-black rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col">
//                 <Dialog.Title className="text-2xl font-bold mb-4 text-black">
//                   Login Management
//                 </Dialog.Title>
//                 {!showAddForm ? (
//                   <div className="flex flex-col flex-1 overflow-hidden">
//                     <div className="mb-4">
//                       <input
//                         type="text"
//                         placeholder="Search by email..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="w-full px-4 py-2 border rounded-md text-black"
//                       />
//                     </div>
//                     {statusMessage && (
//                       <div className="mb-2 text-green-700 font-medium">{statusMessage}</div>
//                     )}
//                     <div className="text-right mb-4">
//                       <button
//                         onClick={() => setShowAddForm(true)}
//                         className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                       >
//                         Add Seller
//                       </button>
//                     </div>
//                     <div className="flex-1 overflow-y-auto border rounded-md p-2">
//                       {filteredUsers.length === 0 ? (
//                         <p className="text-center text-gray-500">No users found</p>
//                       ) : (
//                         <ul className="space-y-2">
//                           {filteredUsers.map((user, idx) => (
//                             <li
//                               key={idx}
//                               className="flex justify-between items-center border px-4 py-2 rounded-md text-black"
//                             >
//                               <span>{user.email}</span>
//                               <div className="flex gap-2">
//                                 <button
//                                   className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//                                   onClick={() => handleEdit(idx)}
//                                 >
//                                   Edit
//                                 </button>
//                                 <button
//                                   className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//                                   onClick={() => handleDelete(idx)}
//                                 >
//                                   Delete
//                                 </button>
//                               </div>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex-1 flex flex-col items-center justify-center">
//                     <div className="w-full max-w-sm">
//                       <div className="mb-4">
//                         <label className="block text-sm font-medium mb-1">Email</label>
//                         <input
//                           type="email"
//                           value={email}
//                           onChange={(e) => {
//                             setEmail(e.target.value);
//                             setValidationErrors((prev) => ({ ...prev, email: '' }));
//                           }}
//                           className={`w-full px-3 py-2 border ${
//                             validationErrors.email ? 'border-red-500' : 'border-gray-300'
//                           } rounded-md text-black`}
//                         />
//                         {validationErrors.email && (
//                           <p className="text-red-600 text-sm mt-1">{validationErrors.email}</p>
//                         )}
//                       </div>
//                       <div className="mb-6">
//                         <label className="block text-sm font-medium mb-1">Password</label>
//                         <input
//                           type="password"
//                           value={password}
//                           onChange={(e) => {
//                             setPassword(e.target.value);
//                             setValidationErrors((prev) => ({ ...prev, password: '' }));
//                           }}
//                           className={`w-full px-3 py-2 border ${
//                             validationErrors.password ? 'border-red-500' : 'border-gray-300'
//                           } rounded-md text-black`}
//                         />
//                         {validationErrors.password && (
//                           <p className="text-red-600 text-sm mt-1">{validationErrors.password}</p>
//                         )}
//                       </div>
//                       <div className="flex justify-center gap-4">
//                         <button
//                           onClick={handleAddOrUpdate}
//                           className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
//                         >
//                           {selectedIndex !== null ? 'Update User' : 'Add User'}
//                         </button>
//                         <button
//                           onClick={() => {
//                             clearForm();
//                             setShowAddForm(false);
//                           }}
//                           className="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 <div className="text-right mt-auto pt-4">
//                   <button
//                     onClick={() => {
//                       onClose();
//                       clearForm();
//                       setShowAddForm(false);
//                     }}
//                     className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// }
__turbopack_context__.s({
    "default": (()=>LoginPopup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/transition/transition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function LoginPopup({ open, onClose, users, setUsers }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visiblePasswordIndexes, setVisiblePasswordIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (statusMessage) {
            const timer = setTimeout(()=>setStatusMessage(''), 2000);
            return ()=>clearTimeout(timer);
        }
    }, [
        statusMessage
    ]);
    const handleAddOrUpdate = ()=>{
        const errors = {};
        if (!email.trim()) errors.email = 'Email is required';
        if (!password.trim()) errors.password = 'Password is required';
        setValidationErrors(errors);
        if (Object.keys(errors).length > 0) return;
        if (selectedIndex !== null) {
            const updated = [
                ...users
            ];
            updated[selectedIndex] = {
                email,
                password
            };
            setUsers(updated);
            setStatusMessage('User updated');
        } else {
            setUsers([
                ...users,
                {
                    email,
                    password
                }
            ]);
            setStatusMessage('User added');
        }
        clearForm();
        setShowAddForm(false);
    };
    const handleEdit = (index)=>{
        setEmail(users[index].email);
        setPassword(users[index].password);
        setSelectedIndex(index);
        setShowAddForm(true);
    };
    const handleDelete = (index)=>{
        const updated = [
            ...users
        ];
        updated.splice(index, 1);
        setUsers(updated);
        setStatusMessage('User deleted');
        clearForm();
    };
    const clearForm = ()=>{
        setEmail('');
        setPassword('');
        setSelectedIndex(null);
        setValidationErrors({});
    };
    const togglePasswordVisibility = (index)=>{
        setVisiblePasswordIndexes((prev)=>prev.includes(index) ? prev.filter((i)=>i !== index) : [
                ...prev,
                index
            ]);
    };
    const filteredUsers = users.filter((user)=>user.email.toLowerCase().includes(searchTerm.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
        appear: true,
        show: open,
        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
            as: "div",
            className: "relative z-50",
            onClose: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"].Child, {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/30 backdrop-blur-md"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/LoginPopup.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center min-h-full p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                className: "w-full max-w-xl h-[600px] bg-white text-black rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"].Title, {
                                        className: "text-2xl font-bold mb-4 text-left text-black",
                                        children: "Login Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                        lineNumber: 367,
                                        columnNumber: 17
                                    }, this),
                                    !showAddForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col flex-1 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search by email...",
                                                value: searchTerm,
                                                onChange: (e)=>setSearchTerm(e.target.value),
                                                className: "mb-4 px-4 py-2 border rounded-md text-black"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                lineNumber: 373,
                                                columnNumber: 21
                                            }, this),
                                            statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2 text-green-700 font-medium",
                                                children: statusMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                lineNumber: 382,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowAddForm(true),
                                                    className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
                                                    children: "Add New User"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                lineNumber: 385,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 overflow-y-auto border rounded-md",
                                                children: filteredUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center text-gray-500 py-4",
                                                    children: "No users found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-left table-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            className: "bg-gray-100 sticky top-0 z-10 text-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-4 py-2 border-b",
                                                                        children: "Sr No"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                        lineNumber: 401,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-4 py-2 border-b",
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                        lineNumber: 402,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-4 py-2 border-b",
                                                                        children: "Password"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-4 py-2 border-b",
                                                                        children: "Actions"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                        lineNumber: 404,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                lineNumber: 400,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: filteredUsers.map((user, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "hover:bg-gray-50 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-4 py-2 border-b",
                                                                            children: idx + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                            lineNumber: 410,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-4 py-2 border-b",
                                                                            children: user.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                            lineNumber: 411,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-4 py-2 border-b",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: visiblePasswordIndexes.includes(idx) ? user.password : '••••••••'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                                        lineNumber: 414,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>togglePasswordVisibility(idx),
                                                                                        className: "text-blue-600 hover:underline text-xs",
                                                                                        children: visiblePasswordIndexes.includes(idx) ? 'Hide' : 'Show'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                                        lineNumber: 419,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                                lineNumber: 413,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                            lineNumber: 412,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-4 py-2 border-b",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600",
                                                                                        onClick: ()=>handleEdit(idx),
                                                                                        children: "Edit"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                                        lineNumber: 429,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700",
                                                                                        onClick: ()=>handleDelete(idx),
                                                                                        children: "Delete"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                                        lineNumber: 435,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                                lineNumber: 428,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                            lineNumber: 427,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                    lineNumber: 409,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                lineNumber: 394,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                        lineNumber: 372,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex flex-col items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full max-w-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-1",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            value: email,
                                                            onChange: (e)=>{
                                                                setEmail(e.target.value);
                                                                setValidationErrors((prev)=>({
                                                                        ...prev,
                                                                        email: ''
                                                                    }));
                                                            },
                                                            className: `w-full px-3 py-2 border ${validationErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-black`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 25
                                                        }, this),
                                                        validationErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-600 text-sm mt-1",
                                                            children: validationErrors.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-1",
                                                            children: "Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            value: password,
                                                            onChange: (e)=>{
                                                                setPassword(e.target.value);
                                                                setValidationErrors((prev)=>({
                                                                        ...prev,
                                                                        password: ''
                                                                    }));
                                                            },
                                                            className: `w-full px-3 py-2 border ${validationErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-md text-black`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 25
                                                        }, this),
                                                        validationErrors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-600 text-sm mt-1",
                                                            children: validationErrors.password
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleAddOrUpdate,
                                                            className: "bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700",
                                                            children: selectedIndex !== null ? 'Update User' : 'Add User'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                clearForm();
                                                                setShowAddForm(false);
                                                            },
                                                            className: "bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600",
                                                            children: "Cancel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                            lineNumber: 452,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                        lineNumber: 451,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right mt-auto pt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onClose();
                                                clearForm();
                                                setShowAddForm(false);
                                            },
                                            className: "bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600",
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                            lineNumber: 511,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                        lineNumber: 510,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                lineNumber: 366,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/LoginPopup.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/LoginPopup.tsx",
            lineNumber: 342,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/LoginPopup.tsx",
        lineNumber: 341,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/admin/Stocks.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>StocksPopup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/transition/transition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function StocksPopup({ open, onClose }) {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('initial');
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stocks, setStocks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        date: '',
        inward: '',
        outward: ''
    });
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [stockSettledOpen, setStockSettledOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settledCategory, setSettledCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [settledSearchTerm, setSettledSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (stocks.length === 0) {
            setStocks([
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Rose',
                    date: '2025-07-24',
                    inward: 100,
                    outward: 20,
                    category: 'Flowers'
                },
                {
                    name: 'Tulip',
                    date: '2025-07-25',
                    inward: 80,
                    outward: 30,
                    category: 'Flowers'
                },
                {
                    name: 'Apple',
                    date: '2025-07-23',
                    inward: 150,
                    outward: 50,
                    category: 'Fruits'
                },
                {
                    name: 'Banana',
                    date: '2025-07-26',
                    inward: 120,
                    outward: 60,
                    category: 'Fruits'
                },
                {
                    name: 'Carrot',
                    date: '2025-07-22',
                    inward: 90,
                    outward: 40,
                    category: 'Vegetables'
                },
                {
                    name: 'Spinach',
                    date: '2025-07-21',
                    inward: 70,
                    outward: 10,
                    category: 'Vegetables'
                }
            ]);
        }
    }, []);
    const validateForm = ()=>{
        const errors = {};
        if (!form.name.trim()) errors.name = 'Product name is required';
        if (!form.date) errors.date = 'Date is required';
        if (!form.inward || isNaN(Number(form.inward))) errors.inward = 'Inward quantity is required';
        if (!form.outward || isNaN(Number(form.outward))) errors.outward = 'Outward quantity is required';
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) setTimeout(()=>setFormErrors({}), 2000);
        return Object.keys(errors).length === 0;
    };
    const handleAddStock = ()=>{
        if (!validateForm()) return;
        const newStock = {
            name: form.name,
            date: form.date,
            inward: Number(form.inward),
            outward: Number(form.outward),
            category: selectedCategory
        };
        setStocks((prev)=>[
                ...prev,
                newStock
            ]);
        setForm({
            name: '',
            date: '',
            inward: '',
            outward: ''
        });
        setSuccessMessage('Product added successfully');
        setShowAddForm(false);
        setTimeout(()=>setSuccessMessage(''), 2000);
    };
    const filteredStocks = stocks.filter((s)=>s.category === selectedCategory && s.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const settledFilteredStocks = stocks.filter((s)=>s.category === settledCategory && s.name.toLowerCase().includes(settledSearchTerm.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
                appear: true,
                show: open,
                as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                    as: "div",
                    className: "relative z-50",
                    onClose: ()=>{
                        onClose();
                        setView('initial');
                        setSelectedCategory('');
                        setShowAddForm(false);
                        setFormErrors({});
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 bg-black/30 backdrop-blur-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                lineNumber: 1950,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/Stocks.tsx",
                            lineNumber: 1949,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center min-h-full p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                    className: `relative w-full 
    ${view === 'initial' ? 'h-auto max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[35%]' : 'h-[85vh] max-w-[95%] sm:max-w-[90%] md:max-w-3xl lg:max-w-6xl'} 
    bg-white text-black rounded-xl p-6 shadow-2xl flex flex-col`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onClose();
                                                setView('initial');
                                                setSelectedCategory('');
                                                setShowAddForm(false);
                                            },
                                            className: "absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600",
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                            lineNumber: 1969,
                                            columnNumber: 17
                                        }, this),
                                        view === 'initial' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col w-full space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-bold text-indigo-700",
                                                    children: "Select Product Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                    lineNumber: 1984,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row items-center sm:justify-between gap-4 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: selectedCategory,
                                                            onChange: (e)=>setSelectedCategory(e.target.value),
                                                            className: "border px-4 py-2 rounded-md min-w-[180px] w-full sm:w-auto",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select Category"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 1991,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Flowers",
                                                                    children: "Flowers"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 1992,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Fruits",
                                                                    children: "Fruits"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 1993,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Vegetables",
                                                                    children: "Vegetables"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 1994,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 1986,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            disabled: !selectedCategory,
                                                            onClick: ()=>setView('stocks'),
                                                            className: "bg-green-600 md:text-sm xl:text-[2vh] text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400 w-full sm:w-auto",
                                                            children: "Add Stocks"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 1996,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setStockSettledOpen(true);
                                                                setSettledCategory('Flowers');
                                                            },
                                                            className: "bg-blue-600 md:text-sm xl:text-[2vh] text-white  px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto",
                                                            children: "Stock Settled"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 2004,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                    lineNumber: 1985,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                            lineNumber: 1983,
                                            columnNumber: 19
                                        }, this),
                                        view === 'stocks' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-bold text-indigo-700 mb-4",
                                                    children: [
                                                        "Stocks - ",
                                                        selectedCategory
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                    lineNumber: 2020,
                                                    columnNumber: 21
                                                }, this),
                                                showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4",
                                                    children: [
                                                        {
                                                            label: 'Product Name',
                                                            name: 'name',
                                                            type: 'text'
                                                        },
                                                        {
                                                            label: 'Date',
                                                            name: 'date',
                                                            type: 'date'
                                                        },
                                                        {
                                                            label: 'Inward Quantity',
                                                            name: 'inward',
                                                            type: 'number'
                                                        },
                                                        {
                                                            label: 'Outward Quantity',
                                                            name: 'outward',
                                                            type: 'number'
                                                        }
                                                    ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium",
                                                                    children: field.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 2032,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: field.type,
                                                                    value: form[field.name],
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            [field.name]: e.target.value
                                                                        }),
                                                                    className: `w-full border px-3 py-1 rounded text-sm ${formErrors[field.name] ? 'border-red-500' : ''}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 2033,
                                                                    columnNumber: 29
                                                                }, this),
                                                                formErrors[field.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-red-500 text-xs mt-1",
                                                                    children: formErrors[field.name]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 2044,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, field.name, true, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 2031,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                    lineNumber: 2024,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-600 text-sm",
                                                            children: successMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 2055,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: showAddForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: handleAddStock,
                                                                        className: "bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700",
                                                                        children: "Add"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                        lineNumber: 2059,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setShowAddForm(false);
                                                                            setFormErrors({});
                                                                        },
                                                                        className: "bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                        lineNumber: 2065,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                lineNumber: 2058,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setShowAddForm(true),
                                                                className: "bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700",
                                                                children: "Add a Product"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                lineNumber: 2076,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 2056,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                    lineNumber: 2054,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: searchTerm,
                                                    onChange: (e)=>setSearchTerm(e.target.value),
                                                    placeholder: "Search product...",
                                                    className: "mb-2 px-4 py-2 border rounded-md w-full text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                    lineNumber: 2087,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 overflow-y-auto border rounded-md hide-scrollbar",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "min-w-full text-sm table-fixed",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-gray-200 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 border w-[5%]",
                                                                            children: "S.No"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                            lineNumber: 2100,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 border w-[20%]",
                                                                            children: "Product"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                            lineNumber: 2101,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 border w-[20%]",
                                                                            children: "Date"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                            lineNumber: 2102,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 border w-[15%]",
                                                                            children: "Inward"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                            lineNumber: 2103,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 border w-[15%]",
                                                                            children: "Outward"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                            lineNumber: 2104,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 border w-[15%]",
                                                                            children: "Available"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                            lineNumber: 2105,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 2099,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                lineNumber: 2098,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: filteredStocks.length > 0 ? filteredStocks.map((stock, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 border",
                                                                                children: idx + 1
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                                lineNumber: 2112,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 border",
                                                                                children: stock.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                                lineNumber: 2113,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 border",
                                                                                children: stock.date
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                                lineNumber: 2114,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 border",
                                                                                children: stock.inward
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                                lineNumber: 2115,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 border",
                                                                                children: stock.outward
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                                lineNumber: 2116,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 border",
                                                                                children: stock.inward - stock.outward
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                                lineNumber: 2117,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                        lineNumber: 2111,
                                                                        columnNumber: 31
                                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 6,
                                                                        className: "text-center py-4 text-gray-500",
                                                                        children: [
                                                                            "No stock found for ",
                                                                            selectedCategory
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                        lineNumber: 2124,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 2123,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                lineNumber: 2108,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                        lineNumber: 2097,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                    lineNumber: 2096,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                    lineNumber: 1960,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                lineNumber: 1953,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/Stocks.tsx",
                            lineNumber: 1952,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/Stocks.tsx",
                    lineNumber: 1938,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/Stocks.tsx",
                lineNumber: 1937,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
                appear: true,
                show: stockSettledOpen,
                as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                    as: "div",
                    className: "relative z-50",
                    onClose: ()=>setStockSettledOpen(false),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 bg-black/30 backdrop-blur-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                lineNumber: 2148,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/Stocks.tsx",
                            lineNumber: 2147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center min-h-full p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                    className: "relative w-full max-w-5xl bg-white text-black rounded-xl p-6 shadow-2xl h-[85vh] flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setStockSettledOpen(false),
                                            className: "absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-600",
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                            lineNumber: 2153,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-indigo-700 mb-4",
                                            children: "Settled Stocks Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                            lineNumber: 2159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: settledCategory,
                                                    onChange: (e)=>setSettledCategory(e.target.value),
                                                    className: "border px-4 py-2 rounded-md min-w-[180px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 2167,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Flowers",
                                                            children: "Flowers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 2168,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Fruits",
                                                            children: "Fruits"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 2169,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Vegetables",
                                                            children: "Vegetables"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 2170,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                    lineNumber: 2162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: settledSearchTerm,
                                                    onChange: (e)=>setSettledSearchTerm(e.target.value),
                                                    placeholder: "Search product...",
                                                    className: "w-full px-4 py-2 border rounded-md text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                    lineNumber: 2172,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                            lineNumber: 2161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-auto border rounded-md flex-1 text-sm hide-scrollbar",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "min-w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-gray-200 sticky top-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 border text-left",
                                                                    children: "S.No"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 2185,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 border text-left",
                                                                    children: "Seller Code"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 2186,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 border text-left",
                                                                    children: "Product Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 2187,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 border text-left",
                                                                    children: "Calender"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 2188,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 border text-left",
                                                                    children: "Stock Added"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 2189,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-4 py-2 border text-left",
                                                                    children: "Stock Remaining"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                    lineNumber: 2190,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 2184,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                        lineNumber: 2183,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: settledFilteredStocks.length > 0 ? settledFilteredStocks.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 border",
                                                                        children: i + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                        lineNumber: 2196,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 border",
                                                                        children: s.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                        lineNumber: 2197,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 border",
                                                                        children: s.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                        lineNumber: 2198,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 border",
                                                                        children: s.date
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                        lineNumber: 2199,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 border"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                        lineNumber: 2200,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-4 py-2 border",
                                                                        children: s.inward - s.outward
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                        lineNumber: 2201,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                lineNumber: 2195,
                                                                columnNumber: 25
                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 5,
                                                                className: "text-center py-4 text-gray-500",
                                                                children: "No stock found"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                                lineNumber: 2205,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                                            lineNumber: 2204,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/Stocks.tsx",
                                                        lineNumber: 2193,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                                lineNumber: 2182,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/Stocks.tsx",
                                            lineNumber: 2181,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/Stocks.tsx",
                                    lineNumber: 2152,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/Stocks.tsx",
                                lineNumber: 2151,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/Stocks.tsx",
                            lineNumber: 2150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/Stocks.tsx",
                    lineNumber: 2146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/Stocks.tsx",
                lineNumber: 2145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/admin/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 'use client';
// import { useState } from 'react';
// import CustomerPopup, { CustomerData } from './CustomerPopup';
// import LoginPopup, { LoginUser } from './LoginPopup';
// const popups = [
//   'Stocks',
//   'Orders Summary',
//   'Customer Profile Management',
//   'User Logins ', // This will be Login
//   'Site Analytics',
//   'System Logs',
// ];
// export default function AdminPage() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [database, setDatabase] = useState<CustomerData[]>([
//     {
//       name: 'Alice Smith',
//       id: '123',
//       crNumber: 'CR-001',
//       vatNumber: 'VAT-111',
//       buildingNumber: 'A1',
//       postalCode: '560001',
//       district: 'Bangalore South',
//       managedBy: 'Riyadh',
//     },
//     {
//       name: 'Aamir Khan',
//       id: '789',
//       crNumber: 'CR-003',
//       vatNumber: 'VAT-333',
//       buildingNumber: 'C3',
//       postalCode: '600001',
//       district: 'Chennai North',
//       managedBy: 'Hafar Al Batin',
//     },
//     {
//       name: 'Bob Johnson',
//       id: '456',
//       crNumber: 'CR-002',
//       vatNumber: 'VAT-222',
//       buildingNumber: 'B2',
//       postalCode: '400011',
//       district: 'Mumbai Central',
//       managedBy: 'Riyadh',
//     },
//   ]);
//   const [users, setUsers] = useState<LoginUser[]>([]);
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-black flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-6xl mx-auto text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-10 text-indigo-800">
//           Admin Dashboard
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {popups.map((title, index) => (
//             <button
//               key={index}
//               className="bg-indigo-600 text-white font-medium py-4 px-6 rounded-xl shadow-lg hover:bg-indigo-700 transition-all"
//               onClick={() => setOpenIndex(index)}
//             >
//               {title}
//             </button>
//           ))}
//         </div>
//         {/* Show CustomerPopup for everything except index 3 */}
//         {openIndex !== null && openIndex !== 3 && (
//           <CustomerPopup
//             open={true}
//             onClose={() => setOpenIndex(null)}
//             popups={popups}
//             index={openIndex}
//             database={database}
//             setDatabase={setDatabase}
//           />
//         )}
//         {/* Show LoginPopup on 4th button */}
//         {openIndex === 3 && (
//           <LoginPopup
//             open={true}
//             onClose={() => setOpenIndex(null)}
//             users={users}
//             setUsers={setUsers}
//           />
//         )}
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>AdminPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$CustomerPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/CustomerPopup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$LoginPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/LoginPopup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$Stocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/Stocks.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const popups = [
    'Stocks',
    'Orders Summary',
    'Customer Profile Management',
    'User Logins',
    'Site Analytics',
    'System Logs'
];
function AdminPage() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showStocksPopup, setShowStocksPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [database, setDatabase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            name: 'Alice Smith',
            id: '123',
            crNumber: 'CR-001',
            vatNumber: 'VAT-111',
            buildingNumber: 'A1',
            postalCode: '560001',
            district: 'Bangalore South',
            managedBy: 'Riyadh'
        },
        {
            name: 'Aamir Khan',
            id: '789',
            crNumber: 'CR-003',
            vatNumber: 'VAT-333',
            buildingNumber: 'C3',
            postalCode: '600001',
            district: 'Chennai North',
            managedBy: 'Hafar Al Batin'
        },
        {
            name: 'Bob Johnson',
            id: '456',
            crNumber: 'CR-002',
            vatNumber: 'VAT-222',
            buildingNumber: 'B2',
            postalCode: '400011',
            district: 'Mumbai Central',
            managedBy: 'Riyadh'
        }
    ]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            email: 'admin@example.com',
            password: 'password123'
        },
        {
            email: 'manager@example.com',
            password: 'secure456'
        }
    ]);
    const handlePopupOpen = (index)=>{
        if (index === 0) {
            setShowStocksPopup(true);
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-black flex items-center justify-center px-4 py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-6xl mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-5xl font-bold mb-10 text-indigo-800 text-left",
                    children: "Admin Dashboard"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                    children: popups.map((title, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-indigo-600 text-white font-medium py-4 px-6 rounded-xl shadow-lg hover:bg-indigo-700 transition-all",
                            onClick: ()=>handlePopupOpen(index),
                            children: title
                        }, index, false, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this),
                openIndex !== null && openIndex !== 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$CustomerPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    open: true,
                    onClose: ()=>setOpenIndex(null),
                    popups: popups,
                    index: openIndex,
                    database: database,
                    setDatabase: setDatabase
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 196,
                    columnNumber: 11
                }, this),
                openIndex === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$LoginPopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    open: true,
                    onClose: ()=>setOpenIndex(null),
                    users: users,
                    setUsers: setUsers
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this),
                showStocksPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$Stocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    open: showStocksPopup,
                    onClose: ()=>setShowStocksPopup(false)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 218,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 177,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_admin_a6142078._.js.map