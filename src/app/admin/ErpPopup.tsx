'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

interface ERPPopupProps {
  open: boolean;
  onClose: () => void;
}

interface Employee {
  name: string;
  joiningDate: string;
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export default function ERPPopup({ open, onClose }: ERPPopupProps) {
  const [mode, setMode] = useState<'Employee Relation' | 'Entity Expenses'>('Employee Relation');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const year = new Date().getFullYear();
  const dayCount = daysInMonth(year, selectedMonth);

  const [employees, setEmployees] = useState<Employee[]>([
    { name: 'Alice Smith', joiningDate: '2022-03-15' },
    { name: 'Bob Johnson', joiningDate: '2021-07-10' },
    { name: 'Charlie Doe', joiningDate: '2023-01-05' },
  ]);

  // Form fields
  const [newEmpName, setNewEmpName] = useState('');
  const [newEmpDate, setNewEmpDate] = useState('');
  const [formError, setFormError] = useState('');

  const handleAddEmployee = () => {
    if (!newEmpName.trim() || !newEmpDate.trim()) {
      setFormError('Both fields are required');
      return;
    }

    setEmployees(prev => [...prev, { name: newEmpName, joiningDate: newEmpDate }]);
    setNewEmpName('');
    setNewEmpDate('');
    setFormError('');
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
          >
            <Dialog.Panel
              className="relative w-[80vw] h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden text-black flex flex-col"
            >
              <div className="p-6 flex-none">
                <Dialog.Title className="text-2xl font-bold">ERP Section</Dialog.Title>

                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <select
                    value={mode}
                    onChange={(e) => {
                      setMode(e.target.value as 'Employee Relation' | 'Entity Expenses');
                      setSelectedEmp(null);
                    }}
                    className="border px-3 py-2 rounded text-black"
                  >
                    <option>Employee Relation</option>
                    <option>Entity Expenses</option>
                  </select>

                  {mode === 'Employee Relation' && (
                    <>
                      <input
                        type="text"
                        placeholder="Search employee"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border px-3 py-2 rounded w-full md:w-60 text-black"
                      />
                    </>
                  )}
                </div>

                {mode === 'Employee Relation' && (
                  <div className="mt-4">
                    <h2 className="font-semibold text-lg mb-2">Add New Employee</h2>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <input
                        type="text"
                        placeholder="Employee Name"
                        value={newEmpName}
                        onChange={(e) => setNewEmpName(e.target.value)}
                        className="border px-3 py-2 rounded w-full md:w-60"
                      />
                      <input
                        type="date"
                        value={newEmpDate}
                        onChange={(e) => setNewEmpDate(e.target.value)}
                        className="border px-3 py-2 rounded w-full md:w-60"
                      />
                      <button
                        onClick={handleAddEmployee}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
                      >
                        + Add
                      </button>
                    </div>
                    {formError && <p className="text-red-500 mt-1">{formError}</p>}
                  </div>
                )}

                {/* Dropdown Search Suggestions */}
                {filteredEmployees.length > 0 && !selectedEmp && (
                  <div className="mt-2 border rounded max-h-36 overflow-y-auto">
                    {filteredEmployees.map((emp, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedEmp(emp)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {emp.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-auto px-6 pb-6">
                {selectedEmp && mode === 'Employee Relation' && (
                  <>
                    <div className="mb-3">
                      <p className="font-medium">Employee: {selectedEmp.name}</p>
                      <p className="font-medium">Joining Date: {selectedEmp.joiningDate}</p>
                    </div>

                    <div className="mb-4">
                      <label className="mr-2 font-medium">Select Month:</label>
                      <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(Number(e.target.value))}
                        className="border px-2 py-1 rounded text-black"
                      >
                        {monthNames.map((m, idx) => (
                          <option key={idx} value={idx}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="overflow-auto border rounded max-h-[45vh]">
                      <table className="min-w-full text-sm">
                        <thead className="bg-gray-100 sticky top-0">
                          <tr>
                            <th className="border px-3 py-2 text-left">S.NO</th>
                            <th className="border px-3 py-2 text-left">Month</th>
                            <th className="border px-3 py-2 text-left">Salary</th>
                            <th className="border px-3 py-2 text-left">Incentive</th>
                            <th className="border px-3 py-2 text-left">Allowances</th>
                            <th className="border px-3 py-2 text-left">Leave</th>
                            <th className="border px-3 py-2 text-left">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: dayCount }, (_, i) => (
                            <tr key={i}>
                              <td className="border px-3 py-2">{i + 1}</td>
                              <td className="border px-3 py-2">Present</td>
                              <td className="border px-3 py-2">-</td>
                              <td className="border px-3 py-2">-</td>
                              <td className="border px-3 py-2">-</td>
                              <td className="border px-3 py-2">-</td>
                              <td className="border px-3 py-2">-</td>
                            </tr>
                          ))}
                          <tr className="font-semibold bg-gray-50">
                            <td colSpan={6} className="border px-3 py-2 text-right">
                              Total Days
                            </td>
                            <td className="border px-3 py-2">{dayCount}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-end p-4 border-t bg-gray-50">
                <button
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
