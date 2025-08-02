
'use client';

import { useState } from 'react';
import CustomerPopup, { CustomerData } from './CustomerPopup';
import LoginPopup, { LoginUser } from './LoginPopup';
import StocksPopup from './Stocks';
import CustomerDetailPopup from './SalesDbAdmin'; // 👈 Imported
import ERPPopup from './ErpPopup';







const popups = [
  'Stocks',
  'Sales Db',
  'Customer Profile Management',
  'User Logins', // Login popup
  'ERP',
  'Exclude',
];

export default function AdminPage() {
 
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showStocksPopup, setShowStocksPopup] = useState(false);
  const [showCustomerDetailPopup, setShowCustomerDetailPopup] = useState(false); // 👈 New popup control


 const [showERPPopup, setShowERPPopup] = useState(false);









  const [database, setDatabase] = useState<CustomerData[]>([
    {
      name: 'Alice Smith',
      id: '123',
      crNumber: 'CR-001',
      vatNumber: 'VAT-111',
      buildingNumber: 'A1',
      postalCode: '560001',
      district: 'Bangalore South',
      managedBy: 'Riyadh',
    },
    {
      name: 'Aamir Khan',
      id: '789',
      crNumber: 'CR-003',
      vatNumber: 'VAT-333',
      buildingNumber: 'C3',
      postalCode: '600001',
      district: 'Chennai North',
      managedBy: 'Hafar Al Batin',
    },
    {
      name: 'Bob Johnson',
      id: '456',
      crNumber: 'CR-002',
      vatNumber: 'VAT-222',
      buildingNumber: 'B2',
      postalCode: '400011',
      district: 'Mumbai Central',
      managedBy: 'Riyadh',
    },
  ]);

  const [users, setUsers] = useState<LoginUser[]>([
    {
      email: 'admin@example.com',
      password: 'password123',
    },
    {
      email: 'manager@example.com',
      password: 'secure456',
    },
  ]);

  const customerDetailData = [
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  {
    sNo: 1,
    location: 'Riyadh',
    username: 'Prashik',
    date: '2025-07-28',
    customer: 'Ali Enterprises',
    invoiceNo: 'INV1234',
    vatAmount: 180.5,
    totalAmount: 1500.0,
    totalTransaction: 7540.0,
    lastTransaction: 1200.0,
    currentBalance: 3820.0,
    managedBy: 'Mr. Faisal Bin Saud',
  },
  
  {
    sNo: 2,
    location: 'Jeddah',
    username: 'Aamir',
    date: '2025-07-25',
    customer: 'MNO Traders',
    invoiceNo: 'INV5678',
    vatAmount: 90.0,
    totalAmount: 900.0,
    totalTransaction: 2940.0,
    lastTransaction: 900.0,
    currentBalance: 2040.0,
    managedBy: 'Ms. Ayesha Khalid',
  },
];


  // const handlePopupOpen = (index: number) => {
  //   if (index === 0) {
  //     setShowStocksPopup(true);
  //     setOpenIndex(null);
  //   } else if (index === 1) {
  //     setShowCustomerDetailPopup(true);
  //     setOpenIndex(null);
  //   } else {
  //     setOpenIndex(index);
  //   }
  // };

  const handlePopupOpen = (index: number) => {
  if (index === 0) {
    setShowStocksPopup(true);
    setOpenIndex(null);
  } else if (index === 1) {
    setShowCustomerDetailPopup(true);
    setOpenIndex(null);
  } else if (index === 4) {
  setShowERPPopup(true);
  setOpenIndex(null);
}
 else {
    setOpenIndex(index);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-indigo-800 text-left">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popups.map((title, index) => (
            <button
              key={index}
              className="bg-indigo-600 text-white font-medium py-4 px-6 rounded-xl shadow-lg hover:bg-indigo-700 transition-all"
              onClick={() => handlePopupOpen(index)}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Customer Profile Popup (index 2) */}
        {openIndex !== null && openIndex !== 3 && (
          <CustomerPopup
            open={true}
            onClose={() => setOpenIndex(null)}
            popups={popups}
            index={openIndex}
            database={database}
            setDatabase={setDatabase}
          />
        )}

        {/* Login Popup: index 3 */}
        {openIndex === 3 && (
          <LoginPopup
            open={true}
            onClose={() => setOpenIndex(null)}
            users={users}
            setUsers={setUsers}
          />
        )}

        {/* Stocks Popup: index 0 */}
        {showStocksPopup && (
          <StocksPopup open={showStocksPopup} onClose={() => setShowStocksPopup(false)} />
        )}

        {/* Sales DB - Customer Detail Popup: index 1 */}
        {showCustomerDetailPopup && (
          <CustomerDetailPopup
            open={showCustomerDetailPopup}
            onClose={() => setShowCustomerDetailPopup(false)}
            customers={customerDetailData}
          />
        )}


       {showERPPopup && (
  <ERPPopup open={showERPPopup} onClose={() => setShowERPPopup(false)} />
)}


      </div>
    </div>
  );
}

