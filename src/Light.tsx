import styles from "./Light.module.css"

interface LightProps {
    name: string;
}

function Light(props:LightProps) {
    return (
        <div className ={styles["wrapper"]}>
            <span className={styles["light"]}></span>
            <span className={styles["title"]}>{props.name}</span>
        </div>
    );
}

export default Light;