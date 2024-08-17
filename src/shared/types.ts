export interface License {
  key: string;
  name: string,
  spdx_id: string,
  url: string | null,
  node_id: string,
}

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

export type ResponseRepoItem = RepoItem & any;

export interface GitResponse {
  total_count: number;
  incomplete_results: boolean;
  items: ResponseRepoItem;
}

export interface Row {
  id: number;
  name: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
}

export type Order = 'asc' | 'desc';

export interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Row) => void;
  order: Order;
  orderBy: string;
}

export interface HeadCell {
  id: keyof Row;
  label: string;
  sortable: boolean;
}