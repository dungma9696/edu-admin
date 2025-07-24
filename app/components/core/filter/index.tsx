/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Grid, Button, Box } from "@mui/material";
import dayjs from "dayjs";
import _debounce from "lodash/debounce";

import Input from "@/components/ui/input";
import AsyncSelect from "@/components/ui/async-select";

export interface FilterOption {
  value: any;
  label: string;
}

export type FilterType =
  | "text"
  | "select"
  | "date"
  | "number"
  | "search-select";

export interface FilterItem {
  type: FilterType;
  name: string;
  value?: any;
  placeholder?: string;
  options?: FilterOption[];
  mode?: "multiple" | "single";
  debounceTime?: number;
  format?: string;
  span?: number;
  api?: (searchText: string, page: number) => Promise<FilterOption[]>;
}

interface FilterProps {
  items?: FilterItem[];
  className?: string;
  data: string;
  placeholder?: string;
  handleClear?: () => void;
  handleFilter: (fieldName: string, value: any) => void;
}

const Filter: React.FC<FilterProps> = ({
  items = [],
  className = "",
  data,
  placeholder = "Search...",
  handleClear = () => {},
  handleFilter,
}) => {
  const [contentSearch, setContentSearch] = useState(data);
  const [searchSelectOptions, setSearchSelectOptions] = useState<
    Record<string, FilterOption[]>
  >({});
  const [loadingOptions, setLoadingOptions] = useState<Record<string, boolean>>(
    {},
  );
  const searchQueryRef = useRef<Record<string, string>>({});
  const debounceSearchHandlers = useRef<Record<string, (q: string) => void>>(
    {},
  );

  const debounceHandleFilter = _debounce((name, value) => {
    handleFilter(name, value);
  }, 500);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContentSearch(value);
    debounceHandleFilter("keyword", value);
  };

  const handleClearAll = () => {
    setContentSearch("");
    handleClear();
  };

  const fetchOptions = async (
    item: FilterItem,
    query: string = "",
    page: number = 0,
  ) => {
    if (!item.api) return;
    const name = item.name;
    setLoadingOptions((prev) => ({ ...prev, [name]: true }));

    try {
      const result = await item.api(query, page);
      setSearchSelectOptions((prev) => ({
        ...prev,
        [name]: page === 0 ? result : [...(prev[name] || []), ...result],
      }));
    } finally {
      setLoadingOptions((prev) => ({ ...prev, [name]: false }));
    }
  };

  useEffect(() => {
    items.forEach((item) => {
      if (item.type === "search-select" && item.api) {
        debounceSearchHandlers.current[item.name] = _debounce((q: string) => {
          fetchOptions(item, q, 0);
        }, item.debounceTime || 500);

        fetchOptions(item, "", 0);
      }
    });
  }, [items]);

  const renderInput = (item: FilterItem) => {
    const name = item.name;

    switch (item.type) {
      case "text":
        return (
          <Input
            placeholder={item.placeholder}
            value={item.value}
            onValueChange={(v) => debounceHandleFilter(name, v)}
          />
        );

      case "search-select":
        return (
          <AsyncSelect
            placeholder={item.placeholder}
            loading={loadingOptions[name]}
            options={searchSelectOptions[name] || []}
            handleSearch={(q) => debounceSearchHandlers.current[name]?.(q)}
            handleScroll={() =>
              fetchOptions(item, searchQueryRef.current[name] || "", 1)
            }
            value={item.value}
            onChange={(v) => handleFilter(name, v)}
            multiple={item.mode === "multiple"}
          />
        );

      case "number":
        return (
          <Input
            inputType="number"
            value={item.value?.toString()}
            onValueChange={(v) => handleFilter(name, Number(v))}
            placeholder={item.placeholder}
          />
        );

      case "date":
        return (
          <Input
            inputType="date"
            value={
              item.value
                ? dayjs(item.value).format(item.format || "YYYY-MM-DD")
                : ""
            }
            onValueChange={(v) => handleFilter(name, v)}
            placeholder={item.placeholder || "Date"}
          />
        );

      case "select":
        return (
          <Input
            inputType="select"
            value={item.value}
            onValueChange={(v) => handleFilter(name, v)}
            options={item.options || []}
            placeholder={item.placeholder}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Box className={`filter-wrapper ${className}`} sx={{ py: 2 }}>
      <Grid container spacing={2}>
        <Grid size={11}>
          <Grid spacing={2} container>
            <Grid size={{ xs: 12 }}>
              <Input
                placeholder={placeholder}
                value={contentSearch}
                onValueChange={(val) => setContentSearch(val)}
                onChange={handleChangeText}
              />
            </Grid>

            {items.map((item, index) => (
              <Grid size={{ md: item.span || 3 }} key={index}>
                {renderInput(item)}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid size={1}>
          <Button variant="outlined" onClick={handleClearAll}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filter;
