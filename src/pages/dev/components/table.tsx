import MyTable from "@/components/core/table";
import SearchInput from "@/components/ui/search";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Box } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState, useMemo } from "react";

const Table = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const dummyData = Array.from({ length: 50 }).map((_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@gmail.com`,
    }));
    setData(dummyData);
  }, []);

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [data, searchTerm]);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
  ];

  const handleDelete = (row) => {
    try {
      setData((prev) => prev.filter((item) => item.id !== row.id));

      enqueueSnackbar(`Đã xoá ${row.name} thành công`, { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Xoá thất bại, vui lòng thử lại sau", {
        variant: error,
      });
    }
  };

  return (
    <div style={{ marginTop: 50 }}>
      <h1 className="h1-primary">Table</h1>

      <Box mb={2}>
        <SearchInput
          onSearch={setSearchTerm}
          placeholder="Tìm kiếm theo tên hoặc email..."
        />
      </Box>

      <MyTable
        columns={columns}
        rows={filteredData.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        )}
        page={page}
        rowsPerPage={rowsPerPage}
        totalCount={filteredData.length}
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
