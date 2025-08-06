


// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';

// const PAGE_WIDTH = 567;
// const PAGE_HEIGHT = 737;

// const InvoiceEditor = () => {
//   const router = useRouter();

//   const data = {
//     customerNameEn: 'John',
//     customerNameAr: '',
//     invoiceNo: 'AGFHFVA/00001/2025',
//     invoiceDate: '25/05/2024',
//     products: Array.from({ length: 12 }, (_, i) => ({
//       name: ` Product المنتج${i + 1}`,
//       quantity: 2,
//       unitPrice: 50,
//       total: 100,
//     })),
//     total: 100,
//     vatTotal: 15,
//     grandTotal: 115,
//     previousBalance: 200,
//     cashReceived: 115,
//     newBalance: 85,
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleBack = () => {
//     router.back();
//   };

//   const chunkedProducts = [];
//   for (let i = 0; i < data.products.length; i += 12) {
//     chunkedProducts.push(data.products.slice(i, i + 12));
//   }

//   return (
//     <div style={{ padding: '2% 5%', display: 'flex', justifyContent: 'center' }}>
//       <div>
//         <h1 style={{ textAlign: 'center' }}>Invoice Editor</h1>

//         {chunkedProducts.map((productChunk, pageIndex) => (
//           <div
//             key={pageIndex}
//             className="invoice-page"
//             style={{
//               width: PAGE_WIDTH,
//               height: PAGE_HEIGHT,
//               padding: 10,
//               paddingTop: 120,
//               fontFamily: 'Helvetica',
//               fontSize: 9,
//               backgroundColor: '#fff',
//               color: 'black',
//               marginBottom: 40,
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               position: 'relative',
//             }}
//           >
//             <div>
//               <div style={{ padding: 5, marginLeft: '1%', marginRight: '1%' }}>
//                 <div style={{ display: 'flex', marginBottom: 4, paddingBottom:'1%' }}>
//                   <div style={{ width: '33%', fontSize: 8 }}><strong>Customer ID: 1234 <br /> رقم هوية العميل </strong></div>
//                   <div style={{ width: '33%', fontSize: 8 }}><strong>Invoice No:</strong> {data.invoiceNo}<br /> رقم الفاتورة</div>
//                   <div style={{ width: '33%', fontSize: 8 }}><strong>Invoice Date:</strong> {data.invoiceDate}<br /> تاريخ الفاتورة</div>
//                 </div>

//                 {/* Customer Info + Seller Info */}
//                 <div style={{ display: 'flex' }}>
//                   <div style={{ width: '50%' }}>
//                     {[
//                       { labelEn: 'Customer Name', value: data.customerNameEn, labelAr: 'اسم العميل' },
//                       { labelEn: '', value: data.customerNameAr, labelAr: '' },
//                       { labelEn: 'VAT No', value: '91719376131', labelAr: 'الرقم الضريبي' },
//                       { labelEn: 'Building No', value: '456', labelAr: 'رقم المبنى' },
//                       { labelEn: 'Area', value: 'xyz', labelAr: 'الحي' },
//                       { labelEn: 'Postal Code', value: '4433453', labelAr: 'الرمز البريدي' },
//                       { labelEn: 'Street', value: 'xyz', labelAr: 'الشارع' },
//                       { labelEn: 'City', value: 'xyz', labelAr: 'المدينة' },
//                     ].map((item, idx) => (
//                       <div key={idx} style={{ display: 'flex', fontSize: 8, marginBottom: 2 }}>
//                         <div style={{ width: '45%', fontWeight: 'bold' }}>
//                           {item.labelEn && <>{item.labelEn}<br /></>}
//                           {item.labelAr && <>{item.labelAr}</>}
//                         </div>
//                         <div style={{ width: '55%' }}>{item.value}</div>
//                       </div>
//                     ))}
//                   </div>

//                   <div style={{ width: '50%', paddingLeft: 10 }}>
//                     <p style={{ fontSize: 8 }}><strong>Seller:</strong></p>
//                     <p style={{ fontSize: 8 }}>AL Gowzaa Flowers Trading Est / مؤسسة زهور الجوزاء التجارية</p>
//                     <p style={{ fontSize: 8 }}>310628450200003 / TAX CODE / الرقم الضريبي</p>
//                     <p style={{ fontSize: 8 }}>2511131988 / C R NO / السجل التجاري</p>
//                     <p style={{ fontSize: 8 }}>عمر بن عبدالعزيز / STREET / الشارع</p>
//                     <p style={{ fontSize: 8 }}>3847 / BUILDING NO / الرقم المبنى</p>
//                     <p style={{ fontSize: 8 }}>00000 / POST CODE / الرمز البريدي</p>
//                     <p style={{ fontSize: 8 }}>حي الكالدية / AREA / الحي</p>
//                     <p style={{ fontSize: 8 }}>حفر الباطن / CITY / المدينة</p>
//                     <p style={{ fontSize: 8 }}>مملكة العربية السعودية / COUNTRY / الدولة</p>
//                     <p style={{ fontSize: 8 }}>Mobile No / رقم الجوال / 0557147410 ,0558226161</p>
//                     <p style={{ fontSize: 8 }}>E-mail: contactagf@algowzaa.online</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Table Header */}
//               <div style={{ display: 'flex', fontWeight: 'bold', margin: '1% 0% 0%', fontSize: 8, paddingLeft:'2%',paddingBottom:'2%' }}>
//                 <div style={{ width: '10%' }}>SR No</div>
//                 <div style={{ width: '20%' }}>Description of Goods<br/> وﺻف اﻟﺑﺿﺎﻋﺔ</div>
//                 <div style={{ width: '13%' }}>Qty <br/> ﻛﻣﯾﺔ</div>
//                 <div style={{ width: '10%' }}>Rate <br/>ﻣﻌدل</div>
//                 <div style={{ width: '20%' }}>VAT% <br/> ضريبة القيمة المضافة</div>
//                 <div style={{ width: '15%' }}>Tax Amount <br/>  ﻗﯾﻣﺔ اﻟﺿرﯾﺑ </div>
//                 <div style={{ width: '10%' }}>Total <br/> المجموع</div>
//               </div>

//               {/* Product Rows */}
//               {productChunk.map((item, idx) => {
//                 const srNo = pageIndex * 12 + idx + 1;
//                 const vat = 15;
//                 const tax = (item.total * vat) / 100;
//                 const totalWithTax = item.total + tax;

//                 return (
//                   <div key={idx} style={{ display: 'flex', margin: '0 1% 4px', fontSize: 8,paddingLeft:'1%' }}>
//                     <div style={{ width: '10%' }}>{srNo}</div>
//                     <div style={{ width: '20%' }}>{item.name}</div>
//                     <div style={{ width: '14%', alignItems:'end' }}>{item.quantity}</div>
//                     <div style={{ width: '10%' }}> {item.unitPrice.toFixed(2)}</div>
//                     <div style={{ width: '20%' }}>{vat}%</div>
//                     <div style={{ width: '15%' }}> {tax.toFixed(2)}</div>
//                     <div style={{ width: '10%' }}> {totalWithTax.toFixed(2)}</div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Totals Section */}
//             {pageIndex === chunkedProducts.length - 1 && (
//               <div style={{ display: 'flex', marginTop: 5, marginBottom: '2%' }}>
//                 <div style={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <p><strong>[ QR CODE PLACEHOLDER ]</strong></p>
//                 </div>
//                 <div style={{ width: '70%', marginRight:'4%' }}>
//                   <table style={{ width: '100%', fontSize: 9 }} border={1}>
//                     <thead>
//                       <tr>
//                         <th style={{ textAlign: 'right', paddingLeft:'2%' }}>Description</th>
//                         <th style={{ textAlign: 'right', paddingLeft:'0%' }}>Amount</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {[
//                         { label: 'Total (المجموع)', value: data.total },
//                         { label: 'VAT 15% (ضريبة القيمة المضافة)', value: data.vatTotal },
//                         { label: 'Total Including Vat ( إجمالي مبلغ ضريبةة القيمة المضافة بما في دل)', value: data.grandTotal },
//                         { label: 'Previous Balance (الرصيد القديم )', value: data.previousBalance },
//                         { label: 'Total Balance(الرصد الإجمالي )', value: data.cashReceived },
                       
//                       ].map((item, i) => (
//                         <tr key={i}>
//                           <td style={{ textAlign: 'right', paddingLeft: 8 }}>{item.label}</td>
//                           <td style={{ textAlign: 'right', paddingLeft: 0 }}> {item.value.toFixed(2)}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             <div style={{ display: 'flex', marginTop: 2, marginBottom: '2%' }}>
//               <div style={{ width: '50%', fontSize: 8,paddingLeft:'5%' }}>Customer Signature: __________________</div>
//               <div style={{ width: '50%', fontSize: 8, paddingLeft: '18%' }}>Authorized Signature: __________________</div>
//             </div>

//             <div style={{ position: 'absolute', bottom: 2, left: 0, right: 0, textAlign: 'center', fontSize: 9 }}>
//               Page {pageIndex + 1}
//             </div>
//           </div>
//         ))}

//         {/* Buttons */}
//         <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center', gap: 20 }}>
//           <button onClick={handlePrint} style={{ backgroundColor: 'green', padding: '6px 16px' }}>
//             Print Invoice
//           </button>
//           <button onClick={handleBack} style={{ backgroundColor: 'blue', padding: '6px 16px' }}>
//             Go Back
//           </button>
//         </div>

//         <style jsx global>{`
//           @media print {
//             .invoice-page {
//               page-break-after: always;
//             }
//             .invoice-page:last-child {
//               page-break-after: auto;
//             }
//             button,
//             h1 {
//               display: none !important;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default InvoiceEditor;







// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';

// const PAGE_WIDTH = 567;
// const PAGE_HEIGHT = 737;

// const InvoiceEditor = () => {
//   const router = useRouter();

//   const data = {
//     customerNameEn: 'John',
//     customerNameAr: '',
//     invoiceNo: 'AGFHFVA/00001/2025',
//     invoiceDate: '25/05/2024',
//     products: Array.from({ length: 12 }, (_, i) => ({
//       name: ` Product المنتج${i + 1}`,
//       quantity: 1000,
//       unitPrice: 50,
//       total: 100,
//     })),
//     total: 100,
//     vatTotal: 15,
//     grandTotal: 115,
//     previousBalance: 200,
//     cashReceived: 115,
//     newBalance: 85,
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleBack = () => {
//     router.back();
//   };

//   const chunkedProducts = [];
//   for (let i = 0; i < data.products.length; i += 12) {
//     chunkedProducts.push(data.products.slice(i, i + 12));
//   }

//   return (
//     <div style={{ padding: '2% 5%', display: 'flex', justifyContent: 'center' }}>
//       <div>
//         <h1 style={{ textAlign: 'center' }}>Invoice Editor</h1>

//         {chunkedProducts.map((productChunk, pageIndex) => (
//           <div
//             key={pageIndex}
//             className="invoice-page"
//             style={{
//               width: PAGE_WIDTH,
//               height: PAGE_HEIGHT,
//               padding: 10,
//               paddingTop: 120,
//               fontFamily: 'Helvetica',
//               fontSize: 9,
//               backgroundColor: '#fff',
//               color: 'black',
//               marginBottom: 40,
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               position: 'relative',
//             }}
//           >
//             <div>
//               <div style={{ padding: 5, marginLeft: '1%', marginRight: '1%' }}>
//                 <div style={{ display: 'flex', marginBottom: 4, paddingBottom: '1%' }}>
//                   <div style={{ width: '33%', fontSize: 8 }}>
//                     <strong>Customer ID: 1234 <br /> رقم هوية العميل </strong>
//                   </div>
//                   <div style={{ width: '33%', fontSize: 8 }}>
//                     <strong>Invoice No:</strong> {data.invoiceNo}<br /> رقم الفاتورة
//                   </div>
//                   <div style={{ width: '33%', fontSize: 8 }}>
//                     <strong>Invoice Date:</strong> {data.invoiceDate}<br /> تاريخ الفاتورة
//                   </div>
//                 </div>

//                 {/* Customer Info + Seller Info */}
//                 <div style={{ display: 'flex' }}>
//                   <div style={{ width: '50%' }}>
//                     {[
//                       { labelEn: 'Customer Name', value: data.customerNameEn, labelAr: 'اسم العميل' },
//                       { labelEn: '', value: data.customerNameAr, labelAr: '' },
//                       { labelEn: 'VAT No', value: '91719376131', labelAr: 'الرقم الضريبي' },
//                       { labelEn: 'Building No', value: '456', labelAr: 'رقم المبنى' },
//                       { labelEn: 'Area', value: 'xyz', labelAr: 'الحي' },
//                       { labelEn: 'Postal Code', value: '4433453', labelAr: 'الرمز البريدي' },
//                       { labelEn: 'Street', value: 'xyz', labelAr: 'الشارع' },
//                       { labelEn: 'City', value: 'xyz', labelAr: 'المدينة' },
//                     ].map((item, idx) => (
//                       <div key={idx} style={{ display: 'flex', fontSize: 8, marginBottom: 2 }}>
//                         <div style={{ width: '45%', fontWeight: 'bold' }}>
//                           {item.labelEn && <>{item.labelEn}<br /></>}
//                           {item.labelAr && <>{item.labelAr}</>}
//                         </div>
//                         <div style={{ width: '55%' }}>{item.value}</div>
//                       </div>
//                     ))}
//                   </div>

//                   <div style={{ width: '50%', paddingLeft: 10 }}>
//                     <p style={{ fontSize: 8 }}><strong>Seller:</strong></p>
//                     <p style={{ fontSize: 8 }}>AL Gowzaa Flowers Trading Est / مؤسسة زهور الجوزاء التجارية</p>
//                     <p style={{ fontSize: 8 }}>310628450200003 / TAX CODE / الرقم الضريبي</p>
//                     <p style={{ fontSize: 8 }}>2511131988 / C R NO / السجل التجاري</p>
//                     <p style={{ fontSize: 8 }}>عمر بن عبدالعزيز / STREET / الشارع</p>
//                     <p style={{ fontSize: 8 }}>3847 / BUILDING NO / الرقم المبنى</p>
//                     <p style={{ fontSize: 8 }}>00000 / POST CODE / الرمز البريدي</p>
//                     <p style={{ fontSize: 8 }}>حي الكالدية / AREA / الحي</p>
//                     <p style={{ fontSize: 8 }}>حفر الباطن / CITY / المدينة</p>
//                     <p style={{ fontSize: 8 }}>مملكة العربية السعودية / COUNTRY / الدولة</p>
//                     <p style={{ fontSize: 8 }}>Mobile No / رقم الجوال / 0557147410 ,0558226161</p>
//                     <p style={{ fontSize: 8 }}>E-mail: contactagf@algowzaa.online</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Product Table */}
//               <div style={{ margin: '1% 2%' }}>
//                 <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 8 }}>
//                   <thead>
//                     <tr>
//                       <th style={{ width: '8%', padding: '4px 2px', textAlign: 'left',paddingBottom:'3%' }}>SR No <br/> </th>
//                       <th style={{ width: '22%', padding: '4px 2px', textAlign: 'left' }}>Description of Goods<br />وﺻف اﻟﺑﺿﺎﻋﺔ</th>
//                       <th style={{ width: '10%', padding: '4px 2px', textAlign: 'left' }}>Qty<br />ﻛﻣﯾﺔ</th>
//                       <th style={{ width: '10%', padding: '4px 2px', textAlign: 'left' }}>Rate<br />ﻣﻌدل</th>
//                       <th style={{ width: '15%', padding: '4px 2px', textAlign: 'left' }}>VAT%<br />ضريبة القيمة المضافة</th>
//                       <th style={{ width: '15%', padding: '4px 2px', textAlign: 'left' }}>Tax Amount<br />ﻗﯾﻣﺔ اﻟﺿرﯾﺑ</th>
//                       <th style={{ width: '10%', padding: '4px 2px', textAlign: 'left' }}>Total<br />المجموع</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {productChunk.map((item, idx) => {
//                       const srNo = pageIndex * 12 + idx + 1;
//                       const vat = 15;
//                       const tax = (item.total * vat) / 100;
//                       const totalWithTax = item.total + tax;

//                       return (
//                         <tr key={idx}>
//                           <td style={{ padding: '4px 2px' }}>{srNo}</td>
//                           <td style={{ padding: '4px 2px' }}>{item.name}</td>
//                           <td style={{ padding: '4px 2px', alignContent:'right' }}>{item.quantity}</td>
//                           <td style={{ padding: '4px 2px' }}>{item.unitPrice.toFixed(2)}</td>
//                           <td style={{ padding: '4px 2px' }}>{vat}%</td>
//                           <td style={{ padding: '4px 2px' }}>{tax.toFixed(2)}</td>
//                           <td style={{ padding: '4px 2px' }}>{totalWithTax.toFixed(2)}</td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Totals Section */}
//             {pageIndex === chunkedProducts.length - 1 && (
//               <div style={{ display: 'flex', marginTop: 5, marginBottom: '2%' }}>
//                 <div style={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <p><strong>[ QR CODE PLACEHOLDER ]</strong></p>
//                 </div>
//                 <div style={{ width: '70%', marginRight: '4%' }}>
//                   <table style={{ width: '100%', fontSize: 9 }} border={1}>
//                     <thead>
//                       <tr>
//                         <th style={{ textAlign: 'right', paddingLeft: '2%' }}>Description</th>
//                         <th style={{ textAlign: 'right', paddingLeft: '0%' }}>Amount</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {[
//                         { label: 'Total (المجموع)', value: data.total },
//                         { label: 'VAT 15% (ضريبة القيمة المضافة)', value: data.vatTotal },
//                         { label: 'Total Including Vat ( إجمالي مبلغ ضريبةة القيمة المضافة بما في دل)', value: data.grandTotal },
//                         { label: 'Previous Balance (الرصيد القديم )', value: data.previousBalance },
//                         { label: 'Total Balance(الرصد الإجمالي )', value: data.cashReceived },
//                       ].map((item, i) => (
//                         <tr key={i}>
//                           <td style={{ textAlign: 'right', paddingLeft: 8 }}>{item.label}</td>
//                           <td style={{ textAlign: 'right', paddingLeft: 0 }}>{item.value.toFixed(2)}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             <div style={{ display: 'flex', marginTop: 2, marginBottom: '2%' }}>
//               <div style={{ width: '50%', fontSize: 8, paddingLeft: '5%' }}>Customer Signature: __________________</div>
//               <div style={{ width: '50%', fontSize: 8, paddingLeft: '18%' }}>Authorized Signature: __________________</div>
//             </div>

//             <div style={{ position: 'absolute', bottom: 2, left: 0, right: 0, textAlign: 'center', fontSize: 9 }}>
//               Page {pageIndex + 1}
//             </div>
//           </div>
//         ))}

//         {/* Buttons */}
//         <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center', gap: 20 }}>
//           <button onClick={handlePrint} style={{ backgroundColor: 'green', padding: '6px 16px', color: '#fff' }}>
//             Print Invoice
//           </button>
//           <button onClick={handleBack} style={{ backgroundColor: 'blue', padding: '6px 16px', color: '#fff' }}>
//             Go Back
//           </button>
//         </div>

//         <style jsx global>{`
//           @media print {
//             .invoice-page {
//               page-break-after: always;
//             }
//             .invoice-page:last-child {
//               page-break-after: auto;
//             }
//             button,
//             h1 {
//               display: none !important;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default InvoiceEditor;






'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const PAGE_WIDTH = 567;
const PAGE_HEIGHT = 737;

const InvoiceEditor = () => {
  const router = useRouter();

  const cellStyleRight: React.CSSProperties = {
    padding: '1px 8px',
    textAlign: 'left',
  };

  const cellStyleLeft: React.CSSProperties = {
    padding: '1px 4px',
    textAlign: 'left',
  };

  const data = {
    customerNameEn: 'John',
    customerNameAr: '',
    invoiceNo: 'AGFHFVA/00001/2025',
    invoiceDate: '25/05/2024',
    products: Array.from({ length: 12 }, (_, i) => ({
      name: `Product المنتج${i + 1}`,
      quantity: 1000,
      unitPrice: 50,
      total: 100,
    })),
    total: 100,
    vatTotal: 15,
    grandTotal: 115,
    previousBalance: 200,
    cashReceived: 115,
    newBalance: 85,
  };

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    router.back();
  };

  const chunkedProducts = [];
  for (let i = 0; i < data.products.length; i += 12) {
    chunkedProducts.push(data.products.slice(i, i + 12));
  }

  return (
    <div style={{ padding: '2% 5%', display: 'flex', justifyContent: 'center' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Invoice Editor</h1>

        {chunkedProducts.map((productChunk, pageIndex) => (
          <div
            key={pageIndex}
            className="invoice-page"
            style={{
              width: PAGE_WIDTH,
              height: PAGE_HEIGHT,
              padding: 10,
              paddingTop: 120,
              fontFamily: 'Helvetica',
              fontSize: 9,
              backgroundColor: '#fff',
              color: 'black',
              marginBottom: 40,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <div>
              {/* Header Info */}
              <div style={{ padding: 5, marginLeft: '1%', marginRight: '1%' }}>
                <div style={{ display: 'flex', marginBottom: 4, paddingBottom: '1%' }}>
                  <div style={{ width: '33%', fontSize: 8 }}>
                    <strong>Customer ID: 1234 <br /> رقم هوية العميل </strong>
                  </div>
                  <div style={{ width: '33%', fontSize: 8 }}>
                    <strong>Invoice No:</strong> {data.invoiceNo}<br /> رقم الفاتورة
                  </div>
                  <div style={{ width: '33%', fontSize: 8 }}>
                    <strong>Invoice Date:</strong> {data.invoiceDate}<br /> تاريخ الفاتورة
                  </div>
                </div>

                {/* Customer Info */}
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '50%' }}>
                    {[
                      { labelEn: 'Customer Name', value: data.customerNameEn, labelAr: 'اسم العميل' },
                      { labelEn: '', value: data.customerNameAr, labelAr: '' },
                      { labelEn: 'VAT No', value: '91719376131', labelAr: 'الرقم الضريبي' },
                      { labelEn: 'Building No', value: '456', labelAr: 'رقم المبنى' },
                      { labelEn: 'Area', value: 'xyz', labelAr: 'الحي' },
                      { labelEn: 'Postal Code', value: '4433453', labelAr: 'الرمز البريدي' },
                      { labelEn: 'Street', value: 'xyz', labelAr: 'الشارع' },
                      { labelEn: 'City', value: 'xyz', labelAr: 'المدينة' },
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', fontSize: 8, marginBottom: 2 }}>
                        <div style={{ width: '45%', fontWeight: 'bold' }}>
                          {item.labelEn && <>{item.labelEn}<br /></>}
                          {item.labelAr && <>{item.labelAr}</>}
                        </div>
                        <div style={{ width: '55%' }}>{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ width: '50%', paddingLeft: 10 }}>
                    <p style={{ fontSize: 8 }}><strong>Seller:</strong></p>
                    <p style={{ fontSize: 8 }}>AL Gowzaa Flowers Trading Est / مؤسسة زهور الجوزاء التجارية</p>
                    <p style={{ fontSize: 8 }}>310628450200003 / TAX CODE / الرقم الضريبي</p>
                    <p style={{ fontSize: 8 }}>2511131988 / C R NO / السجل التجاري</p>
                    <p style={{ fontSize: 8 }}>عمر بن عبدالعزيز / STREET / الشارع</p>
                    <p style={{ fontSize: 8 }}>3847 / BUILDING NO / الرقم المبنى</p>
                    <p style={{ fontSize: 8 }}>00000 / POST CODE / الرمز البريدي</p>
                    <p style={{ fontSize: 8 }}>حي الكالدية / AREA / الحي</p>
                    <p style={{ fontSize: 8 }}>حفر الباطن / CITY / المدينة</p>
                    <p style={{ fontSize: 8 }}>مملكة العربية السعودية / COUNTRY / الدولة</p>
                    <p style={{ fontSize: 8 }}>Mobile No / رقم الجوال / 0557147410 ,0558226161</p>
                    <p style={{ fontSize: 8 }}>E-mail: contactagf@algowzaa.online</p>
                  </div>
                </div>
              </div>

              {/* Product Table */}
              <div style={{ margin: '1% 2%' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 8 }}>
                  <thead>
  <tr style={{ borderBottom: '8px solid white' }}> {/* Adds visual space */}
    <th style={{ ...cellStyleLeft, paddingBottom: '16px' }}>SR No</th>
    <th style={{ ...cellStyleLeft, paddingBottom: '4px' }}>Description of Goods<br />وﺻف اﻟﺑﺿﺎﻋﺔ</th>
    <th style={{ ...cellStyleRight, paddingBottom: '4px', paddingRight: '16px' }}>Qty<br />ﻛﻣﯾﺔ</th>
    <th style={{ ...cellStyleRight, paddingBottom: '4px', paddingRight: '16px' }}>Rate<br />ﻣﻌدل</th>
    <th style={{ ...cellStyleRight, paddingBottom: '4px', paddingRight: '0px' }}>VAT%<br />ضريبة القيمة المضافة</th>
    <th style={{ ...cellStyleRight, paddingBottom: '4px', paddingRight:'4px' }}>Tax Amount<br />ﻗﯾﻣﺔ اﻟﺿرﯾﺑ</th>
    <th style={{ ...cellStyleRight, paddingBottom: '4px' }}>Total<br />المجموع</th>
  </tr>
</thead>

                  <tbody>
                    {productChunk.map((item, idx) => {
                      const srNo = pageIndex * 12 + idx + 1;
                      const vat = 15;
                      const tax = (item.total * vat) / 100;
                      const totalWithTax = item.total + tax;

                      return (
                        <tr key={idx}>
                          <td style={cellStyleLeft}>{srNo}</td>
                          <td style={cellStyleLeft}>{item.name}</td>
                          <td style={{ ...cellStyleRight, paddingRight: '16px' }}>{item.quantity}</td>
                          <td style={{ ...cellStyleRight, paddingRight: '16px' }}>{item.unitPrice.toFixed(2)}</td>
                          <td style={{ ...cellStyleRight, paddingRight: '16px' }}>{vat}%</td>
                          <td style={cellStyleRight}>{tax.toFixed(2)}</td>
                          <td style={cellStyleRight}>{totalWithTax.toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Totals Section */}
            {/* Totals Section */}
{pageIndex === chunkedProducts.length - 1 && (
  <div style={{ display: 'flex', marginTop: 5, marginBottom: '2%' }}>
    <div style={{ width: '35%', display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?data=SampleInvoice123&size=80x80"
        alt="QR Code"
        style={{ width: 80, height: 80, marginLeft:'50%' }}
      />
    </div>
    <div style={{ width: '60%', marginRight: '6%' }}>
      <table style={{ width: '100%', fontSize: 9 }} border={1}>
        <thead>
          <tr>
            <th style={{ textAlign: 'right', paddingLeft: '2%' }}>Description</th>
            <th style={{ textAlign: 'right', paddingLeft: '0%' }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {[
            { label: 'Total (المجموع)', value: data.total },
            { label: 'VAT 15% (ضريبة القيمة المضافة)', value: data.vatTotal },
            { label: 'Total Including Vat', value: data.grandTotal },
            { label: 'Previous Balance', value: data.previousBalance },
            { label: 'Total Balance', value: data.cashReceived },
          ].map((item, i) => (
            <tr key={i}>
              <td style={{ textAlign: 'right', paddingLeft: 8 }}>{item.label}</td>
              <td style={{ textAlign: 'right', paddingLeft: 0 }}>{item.value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}


            {/* Signatures */}
            <div style={{ display: 'flex', marginTop: 2, marginBottom: '2%' }}>
              <div style={{ width: '50%', fontSize: 8, paddingLeft: '5%' }}>Customer Signature: __________________</div>
              <div style={{ width: '50%', fontSize: 8, paddingLeft: '18%' }}>Authorized Signature: __________________</div>
            </div>

            {/* Page Number */}
            <div style={{ position: 'absolute', bottom: 2, left: 0, right: 0, textAlign: 'center', fontSize: 9 }}>
              Page {pageIndex + 1}
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center', gap: 20 }}>
          <button onClick={handlePrint} style={{ backgroundColor: 'green', padding: '6px 16px', color: '#fff' }}>
            Print Invoice
          </button>
          <button onClick={handleBack} style={{ backgroundColor: 'blue', padding: '6px 16px', color: '#fff' }}>
            Go Back
          </button>
        </div>

        <style jsx global>{`
          @media print {
            .invoice-page {
              page-break-after: always;
            }
            .invoice-page:last-child {
              page-break-after: auto;
            }
            button,
            h1 {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default InvoiceEditor;

