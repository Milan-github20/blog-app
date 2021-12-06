import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from "./pagination.module.css";

export default function PaginationRounded() {
  return (
    <div>
      <Stack spacing={2} className={styles.stack}>
        <Pagination
          count={4}
          variant="outlined"
          shape="rounded"
          className={styles.pagination}
          size="large"
        />
      </Stack>
    </div>
  );
}
