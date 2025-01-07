import styles from './StatusBlock.module.css'
import Status from "./Status.tsx";

function StatusBlock() {
  return (
    <div className={styles["wrapper"]}>
        <div className={styles["title"]}>
            Title
        </div>
        <div className={styles["lights"]}>
            <Status name="Connection"></Status>
            <Status name="Ram"></Status>
            <Status name="Storage"></Status>
            <Status name="CPU"></Status>
            <Status name="Temp"></Status>
        </div>
    </div>
  )
}

export default StatusBlock
