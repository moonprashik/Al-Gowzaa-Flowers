

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const PAGE_WIDTH = 567;
const PAGE_HEIGHT = 737;

interface Product {
  name: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface InvoiceData {
  customerNameEn: string;
  customerNameAr: string;
  invoiceNo: string;
  invoiceDate: string;
  products: Product[];
  total: number;
  vatTotal: number;
  grandTotal: number;
  previousBalance: number;
  cashReceived: number;
  newBalance: number;
}

const InvoiceEditor = () => {
  const router = useRouter();

  const [data, setData] = useState<InvoiceData>({
    customerNameEn: 'English Text box',
    customerNameAr: 'Arabic Text box النص بالعربي',
    invoiceNo: 'AGFHFVA/00001/2025',
    invoiceDate: '25/05/2024',
    products: Array.from({ length: 13 }, (_, i) => ({
      name: `المنتج Product ${i + 1}`,
      quantity: 2,
      unitPrice: 50,
      total: 100,
    })),
    total: 100,
    vatTotal: 15,
    grandTotal: 115,
    previousBalance: 200,
    cashReceived: 115,
    newBalance: 85,
  });

  const handleChange = (field: keyof InvoiceData, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
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
    <div>
      <div style={{ padding: '10% 5%', display: 'flex', justifyContent: 'center', color: 'black' }}>
        <div>
          <h1 style={{ textAlign: 'center' }}>Invoice Editor</h1>

          {chunkedProducts.map((productChunk, pageIndex) => (
            <div
              key={pageIndex}
              className="invoice-page"
              style={{
                width: PAGE_WIDTH,
                height: PAGE_HEIGHT,
                border: '3px solid #c000c0',
                padding: '20px 10px 10px',
                paddingTop: 150,
                fontFamily: 'Helvetica',
                fontSize: 10,
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
                <div style={{ textAlign: 'center', marginBottom: 10 }}>
                  <div
                    style={{
                      backgroundColor: '#c000c0',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: 4,
                      display: 'inline-block',
                    }}
                  >
                    TAX INVOICE
                  </div>
                </div>

                <div style={{ display: 'flex', border: '2px solid #c000c0', height: 170, marginBottom: 10, overflow: 'hidden' }}>
                  <div style={{ width: '50%', padding: 10, borderRight: '2px solid #c000c0', boxSizing: 'border-box' }}>
                    <p><strong>Customer Name (EN):</strong> {data.customerNameEn}</p>
                    <p><strong>Customer Name (AR):</strong> {data.customerNameAr}</p>
                    <p><strong>Customer ID:</strong></p>
                    <p><strong>CR No:</strong></p>
                    <p><strong>VAT No:</strong></p>
                    <p><strong>Building No:</strong></p>
                    <p><strong>Postal Code:</strong></p>
                    <p><strong>District:</strong></p>
                  </div>
                  <div style={{ width: '50%', padding: 10, boxSizing: 'border-box' }}>
                    <div style={{ display: 'flex', borderBottom: '1px solid #c000c0', height: 60, overflow: 'hidden' }}>
                      <div style={{ width: '50%', borderRight: '1px solid #c000c0', padding: 6 }}>
                        <p style={{ textAlign: 'center', fontSize: 9 }}><strong>Invoice No</strong></p>
                        <p style={{ textAlign: 'center', fontSize: 9 }}>{data.invoiceNo}</p>
                      </div>
                      <div style={{ width: '50%', padding: 6 }}>
                        <p style={{ textAlign: 'center', fontSize: 9 }}><strong>Invoice Date</strong></p>
                        <p style={{ textAlign: 'center', fontSize: 9 }}>{data.invoiceDate}</p>
                      </div>
                    </div>
                    <div style={{ padding: 6 }}>
                      <p><strong>Invoice From:</strong></p>
                      <p>AL Gowzaa Flowers Trading Est.(HQ)</p>
                      <p>Muth Nabi Street, Al Malaz District</p>
                      <p>Riyadh, KSA. Postal Code: 12629</p>
                      <p>Mobile: 0558223636, 0502427888</p>
                      <p>Email: gowzaaflowers@gmail.com</p>
                      <p>Branch: Haferalbatin, Postal Code: 00000</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', fontWeight: 'bold', marginBottom: 4, fontSize: 10 }}>
                    <div style={{ width: '10%' }}>SR No</div>
                    <div style={{ width: '30%' }}>Description</div>
                    <div style={{ width: '10%' }}>Qty</div>
                    <div style={{ width: '15%' }}>Price</div>
                    <div style={{ width: '10%' }}>VAT%</div>
                    <div style={{ width: '15%' }}>Tax</div>
                    <div style={{ width: '10%' }}>Total</div>
                  </div>
                  {productChunk.map((item, idx) => {
                    const srNo = pageIndex * 12 + idx + 1;
                    const vat = 15;
                    const tax = (item.total * vat) / 100;
                    const totalWithTax = item.total + tax;

                    return (
                      <div key={idx} style={{ display: 'flex', marginBottom: 1, fontSize: 9, padding: '1px 0' }}>
                        <div style={{ width: '10%' }}>{srNo}</div>
                        <div style={{ width: '30%' }}>{item.name}</div>
                        <div style={{ width: '10%' }}>{item.quantity}</div>
                        <div style={{ width: '15%' }}>SAR {item.unitPrice.toFixed(2)}</div>
                        <div style={{ width: '10%' }}>{vat}%</div>
                        <div style={{ width: '15%' }}>SAR {tax.toFixed(2)}</div>
                        <div style={{ width: '10%' }}>SAR {totalWithTax.toFixed(2)}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {pageIndex === chunkedProducts.length - 1 && (
                <div style={{ paddingBottom: 20 }}>
                  <div style={{ display: 'flex', marginTop: 10, border: '1px solid #c000c0' }}>
                    <div style={{ width: '50%', borderRight: '1px solid #c000c0', padding: 10, textAlign: 'center' }}>
                      <p><strong>[ QR CODE PLACEHOLDER ]</strong></p>
                    </div>
                    <div style={{ width: '50%' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', color: 'black' }} border={1}>
                        <thead style={{ backgroundColor: '#f0f0f0' }}>
                          <tr>
                            <th>Description</th>
                            <th>Amount (SAR)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { label: 'Total', value: data.total },
                            { label: 'VAT (15%)', value: data.vatTotal },
                            { label: 'Grand Total', value: data.grandTotal },
                            { label: 'Previous Balance', value: data.previousBalance },
                            { label: 'Cash Received', value: data.cashReceived },
                            { label: 'New Balance', value: data.newBalance },
                          ].map((item, i) => (
                            <tr key={i}>
                              <td>{item.label}</td>
                              <td>
                                <input
                                  type="number"
                                  value={item.value}
                                  onChange={(e) => handleChange(item.label.replace(/ /g, '') as keyof InvoiceData, e.target.value)}
                                  style={{ width: '100%', border: 'none', outline: 'none', color: 'black' }}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div style={{ display: 'flex', marginTop: 20, paddingBottom: 20 }}>
                    <div style={{ width: '50%' }}>Customer Signature: __________________</div>
                    <div style={{ width: '50%' }}>Authorized Signature: __________________</div>
                  </div>
                </div>
              )}

              <div style={{ position: 'absolute', bottom: 5, left: 0, right: 0, textAlign: 'center', fontSize: 10 }}>
                Page {pageIndex + 1} of {chunkedProducts.length}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons outside print area */}
      <div style={{ marginTop: 20, textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 20 }}>
        <button onClick={handlePrint} style={{ backgroundColor:'green' ,padding: '10px 20px' }}>
          Print Invoice
        </button>
        <button onClick={handleBack} style={{ backgroundColor:'blue' ,padding: '10px 20px' }}>
          Go Back
        </button>
      </div>

      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          .invoice-page {
            page-break-after: always;
          }

          .invoice-page:last-child {
            page-break-after: auto;
          }

          button {
            display: none !important;
          }

          h1 {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default InvoiceEditor;
