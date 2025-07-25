

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

'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

export interface CustomerData {
  name: string;
  id: string;
  crNumber: string;
  vatNumber: string;
  buildingNumber: string;
  postalCode: string;
  district: string;
  managedBy: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  popups: string[];
  index: number;
  database: CustomerData[];
  setDatabase: React.Dispatch<React.SetStateAction<CustomerData[]>>;
}

export default function CustomerPopup({
  open,
  onClose,
  popups,
  index,
  database,
  setDatabase,
}: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Riyadh');
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [hasSelectedCustomer, setHasSelectedCustomer] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof CustomerData, string>>>({});
  const [statusMessage, setStatusMessage] = useState<string>('');

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const filteredUsers = searchTerm.trim()
    ? database.filter(
        (user) =>
          user.managedBy === selectedLocation &&
          user.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
      )
    : [];

  const handleInputChange = (field: keyof CustomerData, value: string) => {
    if (!customerData) return;
    setCustomerData({ ...customerData, [field]: value });
    setValidationErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleCustomerSelect = (id: string) => {
    const index = database.findIndex((u) => u.id === id);
    if (index !== -1) {
      setSelectedIndex(index);
      setCustomerData(database[index]);
      setSearchTerm(database[index].name);
      setHasSelectedCustomer(true);
      setStatusMessage('');
    }
  };

  const handleUpdate = () => {
    if (selectedIndex === null || !customerData) return;
    if (!validateCustomer(customerData)) return;
    const updated = [...database];
    updated[selectedIndex] = customerData;
    setDatabase(updated);
    setStatusMessage('Customer data updated successfully.');
    clearForm();
  };

  const handleAdd = () => {
    if (!customerData) return;
    if (!validateCustomer(customerData)) return;

    const newCustomer: CustomerData = {
      ...customerData,
      managedBy: selectedLocation,
    };

    setDatabase([...database, newCustomer]);
    setStatusMessage('Customer added successfully.');
    clearForm();
  };

  const handleDelete = () => {
    if (selectedIndex === null) return;
    const updated = [...database];
    updated.splice(selectedIndex, 1);
    setDatabase(updated);
    setStatusMessage('Customer deleted successfully.');
    clearForm();
  };

  const validateCustomer = (data: CustomerData) => {
    const requiredFields: (keyof CustomerData)[] = [
      'name',
      'id',
      'crNumber',
      'vatNumber',
      'buildingNumber',
      'postalCode',
      'district',
    ];

    const errors: Partial<Record<keyof CustomerData, string>> = {};
    for (const field of requiredFields) {
      if (!data[field]?.trim()) {
        errors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearForm = () => {
    setSelectedIndex(null);
    setCustomerData(null);
    setSearchTerm('');
    setIsAddingNew(false);
    setHasSelectedCustomer(false);
    setValidationErrors({});
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-md" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl bg-white text-black rounded-2xl p-8 shadow-2xl">
                <Dialog.Title className="text-2xl font-bold mb-6 text-indigo-700">
                  {popups[index]}
                </Dialog.Title>

                {index === 2 ? (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Managed By:</label>
                      <select
                        value={selectedLocation}
                        onChange={(e) => {
                          setSelectedLocation(e.target.value);
                          setSearchTerm('');
                          clearForm();
                        }}
                        className="w-full border px-3 py-2 rounded-md"
                      >
                        <option value="Riyadh">Riyadh</option>
                        <option value="Hafar Al Batin">Hafar Al Batin</option>
                      </select>
                    </div>

                    {!isAddingNew && !hasSelectedCustomer && (
                      <div className="relative mb-6">
                        <label className="block mb-1 font-medium text-sm">Search Customer:</label>
                        <input
                          type="text"
                          placeholder="Start typing name..."
                          value={searchTerm}
                          onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCustomerData(null);
                            setSelectedIndex(null);
                            setStatusMessage('');
                          }}
                          className="w-full border border-gray-300 px-3 py-2 rounded-md"
                        />

                        {filteredUsers.length > 0 && !customerData && (
                          <ul className="absolute bg-white border w-full mt-1 rounded-md shadow z-10 max-h-52 overflow-y-auto">
                            {filteredUsers.map((user) => (
                              <li
                                key={user.id}
                                className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                                onClick={() => handleCustomerSelect(user.id)}
                              >
                                {user.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {!isAddingNew && !hasSelectedCustomer && (
                      <button
                        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        onClick={() => {
                          setCustomerData({
                            name: '',
                            id: '',
                            crNumber: '',
                            vatNumber: '',
                            buildingNumber: '',
                            postalCode: '',
                            district: '',
                            managedBy: selectedLocation,
                          });
                          setSelectedIndex(null);
                          setIsAddingNew(true);
                          setStatusMessage('');
                        }}
                      >
                        Add Customer
                      </button>
                    )}

                    {customerData && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {(Object.keys(customerData) as (keyof CustomerData)[]).map((key) => {
                          if (key === 'managedBy') return null;
                          return (
                            <div key={key}>
                              <label className="block mb-1 font-medium capitalize text-sm">
                                {key.replace(/([A-Z])/g, ' $1')}
                              </label>
                              <input
                                type="text"
                                value={customerData[key]}
                                onChange={(e) =>
                                  handleInputChange(key, e.target.value)
                                }
                                className={`w-full border px-3 py-2 rounded-md ${
                                  validationErrors[key] ? 'border-red-500' : 'border-gray-300'
                                }`}
                              />
                              {validationErrors[key] && (
                                <p className="text-red-500 text-sm mt-1">
                                  {validationErrors[key]}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {statusMessage && (
                      <div className="mb-4 text-green-600 font-medium">
                        {statusMessage}
                      </div>
                    )}

                    {customerData && (
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={selectedIndex !== null ? handleUpdate : handleAdd}
                          className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
                        >
                          {selectedIndex !== null ? 'Update' : 'Add'}
                        </button>

                        {selectedIndex !== null && (
                          <button
                            onClick={handleDelete}
                            className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700"
                          >
                            Delete
                          </button>
                        )}

                        <button
                          onClick={clearForm}
                          className="bg-gray-500 text-white px-5 py-2 rounded-md hover:bg-gray-600"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center text-gray-700">
                    <p className="text-base">Coming soon: {popups[index]} details.</p>
                  </div>
                )}

                <div className="mt-8 text-right">
                  <button
                    className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600"
                    onClick={() => {
                      onClose();
                      clearForm();
                      setStatusMessage('');
                    }}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
