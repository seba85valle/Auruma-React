const BASE_URL = "https://6908eeba2d902d0651b22ef5.mockapi.io/products";

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product)
    });
    if(!res.ok) {
        throw new Error("No se pudo crear el producto");
    }
    const result = await res.json();
    return result;
};
