import { useEffect, useState } from "react"
import style from './app.module.css'
import LeftSide from "./components/leftSide/leftSide"
import RightSide from "./components/rightSide/rightSide"
import axios from "axios"
import {v4 as uuid} from 'uuid'

export default function App(){

    const [jokes, setJokes] = useState(JSON.parse(localStorage.getItem('jokes')) || []);

    const getJokes = async () => {
        try{
            let res = await axios.get("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" }
            });
            return res.data.joke
        }catch (error){

        }
    }


    function setNewJokes(){
        async function run(){
            let localjokes = jokes
            for(let i = 0; i < 10; i++){
                const zarafat = await getJokes()
                if(!localjokes.includes(zarafat)){
                    jokes.push({id: uuid(), text:zarafat, votes: 0})
                }else{
                    i--
                }
            }

            setJokes([...localjokes])
            console.log(jokes)
            window.localStorage.setItem('jokes', JSON.stringify(jokes))
        }

        run()
    }

    
    return(
        <>
            <section className={style.mainSection}>
                <LeftSide setNewJokes={setNewJokes}></LeftSide>
                <RightSide jokes={jokes} setJokes={setJokes} ></RightSide>
            </section>
        </>
    )
}