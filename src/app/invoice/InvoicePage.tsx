'use client';

import React, {  useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.png';
import { QRCodeSVG } from 'qrcode.react';
import { useSearchParams } from 'next/navigation';

export const dynamic = 'force-dynamic';


interface Product {
  price: number;
  quantity: number;
  product_name_en: string;
  product_name_ar: string;
  vat: number;
}

interface InvoiceData {
  invoice_number: string;
  customer_name: string;
  location: string;
  total: number;
  total_vat: number;
  grand_total: string;
  invoice_time: string;
  invoice_date: string;
  products: Product[];
}



function InvoicePage () {


  const searchParams = useSearchParams();
const invoiceIdRaw = searchParams.get('invoice_id')
console.log("Console logging Invoice Id" ,invoiceIdRaw);
//  const invoiceIdRaw = searchParams.invoice_id;
//  const invoiceId = Number(invoiceIdRaw);


  
// console.log('orderId from searchParams:', invoiceIdRaw);
// console.log('orderId from searchParams:', invoiceId);

const token = localStorage.getItem('token') 
console.log( "Token from Async storage. ----->",token)




  

  const [invoice, setInvoice] = useState<InvoiceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  

  

  //const InvoiceId = '31';
  console.log(invoice?.customer_name);
  console.log("Products array -->",invoice?.products);



  useEffect(()=>{
  
    const fetchInvoice = async () => {
      try {
                    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2QwYWRjYjQwNTJiZjg3YmRjOTlhZGU4YjBlYWRhMDY4NDRiYjg5M2NjNWEyYTI5MDQ2MjQxYmI4YzUzZWY5NjdmMzQ1NjcxN2M2NzVhMDUiLCJpYXQiOjE3NTE3ODgzNjMuNjU0MDUwMTExNzcwNjI5ODgyODEyNSwibmJmIjoxNzUxNzg4MzYzLjY1NDA1MjAxOTExOTI2MjY5NTMxMjUsImV4cCI6MTc4MzMyNDM2My42NDk2NjAxMTA0NzM2MzI4MTI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.igdSA4vkVzbcutbdZ-5LQ1BHL_clASYcx_6QtnAcPocvWHFx_jGh2ViYMDvpuvNqFGMNall1KETKnp3C39C78XQSuetH5qDrpeAPcbPLUH6eqJ3EVSxo-vy64PyUm-yZ_qqyaSCVEAVbvLlvGPuAcLmfI081usjQsbKyDgRyFKEZrk37U_mveM2jWnYsn8T9L7BejYtGcj8CBHG4cT3O4oDumdRez1AQjP5LklvD3i74-npRx1W-qj48-35RzxFGOai5NVahUErerCYh5DxDD2ChDjEgFBm4nDFO5HTGGrLqBkRnJo3MD8mN5BC2VIFT5lFL8XG7o4c6QpnNZ1NPeE6YsV1Yy9pcoAj74xs3vq-mpHkm-o7DVyTpjGoiW4Br77n3C6IAKciSFcpjEZuXaxWpJ4yKdrxomk8hwrFscP7UbHMsHcFi54HuxkJ0fRmyyuKeT75gAx-eefQvI7QpOFJOcKpc39MOgDkpZN7fDM9Xak_wd3RypEZE24D7X6y_sTq15Ug60qsMUC3UWsQccil5nnW4wuRzh5ajGrCPhazAzrfiFLjZwhPfNdDAqbThBg-IZChrEEtje1vhuw_LQXDdsaBHbepfTPJ2ADPFhHBpg8JaLGa0PQrIDdx0DWnH-BVmIRLEU28rGOEsf4NPX6Wlli3_cavmUxB9-J_VABw'; // Replace with actual token

        const response = await fetch(`http://testing.algowzaa.online/api/invoice/${invoiceIdRaw}`, {
          headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' },
              method:'GET'
        });
        
        const result = await response.json();
        console.log(result);

        if (result.status) {
          setInvoice(result.data);
          
        }else {
          setError(result.message || 'Failed to fetch invoice.')
        }
        
      } catch (err) {

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Something went wrong.')
        }
        
      }finally {
        setLoading(false);
      }
    }

    fetchInvoice();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  const handlePrint = () => window.print();

  const invoiceData = {
    name: 'John Doe',
    vat: 12345,
    invoiceNo: 'inv-1',
    invoiceDate: '05-04-2025',
    BilledTime: '12:00',
    billedAmt: 1000,
    vatAmt:500
  };

  // Simulate 120 rows of data
  // const tableData = Array.from({ length: 120 }).map((_, i) => {
  //   const quantity = (i % 5) + 1;
  //   const price = (i % 20) * 2 + 10;
  //   const vat = 15;
  //   const taxAmount = ((quantity * price) * vat) / 100;
  //   return {
  //     description: `Product #${i + 1}`,
  //     quantity,
  //     price,
  //     vat,
  //     TaxAmount: taxAmount,
  //   };
  // });
const tableData = invoice?.products || [];



  const rowsPerPage = 12;
  const rowsFirstPage = 12;
  const rowsOtherPages = 16
 const chunkedRows: Product[][] = [];

if (tableData.length > 0) {
  chunkedRows.push(tableData.slice(0, rowsFirstPage));
  for (let i = rowsFirstPage; i < tableData.length; i += rowsOtherPages) {
    chunkedRows.push(tableData.slice(i, i + rowsOtherPages));
  }
}




  return (
    <div className="container mx-auto max-w-[800px] px-4 print:px-0">
      {chunkedRows.map((chunk, index) => (
        <div
          className={`invoice-page ${index < chunkedRows.length - 1 ? 'page-break' : ''}`}
          key={index}
        >
          <header className="flex justify-between bg-white border-gray-300">
            <div className="w-2/3 text-left">
              <p className="text-[14px] font-bold">AL Gowzaa Flowers Trading Est.</p>
              <p className="text-[14px]">Muth Nabi Street,</p>
              <p className="text-[14px]">Al Malaz Dist, Riyadh, KSA,</p>
              <p className="text-[14px]">CR No: 1010735775</p>
              <p className="text-[14px]">VAT No: 310628450200003</p>
              <p className="text-[14px]">Mobile No: 0558223636, 0502427888</p>
              <p className="text-[14px]">E-mail: gowzaaflowers@gmail.com</p>
            </div>
            <div className="w-1/3 flex justify-center mt-[-10%]">
              <Image src={Logo} alt="Logo" width={200} height={200} className="object-contain" />
            </div>
            <div className="w-2/3 text-right rtl">
              <p className="text-[14px] font-bold">AL Gowzaa Flowers Trading Est.</p>
              <p className="text-[14px]">الملز - شارع المطن</p>
              <p className="text-[14px]">CR No: 1010735775</p>
              <p className="text-[14px]">VAT No: 310628450200003</p>
              <p className="text-[14px]">Mobile No: 0558223636, 0502427888</p>
              <p className="text-[14px]">E-mail: gowzaaflowers@gmail.com</p>
            </div>
          </header>

          <div className="content">
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                {index === 0 && (
                  <>
                    <tr>
                      <td colSpan={3} className="border border-gray-300 px-4 py-5 font-semibold">
                        Customer Name (اسم العميل) : <br/><br/>{invoice?.customer_name}
                      </td>
                      <td colSpan={2} className="border border-gray-300 px-4 py-5 font-semibold">
                        Invoice No : <br/><br/> {invoice?.invoice_number}
                      </td>
                      <td colSpan={2} className="border border-gray-300 px-4 py-10 font-semibold">
                        Invoice Date : <br/><br/> {invoice?.invoice_date}
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={3} className="border border-gray-300 px-4 py-2 font-semibold">
                        VAT No: 310628450200003
                      </td>
                      <td colSpan={4} className="border border-gray-300 px-4 py-2 font-semibold">
                        <div>Invoice From: {invoice?.location}</div>
                        <div className="mt-2">Location:</div>
                      </td>
                    </tr>

                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">SR No</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Description of Goods</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">VAT%</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Tax Amount</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
                    </tr>
                  </>
                )}

                {chunk.map((item, i) => (
                  <tr key={index * rowsPerPage + i} className="break-inside-avoid-page">
                    <td className="border border-gray-300 px-4 py-2">{index * rowsPerPage + i + 1}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.product_name_en}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.price}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.vat}%</td>
                    <td className="border border-gray-300 px-4 py-2">{item.vat}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {(item.price * item.quantity + item.vat)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {index === chunkedRows.length - 1 && (
  <div className="mt-6 flex items-center justify-between gap-4">
    {/* QR Code on the left - vertically centered */}
    <div className="flex-shrink-0 flex items-center h-full">
      <QRCodeSVG value={JSON.stringify(invoiceData)} size={120} className="mb-4" />
    </div>

    {/* Summary Table on the right */}
    <div className="flex-grow max-w-md">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <tbody>
          <tr>
            <td className="border border-gray-300 px-3 py-1 font-semibold">Total</td>
            <td className="border border-gray-300 px-3 py-1">{invoice?.total}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-1 font-semibold">Discount</td>
            <td className="border border-gray-300 px-3 py-1">-{invoice?.grand_total}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-1 font-semibold">VAT Total</td>
            <td className="border border-gray-300 px-3 py-1">${invoice?.total_vat}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-1 font-semibold">Round Off</td>
            <td className="border border-gray-300 px-3 py-1">{invoice?.grand_total}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-1 font-bold">Grand Total</td>
            <td className="border border-gray-300 px-3 py-1 font-bold">{invoice?.grand_total}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-1 font-semibold">Grand Total (in words): {invoice?.grand_total}</td>
            <td className="border border-gray-300 px-3 py-1">
              {invoice?.grand_total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}


          </div>

          {index === chunkedRows.length - 1 && (
  <div className="gap-40 signature-section mt-8 flex justify-between px-12 pt-8">
    <div className="text-center">
      <div className="border-gray-400 w-48 pt-2 "></div>
      <p className="text-sm font-medium">Customer Signature</p>
    </div>
    <div className="text-center">
      <div className="border-gray-400 w-48 pt-2 "></div>
      <p className="text-sm font-medium">Authorized Signature</p>
    </div>
  </div>
)}


        </div>
      ))}

      <div className="print-button-wrapper">
        <button className="print-button" onClick={handlePrint}>
          🖨️ Print Invoice
        </button>
      </div>

      <style jsx>{`
  html, body {
    margin: 0;
    padding: 0;
    background: white;
    color: black;
    font-family: Arial, sans-serif;
  }

  .container {
    background: white;
    color: black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    padding-top: 0;
  }

  .invoice-page {
    background: white;
    width: 210mm;
    height: 297mm;
    padding: 20mm;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    page-break-inside: avoid;
  }

  .header, .footer {
    text-align: center;
    font-weight: bold;
    padding: 10px 0;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-top: 0;
    padding-top: 0;
  }

  .content {
    flex: 1;
    margin: 20px 0;
  }

  .print-button-wrapper {
    text-align: center;
    margin: 40px 0 20px;
  }

  .print-button {
    background: #000;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .signature-section {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid #ccc;
  }

  .signature-section div {
    flex: 1;
  }

  .signature-section p {
    margin-top: 5px;
  }

  @media print {
    .print-button-wrapper {
      display: none;
    }

    .invoice-page {
      margin: 0 auto;
      box-shadow: none;
      page-break-inside: avoid;
    }

    .page-break {
      page-break-after: always;
    }

    @page {
      size: A4;
      margin: 20mm 10mm 10mm 10mm; /* Top, Right, Bottom, Left */
    }

    html, body {
      margin: 0;
      padding: 0;
    }
  }
`}</style>

    </div>
  );
};


 export default InvoicePage;
