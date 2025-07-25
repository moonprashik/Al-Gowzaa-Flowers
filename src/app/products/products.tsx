

// import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

// interface Product {
//   id: number;
//   name_en: string;
//   // add other fields if needed
// }

// interface RequestBody {
//   customer_name: string;
//   vat_number: string;
//   location: string;
//   product: number[];
//   quantity: number[];
//   price: number[];
// }

// export default function ProductForm() {
//   const [productsList, setProductsList] = useState<Product[]>([]);
//   const [selectedProducts, setSelectedProducts] = useState<(number | '')[]>([]);
//   const [quantities, setQuantities] = useState<{ [key: number]: string }>({});
//   const [prices, setPrices] = useState<{ [key: number]: string }>({});

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const res = await fetch('https://testing.algowzaa.online/api/products');
//         const data = await res.json();

//         if (Array.isArray(data.data)) {
//           setProductsList(data.data);
//         } else {
//           setProductsList([]);
//         }
//       } catch (error) {
//         console.error('Failed to fetch products', error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   const handleProductChange = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
//     const value = e.target.value === '' ? '' : parseInt(e.target.value, 10);
//     const newSelected = [...selectedProducts];
//     newSelected[index] = value;
//     setSelectedProducts(newSelected);
//   };

//   const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
//     const value = e.target.value;
//     setQuantities(prev => ({ ...prev, [index]: value }));
//   };

//   const handlePriceChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
//     const value = e.target.value;
//     setPrices(prev => ({ ...prev, [index]: value }));
//   };

//   const addProductRow = () => {
//     setSelectedProducts([...selectedProducts, '']);
//   };

//   const removeProductRow = (index: number) => {
//     setSelectedProducts(selectedProducts.filter((_, i) => i !== index));

//     setQuantities(prev => {
//       const copy = { ...prev };
//       delete copy[index];
//       return copy;
//     });

//     setPrices(prev => {
//       const copy = { ...prev };
//       delete copy[index];
//       return copy;
//     });
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     const filteredProducts = selectedProducts.filter((p): p is number => p !== '');

//     if (filteredProducts.length === 0) {
//       alert('Please select at least one product');
//       return;
//     }

//     const body: RequestBody = {
//       customer_name: "Ahmad Al-Saleh",
//       vat_number: "310122393500003",
//       location: "Riyadh",
//       product: filteredProducts,
//       quantity: filteredProducts.map((_, i) => parseInt(quantities[i]) || 1),
//       price: filteredProducts.map((_, i) => parseFloat(prices[i]) || 0),
//     };

//     console.log('Request body:', body);

//     try {
//       const res = await fetch('https://testing.algowzaa.online/api/invoice/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//       });

//       if (res.ok) {
//         const responseData = await res.json();
//         console.log('API Response:', responseData);
//         alert('Order submitted successfully');
//         setSelectedProducts([]);
//         setQuantities({});
//         setPrices({});
//       } else {
//         alert('Failed to submit order');
//       }
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Error submitting order');
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4 text-black">
//       <h1 className="text-xl font-bold mb-4">Order Form</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {selectedProducts.map((selected, idx) => (
//           <div key={idx} className="flex space-x-4 items-center text-black">
//             <select
//               value={selected || ''}
//               onChange={(e) => handleProductChange(e, idx)}
//               className="border border-gray-300 rounded p-2 flex-1 text-black"
//               required
//             >
//               <option value="" className="text-black">Select product</option>
//               {productsList.map(product => (
//                 <option key={product.id} value={product.id} className="text-black">
//                   {product.name_en}
//                 </option>
//               ))}
//             </select>

//             <input
//               type="number"
//               min={1}
//               placeholder="Quantity"
//               value={quantities[idx] || ''}
//               onChange={(e) => handleQuantityChange(e, idx)}
//               className="border border-gray-300 rounded p-2 w-24 text-black"
//               required
//             />
//             <input
//               type="number"
//               min={0}
//               step={0.01}
//               placeholder="Price"
//               value={prices[idx] || ''}
//               onChange={(e) => handlePriceChange(e, idx)}
//               className="border border-gray-300 rounded p-2 w-32 text-black"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => removeProductRow(idx)}
//               className="text-red-500 font-bold"
//               title="Remove product"
//             >
//               &times;
//             </button>
//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={addProductRow}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           + Add Product
//         </button>

//         <button
//           type="submit"
//           className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//         >
//           Submit Order
//         </button>
//       </form>
//     </div>
//   );
// }

"use client"

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';

interface Product {
  id: number;
  name_en: string;
  // add other fields if needed
}

interface RequestBody {
  customer_name: string;
  vat_number: string;
  location: string;
  product: number[];
  quantity: number[];
  price: number[];
}

