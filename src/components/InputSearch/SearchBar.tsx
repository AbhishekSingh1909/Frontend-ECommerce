import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type searchType = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<searchType> = ({ search, setSearch }) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e?.target.value);
    }

    return (
        <Paper component="form" sx={{
            border: '1px solid #8A8A8A',
            alignItems: 'center',
            display: 'flex',
            width: { lg: '400px', md: '100px', xs: '50px' },
            p: '2px 4px',
            marginBottom: '5px'
        }}>
            <InputBase
                value={search}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'Search ' }}
                onChange={handleSearch}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;