import styles from './StatusBlock.module.css'
import Light from "./Light.tsx";

function StatusBlock() {
  return (
    <div className={styles["wrapper"]}>
        <div className={styles["title"]}>
            Title
        </div>
        <div className={styles["lights"]}>
            <Light name="Connection"></Light>
            <Light name="Ram"></Light>
            <Light name="Storage"></Light>
            <Light name="CPU"></Light>
            <Light name="Temp"></Light>
        </div>
    </div>
  )
}

export default StatusBlock