export default function ProductForm() {
  const router = useRouter();
  const [, setInvoiceData] = useState(null);


  const [productsList, setProductsList] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<(number | '')[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: string }>({});
  const [prices, setPrices] = useState<{ [key: number]: string }>({});

  const [customerName, setCustomerName] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (router.query.data) {
      const parsedData = JSON.parse(decodeURIComponent(router.query.data as string));
      setInvoiceData(parsedData);
    }
  }, [router.query.data]);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const res = await fetch('https://testing.algowzaa.online/api/products');
  //       const data = await res.json();

  //       if (Array.isArray(data.data)) {
  //         setProductsList(data.data);
  //       } else {
  //         setProductsList([]);
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch products', error);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

//   useEffect(() => {
//   async function fetchProducts() {
//     try {
//       const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTA2MDg5YzhiZGVmNmQ2YTJkYTJjMTRmODEwN2M0NDAzZDFkYjdhZmYxMTJiZjM5ZGZhODY5OTBmNTFjYTU0MDhkOTFiM2JkMGJkNTYyNjIiLCJpYXQiOjE3NTE2MTQ3MjYuNTI3MjkyOTY2ODQyNjUxMzY3MTg3NSwibmJmIjoxNzUxNjE0NzI2LjUyNzI5NTExMjYwOTg2MzI4MTI1LCJleHAiOjE3ODMxNTA3MjYuNTIzMjk0OTI1Njg5Njk3MjY1NjI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dnK8vv8hZt6_PNzna6MD0tCTtLYZJc1G4TC0dQaCu-mXE5k29OkrLgn6y7A0vH5eulzl8AfddCaOY5cxNziU-0u7GLNS7ig_6jXhNiRHUWaHfIbqH8frXKTg_WMeYH0nklEhj2qAPxERURINi9EmDaMToB8FP2PBWQzrKdkZw6z2l7JeR_AlEGQyFdl_pSTu9aHG7xJES1nGL5Ha4czTvrzvYX7ZA0qN8Sj7Z9temcBZ72qyYKj37m7_YSTGvOwUWoUuuF_ncQ3-_J4L2V9UufDDLD-W80RZebNNq1weuhfyRmzFsioEG6GWGVMrt_QsTIw8wQdFwttAWR59noS_mYNzmDhKVR71NrOinfPyDVxmWvPZZ0cPOyneP_Jg8bcHP0m5GTMpNRurCqoFVuMatQD7Z4P8s_jttRuNAZrly6-ykrOjrPfBVd_VKNki7rBfopmvxMhW8KYKuywzfVznBcHEN0At7s1a2rMk5vyLp8ivCF19lj0aMmKm9g_Sy7OqFIw8sTosRxRnkhcQ_KFe471yQvABBFRwOHPQ2wjRuDAajxETNH4BF-XXQLImN4OwRkeEFohaCiSFUldRThfoKyDcOMX1e8oLopbFXKRsohUSIg-IG2YOWwK1WI99pQEHShdr0yjVovXQ4ibsUWGZZuJUn4Vn9Ebor_FEE3ud4Jc"

//       const res = await fetch('https://testing.algowzaa.online/api/products', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log('Response status:', res.status);

//       if (!res.ok) {
//         const errorText = await res.text();
//         throw new Error(`API error: ${res.status} - ${errorText}`);
//       }

//       const data = await res.json();
//       console.log('Fetched data:', data);

//       if (Array.isArray(data.data)) {
//         setProductsList(data.data);
//       } else {
//         setProductsList([]);
//       }
//     } catch (error) {
//       console.error('Failed to fetch products:', error);
//     }
//   }

//   fetchProducts();
// }, []);

