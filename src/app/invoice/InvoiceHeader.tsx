'use client';
export const dynamic = 'force-dynamic';


import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.png';


const InvoiceHeader = () => (
  <header className="flex justify-between p-6 bg-white border-b border-gray-300">
    <div className="w-1/3 text-left">
      <p className="text-[14px] font-bold">AL Gowzaa Flowers Trading Est.</p>
      <p className="text-[14px]">Muth Nabi Street,</p>
      <p className="text-[14px]">Al Malaz Dist, Riyadh, KSA,</p>
      <p className="text-[14px]">CR No: 1010735775</p>
      <p className="text-[14px]">VAT No: 310628450200003</p>
      <p className="text-[14px]">Mobile No: 0558223636, 0502427888</p>
      <p className="text-[14px]">E-mail: gowzaaflowers@gmail.com</p>
    </div>
    <div className="w-1/3 flex justify-center -mt-10">
      <Image src={Logo} alt="Logo" width={200} height={200} className="object-contain" />
    </div>
    <div className="w-1/3 text-right rtl">
      <p className="text-[14px] font-bold">AL Gowzaa Flowers Trading Est.</p>
      <p className="text-[14px]">الملز - شارع المطن</p>
      <p className="text-[14px]">CR No: 1010735775</p>
      <p className="text-[14px]">VAT No: 310628450200003</p>
      <p className="text-[14px]">Mobile No: 0558223636, 0502427888</p>
      <p className="text-[14px]">E-mail: gowzaaflowers@gmail.com</p>
    </div>
  </header>
);

export default InvoiceHeader;