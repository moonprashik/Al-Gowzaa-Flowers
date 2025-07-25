


'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from '@react-pdf/renderer';

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

const styles = StyleSheet.create({
  page: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    padding: 20,
    fontSize: 10,
    paddingTop: '15%',
    fontFamily: 'Helvetica',
    backgroundColor: '#fff',
  },
  contentWrapper: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#c000c0',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  invoiceTable: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#c000c0',
    marginBottom: 10,
    height: 170,
  },
  leftSection: {
    width: '50%',
    padding: 8,
    gap: 4,
    borderRightWidth: 2,
    borderColor: '#c000c0',
  },
  rightSection: {
    width: '50%',
    padding: 0,
    flexDirection: 'column',
  },
  headerTopRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#c000c0',
    height: 60,
  },
  column: {
    width: '50%',
    padding: 6,
    justifyContent: 'center',
  },
  columnBorderRight: {
    borderRightWidth: 1,
    borderColor: '#c000c0',
  },
  bottomBlock: {
    padding: 6,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 2,
    
  },

  lableright: {
    fontWeight: 'bold',
    marginBottom: 2,
    justifyContent:'center',
    alignContent:'center',
    textAlign:'center'
  },

  lablerightdata: {
    
    marginBottom: 2,
    justifyContent:'center',
    alignContent:'center',
    textAlign:'center'
  },

  productTable: {
    marginTop: 8,
    paddingHorizontal: 4,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: '#000',
  },
  footer: {
    marginTop: 10,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    fontSize: 10,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  lastCell: {
    borderRightWidth: 0,
  },
  bold: {
    fontWeight: 'bold',
  },


// Footer table styling

tableRowFooter: {
  flexDirection: 'row',
},

tableCellFooter: {
  width: '50%',
  padding: 4,
  borderRightWidth: 1,
  borderColor: '#c000c0',
  fontSize: 10,
},

boldFooter: {
  fontWeight: 'bold',
},


});