useEffect(() => {
  async function fetchProducts() {
    try {
      const res = await fetch('https://testing.algowzaa.online/api/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTA2MDg5YzhiZGVmNmQ2YTJkYTJjMTRmODEwN2M0NDAzZDFkYjdhZmYxMTJiZjM5ZGZhODY5OTBmNTFjYTU0MDhkOTFiM2JkMGJkNTYyNjIiLCJpYXQiOjE3NTE2MTQ3MjYuNTI3MjkyOTY2ODQyNjUxMzY3MTg3NSwibmJmIjoxNzUxNjE0NzI2LjUyNzI5NTExMjYwOTg2MzI4MTI1LCJleHAiOjE3ODMxNTA3MjYuNTIzMjk0OTI1Njg5Njk3MjY1NjI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dnK8vv8hZt6_PNzna6MD0tCTtLYZJc1G4TC0dQaCu-mXE5k29OkrLgn6y7A0vH5eulzl8AfddCaOY5cxNziU-0u7GLNS7ig_6jXhNiRHUWaHfIbqH8frXKTg_WMeYH0nklEhj2qAPxERURINi9EmDaMToB8FP2PBWQzrKdkZw6z2l7JeR_AlEGQyFdl_pSTu9aHG7xJES1nGL5Ha4czTvrzvYX7ZA0qN8Sj7Z9temcBZ72qyYKj37m7_YSTGvOwUWoUuuF_ncQ3-_J4L2V9UufDDLD-W80RZebNNq1weuhfyRmzFsioEG6GWGVMrt_QsTIw8wQdFwttAWR59noS_mYNzmDhKVR71NrOinfPyDVxmWvPZZ0cPOyneP_Jg8bcHP0m5GTMpNRurCqoFVuMatQD7Z4P8s_jttRuNAZrly6-ykrOjrPfBVd_VKNki7rBfopmvxMhW8KYKuywzfVznBcHEN0At7s1a2rMk5vyLp8ivCF19lj0aMmKm9g_Sy7OqFIw8sTosRxRnkhcQ_KFe471yQvABBFRwOHPQ2wjRuDAajxETNH4BF-XXQLImN4OwRkeEFohaCiSFUldRThfoKyDcOMX1e8oLopbFXKRsohUSIg-IG2YOWwK1WI99pQEHShdr0yjVovXQ4ibsUWGZZuJUn4Vn9Ebor_FEE3ud4Jc'
        }
      });

      const data = await res.json();

      if (Array.isArray(data.data)) {
        setProductsList(data.data);
      } else {
        setProductsList([]);
      }
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  }

  fetchProducts();
}, []);



  const handleProductChange = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
    const value = e.target.value === '' ? '' : parseInt(e.target.value, 10);
    const newSelected = [...selectedProducts];
    newSelected[index] = value;
    setSelectedProducts(newSelected);
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    setQuantities(prev => ({ ...prev, [index]: value }));
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    setPrices(prev => ({ ...prev, [index]: value }));
  };

  const addProductRow = () => {
    setSelectedProducts([...selectedProducts, '']);
  };

  const removeProductRow = (index: number) => {
    setSelectedProducts(selectedProducts.filter((_, i) => i !== index));

    setQuantities(prev => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });

    setPrices(prev => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !vatNumber.trim() || !location.trim()) {
      alert('Please fill in customer name, VAT number, and location');
      return;
    }

    const filteredProducts = selectedProducts.filter((p): p is number => p !== '');

    if (filteredProducts.length === 0) {
      alert('Please select at least one product');
      return;
    }

    const body: RequestBody = {
      customer_name: customerName,
      vat_number: vatNumber,
      location: location,
      product: filteredProducts,
      quantity: filteredProducts.map((_, i) => parseInt(quantities[i]) || 1),
      price: filteredProducts.map((_, i) => parseFloat(prices[i]) || 0),
    };

    console.log('Request body:', body);

    try {
      const res = await fetch('https://testing.algowzaa.online/api/invoice/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const responseData = await res.json();
        
        console.log('API Response:', responseData);
        alert('Order submitted successfully');
       router.push(`/invoice?orderId=${responseData.orderId}`);
        setSelectedProducts([]);
        setQuantities({});
        setPrices({});
        setCustomerName('');
        setVatNumber('');
        setLocation('');
      } else {
        alert('Failed to submit order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Error submitting order');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 text-black">
      <h1 className="text-xl font-bold mb-4">Order Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full text-black"
          required
        />
        <input
          type="text"
          placeholder="VAT Number"
          value={vatNumber}
          onChange={(e) => setVatNumber(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full text-black"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full text-black"
          required
        />

        {selectedProducts.map((selected, idx) => (
          <div key={idx} className="flex space-x-4 items-center text-black">
            <select
              value={selected || ''}
              onChange={(e) => handleProductChange(e, idx)}
              className="border border-gray-300 rounded p-2 flex-1 text-black"
              required
            >
              <option value="" className="text-black">Select product</option>
              {productsList.map(product => (
                <option key={product.id} value={product.id} className="text-black">
                  {product.name_en}
                </option>
              ))}
            </select>

            <input
              type="number"
              min={1}
              placeholder="Quantity"
              value={quantities[idx] || ''}
              onChange={(e) => handleQuantityChange(e, idx)}
              className="border border-gray-300 rounded p-2 w-24 text-black"
              required
            />
            <input
              type="number"
              min={0}
              step={0.01}
              placeholder="Price"
              value={prices[idx] || ''}
              onChange={(e) => handlePriceChange(e, idx)}
              className="border border-gray-300 rounded p-2 w-32 text-black"
              required
            />
            <button
              type="button"
              onClick={() => removeProductRow(idx)}
              className="text-red-500 font-bold"
              title="Remove product"
            >
              &times;
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addProductRow}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Product
        </button>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
