"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PencilIcon, TrashIcon, PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

interface Product {
  id: string;
  name_en: string;
  name_ar: string;
}

const ProductCrudTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name_en: "", name_ar: "" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValues, setEditingValues] = useState<{ name_en: string; name_ar: string }>({ name_en: "", name_ar: "" });
  const [, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");


  const token = localStorage.getItem('token') 
  //const token = JSON.parse(localStorage.getItem('token') || '');

console.log( "Token from Async storage. ----->",token)

  const fetchProducts = async () => {
    setLoading(true);
    try {
       //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmNjMGQ3NWZhMWYxYmE4ZTgxOTFiOTQ3MTBiZTk1ZjJlZjE5NDRhNzU0N2NmMThhODVlODA4MGIwZTZiZTMwNzFiOWRjOTkzMzEyODFlOTIiLCJpYXQiOjE3NTQzMDE0OTYuMDY4ODA5OTg2MTE0NTAxOTUzMTI1LCJuYmYiOjE3NTQzMDE0OTYuMDY4ODExODkzNDYzMTM0NzY1NjI1LCJleHAiOjE3ODU4Mzc0OTYuMDY0MDQ5OTU5MTgyNzM5MjU3ODEyNSwic3ViIjoiMSIsInNjb3BlcyI6W119.JMKznvUT4GQKxJs6O5ye2qkeCst6iVmcTd8NKTEhBu_Btp0rm0SYRN5NTt8OrEF8s7g7pvRJD8Nt6knAmH9luzevY5ezGKeozq3ZRs9-o_XIhV_SvUmAs6KwyV4-jvcNYntPLZ-KDJETANeUTtduaOdXtasp61GsOriUiywp597k0A7tXsPbQ-znNqTkoMTYObJCnpMoM2k7lxPBQesg7wfrY7RjCXkVs93kZuhwmPGX3rsrEIL4mXvj28daSEC1ISr8rGsRslrBuecpDmCQPwtD10qA8QSGd9-VqdXjOXOXRrd3t-ZFWiflHTyaKeKvzUS4j0ioRJhm-XIZmFvB2gFY4EcsiNEjEaKTfdNf1iaAwBDZ2qZGamuKQ8sKMA1oMyUL_FitxUGEIbPh0_C3TwdGEvhbjf-rYXSMC0mfoA7hN5Ry5SC3Yk0yb_4k1rkUAZppXLhFjtDytyqq9HCdHsfbUWfHOHy1cEnCBc8R-JbksZiRgUY-LPFdp_pxr1XxjEb7o1u_4-Rn_KJBJ5tAwSbI7dVSdm6GrQ_N3K99jit9rDVywUyotTvl-x9pkfIEldGfmTw_vQnqKEhcAFUH2NTP32--jSDhlEopRTHgaLFlnyzOcbYw_SQnse5ukXWt2I-vNaB6bYN6egl84ymG2Ct4KeqL-9GQi0kylzSWjLs';
      const response = await fetch("https://testing.algowzaa.online/api/products/all",{
         method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      });
      if (!response.ok) throw new Error("Failed to fetch products");
      const json: { status: boolean; message: string; data: Product[] } = await response.json();
      setProducts(json.data);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    if (!newProduct.name_en.trim() && !newProduct.name_ar.trim()) return;
    try {
      
      await axios.post("https://testing.algowzaa.online/api/products/create", newProduct,{
        headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      });
      await fetchProducts();
      
      setNewProduct({ name_en: "", name_ar: "" });
      setSuccess("Product added successfully");
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to add product");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      await axios.delete(`https://testing.algowzaa.online/api/products/delete/${id}`,{
        headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      });
      setProducts(products.filter((p) => p.id !== id));
      setSuccess("Product deleted successfully");
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to delete product");
    }
  };

  const handleUpdateProduct = async (id: string) => {
    try {
      await axios.put(`https://testing.algowzaa.online/api/products/update/${id}`, editingValues, {
        
      });
      setProducts(products.map((p) => (p.id === id ? { ...p, ...editingValues } : p)));
      setEditingId(null);
      setSuccess("Product updated successfully");
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to update product");
    }
  };

  const filteredProducts = products.filter((product) =>
    (product.name_en?.toLowerCase() ?? "").includes(searchTerm.toLowerCase()) ||
    (product.name_ar?.toLowerCase() ?? "").includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 text-black">
      {/* <h2 className="text-2xl font-bold mb-4">Products</h2> */}

      {success && <div className="text-green-500 mb-2">{success}</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border bg-white p-2 rounded w-64 mb-4"
        />
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Product Name (EN)"
          value={newProduct.name_en}
          onChange={(e) => setNewProduct({ ...newProduct, name_en: e.target.value })}
          className="border bg-white p-2 mr-2 rounded"
        />
        <input
          type="text"
          placeholder="Product Name (AR)"
          value={newProduct.name_ar}
          onChange={(e) => setNewProduct({ ...newProduct, name_ar: e.target.value })}
          className="border bg-white p-2 mr-2 rounded"
        />
        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          <PlusIcon className="h-4 w-4 inline mr-1" /> Add
        </button>
      </div>

      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-100 text-black">
            <th className="border px-4 py-2">Product ID</th>
            <th className="border px-4 py-2">Name (EN)</th>
            <th className="border px-4 py-2">Name (AR)</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id} className="text-center text-black">
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">
                {editingId === product.id ? (
                  <input
                    type="text"
                    value={editingValues.name_en}
                    onChange={(e) => setEditingValues({ ...editingValues, name_en: e.target.value })}
                    className="border p-1 rounded w-full"
                  />
                ) : (
                  product.name_en
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === product.id ? (
                  <input
                    type="text"
                    value={editingValues.name_ar}
                    onChange={(e) => setEditingValues({ ...editingValues, name_ar: e.target.value })}
                    className="border p-1 rounded w-full"
                  />
                ) : (
                  product.name_ar
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === product.id ? (
                  <button
                    onClick={() => handleUpdateProduct(product.id)}
                    className="text-green-600 hover:text-green-700 mr-2"
                  >
                    <CheckIcon className="h-5 w-5 inline" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingId(product.id);
                      setEditingValues({ name_en: product.name_en, name_ar: product.name_ar });
                    }}
                    className="text-yellow-500 hover:text-yellow-600 mr-2"
                  >
                    <PencilIcon className="h-5 w-5 inline" />
                  </button>
                )}
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <TrashIcon className="h-5 w-5 inline" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCrudTable;
