import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./data";

function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const tableData = {
    columns,
    data,
  };
  if (mounted)
    return (
      <div className="main">
        <DataTableExtensions {...tableData}>
          <DataTable
            columns={columns}
            data={data}
            noHeader
            defaultSortField="id"
            sortIcon={<SortIcon />}
            defaultSortAsc={true}
            pagination
            highlightOnHover
            dense
          />
        </DataTableExtensions>
      </div>
    );
}

export default App;