const InvoicePDF: React.FC<{ data: InvoiceData }> = ({ data }) => {
  const productsPerPage = 10;
  const productPages: Product[][] = [];

  for (let i = 0; i < data.products.length; i += productsPerPage) {
    productPages.push(data.products.slice(i, i + productsPerPage));
  }

  return (
    <Document>
      {productPages.map((productList, index) => (
        <Page key={index} size={{ width: PAGE_WIDTH, height: PAGE_HEIGHT }} style={styles.page}>
          <View style={{ alignItems: 'center', marginBottom: 6 }}>
            <View
              style={{
                backgroundColor: '#c000c0',
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 4,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff' }}>
                TAX INVOICE
              </Text>
            </View>
          </View>

          <View style={styles.contentWrapper}>
            {/* Header */}
            <View style={styles.invoiceTable}>
              <View style={styles.leftSection}>
                <Text style={styles.label}>Customer Name: English</Text>
                <Text style={styles.label}>Customer Name: Arabic</Text>
                <Text style={styles.label}>Customer ID:</Text>
                <Text style={styles.label}>CR No:</Text>
                <Text style={styles.label}>VAT No:</Text>
                <Text style={styles.label}>Building No:</Text>
                <Text style={styles.label}>Postal Code:</Text>
                <Text style={styles.label}>District:</Text>
              </View>

              <View style={styles.rightSection}>
                <View style={styles.headerTopRow}>
                  <View style={[styles.column, styles.columnBorderRight]}>
                    <Text style={styles.lableright}>Invoice No</Text>
                    <Text style={styles.lablerightdata}>{data.invoiceNo}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.lableright}>Invoice Date</Text>
                    <Text style={styles.lablerightdata}>{data.invoiceDate}</Text>
                  </View>
                </View>
                <View style={styles.bottomBlock}>
                  <Text style={styles.label}>Invoice From:</Text>
                  <Text>AL Gowzaa Flowers Trading Est.(HQ)</Text>
                  <Text>Muth Nabi Street, Al Malaz District</Text>
                  <Text>Riyadh, KSA. Postal Code: 12629</Text>
                  <Text>Mobile: 0558223636, 0502427888</Text>
                  <Text>Email: gowzaaflowers@gmail.com</Text>
                  <Text>Branch: Haferalbatin, Postal Code: 00000</Text>
                </View>
              </View>
            </View>

            {/* Product Table */}
            <View style={styles.productTable}>
              <View style={[styles.tableRow, { backgroundColor: '#f0f0f0' }]}>
                <Text style={[styles.tableCell, styles.bold, { width: '10%' }]}>SR No</Text>
                <Text style={[styles.tableCell, styles.bold, { width: '30%' }]}>Description</Text>
                <Text style={[styles.tableCell, styles.bold, { width: '10%' }]}>Qty</Text>
                <Text style={[styles.tableCell, styles.bold, { width: '15%' }]}>Price</Text>
                <Text style={[styles.tableCell, styles.bold, { width: '10%' }]}>VAT%</Text>
                <Text style={[styles.tableCell, styles.bold, { width: '15%' }]}>Tax</Text>
                <Text style={[styles.tableCell, styles.bold, { width: '10%' }, styles.lastCell]}>
                  Total
                </Text>
              </View>

              {productList.map((item, idx) => {
                const srNo = idx + 1 + index * productsPerPage;
                const vatPercent = 15;
                const taxAmount = (item.total * vatPercent) / 100;
                const totalWithTax = item.total + taxAmount;

                return (
                  <View style={styles.tableRow} key={idx}>
                    <Text style={[styles.tableCell, { width: '10%' }]}>{srNo}</Text>
                    <Text style={[styles.tableCell, { width: '30%' }]}>{item.name}</Text>
                    <Text style={[styles.tableCell, { width: '10%' }]}>{item.quantity}</Text>
                    <Text style={[styles.tableCell, { width: '15%' }]}>SAR {item.unitPrice.toFixed(2)}</Text>
                    <Text style={[styles.tableCell, { width: '10%' }]}>{vatPercent}%</Text>
                    <Text style={[styles.tableCell, { width: '15%' }]}>SAR {taxAmount.toFixed(2)}</Text>
                    <Text style={[styles.tableCell, { width: '10%' }, styles.lastCell]}>
                      SAR {totalWithTax.toFixed(2)}
                    </Text>
                  </View>
                );
              })}
            </View>

            {/* Footer */}
            {/* {index === productPages.length - 1 && (
              <View style={styles.footer}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.label}>[ QR CODE PLACEHOLDER ]</Text>
                  </View>

                  <View style={{ width: '50%', borderLeftWidth: 1, borderColor: '#c000c0' }}>
                    <View style={[styles.tableRow, { backgroundColor: '#f0f0f0' }]}>
                      <Text style={[styles.tableCell, styles.bold]}>Description</Text>
                      <Text style={[styles.tableCell, styles.bold]}>Amount (SAR)</Text>
                    </View>

                    {[
                      { label: 'Total', value: data.total },
                      { label: 'VAT (15%)', value: data.vatTotal },
                      { label: 'Grand Total', value: data.grandTotal },
                      { label: 'Previous Balance', value: data.previousBalance },
                      { label: 'Cash Received', value: data.cashReceived },
                      { label: 'New Balance', value: data.newBalance },
                    ].map((item, i) => (
                      <View style={styles.tableRow} key={i}>
                        <Text style={styles.tableCell}>{item.label}</Text>
                        <Text style={styles.tableCell}>{item.value.toFixed(2)}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <View style={{ width: '50%' }}>
                    <Text>Customer Signature: __________________</Text>
                  </View>
                  <View style={{ width: '50%' }}>
                    <Text>Authorized Signature: __________________</Text>
                  </View>
                </View>
              </View>
            )} */}

            {index === productPages.length - 1 && (
  <View style={styles.footer}>
    {/* QR Code + Summary Table */}
    <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#c000c0' }}>
      
      {/* Left Cell: QR Code Placeholder */}
      <View style={{ width: '50%', borderRightWidth: 1, borderColor: '#c000c0', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <Text style={styles.label}>[ QR CODE PLACEHOLDER ]</Text>
      </View>

      {/* Right Cell: Summary Table */}
      <View style={{ width: '50%' }}>
        {/* Header Row */}
        <View style={[styles.tableRow, { backgroundColor: '#f0f0f0', borderBottomWidth: 1, borderColor: '#c000c0' }]}>
          <Text style={[styles.tableCellFooter, styles.boldFooter]}>Description</Text>
          <Text style={[styles.tableCellFooter, styles.boldFooter]}>Amount (SAR)</Text>
        </View>

        {/* Data Rows */}
        {[
          { label: 'Total', value: data.total },
          { label: 'VAT (15%)', value: data.vatTotal },
          { label: 'Grand Total', value: data.grandTotal },
          { label: 'Previous Balance', value: data.previousBalance },
          { label: 'Cash Received', value: data.cashReceived },
          { label: 'New Balance', value: data.newBalance },
        ].map((item, i) => (
          <View style={[styles.tableRowFooter, { borderBottomWidth: 1, borderColor: '#c000c0' }]} key={i}>
            <Text style={styles.tableCellFooter}>{item.label}</Text>
            <Text style={styles.tableCellFooter}>{item.value.toFixed(2)}</Text>
          </View>
        ))}
      </View>
    </View>

    {/* Signature Section */}
    <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <View style={{ width: '50%' }}>
        <Text>Customer Signature: __________________</Text>
      </View>
      <View style={{ width: '50%' }}>
        <Text>Authorized Signature: __________________</Text>
      </View>
    </View>
  </View>
)}

          </View>
        </Page>
      ))}
    </Document>
  );
};

const InvoicePreviewPage: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const data: InvoiceData = {
    customerNameEn: 'English Text box',
    customerNameAr: 'Arabic Text box',
    invoiceNo: 'AGFHFVA/00001/2025',
    invoiceDate: '25/05/2024',
    products: Array.from({ length: 26 }, (_, i) => ({
      name: `Product ${i + 1}`,
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
  };

  useEffect(() => {
    const generatePDF = async () => {
      const blob = await pdf(<InvoicePDF data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };

    generatePDF();

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, []);

  const handlePrint = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.focus();
      iframeRef.current.contentWindow?.print();
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Invoice Preview</h1>
      {pdfUrl ? (
        <>
          <iframe
            ref={iframeRef}
            src={pdfUrl}
            width="100%"
            height="800px"
            style={{ border: '1px solid #ccc' }}
          />
          <div style={{ marginTop: 20 }}>
            <button onClick={handlePrint} style={{ padding: '10px 20px' }}>
              Print Invoice
            </button>
          </div>
        </>
      ) : (
        <p>Generating preview...</p>
      )}
    </div>
  );
};

export default InvoicePreviewPage;






// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   pdf,
// } from '@react-pdf/renderer';

// import useAuthGuard from '../utils/authGuard'

// const PAGE_WIDTH = 567;
// const PAGE_HEIGHT = 737;

// interface Product {
//   name: string;
//   quantity: number;
//   unitPrice: number;
//   total: number;
// }

// interface InvoiceData {
//   customerNameEn: string;
//   customerNameAr: string;
//   invoiceNo: string;
//   invoiceDate: string;
//   products: Product[];
//   total: number;
//   vatTotal: number;
//   grandTotal: number;
//   previousBalance: number;
//   cashReceived: number;
//   newBalance: number;
// }

// const styles = StyleSheet.create({
//   page: {
//     width: PAGE_WIDTH,
//     height: PAGE_HEIGHT,
//     padding: 20,
//     fontSize: 10,
//     paddingTop: '15%',
//     fontFamily: 'Helvetica',
//     backgroundColor: '#fff',
//   },
//   contentWrapper: {
//     flex: 1,
//     borderWidth: 3,
//     borderColor: '#c000c0',
//     padding: 10,
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   invoiceTable: {
//     flexDirection: 'row',
//     borderWidth: 2,
//     borderColor: '#c000c0',
//     marginBottom: 10,
//     height: 170,
//   },
//   leftSection: {
//     width: '50%',
//     padding: 8,
//     gap: 4,
//     borderRightWidth: 2,
//     borderColor: '#c000c0',
//   },
//   rightSection: {
//     width: '50%',
//     padding: 0,
//     flexDirection: 'column',
//   },
//   headerTopRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: '#c000c0',
//     height: 60,
//   },
//   column: {
//     width: '50%',
//     padding: 6,
//     justifyContent: 'center',
//   },
//   columnBorderRight: {
//     borderRightWidth: 1,
//     borderColor: '#c000c0',
//   },
//   bottomBlock: {
//     padding: 6,
//   },
//   label: {
//     fontWeight: 'bold',
//     marginBottom: 2,
//   },
//   productTable: {
//     marginTop: 8,
//     paddingHorizontal: 4,
//     flexGrow: 1,
//     borderWidth: 1,
//     borderColor: '#000',
//   },
//   footer: {
//     marginTop: 10,
//     borderTopWidth: 1,
//     paddingTop: 10,
//   },
//   tableRow: {
//     flexDirection: 'row',
//   },
//   tableCell: {
//     paddingHorizontal: 2,
//     paddingVertical: 2,
//     fontSize: 8,
//     borderRightWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: '#000',
//   },
//   lastCell: {
//     borderRightWidth: 0,
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
// });

// const InvoicePDF: React.FC<{ data: InvoiceData }> = ({ data }) => {
//   const productsPerPage = 15;
//   const productPages: Product[][] = [];

//   for (let i = 0; i < data.products.length; i += productsPerPage) {
//     productPages.push(data.products.slice(i, i + productsPerPage));
//   }

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//     useAuthGuard();

//   return (
//     <Document>
//       {productPages.map((productList, index) => (
//         <Page key={index} size={{ width: PAGE_WIDTH, height: PAGE_HEIGHT }} style={styles.page}>
//           <View style={{ alignItems: 'center', marginBottom: 6 }}>
//             <View
//               style={{
//                 backgroundColor: '#c000c0',
//                 paddingHorizontal: 12,
//                 paddingVertical: 4,
//                 borderRadius: 4,
//               }}
//             >
//               <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff' }}>
//                 TAX INVOICE (زهور)
//               </Text>
//             </View>
//           </View>

//           <View style={styles.contentWrapper}>
//             {/* Header */}
//             <View style={styles.invoiceTable}>
//               <View style={styles.leftSection}>
//                 <Text style={styles.label}>Customer Name: English</Text>
//                 <Text style={styles.label}>Customer Name: Arabic</Text>
//                 <Text style={styles.label}>Customer ID:</Text>
//                 <Text style={styles.label}>CR No:</Text>
//                 <Text style={styles.label}>VAT No:</Text>
//                 <Text style={styles.label}>Building No:</Text>
//                 <Text style={styles.label}>Postal Code:</Text>
//                 <Text style={styles.label}>District:</Text>
//               </View>

//               <View style={styles.rightSection}>
//                 <View style={styles.headerTopRow}>
//                   <View style={[styles.column, styles.columnBorderRight]}>
//                     <Text style={styles.label}>Invoice No</Text>
//                     <Text>{data.invoiceNo}</Text>
//                   </View>
//                   <View style={styles.column}>
//                     <Text style={styles.label}>Invoice Date</Text>
//                     <Text>{data.invoiceDate}</Text>
//                   </View>
//                 </View>
//                 <View style={styles.bottomBlock}>
//                   <Text style={styles.label}>Invoice From & Branches:</Text>
//                   <Text>AL Gowzaa Flowers Trading Est.(HQ)</Text>
//                   <Text>Muth Nabi Street, Al Malaz District</Text>
//                   <Text>Riyadh, KSA. Postal Code: 12629</Text>
//                   <Text>Mobile: 0558223636, 0502427888</Text>
//                   <Text>Email: gowzaaflowers@gmail.com</Text>
//                   <Text>Branch: Haferalbatin, Postal Code: 00000</Text>
//                 </View>
//               </View>
//             </View>

//             {/* Product Table */}
//             <View style={styles.productTable}>
//               <View style={[styles.tableRow, { backgroundColor: '#f0f0f0' }]}>
//                 <Text style={[styles.tableCell, styles.bold, { width: '10%' }]}>SR No</Text>
//                 <Text style={[styles.tableCell, styles.bold, { width: '30%' }]}>Description</Text>
//                 <Text style={[styles.tableCell, styles.bold, { width: '10%' }]}>Qty</Text>
//                 <Text style={[styles.tableCell, styles.bold, { width: '15%' }]}>Price</Text>
//                 <Text style={[styles.tableCell, styles.bold, { width: '10%' }]}>VAT%</Text>
//                 <Text style={[styles.tableCell, styles.bold, { width: '15%' }]}>Tax</Text>
//                 <Text style={[styles.tableCell, styles.bold, { width: '10%' }, styles.lastCell]}>
//                   Total
//                 </Text>
//               </View>

//               {productList.map((item, idx) => {
//                 const srNo = idx + 1 + index * productsPerPage;
//                 const vatPercent = 15;
//                 const taxAmount = (item.total * vatPercent) / 100;
//                 const totalWithTax = item.total + taxAmount;

//                 return (
//                   <View style={styles.tableRow} key={idx}>
//                     <Text style={[styles.tableCell, { width: '10%' }]}>{srNo}</Text>
//                     <Text style={[styles.tableCell, { width: '30%' }]}>{item.name}</Text>
//                     <Text style={[styles.tableCell, { width: '10%' }]}>{item.quantity}</Text>
//                     <Text style={[styles.tableCell, { width: '15%' }]}>SAR {item.unitPrice.toFixed(2)}</Text>
//                     <Text style={[styles.tableCell, { width: '10%' }]}>{vatPercent}%</Text>
//                     <Text style={[styles.tableCell, { width: '15%' }]}>SAR {taxAmount.toFixed(2)}</Text>
//                     <Text style={[styles.tableCell, { width: '10%' }, styles.lastCell]}>
//                       SAR {totalWithTax.toFixed(2)}
//                     </Text>
//                   </View>
//                 );
//               })}
//             </View>

//             {/* Footer with Square Table */}
//             {index === productPages.length - 1 && (
//               <View style={styles.footer}>
//                 <View style={{ flexDirection: 'row' }}>
//                   <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
//                     <Text style={styles.label}>[ QR CODE PLACEHOLDER ]</Text>
//                   </View>

//                   <View
//                     style={{
//                       width: '50%',
//                       borderLeftWidth: 1,
//                       borderColor: '#c000c0',
//                       borderWidth: 1,
//                       borderRightWidth: 1,
//                       borderTopWidth: 1,
//                     }}
//                   >
//                     <View style={[styles.tableRow, { backgroundColor: '#f0f0f0' }]}>
//                       <Text style={[styles.tableCell, styles.bold, { width: '50%' }]}>Description</Text>
//                       <Text style={[styles.tableCell, styles.bold, { width: '50%' }, styles.lastCell]}>
//                         Amount (SAR)
//                       </Text>
//                     </View>

//                     {[
//                       { label: 'Total', value: data.total },
//                       { label: 'VAT (15%)', value: data.vatTotal },
//                       { label: 'Grand Total', value: data.grandTotal },
//                       { label: 'Previous Balance', value: data.previousBalance },
//                       { label: 'Cash Received', value: data.cashReceived },
//                       { label: 'New Balance', value: data.newBalance },
//                     ].map((item, i, arr) => (
//                       <View style={styles.tableRow} key={i}>
//                         <Text style={[styles.tableCell, { width: '50%' }]}>{item.label}</Text>
//                         <Text
//   style={[
//     styles.tableCell,
//     { width: '50%' },
//     ...(i === arr.length - 1 ? [styles.lastCell] : [])
//   ]}
// >
//   {item.value.toFixed(2)}
// </Text>

//                       </View>
//                     ))}
//                   </View>
//                 </View>

//                 <View style={{ flexDirection: 'row', marginTop: 20 }}>
//                   <View style={{ width: '50%' }}>
//                     <Text>Customer Signature: __________________</Text>
//                   </View>
//                   <View style={{ width: '50%' }}>
//                     <Text>Authorized Signature: __________________</Text>
//                   </View>
//                 </View>
//               </View>
//             )}
//           </View>
//         </Page>
//       ))}
//     </Document>
//   );
// };

// const InvoicePreviewPage: React.FC = () => {
//   const [pdfUrl, setPdfUrl] = useState<string | null>(null);
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   const data: InvoiceData = {
//     customerNameEn: 'English Text box',
//     customerNameAr: 'Arabic Text box',
//     invoiceNo: 'AGFHFVA/00001/2025',
//     invoiceDate: '25/05/2024',
//     products: Array.from({ length: 35 }, (_, i) => ({
//       name: `Product ${i + 1}`,
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

//   useEffect(() => {
//     const generatePDF = async () => {
//       const blob = await pdf(<InvoicePDF data={data} />).toBlob();
//       const url = URL.createObjectURL(blob);
//       setPdfUrl(url);
//     };

//     generatePDF();

//     return () => {
//       if (pdfUrl) URL.revokeObjectURL(pdfUrl);
//     };
//   }, []);

//   const handlePrint = () => {
//     if (iframeRef.current) {
//       iframeRef.current.contentWindow?.focus();
//       iframeRef.current.contentWindow?.print();
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Invoice Preview</h1>
//       {pdfUrl ? (
//         <>
//           <iframe
//             ref={iframeRef}
//             src={pdfUrl}
//             width="100%"
//             height="800px"
//             style={{ border: '1px solid #ccc' }}
//           />
//           <div style={{ marginTop: 20 }}>
//             <button onClick={handlePrint} style={{ padding: '10px 20px' }}>
//               Print Invoice
//             </button>
//           </div>
//         </>
//       ) : (
//         <p>Generating preview...</p>
//       )}
//     </div>
//   );
// };

// export default InvoicePreviewPage;
