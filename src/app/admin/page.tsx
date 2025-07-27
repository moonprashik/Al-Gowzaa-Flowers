


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


'use client';

import { useState } from 'react';
import CustomerPopup, { CustomerData } from './CustomerPopup';
import LoginPopup, { LoginUser } from './LoginPopup';
import StocksPopup from './Stocks';

const popups = [
  'Stocks',
  'Orders Summary',
  'Customer Profile Management',
  'User Logins', // Login popup
  'Site Analytics',
  'System Logs',
];

export default function AdminPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showStocksPopup, setShowStocksPopup] = useState(false);

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

  const handlePopupOpen = (index: number) => {
    if (index === 0) {
      setShowStocksPopup(true);
      setOpenIndex(null);
    } else {
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

        {/* Customer Popup: all except index 0 and 3 */}
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
      </div>
    </div>
  );
}
