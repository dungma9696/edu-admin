/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "react-router-dom";
import forEach from "lodash/forEach";
import { useMemo } from "react";
interface IDataFitler {
  [item: string]: any;
}

export default function useFilterParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries(searchParams),
    [searchParams],
  );

  const handleSetParams = (dataFilter: IDataFitler) => {
    if (dataFilter) {
      forEach(dataFilter, function (value, key) {
        if (value === undefined || value === null || value === "") {
          searchParams.delete(key);
        } else if (Array.isArray(value)) {
          searchParams.set(key, value.join(","));
        } else {
          searchParams.set(key, `${value}`);
        }
      });
      setSearchParams(searchParams);
    }
  };

  const handleClearParams = (listKey: string[]) => {
    forEach(listKey, function (key) {
      searchParams.delete(key);
    });

    setSearchParams(searchParams);
  };
  return { params, handleSetParams, handleClearParams };
}
