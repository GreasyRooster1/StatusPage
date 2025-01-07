import styles from "./Circle.module.css"

interface CircleProps {
    className: string
}

function Circle({className}: CircleProps) {
    return (
        <div className={`${className} ${styles["circle"]}`}></div>
    );
}

export default Circle;