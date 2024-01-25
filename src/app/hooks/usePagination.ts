import { useState } from "react";
import Product from "../../types/Product";

export const usePagination = (products: Product[], limitPerPage: number) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageLimit = Math.ceil(products.length / limitPerPage);

    const calculateCurrentProducts = (): Product[] => {
        const lastProductIndex = currentPage * limitPerPage;
        const firstProductIndex = lastProductIndex - limitPerPage;

        const currentProducts = products?.slice(firstProductIndex, lastProductIndex);
        return currentProducts;
    }

    const currentProducts = calculateCurrentProducts();
    const setPage = (page: number) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage(() => Math.min(pageNumber, pageLimit));
    }

    return {
        currentPage, currentProducts, pageLimit, setPage
    };
};