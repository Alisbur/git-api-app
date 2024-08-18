//Интерфейс данных о лицензии репозитория
export interface License {
  key: string;
  name: string,
  spdx_id: string,
  url: string | null,
  node_id: string,
}

//Интерфейс данных репозитория, необходимых для работы приложения
export interface RepoItem {
  id: number;
  name: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
  license: License;
}

//Тип данных репозитория в ответе api поиска в github
export type ResponseRepoItem = RepoItem & any;

//Интерфейс ответа api поиска в github
export interface GitResponse {
  total_count: number;
  incomplete_results: boolean;
  items: ResponseRepoItem;
}

//Интерфейс данных строки репозитория в таблице
export interface Row {
  id: number;
  name: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
}

//Тип сортировки данных (по возрастанию/убыванию)
export type Order = 'asc' | 'desc';

//Интерфейс параметров сортировки таблицы
export interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Row) => void;
  order: Order;
  orderBy: string;
}

//Интерфейс данных ячейки шапки таблицы
export interface HeadCell {
  id: keyof Row;
  label: string;
  sortable: boolean;
}