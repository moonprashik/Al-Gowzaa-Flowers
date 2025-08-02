



// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment, useState } from 'react';
// import { Download } from 'lucide-react';

// interface CustomerData {
//   sNo: number;
//   location: string;
//   username: string;
//   date: string;
//   customer: string;
//   invoiceNo: string;
//   vatAmount: number;
//   totalAmount: number;
//   totalTransaction: number;
//   lastTransaction: number;
//   currentBalance: number;
//   managedBy: string;
// }

// interface CustomerDetailProps {
//   open: boolean;
//   onClose: () => void;
//   customers: CustomerData[];
// }

// export default function CustomerDetailPopup({ open, onClose, customers }: CustomerDetailProps) {
//   const [selectedCustomer, setSelectedCustomer] = useState<CustomerData | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [search, setSearch] = useState('');
//   const rowsPerPage = 8;

//   const handleCustomerClick = (customer: CustomerData) => {
//     setSelectedCustomer(customer);
//   };

//   const filteredCustomers = customers.filter((c) =>
//     c.customer.toLowerCase().includes(search.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredCustomers.length / rowsPerPage);
//   const paginatedCustomers = filteredCustomers.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   return (
//     <Transition.Root show={open} as={Fragment}>
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
//           <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <Dialog.Panel className="relative w-full max-w-7xl h-[90vh] bg-white rounded-xl shadow-xl flex flex-col p-4 overflow-hidden">
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
//                 <Dialog.Title className="text-xl sm:text-2xl font-bold text-black">
//                   {selectedCustomer ? 'Customer Details' : 'Sales Database'}
//                 </Dialog.Title>
//                 <button
//                   onClick={onClose}
//                   className="text-sm px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
//                 >
//                   Close
//                 </button>
//               </div>

//               {!selectedCustomer ? (
//                 <>
//                   {/* Search Field */}
//                   <div className="mb-4">
//                     <input
//                       type="text"
//                       placeholder="Search by customer name..."
//                       value={search}
//                       onChange={(e) => {
//                         setSearch(e.target.value);
//                         setCurrentPage(1);
//                       }}
//                       className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
//                     />
//                   </div>

//                   {/* Table Section */}
//                   <div className="flex-1 overflow-auto border rounded-lg">
//                     <table className="min-w-full text-sm text-black">
//                       <thead className="bg-gray-100 sticky top-0 shadow text-black">
//                         <tr>
//                           <th className="px-4 py-3 text-left">S.No</th>
//                           <th className="px-4 py-3 text-left">Location</th>
//                           <th className="px-4 py-3 text-left">Username</th>
//                           <th className="px-4 py-3 text-left">Date</th>
//                           <th className="px-4 py-3 text-left">Customer</th>
//                           <th className="px-4 py-3 text-left">Invoice No</th>
//                           <th className="px-4 py-3 text-left">VAT Amount</th>
//                           <th className="px-4 py-3 text-left">Total Amount</th>
//                           <th className="px-4 py-3 text-center">Download</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {paginatedCustomers.map((cust, idx) => (
//                           <tr
//                             key={idx}
//                             className="hover:bg-gray-100 border-t cursor-pointer"
//                             onClick={() => handleCustomerClick(cust)}
//                           >
//                             <td className="px-4 py-2">{cust.sNo}</td>
//                             <td className="px-4 py-2">{cust.location}</td>
//                             <td className="px-4 py-2">{cust.username}</td>
//                             <td className="px-4 py-2">{cust.date}</td>
//                             <td className="px-4 py-2 text-blue-600 hover:underline">{cust.customer}</td>
//                             <td className="px-4 py-2">{cust.invoiceNo}</td>
//                             <td className="px-4 py-2">SAR {cust.vatAmount.toFixed(2)}</td>
//                             <td className="px-4 py-2">SAR {cust.totalAmount.toFixed(2)}</td>
//                             <td className="px-4 py-2 text-center">
//                               <Download className="w-5 h-5 text-gray-500 hover:text-black mx-auto" />
//                             </td>
//                           </tr>
//                         ))}
//                         {paginatedCustomers.length === 0 && (
//                           <tr>
//                             <td colSpan={9} className="text-center py-6 text-gray-400">
//                               No customers found.
//                             </td>
//                           </tr>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>

