(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/admin/CustomerPopup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CustomerPopup({ open, onClose, popups, index, database, setDatabase }) {
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Riyadh');
    const [customerData, setCustomerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAddingNew, setIsAddingNew] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasSelectedCustomer, setHasSelectedCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerPopup.useEffect": ()=>{
            if (statusMessage) {
                const timer = setTimeout({
                    "CustomerPopup.useEffect.timer": ()=>setStatusMessage('')
                }["CustomerPopup.useEffect.timer"], 2000);
                return ({
                    "CustomerPopup.useEffect": ()=>clearTimeout(timer)
                })["CustomerPopup.useEffect"];
            }
        }
    }["CustomerPopup.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
        appear: true,
        show: open,
        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            as: "div",
            className: "relative z-50",
            onClose: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center min-h-full p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                className: "w-full max-w-5xl bg-white text-black rounded-2xl p-8 shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Title, {
                                        className: "text-2xl font-bold mb-6 text-indigo-700",
                                        children: popups[index]
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                        lineNumber: 500,
                                        columnNumber: 17
                                    }, this),
                                    index === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Managed By:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedLocation,
                                                        onChange: (e)=>{
                                                            setSelectedLocation(e.target.value);
                                                            setSearchTerm('');
                                                            clearForm();
                                                        },
                                                        className: "w-full border px-3 py-2 rounded-md",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Riyadh",
                                                                children: "Riyadh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                            !isAddingNew && !hasSelectedCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block mb-1 font-medium text-sm",
                                                        children: "Search Customer:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                    filteredUsers.length > 0 && !customerData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "absolute bg-white border w-full mt-1 rounded-md shadow z-10 max-h-52 overflow-y-auto",
                                                        children: filteredUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                                            !isAddingNew && !hasSelectedCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            customerData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",
                                                children: Object.keys(customerData).map((key)=>{
                                                    if (key === 'managedBy') return null;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block mb-1 font-medium capitalize text-sm",
                                                                children: key.replace(/([A-Z])/g, ' $1')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: customerData[key],
                                                                onChange: (e)=>handleInputChange(key, e.target.value),
                                                                className: `w-full border px-3 py-2 rounded-md ${validationErrors[key] ? 'border-red-500' : 'border-gray-300'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                                lineNumber: 586,
                                                                columnNumber: 31
                                                            }, this),
                                                            validationErrors[key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                            statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 text-green-600 font-medium",
                                                children: statusMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                lineNumber: 608,
                                                columnNumber: 23
                                            }, this),
                                            customerData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: selectedIndex !== null ? handleUpdate : handleAdd,
                                                        className: "bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700",
                                                        children: selectedIndex !== null ? 'Update' : 'Add'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 25
                                                    }, this),
                                                    selectedIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleDelete,
                                                        className: "bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/CustomerPopup.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(CustomerPopup, "Z+AgJSXqiEUCZuwTl05Z2whfkRU=");
_c = CustomerPopup;
var _c;
__turbopack_context__.k.register(_c, "CustomerPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/LoginPopup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LoginPopup({ open, onClose, users, setUsers }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visiblePasswordIndexes, setVisiblePasswordIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginPopup.useEffect": ()=>{
            if (statusMessage) {
                const timer = setTimeout({
                    "LoginPopup.useEffect.timer": ()=>setStatusMessage('')
                }["LoginPopup.useEffect.timer"], 2000);
                return ({
                    "LoginPopup.useEffect": ()=>clearTimeout(timer)
                })["LoginPopup.useEffect"];
            }
        }
    }["LoginPopup.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
        appear: true,
        show: open,
        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            as: "div",
            className: "relative z-50",
            onClose: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center min-h-full p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                className: "w-full max-w-xl h-[600px] bg-white text-black rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Title, {
                                        className: "text-2xl font-bold mb-4 text-left text-black",
                                        children: "Login Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                        lineNumber: 367,
                                        columnNumber: 17
                                    }, this),
                                    !showAddForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col flex-1 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2 text-green-700 font-medium",
                                                children: statusMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                lineNumber: 382,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 overflow-y-auto border rounded-md",
                                                children: filteredUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-center text-gray-500 py-4",
                                                    children: "No users found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-left table-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            className: "bg-gray-100 sticky top-0 z-10 text-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-4 py-2 border-b",
                                                                        children: "Sr No"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                        lineNumber: 401,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-4 py-2 border-b",
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                        lineNumber: 402,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-4 py-2 border-b",
                                                                        children: "Password"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: filteredUsers.map((user, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "hover:bg-gray-50 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-4 py-2 border-b",
                                                                            children: idx + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                            lineNumber: 410,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-4 py-2 border-b",
                                                                            children: user.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                            lineNumber: 411,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-4 py-2 border-b",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: visiblePasswordIndexes.includes(idx) ? user.password : '••••••••'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                                        lineNumber: 414,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "px-4 py-2 border-b",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600",
                                                                                        onClick: ()=>handleEdit(idx),
                                                                                        children: "Edit"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                                                        lineNumber: 429,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex flex-col items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full max-w-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-1",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        validationErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium mb-1",
                                                            children: "Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        validationErrors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleAddOrUpdate,
                                                            className: "bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700",
                                                            children: selectedIndex !== null ? 'Update User' : 'Add User'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/LoginPopup.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right mt-auto pt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(LoginPopup, "y2hvigbzuogbnBopC/xwM1b2NW4=");
_c = LoginPopup;
var _c;
__turbopack_context__.k.register(_c, "LoginPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$CustomerPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/CustomerPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$LoginPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/LoginPopup.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './StocksPopup'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showStocksPopup, setShowStocksPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [database, setDatabase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
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
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-black flex items-center justify-center px-4 py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-6xl mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-5xl font-bold mb-10 text-indigo-800 text-left",
                    children: "Admin Dashboard"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                    children: popups.map((title, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                openIndex !== null && openIndex !== 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$CustomerPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                openIndex === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$LoginPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    open: true,
                    onClose: ()=>setOpenIndex(null),
                    users: users,
                    setUsers: setUsers
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this),
                showStocksPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StocksPopup, {
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
_s(AdminPage, "kE3xgKU3vW8Z5kgXT2OYr6L/u2Q=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_admin_c2c0586d._.js.map