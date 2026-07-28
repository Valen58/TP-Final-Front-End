import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import { DensityContext } from "../context/DensityContext"
import { LetterDensity } from "./LetterDensity"

function TextArea(){
    const {text, setText, wordCounter, wordList, sentenceList, sentenceCounter, excludeSpaces} = useContext(CounterContext)
    const {showLetters} = useContext(DensityContext)
    
    return(
        <>
            <textarea name="" id="" className="text-area" value={text} onChange={(event) => {
                const newText = event.target.value
                setText(newText)
                wordCounter(newText)
                sentenceCounter(newText)
                showLetters(newText)
            }}></textarea>
            
            <input type="checkbox"/>Exclude Spaces
            <input type="checkbox"/>Set Character Limit
            <p>Aprox. reading time: {"<"}1 minute</p>

            <p>Total Characters: {text.length}</p>
            <p>Word Count: {wordList.length}</p>
            <p>Sentence Count: {sentenceList.length}</p>

           <LetterDensity/>
        </>
    )
}

export { TextArea }