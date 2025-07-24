import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import dayjs from "dayjs";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";

import Filter, { FilterItem, FilterOption } from "@/components/core/filter";
import MyTable from "@/components/core/table";

const roles = [
  { label: "Admin", value: "admin" },
  { label: "User", value: "user" },
  { label: "Guest", value: "guest" },
];

const dummySkills = [
  { id: 1, name: "React" },
  { id: 2, name: "Vue" },
  { id: 3, name: "Angular" },
  { id: 4, name: "Node.js" },
];

const Table = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  interface Filters {
    keyword?: string;
    role?: string;
    dateFrom?: string;
    dateTo?: string;
    skills?: number[] | string[];
  }

  const [filters, setFilters] = useState<Filters>({});

  // Fake search-select API
  const fetchSkillOptions = async (query: string, page: number) => {
    return new Promise<FilterOption[]>((resolve) => {
      setTimeout(() => {
        const filtered = dummySkills
          .filter((skill) =>
            skill.name.toLowerCase().includes(query.toLowerCase()),
          )
          .map((s) => ({
            label: s.name,
            value: s.id,
          }));
        resolve(filtered);
      }, 500);
    });
  };

  // Dummy data setup
  useEffect(() => {
    const dummyData = Array.from({ length: 20 }).map((_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@gmail.com`,
      age: 20 + (i % 10),
      role: roles[i % roles.length].value,
      createdAt: dayjs().subtract(i, "day").format("YYYY-MM-DD"),
      skillIds: [1 + (i % 4), 2 + (i % 3)].filter(
        (v, idx, arr) => arr.indexOf(v) === idx,
      ),
    }));
    setData(dummyData);
    setFiltered(dummyData);
  }, []);

  const handleFilter = (field: string, value: any) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);

    let result = [...data];

    if (newFilters.keyword) {
      const search = newFilters.keyword.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.email.toLowerCase().includes(search),
      );
    }

    if (newFilters.age) {
      result = result.filter((item) => item.age === Number(newFilters.age));
    }

    if (newFilters.role) {
      result = result.filter((item) => item.role === newFilters.role);
    }

    if (newFilters.dateFrom) {
      result = result.filter((item) =>
        dayjs(item.createdAt).isAfter(dayjs(newFilters.dateFrom)),
      );
    }

    if (newFilters.dateTo) {
      result = result.filter((item) =>
        dayjs(item.createdAt).isBefore(dayjs(newFilters.dateTo)),
      );
    }

    if (newFilters.skills) {
      const selectedSkills = Array.isArray(newFilters.skills)
        ? newFilters.skills.map((v) => Number(v))
        : [Number(newFilters.skills)];

      result = result.filter((item) =>
        selectedSkills.every((id) => item.skillIds.includes(id)),
      );
    }

    setFiltered(result);
    setPage(0);
  };

  const handleClear = () => {
    setFilters({});
    setFiltered(data);
    setPage(0);
  };

  const handleDelete = (row) => {
    try {
      const newData = data.filter((item) => item.id !== row.id);
      setData(newData);
      setFiltered((prev) => prev.filter((item) => item.id !== row.id));
      enqueueSnackbar(`Đã xoá ${row.name} thành công`, { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Xoá thất bại, vui lòng thử lại sau", {
        variant: error,
      });
    }
  };

  const filterItems: FilterItem[] = [
    {
      type: "select",
      name: "role",
      placeholder: "Vai trò",
      options: roles,
      value: filters.role || undefined,
      span: 6,
    },
    {
      type: "date",
      name: "dateFrom",
      placeholder: "Từ ngày",
      value: filters.dateFrom || undefined,
      format: "YYYY-MM-DD",
      span: 6,
    },
    {
      type: "date",
      name: "dateTo",
      placeholder: "Đến ngày",
      value: filters.dateTo || undefined,
      format: "YYYY-MM-DD",
      span: 6,
    },
    {
      type: "search-select",
      name: "skills",
      placeholder: "Kỹ năng",
      mode: "multiple",
      value: filters.skills || [],
      api: fetchSkillOptions,
      span: 6,
    },
  ];

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "age", headerName: "Age" },
    { field: "role", headerName: "Role" },
    { field: "createdAt", headerName: "Ngày tạo" },
  ];

  return (
    <div style={{ marginTop: 50 }}>
      <h1 className="h1-primary">Table with Filters</h1>

      <Filter
        items={filterItems}
        data={filters.keyword || ""}
        placeholder="Tìm kiếm..."
        handleClear={handleClear}
        handleFilter={handleFilter}
      />

      <MyTable
        columns={columns}
        rows={filtered.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        )}
        page={page}
        rowsPerPage={rowsPerPage}
        totalCount={filtered.length}
        onPageChange={(e, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        actions={(row) => (
          <IconButton onClick={() => handleDelete(row)}>
            <DeleteIcon />
          </IconButton>
        )}
      />
    </div>
  );
};

export default Table;
