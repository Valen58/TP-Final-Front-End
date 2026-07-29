import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import { DensityContext } from "../context/DensityContext"
import { LetterDensity } from "./LetterDensity"

function TextArea(){
    const {text, setText, wordCounter, wordList, sentenceList, sentenceCounter, excludeSpaces, setExcludeSpaces, countWithoutSpaces, noSpaces, checkCharLimit, setCheckCharLimit, showCharSet, charLimit, applyCharLimit} = useContext(CounterContext)
    const {showLetters} = useContext(DensityContext)
    
    return(
        <>
            <textarea name="" id="" className="text-area" value={text} onChange={(event) => {
                let newText = event.target.value
                if (checkCharLimit) {
                    newText = newText.slice(0, charLimit)
                }
                setText(newText)
                wordCounter(newText)
                sentenceCounter(newText)
                showLetters(newText)
                countWithoutSpaces(newText)

            }}></textarea>
            
            <input type="checkbox" 
            checked={excludeSpaces} 
            onChange={(event) => setExcludeSpaces(event.target.checked)}/>
            Exclude Spaces

            <input type="checkbox"
            checked = {checkCharLimit}
            onChange={(event) => setCheckCharLimit(event.target.checked)}
            />
            Set Character Limit
            {checkCharLimit ? showCharSet() : null}
            <p>Aprox. reading time: {"<"}1 minute</p>

            <p>Total Characters: {excludeSpaces ? noSpaces.length : text.length}</p>
            <p>Word Count: {wordList.length}</p>
            <p>Sentence Count: {sentenceList.length}</p>

           <LetterDensity/>
        </>
    )
}

export { TextArea }