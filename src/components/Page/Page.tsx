import { TableField } from "../TableField/TableField";
import { DataField } from "../DataField/DataField";
import styles from "./Page.module.scss"

export const Page = () => {
  return (
    <div className={styles.container}>
      <TableField />
      <DataField />
    </div>
  );
}