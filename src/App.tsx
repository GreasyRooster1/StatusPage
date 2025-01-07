import styles from './App.module.css'
import Title from "./Title.tsx";
import StatusBlock from "./StatusBlock/StatusBlock.tsx";
import {useEffect} from "react";
import {loadTheme} from "./util/themes.ts";

function App() {
    useEffect(() => {
        loadTheme();
    })
    return (
    <div className={styles["app"]}>
        <Title></Title>
        <StatusBlock></StatusBlock>
    </div>
    )
}

export default App
