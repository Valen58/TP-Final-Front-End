import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import { DensityContext } from "../context/DensityContext"
import { LetterDensity } from "./LetterDensity"

function TextArea(){
    const {text, setText, wordCounter, wordList, sentenceList, sentenceCounter, excludeSpaces, setExcludeSpaces, showLetters, countWithoutSpaces, noSpaces, checkCharLimit, setCheckCharLimit, showCharSet, charLimit, applyCharLimit} = useContext(CounterContext)
    let readingTime = Math.ceil(wordList.length / 200) //OJO NO SE SI ES LA FORMA QUE PIDIO EL PROFE MAÑANA PREGUNTALE WACHIN
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
            
            <p>Aprox. reading time: {readingTime < 1 ? "<1" : readingTime} {" "} {readingTime === 1 ? "minute" : "minutes"}</p>

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
            

            <p>Total Characters: {excludeSpaces ? noSpaces.length : text.length}</p>
            <p>Word Count: {wordList.length}</p>
            <p>Sentence Count: {sentenceList.length}</p>

            <h2>Letter Density</h2>

           <LetterDensity/>
        </>
    )
}

export { TextArea }