//                   {/* Pagination Controls */}
//                   <div className="flex justify-between items-center mt-4">
//                     <span className="text-sm text-black">
//                       Page {currentPage} of {totalPages}
//                     </span>
//                     <div className="space-x-2">
//                       <button
//                         onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//                         disabled={currentPage === 1}
//                         className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
//                       >
//                         Prev
//                       </button>
//                       <button
//                         onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//                         disabled={currentPage === totalPages}
//                         className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
//                       >
//                         Next
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   {/* Selected Customer Details */}
//     <>
//   {/* Detailed View - Split Layout */}
//   <>
//   {/* Two Halves Layout */}
//   <div className="flex flex-col lg:flex-row h-full gap-6">
//     {/* Left: Customer Data Table */}
//     <div className="w-full lg:w-1/2 bg-white overflow-auto rounded-lg border shadow">
//       <table className="w-full text-sm text-black">
//         <tbody className="divide-y divide-gray-200">
//           <tr>
//             <td className="p-3 font-medium">S.No</td>
//             <td className="p-3">{selectedCustomer.sNo}</td>
//           </tr>
//           <tr>
//             <td className="p-3 font-medium">Location</td>
//             <td className="p-3">{selectedCustomer.location}</td>
//           </tr>
//           <tr>
//             <td className="p-3 font-medium">Username</td>
//             <td className="p-3">{selectedCustomer.username}</td>
//           </tr>
//           <tr>
//             <td className="p-3 font-medium">Date</td>
//             <td className="p-3">{selectedCustomer.date}</td>
//           </tr>
//           <tr>
//             <td className="p-3 font-medium">Customer</td>
//             <td className="p-3">{selectedCustomer.customer}</td>
//           </tr>
//           <tr>
//             <td className="p-3 font-medium">Invoice No</td>
//             <td className="p-3">{selectedCustomer.invoiceNo}</td>
//           </tr>
//           <tr>
//             <td className="p-3 font-medium">VAT Amount</td>
//             <td className="p-3">SAR {selectedCustomer.vatAmount.toFixed(2)}</td>
//           </tr>
//           <tr>
//             <td className="p-3 font-medium">Total Amount</td>
//             <td className="p-3">SAR {selectedCustomer.totalAmount.toFixed(2)}</td>
//           </tr>
//           <tr>
//             <td className="p-3 font-medium">Managed By</td>
//             <td className="p-3">{selectedCustomer.managedBy}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>

//     {/* Right: Transaction Cards */}
//     <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
//       <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg shadow">
//         <h4 className="text-sm font-semibold text-green-700">Total Transaction</h4>
//         <p className="text-xl font-bold text-green-800 mt-1">
//           SAR {selectedCustomer.totalTransaction.toFixed(2)}
//         </p>
//       </div>

//       <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow">
//         <h4 className="text-sm font-semibold text-yellow-700">Last Transaction</h4>
//         <p className="text-xl font-bold text-yellow-800 mt-1">
//           SAR {selectedCustomer.lastTransaction.toFixed(2)}
//         </p>
//       </div>

//       <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-lg shadow">
//         <h4 className="text-sm font-semibold text-blue-700">Current Balance</h4>
//         <p className="text-xl font-bold text-blue-800 mt-1">
//           SAR {selectedCustomer.currentBalance.toFixed(2)}
//         </p>
//       </div>
//     </div>
//   </div>

//   {/* Back Button */}
//   <div className="mt-6 flex justify-start">
//     <button
//       onClick={() => setSelectedCustomer(null)}
//       className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//     >
//       ← Back to List
//     </button>
//   </div>
// </>

// </>


              
//                 </>
//               )}
//             </Dialog.Panel>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }












import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Download } from 'lucide-react';

interface CustomerData {
  sNo: number;
  location: string;
  username: string;
  date: string;
  customer: string;
  invoiceNo: string;
  vatAmount: number;
  totalAmount: number;
  totalTransaction: number;
  lastTransaction: number;
  currentBalance: number;
  managedBy: string;
}

interface CustomerDetailProps {
  open: boolean;
  onClose: () => void;
  customers: CustomerData[];
}

