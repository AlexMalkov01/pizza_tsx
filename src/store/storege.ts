import { json } from "react-router-dom";

export function loadState<T>(key:string): T | undefined {
    try {
        const jsonState = localStorage.getItem(key)
        if (!jsonState) return;

        return JSON.parse(jsonState)
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message);
        }
    }
} 

export function saveState<T> (stete:T,key:string):undefined {
    if (stete && key) {
        localStorage.setItem(key , JSON.stringify(stete))
    }
}