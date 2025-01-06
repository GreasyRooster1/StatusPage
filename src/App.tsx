import styles from './App.module.css'
import Title from "./Title.tsx";
import StatusBlock from "./StatusBlock.tsx";

function App() {
  return (
    <div className={styles["app"]}>
        <Title></Title>
        <StatusBlock></StatusBlock>
    </div>
  )
}

export default App
