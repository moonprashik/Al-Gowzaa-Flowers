'use client';

import React, { Suspense } from 'react'
import CreateInvoice from '../products/CreateInvoice'
import useAuthGuard from '../utils/authGuard'

export default function page() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useAuthGuard();
 
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateInvoice/>
      {/* <button >Logout</button> */}
    </Suspense>
  )
}
