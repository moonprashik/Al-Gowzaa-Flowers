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
      // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2QwYWRjYjQwNTJiZjg3YmRjOTlhZGU4YjBlYWRhMDY4NDRiYjg5M2NjNWEyYTI5MDQ2MjQxYmI4YzUzZWY5NjdmMzQ1NjcxN2M2NzVhMDUiLCJpYXQiOjE3NTE3ODgzNjMuNjU0MDUwMTExNzcwNjI5ODgyODEyNSwibmJmIjoxNzUxNzg4MzYzLjY1NDA1MjAxOTExOTI2MjY5NTMxMjUsImV4cCI6MTc4MzMyNDM2My42NDk2NjAxMTA0NzM2MzI4MTI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.igdSA4vkVzbcutbdZ-5LQ1BHL_clASYcx_6QtnAcPocvWHFx_jGh2ViYMDvpuvNqFGMNall1KETKnp3C39C78XQSuetH5qDrpeAPcbPLUH6eqJ3EVSxo-vy64PyUm-yZ_qqyaSCVEAVbvLlvGPuAcLmfI081usjQsbKyDgRyFKEZrk37U_mveM2jWnYsn8T9L7BejYtGcj8CBHG4cT3O4oDumdRez1AQjP5LklvD3i74-npRx1W-qj48-35RzxFGOai5NVahUErerCYh5DxDD2ChDjEgFBm4nDFO5HTGGrLqBkRnJo3MD8mN5BC2VIFT5lFL8XG7o4c6QpnNZ1NPeE6YsV1Yy9pcoAj74xs3vq-mpHkm-o7DVyTpjGoiW4Br77n3C6IAKciSFcpjEZuXaxWpJ4yKdrxomk8hwrFscP7UbHMsHcFi54HuxkJ0fRmyyuKeT75gAx-eefQvI7QpOFJOcKpc39MOgDkpZN7fDM9Xak_wd3RypEZE24D7X6y_sTq15Ug60qsMUC3UWsQccil5nnW4wuRzh5ajGrCPhazAzrfiFLjZwhPfNdDAqbThBg-IZChrEEtje1vhuw_LQXDdsaBHbepfTPJ2ADPFhHBpg8JaLGa0PQrIDdx0DWnH-BVmIRLEU28rGOEsf4NPX6Wlli3_cavmUxB9-J_VABw';
      const response = await fetch("https://testing.algowzaa.online/api/products",{
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
      await axios.post("https://testing.algowzaa.online/api/products/create", newProduct);
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
      await axios.delete(`https://testing.algowzaa.online/api/products/delete/${id}`);
      setProducts(products.filter((p) => p.id !== id));
      setSuccess("Product deleted successfully");
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to delete product");
    }
  };

  const handleUpdateProduct = async (id: string) => {
    try {
      await axios.put(`https://testing.algowzaa.online/api/products/update/${id}`, editingValues);
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