export default function CustomerDetailPopup({ open, onClose, customers }: CustomerDetailProps) {
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const rowsPerPage = 8;

  const handleCustomerClick = (customer: CustomerData) => {
    setSelectedCustomer(customer);
  };

  const filteredCustomers = customers.filter((c) =>
    c.customer.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / rowsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <Transition.Root show={open} as={Fragment}>
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
          <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative w-full max-w-7xl h-[90vh] bg-white rounded-xl shadow-xl flex flex-col p-4 overflow-hidden">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                <Dialog.Title className="text-xl sm:text-2xl font-bold text-black">
                  {selectedCustomer ? 'Customer Details' : 'Sales Database'}
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className="text-sm px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Close
                </button>
              </div>

              {!selectedCustomer ? (
                <>
                  {/* Search Field */}
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Search by customer name..."
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                    />
                  </div>

                  {/* Table Section */}
                  <div className="flex-1 overflow-auto border rounded-lg">
                    <table className="min-w-full text-sm text-black">
                      <thead className="bg-gray-100 sticky top-0 shadow text-black">
                        <tr>
                          <th className="px-4 py-3 text-left">S.No</th>
                          <th className="px-4 py-3 text-left">Location</th>
                          <th className="px-4 py-3 text-left">Username</th>
                          <th className="px-4 py-3 text-left">Date</th>
                          <th className="px-4 py-3 text-left">Customer</th>
                          <th className="px-4 py-3 text-left">Invoice No</th>
                          <th className="px-4 py-3 text-left">VAT Amount</th>
                          <th className="px-4 py-3 text-left">Total Amount</th>
                          <th className="px-4 py-3 text-center">Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedCustomers.map((cust, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-gray-100 border-t cursor-pointer"
                            onClick={() => handleCustomerClick(cust)}
                          >
                            <td className="px-4 py-2">{cust.sNo}</td>
                            <td className="px-4 py-2">{cust.location}</td>
                            <td className="px-4 py-2">{cust.username}</td>
                            <td className="px-4 py-2">{cust.date}</td>
                            <td className="px-4 py-2 text-blue-600 hover:underline">{cust.customer}</td>
                            <td className="px-4 py-2">{cust.invoiceNo}</td>
                            <td className="px-4 py-2">SAR {cust.vatAmount.toFixed(2)}</td>
                            <td className="px-4 py-2">SAR {cust.totalAmount.toFixed(2)}</td>
                            <td className="px-4 py-2 text-center">
                              <Download className="w-5 h-5 text-gray-500 hover:text-black mx-auto" />
                            </td>
                          </tr>
                        ))}
                        {paginatedCustomers.length === 0 && (
                          <tr>
                            <td colSpan={9} className="text-center py-6 text-gray-400">
                              No customers found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-black">
                      Page {currentPage} of {totalPages}
                    </span>
                    <div className="space-x-2">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                      >
                        Prev
                      </button>
                      <button
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Selected Customer Details */}
    <>
  {/* Detailed View - Split Layout */}
 <>
  <div className="flex flex-col lg:flex-row h-full gap-6">
    {/* LEFT SIDE: CUSTOMER DETAILS TABLE */}
    <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 border shadow overflow-auto">
      <table className="w-full text-sm text-black mb-2">
        <tbody className="divide-y divide-gray-200">
          <tr><td className="p-3 font-medium">S.No</td><td className="p-3">{selectedCustomer.sNo}</td></tr>
          <tr><td className="p-3 font-medium">Location</td><td className="p-3">{selectedCustomer.location}</td></tr>
          <tr><td className="p-3 font-medium">Username</td><td className="p-3">{selectedCustomer.username}</td></tr>
          <tr><td className="p-3 font-medium">Date</td><td className="p-3">{selectedCustomer.date}</td></tr>
          <tr><td className="p-3 font-medium">Customer</td><td className="p-3">{selectedCustomer.customer}</td></tr>
          <tr><td className="p-3 font-medium">Invoice No</td><td className="p-3">{selectedCustomer.invoiceNo}</td></tr>
          <tr><td className="p-3 font-medium">VAT Amount</td><td className="p-3">SAR {selectedCustomer.vatAmount.toFixed(2)}</td></tr>
          <tr><td className="p-3 font-medium">Total Amount</td><td className="p-3">SAR {selectedCustomer.totalAmount.toFixed(2)}</td></tr>
        </tbody>
      </table>
    </div>

    {/* RIGHT SIDE: 3 CARDS + MANAGED BY */}
    <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-start">
      {/* Card 1: Total Transaction */}
      <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-lg shadow">
        <h4 className="text-sm font-semibold text-green-700">Total Transaction</h4>
        <p className="text-xl font-bold text-green-800 mt-1">SAR {selectedCustomer.totalTransaction.toFixed(2)}</p>
      </div>

      {/* Card 2: Last Transaction */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg shadow">
        <h4 className="text-sm font-semibold text-yellow-700">Last Transaction</h4>
        <p className="text-xl font-bold text-yellow-800 mt-1">SAR {selectedCustomer.lastTransaction.toFixed(2)}</p>
      </div>

      {/* Card 3: Current Balance */}
      <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-lg shadow">
        <h4 className="text-sm font-semibold text-blue-700">Current Balance</h4>
        <p className="text-xl font-bold text-blue-800 mt-1">SAR {selectedCustomer.currentBalance.toFixed(2)}</p>
      </div>

      {/* Managed By Section */}
      <div className="mt-2 text-sm text-gray-600 italic">
        Managed under: <span className="font-semibold text-black">{selectedCustomer.managedBy}</span>
      </div>
    </div>
  </div>

  {/* Back Button */}
  <div className="mt-6 flex justify-start">
    <button
      onClick={() => setSelectedCustomer(null)}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      ← Back to List
    </button>
  </div>
</>


</>


              
                </>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
