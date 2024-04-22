import { useEffect, useState } from "react";
import style from "../../app.module.css"
import Joke from "../joke/joke"
import axios from "axios";
import {v4 as uuid} from 'uuid'


export default function RightSide(){
    
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

    useEffect(() => {

        async function run(){
            let jokes = []
            console.log('salam')
            for(let i = 0; i < 10; i++){
                const zarafat = await getJokes()
                jokes.push({id: uuid(), text:zarafat, votes: 0})
            }
            setJokes(jokes)
            window.localStorage.setItem('jokes', JSON.stringify(jokes))
        }

        if(!localStorage.getItem('jokes') || localStorage.getItem('jokes') == null){
            run()
            console.log(jokes)
        }else{
            return
        }
    }
    ,[jokes])
        

    return(
        <>
            <div className={style.rightSide}>
                {jokes.sort((a,b) => a.votes - b.votes).map((item, index) => <Joke setJokes={setJokes}  jokes={jokes} key={index} >{item.text}</Joke> )}
            </div>
        </>
    )
}