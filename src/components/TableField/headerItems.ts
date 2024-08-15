import { HeadCell } from "../../shared/types";

export const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    label: 'Название',
    sortable: false,
  },
  {
    id: 'language',
    label: 'Язык',
    sortable: false,
  },
  {
    id: 'forks_count',
    label: 'Число форков',
    sortable: true,
  },
  {
    id: 'stargazers_count',
    label: 'Число звёзд',
    sortable: true,
  },
  {
    id: 'updated_at',
    label: 'Дата обновления',
    sortable: true,
  },
];