import React, {useState, useEffect, useMemo} from 'react';
import { Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { RepoItem, Order, Row } from '../../shared/types';
import styles from "./TableField.module.scss";
import {getComparator, stableSort} from '../../shared/helpers';
import { EnhancedTableHead } from './EnchancedTableHead';

interface TableFieldProps {
  reps: RepoItem[];
  // rows: Row[];
  selectItem: (id: number) => void;
}

export const TableField = ({reps, selectItem}: TableFieldProps) => {
  const [rows, setRows] = useState<Row[]>([]);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Row>('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(()=>{
    setOrder('asc');
    setOrderBy('id');
    setPage(0);
    const rowsData = reps.reduce((acc: Row[], el: RepoItem) => {
      return [...acc, 
        {
          id: el.id,
          name: el.name,
          language: el.language,
          forks_count: el.forks_count,
          stargazers_count: el.stargazers_count,
          updated_at: el.updated_at,
        }
      ]
    }, []);
    setRows(rowsData);
  }, [reps])

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Row,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = useMemo(
    () => stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, rows],
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
              {visibleRows.map((row: Row, index: number) => {
                const updatedDate = new Date(row.updated_at).toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit'});
                
                return (
                  <TableRow
                    hover
                    onClick={() => selectItem(row.id)}
                    // onClick={(event) => handleClick(event, row.id)}
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.language}</TableCell>
                    <TableCell align="left">{row.forks_count}</TableCell>
                    <TableCell align="left">{row.stargazers_count}</TableCell>
                    <TableCell align="left">{updatedDate}</TableCell>
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