import * as React from 'react';
import { Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { RepoItem, Order } from '../../shared/types';
import styles from "./TableField.module.scss";
import {getComparator, stableSort} from '../../shared/helpers';
import { EnhancedTableHead } from './EnchancedTableHead';

const rows: RepoItem[] = [
  {id: 1, name: "repo1", language: "c++", forks_count: 3, stargazers_count: 3, updated_at: "01.01.2001"},
  {id: 2, name: "repo2", language: "python", forks_count: 8, stargazers_count: 4, updated_at: "01.01.2001"},
  {id: 3, name: "3epo1", language: "go", forks_count: 6, stargazers_count: 54, updated_at: "01.02.2001"},
  {id: 4, name: "repo4", language: "javascript", forks_count: 32, stargazers_count: 45, updated_at: "03.01.2001"},
  {id: 5, name: "rep231", language: "python", forks_count: 3, stargazers_count: 234, updated_at: "01.03.2001"},
  {id: 6, name: "rep23o1", language: "c++", forks_count: 4, stargazers_count: 33, updated_at: "03.02.2001"},
  {id: 7, name: "repo4231", language: "go", forks_count: 5, stargazers_count: 23, updated_at: "01.04.2001"},
  {id: 8, name: "repo2331", language: "python", forks_count: 3, stargazers_count: 65, updated_at: "06.08.2001"},
  {id: 9, name: "repo231", language: "javascript", forks_count: 23, stargazers_count: 45, updated_at: "08.05.2001"},
  {id: 10, name: "rep3o231", language: "python", forks_count: 3, stargazers_count: 34, updated_at: "01.05.2001"},
  {id: 11, name: "repo2431", language: "go", forks_count: 2, stargazers_count: 876, updated_at: "04.03.2001"},
  {id: 12, name: "repo3231", language: "javascript", forks_count: 11, stargazers_count: 435, updated_at: "01.09.2001"},
];

export const TableField = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof RepoItem>('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof RepoItem,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    console.log("click");
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <div className={styles.container}>
      <Stack justifyContent="space-between" sx={{ width: '100%', height: "100%" }}>
        <TableContainer >
          <Table
            sx={{ minWidth: 750 }}
            style={{ tableLayout: 'fixed' }}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.language}</TableCell>
                    <TableCell align="left">{row.forks_count}</TableCell>
                    <TableCell align="left">{row.stargazers_count}</TableCell>
                    <TableCell align="left">{row.updated_at}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Stack>
    </div>
  );
}