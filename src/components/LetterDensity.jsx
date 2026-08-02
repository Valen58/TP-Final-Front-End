import { useContext } from "react"
import { DensityContext } from "../context/DensityContext"
import { CounterContext } from "../context/CounterContext"

function LetterDensity(){
    const { countOnlyLetters } = useContext(DensityContext)
    const { lettersUsed, noSpaces } = useContext(CounterContext)

    const onlyLetts = countOnlyLetters(noSpaces)

    return (
        <>
        <div className="letter-density">
            <ul>
                {lettersUsed.map((letter) => {
                    let percentage = onlyLetts.length > 0 ? (letter.apparitions / onlyLetts.length) * 100 : 0

                    return(
                        <li key={letter.lett} className="letter-row">
                            <span className="letter">{letter.lett.toUpperCase()}</span> 
                            <progress value={percentage} max="100"></progress> 
                            <span className="value">
                                {letter.apparitions} | {percentage.toFixed(1)}%
                            </span>
                        </li>
                    )
                })}
            </ul>
            </div>
        </>
    )
}

export { LetterDensity }