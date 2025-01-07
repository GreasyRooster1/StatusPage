import styles from './StatusBlock.module.css'
import Status from "./Status.tsx";
import Title from "../Title.tsx";

function StatusBlock() {
  return (
    <div className={styles["wrapper"]}>
        <Title/>
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
