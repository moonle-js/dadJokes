import { useEffect, useState } from "react";
import style from "../../app.module.css"
import Joke from "../joke/joke"
import axios from "axios";
import {v4 as uuid} from 'uuid'


export default function RightSide({jokes, setJokes}){
    

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
            for(let i = 0; i < 10; i++){
                const zarafat = await getJokes()
                if(!jokes.includes(zarafat)){
                    jokes.push({id: uuid(), text:zarafat, votes: 0})
                }else{
                    console.log('var idi')
                    i--
                }
            }
            setJokes(jokes)
            window.localStorage.setItem('jokes', JSON.stringify(jokes))
        }

        if(!localStorage.getItem('jokes') || localStorage.getItem('jokes') == null){
            run()
        }else{
            return
        }
    }
    ,[])
        

    return(
        <>
            <div className={style.rightSide}>
                {jokes.sort((a,b) => b.votes - a.votes)
                    .map((item, index) => 
                    <Joke setJokes={setJokes}  jokes={jokes} text={item.text} key={index}>{item.text}</Joke> )
                }
            </div>
        </>
    )
}