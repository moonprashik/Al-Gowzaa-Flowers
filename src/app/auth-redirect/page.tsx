'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token || !role) {
      router.replace('/landingpage');
      return;
    }

    if (role === 'admin') {
      router.replace('/home');
    } else if (role === 'salesperson') {
      router.replace('/dashboard/salesperson');
    } else {
      router.replace('/login');
    }
  }, [router]);

  return <div className="text-center p-4">Checking authentication...</div>;
}
