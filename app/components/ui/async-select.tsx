/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Autocomplete,
  CircularProgress,
  TextField,
  AutocompleteRenderInputParams,
} from "@mui/material";

export interface IOptionType {
  value: string | number;
  label: string;
}

interface IAsyncSelectProps {
  options: IOptionType[];
  loading: boolean;
  className?: string;
  placeholder?: string;
  handleScroll: () => void;
  handleSearch: (query: string) => void;
  value?: string | number;
  onChange?: (value: string | number | null) => void;
  onClear?: () => void;
  multiple?: boolean;
}

const AsyncSelect: React.FC<IAsyncSelectProps> = ({
  options,
  loading,
  className = "",
  placeholder = "",
  handleScroll,
  handleSearch,
  value,
  onChange,
  onClear,
  multiple = false,
}) => {
  const handleInputChange = (
    _event: React.SyntheticEvent,
    newInputValue: string,
  ) => {
    handleSearch(newInputValue);
  };

  const handleChange = (_event: any, newValue: any) => {
    if (onChange) {
      if (multiple) {
        onChange(newValue);
      } else {
        onChange(newValue?.value ?? null);
      }
    }
  };

  const getOptionLabel = (option: IOptionType) => option.label;

  return (
    <Autocomplete
      className={className}
      options={options}
      loading={loading}
      multiple={multiple}
      onChange={handleChange}
      onInputChange={handleInputChange}
      value={
        multiple
          ? Array.isArray(value)
            ? options.filter((opt) => value.includes(opt.value))
            : []
          : options.find((opt) => opt.value === value) || null
      }
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={(option, val) => option.value === val.value}
      filterOptions={(x) => x} // Disable client-side filtering
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          {...params}
          placeholder={placeholder}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      ListboxProps={{
        onScroll: (event: React.UIEvent<HTMLUListElement>) => {
          const listboxNode = event.currentTarget;
          if (
            listboxNode.scrollTop + listboxNode.clientHeight >=
              listboxNode.scrollHeight - 20 &&
            !loading
          ) {
            handleScroll();
          }
        },
      }}
      clearOnEscape
      onClose={() => {
        if (onClear && !value) onClear();
      }}
    />
  );
};

export default AsyncSelect;
