import styles from './App.module.css'
import StatusBlock from "./StatusBlock/StatusBlock.tsx";
import {useEffect} from "react";
import {loadTheme} from "./util/themes.ts";

function App() {
    useEffect(() => {
        loadTheme();
    })
    return (
    <div className={styles["app"]}>
        <StatusBlock></StatusBlock>
    </div>
    )
}

export default App
