'use client';

import useAuthGuard from '../../utils/authGuard';

export default function AdminDashboard() {
  useAuthGuard();

  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  );
}
