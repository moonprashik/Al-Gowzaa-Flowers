

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



'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

export interface LoginUser {
  email: string;
  password: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  users: LoginUser[];
  setUsers: React.Dispatch<React.SetStateAction<LoginUser[]>>;
}

export default function LoginPopup({ open, onClose, users, setUsers }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [visiblePasswordIndexes, setVisiblePasswordIndexes] = useState<number[]>([]);
  const [validationErrors, setValidationErrors] = useState<{ email?: string; password?: string }>({});

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const handleAddOrUpdate = () => {
    const errors: { email?: string; password?: string } = {};
    if (!email.trim()) errors.email = 'Email is required';
    if (!password.trim()) errors.password = 'Password is required';
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) return;

    if (selectedIndex !== null) {
      const updated = [...users];
      updated[selectedIndex] = { email, password };
      setUsers(updated);
      setStatusMessage('User updated');
    } else {
      setUsers([...users, { email, password }]);
      setStatusMessage('User added');
    }

    clearForm();
    setShowAddForm(false);
  };

  const handleEdit = (index: number) => {
    setEmail(users[index].email);
    setPassword(users[index].password);
    setSelectedIndex(index);
    setShowAddForm(true);
  };

  const handleDelete = (index: number) => {
    const updated = [...users];
    updated.splice(index, 1);
    setUsers(updated);
    setStatusMessage('User deleted');
    clearForm();
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setSelectedIndex(null);
    setValidationErrors({});
  };

  const togglePasswordVisibility = (index: number) => {
    setVisiblePasswordIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <Dialog.Panel className="w-full max-w-xl h-[600px] bg-white text-black rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col">
                <Dialog.Title className="text-2xl font-bold mb-4 text-left text-black">
                  Login Management
                </Dialog.Title>

                {!showAddForm ? (
                  <div className="flex flex-col flex-1 overflow-hidden">
                    <input
                      type="text"
                      placeholder="Search by email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="mb-4 px-4 py-2 border rounded-md text-black"
                    />

                    {statusMessage && (
                      <div className="mb-2 text-green-700 font-medium">{statusMessage}</div>
                    )}

                    <div className="text-right mb-4">
                      <button
                        onClick={() => setShowAddForm(true)}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                      >
                        Add New User
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto border rounded-md">
                      {filteredUsers.length === 0 ? (
                        <p className="text-center text-gray-500 py-4">No users found</p>
                      ) : (
                        <table className="w-full text-left table-auto">
                          <thead className="bg-gray-100 sticky top-0 z-10 text-sm">
                            <tr>
                              <th className="px-4 py-2 border-b">Sr No</th>
                              <th className="px-4 py-2 border-b">Email</th>
                              <th className="px-4 py-2 border-b">Password</th>
                              <th className="px-4 py-2 border-b">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredUsers.map((user, idx) => (
                              <tr key={idx} className="hover:bg-gray-50 text-sm">
                                <td className="px-4 py-2 border-b">{idx + 1}</td>
                                <td className="px-4 py-2 border-b">{user.email}</td>
                                <td className="px-4 py-2 border-b">
                                  <div className="flex items-center gap-2">
                                    <span>
                                      {visiblePasswordIndexes.includes(idx)
                                        ? user.password
                                        : '••••••••'}
                                    </span>
                                    <button
                                      onClick={() => togglePasswordVisibility(idx)}
                                      className="text-blue-600 hover:underline text-xs"
                                    >
                                      {visiblePasswordIndexes.includes(idx) ? 'Hide' : 'Show'}
                                    </button>
                                  </div>
                                </td>
                                <td className="px-4 py-2 border-b">
                                  <div className="flex gap-2">
                                    <button
                                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                      onClick={() => handleEdit(idx)}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                      onClick={() => handleDelete(idx)}
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-full max-w-sm">
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setValidationErrors((prev) => ({ ...prev, email: '' }));
                          }}
                          className={`w-full px-3 py-2 border ${
                            validationErrors.email ? 'border-red-500' : 'border-gray-300'
                          } rounded-md text-black`}
                        />
                        {validationErrors.email && (
                          <p className="text-red-600 text-sm mt-1">{validationErrors.email}</p>
                        )}
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setValidationErrors((prev) => ({ ...prev, password: '' }));
                          }}
                          className={`w-full px-3 py-2 border ${
                            validationErrors.password ? 'border-red-500' : 'border-gray-300'
                          } rounded-md text-black`}
                        />
                        {validationErrors.password && (
                          <p className="text-red-600 text-sm mt-1">{validationErrors.password}</p>
                        )}
                      </div>

                      <div className="flex justify-center gap-4">
                        <button
                          onClick={handleAddOrUpdate}
                          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
                        >
                          {selectedIndex !== null ? 'Update User' : 'Add User'}
                        </button>
                        <button
                          onClick={() => {
                            clearForm();
                            setShowAddForm(false);
                          }}
                          className="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-right mt-auto pt-4">
                  <button
                    onClick={() => {
                      onClose();
                      clearForm();
                      setShowAddForm(false);
                    }}
                    className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
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
