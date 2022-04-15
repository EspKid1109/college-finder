import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import PostData from "./collegedata.json";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

const columns = [
  { field: "id", headerName: "College", width: 230 },
  { field: "in", headerName: "InStateCost", width: 120 },
  { field: "out", headerName: "OutState Cost", width: 120 },
  { field: "ar", headerName: "Acceptance Rate", width: 130 },
  { field: "top", headerName: "Top 3 Majors", width: 260 },
  { field: "gpa", headerName: "GPA", width: 60 },
  { field: "sat", headerName: "SAT", width: 60 },
  { field: "act", headerName: "ACT", width: 60 },
];

const rows = [
  {
    id: "University of South Florida",
    in: "$6,381",
    out: "$28,659",
    ar: "38.8%",
    top: "Engineering,BMM,Bio",
    gpa: "4.42",
    sat: "1360",
    act: "30",
  },
];

export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const btnHandler = () => {
    console.log(JSON.stringify(localStorage)); //user info is stored here
    localStorage.clear();
  };

  const printData = () => {
    const jsonData = require("./collegedata.json"); //jsonData is stored here, parse info HERE
    console.log(jsonData);
  };
  return (
    <Box
      style={{ background: "white" }}
      sx={{ flexGrow: 1, border: 1, p: 2 }}
      height="75vh"
      width="120vh"
      position="relative"
    >
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          pageSize={5}
          rowsPerPageOptions={[5]}
          <TableHead>
            <TableRow>
              <TableCell>College</TableCell>
              <TableCell>Instate Cost</TableCell>
              <TableCell>Outstate Cost</TableCell>
              <TableCell>GPA</TableCell>
              <TableCell>SAT</TableCell>
              <TableCell>ACT</TableCell>
              <TableCell>Acceptance Rate</TableCell>
              <TableCell>Public/Private</TableCell>
              <TableCell>Online Availability</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Top 3 Majors</TableCell>
              <TableCell>Academic Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PostData.map((list, index) => (
              <TableRow key={index}>
                <TableCell>{list.College}</TableCell>
                <TableCell>{list.In}</TableCell>
                <TableCell>{list.Out}</TableCell>
                <TableCell>{list.GPA}</TableCell>
                <TableCell>{list.SAT}</TableCell>
                <TableCell>{list.ACT}</TableCell>
                <TableCell>{list.AR}</TableCell>
                <TableCell>{list.Type}</TableCell>
                <TableCell>{list.OP}</TableCell>
                <TableCell>{list.L}</TableCell>
                <TableCell>{list.Majors}</TableCell>
                <TableCell>{list.AS}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
{
  /* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      /> */
}

{
  /* <TablePagination
            component="div"
            count={rows.length}
            page={page}
            rowsPerPage={[5]}
            onPageChange={handleChangePage}
            /> */
}
