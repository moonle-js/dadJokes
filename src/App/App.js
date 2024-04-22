import { useEffect, useState } from "react"
import style from './app.module.css'
import LeftSide from "./components/leftSide/leftSide"
import RightSide from "./components/rightSide/rightSide"

export default function App(){

    
    return(
        <>
            <section className={style.mainSection}>
                <LeftSide></LeftSide>
                <RightSide></RightSide>
            </section>
        </>
    )
}