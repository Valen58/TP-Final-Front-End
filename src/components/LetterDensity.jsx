import { useContext } from "react"
import { DensityContext } from "../context/DensityContext"
import { CounterContext } from "../context/CounterContext"

function LetterDensity(){
    const { countOnlyLetters } = useContext(DensityContext)
    const { lettersUsed, noSpaces } = useContext(CounterContext)

    const onlyLetts = countOnlyLetters(noSpaces)

    return (
        <>
            <ul>
                {lettersUsed.map((letter) => {
                    let percentage = onlyLetts.length > 0 ? (letter.apparitions / onlyLetts.length) * 100 : 0

                    return(
                        <li key={letter.lett}>
                            <span>{letter.lett.toUpperCase()}</span> 
                            <progress value={percentage} max="100"></progress> 
                            <span>
                                {percentage.toFixed(1)}%
                            </span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export { LetterDensity }