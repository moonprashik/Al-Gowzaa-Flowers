(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/products/productsCrud.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$PencilIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/PencilIcon.js [app-client] (ecmascript) <export default as PencilIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$TrashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/TrashIcon.js [app-client] (ecmascript) <export default as TrashIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$PlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/PlusIcon.js [app-client] (ecmascript) <export default as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$CheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/CheckIcon.js [app-client] (ecmascript) <export default as CheckIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ProductCrudTable = ()=>{
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newProduct, setNewProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name_en: "",
        name_ar: ""
    });
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingValues, setEditingValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name_en: "",
        name_ar: ""
    });
    const [, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const token = localStorage.getItem('token');
    //const token = JSON.parse(localStorage.getItem('token') || '');
    console.log("Token from Async storage. ----->", token);
    const fetchProducts = async ()=>{
        setLoading(true);
        try {
            // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2QwYWRjYjQwNTJiZjg3YmRjOTlhZGU4YjBlYWRhMDY4NDRiYjg5M2NjNWEyYTI5MDQ2MjQxYmI4YzUzZWY5NjdmMzQ1NjcxN2M2NzVhMDUiLCJpYXQiOjE3NTE3ODgzNjMuNjU0MDUwMTExNzcwNjI5ODgyODEyNSwibmJmIjoxNzUxNzg4MzYzLjY1NDA1MjAxOTExOTI2MjY5NTMxMjUsImV4cCI6MTc4MzMyNDM2My42NDk2NjAxMTA0NzM2MzI4MTI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.igdSA4vkVzbcutbdZ-5LQ1BHL_clASYcx_6QtnAcPocvWHFx_jGh2ViYMDvpuvNqFGMNall1KETKnp3C39C78XQSuetH5qDrpeAPcbPLUH6eqJ3EVSxo-vy64PyUm-yZ_qqyaSCVEAVbvLlvGPuAcLmfI081usjQsbKyDgRyFKEZrk37U_mveM2jWnYsn8T9L7BejYtGcj8CBHG4cT3O4oDumdRez1AQjP5LklvD3i74-npRx1W-qj48-35RzxFGOai5NVahUErerCYh5DxDD2ChDjEgFBm4nDFO5HTGGrLqBkRnJo3MD8mN5BC2VIFT5lFL8XG7o4c6QpnNZ1NPeE6YsV1Yy9pcoAj74xs3vq-mpHkm-o7DVyTpjGoiW4Br77n3C6IAKciSFcpjEZuXaxWpJ4yKdrxomk8hwrFscP7UbHMsHcFi54HuxkJ0fRmyyuKeT75gAx-eefQvI7QpOFJOcKpc39MOgDkpZN7fDM9Xak_wd3RypEZE24D7X6y_sTq15Ug60qsMUC3UWsQccil5nnW4wuRzh5ajGrCPhazAzrfiFLjZwhPfNdDAqbThBg-IZChrEEtje1vhuw_LQXDdsaBHbepfTPJ2ADPFhHBpg8JaLGa0PQrIDdx0DWnH-BVmIRLEU28rGOEsf4NPX6Wlli3_cavmUxB9-J_VABw';
            const response = await fetch("https://testing.algowzaa.online/api/products", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) throw new Error("Failed to fetch products");
            const json = await response.json();
            setProducts(json.data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductCrudTable.useEffect": ()=>{
            fetchProducts();
        }
    }["ProductCrudTable.useEffect"], []);
    const handleAddProduct = async ()=>{
        if (!newProduct.name_en.trim() && !newProduct.name_ar.trim()) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://testing.algowzaa.online/api/products/create", newProduct);
            await fetchProducts();
            setNewProduct({
                name_en: "",
                name_ar: ""
            });
            setSuccess("Product added successfully");
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to add product");
        }
    };
    const handleDeleteProduct = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`https://testing.algowzaa.online/api/products/delete/${id}`);
            setProducts(products.filter((p)=>p.id !== id));
            setSuccess("Product deleted successfully");
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to delete product");
        }
    };
    const handleUpdateProduct = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`https://testing.algowzaa.online/api/products/update/${id}`, editingValues);
            setProducts(products.map((p)=>p.id === id ? {
                    ...p,
                    ...editingValues
                } : p));
            setEditingId(null);
            setSuccess("Product updated successfully");
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to update product");
        }
    };
    const filteredProducts = products.filter((product)=>(product.name_en?.toLowerCase() ?? "").includes(searchTerm.toLowerCase()) || (product.name_ar?.toLowerCase() ?? "").includes(searchTerm.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 text-black",
        children: [
            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-green-500 mb-2",
                children: success
            }, void 0, false, {
                fileName: "[project]/src/app/products/productsCrud.tsx",
                lineNumber: 100,
                columnNumber: 19
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-500 mb-2",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/products/productsCrud.tsx",
                lineNumber: 101,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search by product name...",
                    value: searchTerm,
                    onChange: (e)=>setSearchTerm(e.target.value),
                    className: "border bg-white p-2 rounded w-64 mb-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/products/productsCrud.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/products/productsCrud.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Product Name (EN)",
                        value: newProduct.name_en,
                        onChange: (e)=>setNewProduct({
                                ...newProduct,
                                name_en: e.target.value
                            }),
                        className: "border bg-white p-2 mr-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/productsCrud.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Product Name (AR)",
                        value: newProduct.name_ar,
                        onChange: (e)=>setNewProduct({
                                ...newProduct,
                                name_ar: e.target.value
                            }),
                        className: "border bg-white p-2 mr-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/productsCrud.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddProduct,
                        className: "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$PlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                                className: "h-4 w-4 inline mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/productsCrud.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            " Add"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/productsCrud.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/productsCrud.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "min-w-full border text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-gray-100 text-black",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-4 py-2",
                                    children: "Product ID"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/productsCrud.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-4 py-2",
                                    children: "Name (EN)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/productsCrud.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-4 py-2",
                                    children: "Name (AR)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/productsCrud.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-4 py-2",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/productsCrud.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/products/productsCrud.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/productsCrud.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "text-center text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-4 py-2",
                                        children: product.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/productsCrud.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-4 py-2",
                                        children: editingId === product.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingValues.name_en,
                                            onChange: (e)=>setEditingValues({
                                                    ...editingValues,
                                                    name_en: e.target.value
                                                }),
                                            className: "border p-1 rounded w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/productsCrud.tsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this) : product.name_en
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/productsCrud.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-4 py-2",
                                        children: editingId === product.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingValues.name_ar,
                                            onChange: (e)=>setEditingValues({
                                                    ...editingValues,
                                                    name_ar: e.target.value
                                                }),
                                            className: "border p-1 rounded w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/productsCrud.tsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this) : product.name_ar
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/productsCrud.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-4 py-2",
                                        children: [
                                            editingId === product.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleUpdateProduct(product.id),
                                                className: "text-green-600 hover:text-green-700 mr-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$CheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                                                    className: "h-5 w-5 inline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/productsCrud.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/productsCrud.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setEditingId(product.id);
                                                    setEditingValues({
                                                        name_en: product.name_en,
                                                        name_ar: product.name_ar
                                                    });
                                                },
                                                className: "text-yellow-500 hover:text-yellow-600 mr-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$PencilIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__["PencilIcon"], {
                                                    className: "h-5 w-5 inline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/productsCrud.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/productsCrud.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDeleteProduct(product.id),
                                                className: "text-red-500 hover:text-red-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$TrashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__["TrashIcon"], {
                                                    className: "h-5 w-5 inline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/productsCrud.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/productsCrud.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/productsCrud.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, product.id, true, {
                                fileName: "[project]/src/app/products/productsCrud.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/productsCrud.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/productsCrud.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/productsCrud.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
};
_s(ProductCrudTable, "Seww7KrPqhz4Uibw+gdX0YyiQlc=");
_c = ProductCrudTable;
const __TURBOPACK__default__export__ = ProductCrudTable;
var _c;
__turbopack_context__.k.register(_c, "ProductCrudTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/products/CreateInvoice.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import React, { ChangeEvent, FormEvent, useEffect, useState, } from "react";
// import {  useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { Listbox } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
// import ProductCrudTable from './productsCrud'
// //import InvoicePage from "./products";
// interface ApiProduct {
//   id: number;
//   name_en: string;
//   name_ar: string;
// }
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
// function Products () {
//   const router = useRouter();
//   const [apiProducts, setApiProducts] = useState<ApiProduct[]>([]);
//   const [, setFilteredProducts] = useState<ApiProduct[]>([]);
//   const [searchTerm,] = useState<string>("");
//   const searchParams = useSearchParams();
//   const location = searchParams.get('location');
//   const option = searchParams.get('option');
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [locations, setLocations] = useState<string>("");
//   const [selectedTab, setSelectedTab] = useState<string>("home");
//   // Product Functions
//   const [productsList, setProductsList] = useState<Product[]>([]);
//     const [selectedProducts, setSelectedProducts] = useState<(number | '')[]>([]);
//     const [quantities, setQuantities] = useState<{ [key: number]: string }>({});
//     const [prices, setPrices] = useState<{ [key: number]: string }>({});
//     const [customerName, setCustomerName] = useState('');
//     const [vatNumber, setVatNumber] = useState('');
//     const [loc, setLocation] = useState('');
//  useEffect(() => {
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
//   useEffect(()=>{
//     setLocation(`${location} ( ${option} )`)
//     console.log("Loc ---->", locations)
//   },[])
// const handleProductChange = (value: number | '', index: number) => {
//   const newSelected = [...selectedProducts];
//   newSelected[index] = value;
//   setSelectedProducts(newSelected);
// };
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
//     if (!customerName.trim() || !vatNumber.trim() || !loc.trim()) {
//       alert('Please fill in customer name, VAT number, and location');
//       return;
//     }
//     const filteredProducts = selectedProducts.filter((p): p is number => p !== '');
//     if (filteredProducts.length === 0) {
//       alert('Please select at least one product');
//       return;
//     }
//     const body: RequestBody = {
//       customer_name: customerName,
//       vat_number: vatNumber,
//       location: locations,
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
//         const invoiceId = responseData.data.invoice_id;
//         console.log('API Response:', invoiceId);
//         alert('Order submitted successfully');
//         setSelectedProducts([]);
//         setQuantities({});
//         setPrices({});
//         setCustomerName('');
//         setVatNumber('');
//        router.push(`/invoice?invoice_id=${invoiceId}`);
//         console.log("LOC ------> ",locations)
//       } else {
//         alert('Failed to submit order');
//       }
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Error submitting order');
//     }
//   };
//      // Product Functions
//   useEffect(() => {
//     fetchProducts();
//   },[]);
// const fetchProducts = async () => {
//   setLoading(true);
//   try {
//     const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2QwYWRjYjQwNTJiZjg3YmRjOTlhZGU4YjBlYWRhMDY4NDRiYjg5M2NjNWEyYTI5MDQ2MjQxYmI4YzUzZWY5NjdmMzQ1NjcxN2M2NzVhMDUiLCJpYXQiOjE3NTE3ODgzNjMuNjU0MDUwMTExNzcwNjI5ODgyODEyNSwibmJmIjoxNzUxNzg4MzYzLjY1NDA1MjAxOTExOTI2MjY5NTMxMjUsImV4cCI6MTc4MzMyNDM2My42NDk2NjAxMTA0NzM2MzI4MTI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.igdSA4vkVzbcutbdZ-5LQ1BHL_clASYcx_6QtnAcPocvWHFx_jGh2ViYMDvpuvNqFGMNall1KETKnp3C39C78XQSuetH5qDrpeAPcbPLUH6eqJ3EVSxo-vy64PyUm-yZ_qqyaSCVEAVbvLlvGPuAcLmfI081usjQsbKyDgRyFKEZrk37U_mveM2jWnYsn8T9L7BejYtGcj8CBHG4cT3O4oDumdRez1AQjP5LklvD3i74-npRx1W-qj48-35RzxFGOai5NVahUErerCYh5DxDD2ChDjEgFBm4nDFO5HTGGrLqBkRnJo3MD8mN5BC2VIFT5lFL8XG7o4c6QpnNZ1NPeE6YsV1Yy9pcoAj74xs3vq-mpHkm-o7DVyTpjGoiW4Br77n3C6IAKciSFcpjEZuXaxWpJ4yKdrxomk8hwrFscP7UbHMsHcFi54HuxkJ0fRmyyuKeT75gAx-eefQvI7QpOFJOcKpc39MOgDkpZN7fDM9Xak_wd3RypEZE24D7X6y_sTq15Ug60qsMUC3UWsQccil5nnW4wuRzh5ajGrCPhazAzrfiFLjZwhPfNdDAqbThBg-IZChrEEtje1vhuw_LQXDdsaBHbepfTPJ2ADPFhHBpg8JaLGa0PQrIDdx0DWnH-BVmIRLEU28rGOEsf4NPX6Wlli3_cavmUxB9-J_VABw'; // Replace with actual token logic
//     const response = await fetch("https://testing.algowzaa.online/api/products", {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });
//     if (!response.ok) throw new Error("Failed to fetch products");
//     const json: { status: boolean; message: string; data: ApiProduct[] } = await response.json();
//     console.log("API Response --> ", json.data);
//     console.log("Product IDs -->", json.data.map((p) => p.id));
//     setApiProducts(json.data);
//     setFilteredProducts(json.data);
//     setLocations(`${location} ( ${option} )`);
//     console.log("Loc ---->", loc);
//     console.log("Location", location);
//     console.log("Sub Location", option);
//   } catch (err: unknown) {
//     setError(err instanceof Error ? err.message : "An unknown error occurred");
//   } finally {
//     setLoading(false);
//   }
// };
//   useEffect(() => {
//     const filtered = apiProducts.filter((product) =>
//       `${product.name_en} ${product.name_ar}`.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchTerm, apiProducts]);
//   if (loading) return <div className="p-6 text-center">Loading products...</div>;
//   if (error) return <div className="p-6 text-center text-red-500">Error: {error}</div>;
//   return (
//     <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-red-100">
//       {/* Header with Tabs */}
//       <div className="flex items-center justify-between bg-blue-500 text-white p-4 rounded-md shadow-md mb-6">
//         <div className="text-xl font-semibold">Al-Gowzaa Flowers</div>
//         <div className="flex space-x-6">
//           <button
//             onClick={() => setSelectedTab("home")}
//             className={`${
//               selectedTab === "home" ? "border-b-2 border-white" : ""
//             } hover:text-blue-200`}
//           >
//             Home
//           </button>
//           <button
//             onClick={() => setSelectedTab("products")}
//             className={`${
//               selectedTab === "products" ? "border-b-2 border-white" : ""
//             } hover:text-blue-200`}
//           >
//             Products
//           </button>
//         </div>
//       </div>
//       {/* Content under Home Tab */}
//       {selectedTab === "home" && (
//   <div className="w-full px-4 md:px-8 lg:px-16 py-6 text-black">
//   {/* <h1 className="text-2xl font-bold mb-6">Order Form</h1> */}
//   <form onSubmit={handleSubmit} className="space-y-6">
//     {/* Customer Details Card */}
//     <div className="bg-white p-6  rounded-lg shadow-md border border-gray-300">
//       <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
//      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
//   <input
//     type="text"
//     placeholder="Customer Name"
//     value={customerName}
//     onChange={(e) => setCustomerName(e.target.value)}
//     className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//     required
//   />
//   <input
//     type="text"
//     placeholder="VAT Number"
//     value={vatNumber}
//     onChange={(e) => setVatNumber(e.target.value)}
//     className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//     required
//   />
//   <input
//     type="text"
//     placeholder="Location"
//     readOnly
//     value={locations}
//     className="border border-black rounded p-3 w-full text-black shadow-sm bg-gray-200 focus:outline-none"
//     required
//   />
//   <input
//     type="text"
//     placeholder="Building Number"
//     className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
//   <input
//     type="email"
//     placeholder="Postal Code"
//     className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
//   <input
//     type="text"
//     placeholder="District"
//     className="border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
//   {/* Save Button */}
//   <div className="md:col-span-3 flex justify-end">
//     <button
//       onClick={() => alert('User saved!')} // placeholder
//       className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition w-full md:w-auto"
//     >
//       Save
//     </button>
//   </div>
// </div>
//     </div>
//     {/* Product Cards */}
//     {selectedProducts.map((selected, idx) => (
//   <div
//     key={idx}
//     className="bg-white rounded-lg shadow-md border border-gray-300 p-6 mb-6"
//     style={{ minHeight: '180px' }}
//   >
//     {/* Label */}
//     <div className="text-lg font-semibold text-gray-700 mb-4">
//       Product {idx + 1}
//     </div>
//     <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center">
//       {/* Dropdown */}
//       <div className="flex-1 w-full">
//         <Listbox value={selected} onChange={(val) => handleProductChange(val, idx)}>
//           <div className="relative w-full">
//             <Listbox.Button className="relative w-full cursor-default rounded border border-black bg-white py-3 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
//               <span className="block truncate">
//                 {productsList.find((p) => p.id === selected)?.name_en || 'Select product'}
//               </span>
//               <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                 <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//               </span>
//             </Listbox.Button>
//             <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black">
//               {productsList.map((product) => (
//                 <Listbox.Option
//                   key={product.id}
//                   value={product.id}
//                   className={({ active }) =>
//                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                       active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
//                     }`
//                   }
//                 >
//                   {({ selected }) => (
//                     <>
//                       <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
//                         {product.name_en}
//                       </span>
//                       {selected ? (
//                         <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
//                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                         </span>
//                       ) : null}
//                     </>
//                   )}
//                 </Listbox.Option>
//               ))}
//             </Listbox.Options>
//           </div>
//         </Listbox>
//       </div>
//       {/* Quantity Input */}
//       <input
//         type="number"
//         min={1}
//         placeholder="Quantity"
//         value={quantities[idx] || ''}
//         onChange={(e) => handleQuantityChange(e, idx)}
//         className="border border-black rounded p-3 flex-1 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         required
//       />
//       {/* Price Input */}
//       <input
//         type="number"
//         min={0}
//         step={0.01}
//         placeholder="Price"
//         value={prices[idx] || ''}
//         onChange={(e) => handlePriceChange(e, idx)}
//         className="border border-black rounded p-3 flex-1 w-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         required
//       />
//       {/* Delete Button */}
//       <button
//         type="button"
//         onClick={() => removeProductRow(idx)}
//         className="text-red-600 hover:text-red-800 transition self-start md:self-auto"
//         title="Remove product"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-7 w-7"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0H7m4-2h2a1 1 0 011 1v1H8V6a1 1 0 011-1z" />
//         </svg>
//       </button>
//     </div>
//   </div>
// ))}
//     {/* Add Product Button */}
//     {/* Buttons Container */}
// <div className="flex justify-end space-x-4 mt-6">
//   {/* Add Product Button */}
//   <button
//     type="button"
//     onClick={addProductRow}
//     className="bg-blue-600 text-white px-5 py-3 rounded shadow hover:bg-blue-700 transition"
//   >
//     + Add Product
//   </button>
//   {/* Submit Button */}
//   <button
//     type="submit"
//     className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
//   >
//     Submit Order
//   </button>
// </div>
//   </form>
// </div>
//       )}
//       {/* Product Update Section */}
//       {selectedTab === "products" && (
//       <ProductCrudTable/>
//       )}
//     </div>
//   );
// };
//  export default Products;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/listbox/listbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$CheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/20/solid/esm/CheckIcon.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$ChevronUpDownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/20/solid/esm/ChevronUpDownIcon.js [app-client] (ecmascript) <export default as ChevronUpDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$productsCrud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/productsCrud.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Products() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const location = searchParams.get('location');
    const option = searchParams.get('option');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTab, setSelectedTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [productsList, setProductsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [, setApiProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [, setFilteredProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    //const [searchTerm] = useState<string>("");
    const [selectedProducts, setSelectedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [quantities, setQuantities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [prices, setPrices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [customerName, setCustomerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [vatNumber, setVatNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [branch, setBranch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [branchCategory, setBranchCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    //const [loc, setLocation] = useState('');
    const token = localStorage.getItem('token');
    //const token = JSON.parse(localStorage.getItem('token') || '');
    console.log("Token from Async storage. ----->", token);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Products.useEffect": ()=>{
            fetchProducts();
        }
    }["Products.useEffect"], []);
    const fetchProducts = async ()=>{
        setLoading(true);
        try {
            // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2QwYWRjYjQwNTJiZjg3YmRjOTlhZGU4YjBlYWRhMDY4NDRiYjg5M2NjNWEyYTI5MDQ2MjQxYmI4YzUzZWY5NjdmMzQ1NjcxN2M2NzVhMDUiLCJpYXQiOjE3NTE3ODgzNjMuNjU0MDUwMTExNzcwNjI5ODgyODEyNSwibmJmIjoxNzUxNzg4MzYzLjY1NDA1MjAxOTExOTI2MjY5NTMxMjUsImV4cCI6MTc4MzMyNDM2My42NDk2NjAxMTA0NzM2MzI4MTI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.igdSA4vkVzbcutbdZ-5LQ1BHL_clASYcx_6QtnAcPocvWHFx_jGh2ViYMDvpuvNqFGMNall1KETKnp3C39C78XQSuetH5qDrpeAPcbPLUH6eqJ3EVSxo-vy64PyUm-yZ_qqyaSCVEAVbvLlvGPuAcLmfI081usjQsbKyDgRyFKEZrk37U_mveM2jWnYsn8T9L7BejYtGcj8CBHG4cT3O4oDumdRez1AQjP5LklvD3i74-npRx1W-qj48-35RzxFGOai5NVahUErerCYh5DxDD2ChDjEgFBm4nDFO5HTGGrLqBkRnJo3MD8mN5BC2VIFT5lFL8XG7o4c6QpnNZ1NPeE6YsV1Yy9pcoAj74xs3vq-mpHkm-o7DVyTpjGoiW4Br77n3C6IAKciSFcpjEZuXaxWpJ4yKdrxomk8hwrFscP7UbHMsHcFi54HuxkJ0fRmyyuKeT75gAx-eefQvI7QpOFJOcKpc39MOgDkpZN7fDM9Xak_wd3RypEZE24D7X6y_sTq15Ug60qsMUC3UWsQccil5nnW4wuRzh5ajGrCPhazAzrfiFLjZwhPfNdDAqbThBg-IZChrEEtje1vhuw_LQXDdsaBHbepfTPJ2ADPFhHBpg8JaLGa0PQrIDdx0DWnH-BVmIRLEU28rGOEsf4NPX6Wlli3_cavmUxB9-J_VABw'; // Replace with actual token
            const response = await fetch("https://testing.algowzaa.online/api/products", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) throw new Error("Failed to fetch products");
            const json = await response.json();
            setApiProducts(json.data);
            setFilteredProducts(json.data);
            setProductsList(json.data); // ✅ For dropdown
            setBranch(`${location}`);
            setBranchCategory(`${option}`);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred");
        } finally{
            setLoading(false);
        }
    };
    const handleProductChange = (value, index)=>{
        const newSelected = [
            ...selectedProducts
        ];
        newSelected[index] = value;
        setSelectedProducts(newSelected);
    };
    const handleQuantityChange = (e, index)=>{
        const value = e.target.value;
        setQuantities((prev)=>({
                ...prev,
                [index]: value
            }));
    };
    const handlePriceChange = (e, index)=>{
        const value = e.target.value;
        setPrices((prev)=>({
                ...prev,
                [index]: value
            }));
    };
    const addProductRow = ()=>{
        setSelectedProducts([
            ...selectedProducts,
            ''
        ]);
    };
    const removeProductRow = (index)=>{
        setSelectedProducts(selectedProducts.filter((_, i)=>i !== index));
        setQuantities((prev)=>{
            const copy = {
                ...prev
            };
            delete copy[index];
            return copy;
        });
        setPrices((prev)=>{
            const copy = {
                ...prev
            };
            delete copy[index];
            return copy;
        });
    };
    // const handleSubmit = async (e: FormEvent) => {
    //   e.preventDefault();
    //   if (!customerName.trim() || !vatNumber.trim() || !locations.trim()) {
    //     alert('Please fill in customer name, VAT number, and location');
    //     return;
    //   }
    //   const filteredProducts = selectedProducts.filter((p): p is number => p !== '');
    //   if (filteredProducts.length === 0) {
    //     alert('Please select at least one product');
    //     return;
    //   }
    //   const body: RequestBody = {
    //     customer_name: customerName,
    //     vat_number: vatNumber,
    //     location: locations,
    //     product: filteredProducts,
    //     quantity: filteredProducts.map((_, i) => parseInt(quantities[i]) || 1),
    //     price: filteredProducts.map((_, i) => parseFloat(prices[i]) || 0),
    //   };
    //   try {
    //           // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2QwYWRjYjQwNTJiZjg3YmRjOTlhZGU4YjBlYWRhMDY4NDRiYjg5M2NjNWEyYTI5MDQ2MjQxYmI4YzUzZWY5NjdmMzQ1NjcxN2M2NzVhMDUiLCJpYXQiOjE3NTE3ODgzNjMuNjU0MDUwMTExNzcwNjI5ODgyODEyNSwibmJmIjoxNzUxNzg4MzYzLjY1NDA1MjAxOTExOTI2MjY5NTMxMjUsImV4cCI6MTc4MzMyNDM2My42NDk2NjAxMTA0NzM2MzI4MTI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.igdSA4vkVzbcutbdZ-5LQ1BHL_clASYcx_6QtnAcPocvWHFx_jGh2ViYMDvpuvNqFGMNall1KETKnp3C39C78XQSuetH5qDrpeAPcbPLUH6eqJ3EVSxo-vy64PyUm-yZ_qqyaSCVEAVbvLlvGPuAcLmfI081usjQsbKyDgRyFKEZrk37U_mveM2jWnYsn8T9L7BejYtGcj8CBHG4cT3O4oDumdRez1AQjP5LklvD3i74-npRx1W-qj48-35RzxFGOai5NVahUErerCYh5DxDD2ChDjEgFBm4nDFO5HTGGrLqBkRnJo3MD8mN5BC2VIFT5lFL8XG7o4c6QpnNZ1NPeE6YsV1Yy9pcoAj74xs3vq-mpHkm-o7DVyTpjGoiW4Br77n3C6IAKciSFcpjEZuXaxWpJ4yKdrxomk8hwrFscP7UbHMsHcFi54HuxkJ0fRmyyuKeT75gAx-eefQvI7QpOFJOcKpc39MOgDkpZN7fDM9Xak_wd3RypEZE24D7X6y_sTq15Ug60qsMUC3UWsQccil5nnW4wuRzh5ajGrCPhazAzrfiFLjZwhPfNdDAqbThBg-IZChrEEtje1vhuw_LQXDdsaBHbepfTPJ2ADPFhHBpg8JaLGa0PQrIDdx0DWnH-BVmIRLEU28rGOEsf4NPX6Wlli3_cavmUxB9-J_VABw'; // Replace with actual token
    //     const res = await fetch('https://testing.algowzaa.online/api/invoice/create', {
    //       method: 'POST',
    //       headers: { 
    //         'Authorization': `Bearer ${token}`,
    //         'Content-Type': 'application/json' },
    //       body: JSON.stringify(body),
    //     });
    //     if (res.ok) {
    //       const responseData = await res.json();
    //       const invoiceId = responseData.data.invoice_id;
    //       alert('Order submitted successfully');
    //       setSelectedProducts([]);
    //       setQuantities({});
    //       setPrices({});
    //       setCustomerName('');
    //       setVatNumber('');
    //       router.push(`/invoice?invoice_id=${invoiceId}`);
    //     } else {
    //       alert('Failed to submit order');
    //     }
    //   } catch (error) {
    //     console.error('Error submitting order:', error);
    //     alert('Error submitting order');
    //   }
    // };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!customerName.trim() || !vatNumber.trim() || !locations.trim() || !branch.trim() || !branchCategory.trim()) {
            alert('Please fill in all required customer and branch details');
            return;
        }
        const filteredProducts = selectedProducts.filter((p)=>p !== '');
        if (filteredProducts.length === 0) {
            alert('Please select at least one product');
            return;
        }
        const body = {
            customer_name: customerName,
            vat_number: vatNumber,
            location: locations,
            product: filteredProducts,
            quantity: filteredProducts.map((_, i)=>parseInt(quantities[i]) || 1),
            price: filteredProducts.map((_, i)=>parseFloat(prices[i]) || 0),
            branch: branch,
            branch_category: branchCategory
        };
        try {
            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTEyMjE0ZmEwOTdkNTY5ZDgyZDhkNTk1MTM5ZDA5MGY2MDExNGIxMDg5MjRkZmQ4ODIzMjg2N2E3NTE4YjJlNDY1ZjliNTZlZmY4ODg4NTQiLCJpYXQiOjE3NTM2NDkxNjEuNzk0NDE0MDQzNDI2NTEzNjcxODc1LCJuYmYiOjE3NTM2NDkxNjEuNzk0NDE1OTUwNzc1MTQ2NDg0Mzc1LCJleHAiOjE3ODUxODUxNjEuNzg5MDUyMDA5NTgyNTE5NTMxMjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.AusU_r0xuFaQWDcBmCkRcLBdVazjSSlELQAk_cO6tDFEqBiW_pfguVRE3mVic5-wPzNwvSgf_xe-hQkaNVHwMSeU99uR7TMlQT57AKSm4TPcIOO5LQVmk7mFYmFfozFdM1XYR2atXOXJVfL9hkCVH0Ge0jxQuc5KqXolQ-DWsqo6ZNBq5yTJyFISlBHYxBI-pYkQlR8s2WMTKbd4wvzwaWC2Nrg2HDCLL6XE1jwsP3VNRXRo5IB1ic_OCVrRd07hg8Vjx99mTxQaeg4VNeu6-gDmiYrxMWBpQIqrqWIc_8A9NQhqbR7CpY_xSpdvARspT4y1b1RltW10va12xxODJN-j2F_JOhDtcud-rDq-cNXYDE-MANgaandSvaZMdKrCBctFHg3YaCVQ_VWu9Yfz5YWtu4-9OnlFfYU1Y4CItNcVeOB9cOYLCaS4agW3CrT-jhDyREnfOTdxutIAsZY2D9n4FbTVBQqU5v5wjSCpSQwQeSWbIvFj_mBiTcW2Neqg9K4Kv3e21nSJ4Ra9MCPK8gnIXgF_Ar02X3tU0TY9rCu2DapLyy2rA6hR1ngI7SmhhDZtTREvAcaTKmG_PnXBp3TzPwiw4pOesQPlLmdoUJWI3RtAdqfA592TS3EoV9j75cZ5PPLu78oYzDY_7QRYP4AVh6lt7dOEjJc8n52-gI0'; // Replace with actual token securely
            const res = await fetch('https://testing.algowzaa.online/api/invoice/create', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (res.ok) {
                const responseData = await res.json();
                const invoiceId = responseData?.data?.invoice_id;
                alert('Order submitted successfully');
                setSelectedProducts([]);
                setQuantities({});
                setPrices({});
                setCustomerName('');
                setVatNumber('');
                setLocations('');
                setBranch('');
                setBranchCategory('');
                router.push(`/invoice?invoice_id=${invoiceId}`);
            } else {
                const errorData = await res.json();
                console.error('Submit failed:', errorData);
                alert('Failed to submit order');
            }
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('Error submitting order');
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 text-center",
        children: "Loading products..."
    }, void 0, false, {
        fileName: "[project]/src/app/products/CreateInvoice.tsx",
        lineNumber: 745,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 text-center text-red-500",
        children: [
            "Error: ",
            error
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/CreateInvoice.tsx",
        lineNumber: 746,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-red-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between bg-blue-500 text-white p-4 rounded-md shadow-md mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-semibold",
                        children: "Al-Gowzaa Flowers"
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                        lineNumber: 751,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedTab("home"),
                                className: `${selectedTab === "home" ? "border-b-2 border-white" : ""} hover:text-blue-200`,
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                lineNumber: 753,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedTab("products"),
                                className: `${selectedTab === "products" ? "border-b-2 border-white" : ""} hover:text-blue-200`,
                                children: "Products"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                lineNumber: 756,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                        lineNumber: 752,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                lineNumber: 750,
                columnNumber: 7
            }, this),
            selectedTab === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-4 md:px-8 lg:px-16 py-6 text-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-lg shadow-md border border-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Customer Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                    lineNumber: 838,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4 items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Customer Name",
                                            value: customerName,
                                            onChange: (e)=>setCustomerName(e.target.value),
                                            className: "border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                            lineNumber: 840,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "VAT Number",
                                            value: vatNumber,
                                            onChange: (e)=>setVatNumber(e.target.value),
                                            className: "border bg-white border-black rounded p-3 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                            lineNumber: 841,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Location",
                                            value: locations,
                                            onChange: (e)=>setLocations(e.target.value),
                                            className: "border border-black rounded p-3 w-full text-black shadow-sm bg-gray-200",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                            lineNumber: 842,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Building Number",
                                            className: "border bg-white border-black rounded p-3 w-full text-black shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                            lineNumber: 843,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Postal Code",
                                            className: "border bg-white border-black rounded p-3 w-full text-black shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                            lineNumber: 844,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "District",
                                            className: "border bg-white border-black rounded p-3 w-full text-black shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                            lineNumber: 845,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Branch",
                                            value: branch,
                                            onChange: (e)=>setBranch(e.target.value),
                                            className: "border bg-white border-black rounded p-3 w-full text-black shadow-sm",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                            lineNumber: 846,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Branch Category",
                                            value: branchCategory,
                                            onChange: (e)=>setBranchCategory(e.target.value),
                                            className: "border bg-white border-black rounded p-3 w-full text-black shadow-sm",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                            lineNumber: 847,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-3 flex justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>alert('User saved!'),
                                                type: "button",
                                                className: "bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 w-full md:w-auto",
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                lineNumber: 849,
                                                columnNumber: 13
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                            lineNumber: 848,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                    lineNumber: 839,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                            lineNumber: 837,
                            columnNumber: 7
                        }, this),
                        selectedProducts.map((selected, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-md border border-gray-300 p-6 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-semibold text-gray-700 mb-4",
                                        children: [
                                            "Product ",
                                            idx + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 856,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"], {
                                                    value: selected,
                                                    onChange: (val)=>handleProductChange(val, idx),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"].Button, {
                                                                className: "relative w-full cursor-default rounded border border-black bg-white py-3 pl-3 pr-10 text-left shadow-sm focus:ring-2 focus:ring-blue-500 text-black",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block truncate",
                                                                        children: productsList.find((p)=>p.id === selected)?.name_en || 'Select product'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                                        lineNumber: 862,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$ChevronUpDownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpDownIcon$3e$__["ChevronUpDownIcon"], {
                                                                            className: "h-5 w-5 text-gray-400",
                                                                            "aria-hidden": "true"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                                            lineNumber: 866,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                                        lineNumber: 865,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                                lineNumber: 861,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"].Options, {
                                                                className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black",
                                                                children: productsList.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"].Option, {
                                                                        value: product.id,
                                                                        className: ({ active })=>`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}`,
                                                                        children: ({ selected })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `block truncate ${selected ? 'font-medium' : 'font-normal'}`,
                                                                                        children: product.name_en
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                                                        lineNumber: 874,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$CheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                                                                                            className: "h-5 w-5",
                                                                                            "aria-hidden": "true"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                                                            lineNumber: 877,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                                                        lineNumber: 876,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true)
                                                                    }, product.id, false, {
                                                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                                        lineNumber: 871,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                                lineNumber: 869,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                        lineNumber: 860,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                lineNumber: 858,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: 1,
                                                placeholder: "Quantity",
                                                value: quantities[idx] || '',
                                                onChange: (e)=>handleQuantityChange(e, idx),
                                                className: "border border-black rounded p-3 flex-1 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                lineNumber: 889,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: 0,
                                                step: 0.01,
                                                placeholder: "Price",
                                                value: prices[idx] || '',
                                                onChange: (e)=>handlePriceChange(e, idx),
                                                className: "border border-black rounded p-3 flex-1 w-full text-black shadow-sm focus:ring-2 focus:ring-blue-500",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                lineNumber: 890,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>removeProductRow(idx),
                                                className: "text-red-600 hover:text-red-800 self-start md:self-auto",
                                                title: "Remove product",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-7 w-7",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0H7m4-2h2a1 1 0 011 1v1H8V6a1 1 0 011-1z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                        lineNumber: 893,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                    lineNumber: 892,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                                lineNumber: 891,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                        lineNumber: 857,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                lineNumber: 855,
                                columnNumber: 9
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-4 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: addProductRow,
                                    className: "bg-blue-600 text-white px-5 py-3 rounded shadow hover:bg-blue-700 transition",
                                    children: "+ Add Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                    lineNumber: 901,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition",
                                    children: "Submit Order"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/products/CreateInvoice.tsx",
                                    lineNumber: 902,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/products/CreateInvoice.tsx",
                            lineNumber: 900,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/products/CreateInvoice.tsx",
                    lineNumber: 836,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                lineNumber: 835,
                columnNumber: 3
            }, this),
            selectedTab === "products" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$productsCrud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/products/CreateInvoice.tsx",
                lineNumber: 909,
                columnNumber: 38
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/CreateInvoice.tsx",
        lineNumber: 749,
        columnNumber: 5
    }, this);
}
_s(Products, "JMlBu1KGyZ8kc5Kf0gxp0uhgqSQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Products;
const __TURBOPACK__default__export__ = Products;
var _c;
__turbopack_context__.k.register(_c, "Products");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/utils/authGuard.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>useAuthGuard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useAuthGuard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuthGuard.useEffect": ()=>{
            const token = localStorage.getItem('token');
            if (!token) {
                router.replace('/');
            }
        }
    }["useAuthGuard.useEffect"], []);
}
_s(useAuthGuard, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/products/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$CreateInvoice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/CreateInvoice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$authGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/authGuard.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function page() {
    _s();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$authGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 14,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$CreateInvoice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(page, "TitGtyjW32Onfz5lscu0IFsEfl4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$authGuard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_b2901e89._.js.map