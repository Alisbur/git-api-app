import { Order, ResponseRepoItem, RepoItem } from "./types";

//функция компаратор значений типа String или Number
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

//функция компаратор объектов, которая принимает тип сортировки и свойство по 
//которому требуется сортировать объекты и возвращает функцию компаратора
//соответствующих свойств объектов по возрастанию или убыванию
export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

//функция сортировки массива с использованием компаратора
export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

//функция преобразования массива результатов запроса к api в массив объектов типа RepoItem
export const normalizeFetchedResults = (data: ResponseRepoItem[]): RepoItem[] | [] => {
  if(!data) return [];
  const result = data.reduce((acc, item: ResponseRepoItem) => {
    return [...acc, {
      id: item.id, 
      name: item.name, 
      language: item.language, 
      forks_count: item.forks_count, 
      stargazers_count: item.stargazers_count, 
      updated_at: item.updated_at,
      license: item.license,
      topics: item.topics,
    }]
  },[])
  return result;
}