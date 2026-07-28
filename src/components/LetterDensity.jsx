import { useContext } from "react"
import { DensityContext } from "../context/DensityContext"

function LetterDensity(){
    const { lettersUsed, showLetters } = useContext(DensityContext)
    return (
        <>
            <ul>
                {lettersUsed.map((letter) => <li key={letter}><span>{letter.toUpperCase()}</span><progress value = "50" max = "100">{letter}</progress></li>)}
            </ul>
        </>
    )
}

export { LetterDensity }