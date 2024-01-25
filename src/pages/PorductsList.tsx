import {
  CircularProgress,
  Container,
  Stack,
  Typography,
  Paper,
} from "@mui/material";

import { useAppSelector } from "../app/hooks/useAppSelector";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../app/hooks/useAppDispatch";
import {
  getAllProductsAsync,
  sortByPrice,
} from "../redux/reducers/product/productReducer";
import { getProductsByCategoryAsync } from "../redux/reducers/product/getProductsByCategoryAsync";
import getFilteredProducts from "../selectors/getFilteredProducts";
import ErrorMessage from "../components/ErrorMessage";
import useDebounce from "../app/hooks/useDebounce";
import SearchBar from "../components/InputSearch/SearchBar";
import CenterContainer from "../components/CenterContainer/CenterContainer";
import MediaCard from "../components/Card/Card";
import { usePagination } from "../app/hooks/usePagination";
import Pagination from "../components/Pagination/Pagination";

interface ProductProps {
  categoryId: string | undefined;
  sortPrice: string;
}

const ProductsPage = ({ categoryId, sortPrice }: ProductProps) => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);
  const { debounceValue } = useDebounce(search, 100)
  const { products, error, loading } = useAppSelector(
    (state) => state.productReducer
  );
  const { currentPage, pageLimit, currentProducts, setPage } = usePagination(products, 20)
  useEffect(() => {
    if (categoryId) {
      dispatch(getProductsByCategoryAsync(categoryId));
    } else {
      dispatch(getAllProductsAsync());
    }
  }, [categoryId, dispatch]);

  useEffect(() => {
    dispatch(sortByPrice(sortPrice === "asc" ? "asc" : "desc"));
  }, [sortPrice, dispatch]);

  const filterProducts = useMemo(() => {
    const filterProducts = getFilteredProducts(currentProducts, debounceValue);
    return filterProducts;
  }, [currentProducts, debounceValue]);

  if (loading) {
    return (
      <CenterContainer>
        <CircularProgress size={64} color="secondary" />
      </CenterContainer>
    );
  }

  if (error) {
    return (<CenterContainer>
      <ErrorMessage message={error} />
    </CenterContainer>);
  }

  return (
    <main>
      <Container>
        <Container maxWidth="xs" sx={{ marginTop: "20px" }}>
          <SearchBar search={search} setSearch={setSearch} />
        </Container>
        <Typography variant="h3">Products</Typography>;
        {filterProducts && (
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              borderRadius: "5px",
            }}
          >
            {filterProducts?.map((p) => (
              <MediaCard product={p} user={user} dispatch={dispatch} />
            ))}
          </Paper>
        )}
        {filterProducts && (
          <Stack
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>Page: {currentPage}</Typography>
            <Pagination count={pageLimit} currentPage={currentPage} setPage={setPage} />

          </Stack>
        )}
      </Container>
    </main>
  );
};

export default ProductsPage;
