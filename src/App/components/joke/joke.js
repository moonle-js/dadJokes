import { useEffect, useState } from "react"
import style from "../../app.module.css"


export default function Joke({setJokes, jokes, text}){
    
    //  useEffect(() => {
    //     for(let i in jokes){
    //         if(jokes[i].text == text){
    //             setJokes(jokes)
    //         }
    //     }
    //  }, [])


     function showRate(){
        for(let i in jokes){
            if(jokes[i].text == text){
                return jokes[i].votes
            }
        }
     }

     function compareRates(){
        if(showRate() >= 0 && showRate() <= 5){
            return '&#128528;'
        }else if(showRate() > 5 && showRate() <= 10){
            return '&#128516;'
        }else if(showRate() > 10 && showRate() <= 12){
            return '&#128513;'
        }else if(showRate() > 12 && showRate() <= 15){
            return '&#128518;'
        }else if(showRate() > 15){
            return '&#128514;'
        }else{
            return '&#128545;'
        }
     }
     

    function upRate(){
        setJokes(jokes => {
            for(let i in jokes){
                if(jokes[i].text == text){
                    jokes[i].votes = jokes[i].votes+1;
                    
                    localStorage.setItem('jokes', JSON.stringify(jokes))
                }
            }

            return [...jokes]
        })

        
    }

    function downRate(){
        setJokes(jokes => {
            for(let i in jokes){
                if(jokes[i].text == text){
                    jokes[i].votes = jokes[i].votes-1;
                    
                    localStorage.setItem('jokes', JSON.stringify(jokes))
                }
            }

            return [...jokes]
        })
    }


    return(
        <>
            <div className={style.joke}>

                <div className={style.rates}>
                    <span onClick={downRate} className={style.pointUp}>
                        &#8595;
                    </span>
                    <div className={style.point}>
                        {showRate()}
                    </div>
                    <span onClick={upRate} className={style.pointDown}>
                        &#8593;
                    </span>
                </div>

                <span className={style.jokeText}>
                    {text}
                </span>

                <span 
                dangerouslySetInnerHTML={{__html:compareRates()}} 
                className={style.smilik}>   
                </span>
            </div>
        </>
    )
}