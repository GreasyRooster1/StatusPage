import styles from "./Light.module.css"
import {useEffect, useState} from "react";
import axios from 'axios';

interface LightProps {
    name: string;
}

function Light(props:LightProps) {
    const [status,setStatus] = useState("disconnected");
    useEffect(() => {
        const url = "127.0.0.1:1313/status?sector="+props.name.toLowerCase();
        let validResponses = ["good","ok","bad"]
        axios.get(url)
            .then(response => {
                if(validResponses.includes(response.data)){
                    setStatus(response.data);
                }else{
                    setStatus("disconnected");
                }
            })
            .catch(error => {
                setStatus("disconnected");
                console.error(error);
            });
        
    },[status,setStatus,props.name]);
    return (
        <div className ={styles["wrapper"]}>
            <div className={styles["top"]}>
                <div className={styles["light"]}></div>
                <span className={styles["title"]}>{props.name}</span>
            </div>
            <div className={styles["details"]}>
                <span>details</span>
            </div>
        </div>
    );
}

export default Light;