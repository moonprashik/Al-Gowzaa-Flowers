'use client';

import useAuthGuard from '../../utils/authGuard';

export default function SalesDashboard() {
  useAuthGuard();

  return (
    <div>
      <h1>Salesperson Dashboard</h1>
    </div>
  );
}
