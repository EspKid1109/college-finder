import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: 'id', headerName: 'College', width: 230 },
  { field: 'in', headerName: 'InStateCost', width: 120 },
  { field: 'out', headerName: 'OutState Cost', width: 120 },
  { field: 'ar', headerName: 'Acceptance Rate', width: 130 },
  { field: 'top', headerName: 'Top 3 Majors', width: 260 },
  { field: 'gpa', headerName: 'GPA', width: 60 },
];

const rows = [
  { id: 'University of South Florida', in: '$6,381', out: '$28,659', ar: '38.8%', top: 'Engineering,BMM,Bio', gpa: '4.42'},
];

export default function DataTable() {
  return (
    <Box
      style={{background: 'white'}}
      sx={{ flexGrow: 1, border: 1, p: 2 }}
      height="75vh"
      width="120vh"
      position="relative"
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}

