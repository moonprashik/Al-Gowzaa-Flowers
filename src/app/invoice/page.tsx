// app/invoice/page.tsx
'use client';
import React, { Suspense } from 'react';
import InvoiceClientPage from './InvoicePage';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvoiceClientPage />
    </Suspense>
  );
}
