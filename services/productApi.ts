
export const fetchProducts = async (
    { page, limit, searchTerm = "", category = "", orderBy = "asc", sortBy="price" }
        :
        { page: number, limit: number, searchTerm?: string, category?: string, orderBy?: "asc" | "desc", sortBy?: string }) => {

    const query = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        searchTerm,
        category,
        orderBy,
        sortBy
    })

    const res = await fetch(`http://localhost:5000/api/v1/product?${query}`)
    if(!res.ok) throw new Error("Failed to fetch products");

    return res.json()

}