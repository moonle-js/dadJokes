import smile from "../../../images/smile.svg"
import style from "../../app.module.css"

export default function LeftSide({setNewJokes}){
    return(
        <>
            <div className={style.leftSide}>
                <h1>
                    <span className={style.dad}>Dad</span> Jokes
                </h1>

                <img src={smile}  className={style.smile} title="sekil">
                    
                </img>

                <button onClick={setNewJokes} className={style.newJokes}>
                    New Jokes
                </button>
            </div>
            
        </>
    )
}