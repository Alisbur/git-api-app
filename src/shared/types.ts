export interface GitResponse {
  total_count: number;
  incomplete_results: boolean;
  items: any;
}

export interface RepoItem {
  id: number;
  name: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
}

export type Order = 'asc' | 'desc';

export interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof RepoItem) => void;
  order: Order;
  orderBy: string;
}

export interface HeadCell {
  id: keyof RepoItem;
  label: string;
  sortable: boolean;
}