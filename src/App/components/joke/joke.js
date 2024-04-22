import { useEffect, useState } from "react"
import style from "../../app.module.css"
import Rates from "../rates/rates"

function compareRates(rate){
    if(rate < 5 && rate > -5){
        return '&#128528;'
    }else if (rate <= -5){
        return '&#128530;'
    }else if(rate >= 5){
        return '&#128514;'
    }
}


export default function Joke(props){
    const [rate, setRate] = useState(0)
    
     useEffect(() => {

        for(let i in props.jokes){
            if(props.jokes[i].text == props.children){
                setRate(props.jokes[i].votes)
                props.setJokes(props.jokes)
            }
        }
     }, [])


    function upRate(){
        for(let i in props.jokes){
            if(props.jokes[i].text == props.children){
                props.jokes[i].votes++;
                setRate(props.jokes[i].votes)
                props.setJokes(props.jokes)
            }
        }
    }

    function downRate(){
        for(let i in props.jokes){
            if(props.jokes[i].text == props.children){
                props.jokes[i].votes--;
                setRate(props.jokes[i].votes)
                props.setJokes(props.jokes)
            }
        }
    }


    return(
        <>
            <div className={style.joke}>

                <div className={style.rates}>
                    <span onClick={downRate} className={style.pointUp}>
                        &#8593;
                    </span>
                    <div className={style.point}>
                        {rate}
                    </div>
                    <span onClick={upRate} className={style.pointDown}>
                        &#8593;
                    </span>
                </div>

                <span>
                    {props.children}
                </span>

                <span 
                dangerouslySetInnerHTML={{__html:compareRates(rate)}} 
                className={style.smilik}>   
                </span>
            </div>
        </>
    )
}