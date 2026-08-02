import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import { DensityContext } from "../context/DensityContext"
import { LetterDensity } from "./LetterDensity"

function TextArea(){
    const {text, setText, wordCounter, wordList, sentenceList, sentenceCounter, excludeSpaces, setExcludeSpaces, showLetters, countWithoutSpaces, noSpaces, checkCharLimit, setCheckCharLimit, showCharSet, charLimit, applyCharLimit} = useContext(CounterContext)
    const {showAllLetters, setShowAllLetters} = useContext(DensityContext)
    let readingTime = Math.ceil(wordList.length / 200)
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
            
        <div className="checkbox-area">

            <input
                type="checkbox"
                checked={excludeSpaces}
                className="checkbox"
                onChange={(event) => setExcludeSpaces(event.target.checked)}
            />
            Exclude Spaces

            <input
                type="checkbox"
                checked={checkCharLimit}
                className="checkbox"
                onChange={(event) => setCheckCharLimit(event.target.checked)}
            />
            Set Character Limit

            <p>
                Aprox. reading time: {readingTime < 1 ? "<1" : readingTime}{" "}
                {readingTime === 1 ? "minute" : "minutes"}
            </p>

        </div>

        {checkCharLimit && (
            <div className="char-limit-container">
                {showCharSet()}
            </div>
        )}
            
            <div className="cards-area">

                <div>
                    <h2>{excludeSpaces ? noSpaces.length : text.length}</h2>
                    <p>Total Characters</p>
                </div>
                
                <div>
                    <h2>{wordList.length}</h2>
                    <p>Word Count</p>
                </div>
                
                <div>
                    <h2>{sentenceList.length}</h2>
                    <p>Sentence Count</p>
                </div>
            </div>
            
            <div className="letter-density-area">
                <h2>Letter Density</h2>

                <LetterDensity/>
                
            <button className="see-more-button" onClick={() => setShowAllLetters(!showAllLetters)}>
                {showAllLetters ? "See less" : "See more"}
            </button>
            </div>

        </>
    )
}

export { TextArea }