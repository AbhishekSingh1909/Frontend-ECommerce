import { useEffect, useState } from "react"

interface debouncedResult<T> {
    debounceValue: T
}

const useDebounce = <T>(value: T, delay: number = 1000): debouncedResult<T> => {
    const [debounceValue, setDebounceValue] = useState<T>(value);
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(timeOutId);
    }, [value, delay]);

    return { debounceValue };
};

export default useDebounce;