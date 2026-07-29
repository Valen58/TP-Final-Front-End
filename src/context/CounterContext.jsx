import { createContext, useContext, useState } from "react"
import { DensityContext } from "./DensityContext"

const CounterContext = createContext()

function CounterProvider({ children }) {
  const [text, setText] = useState("")
  const [wordList, setWordList] = useState([])
  const [sentenceList, setSentenceList] = useState([])
  const {showLetters} = useContext(DensityContext)


  function wordCounter(text){
    const newText = text.trim()
    let wordFormed = ""
    let wordsList = []

    for (const letter of newText){
      if (letter !== " "){
        wordFormed = wordFormed + letter
      }
      else{
        wordsList.push(wordFormed)
        wordFormed = ""

      }
    }
    if (wordFormed !== ""){
      wordsList.push(wordFormed)
    }


   let newWordsList = wordsList.filter((w) => w !== '') 

    setWordList(newWordsList)
  }

  function sentenceCounter(text){
    const newText = text.trim()
    let sentenceFormed = ""
    let sentencesList = []

    for (const letter of newText){
      if (letter !== "."){
        sentenceFormed = sentenceFormed + letter
      }
      else{
        sentencesList.push(sentenceFormed)
        sentenceFormed = ""
      }
    }

    if (sentenceFormed !== ""){
      sentencesList.push(sentenceFormed)
    }

    const filteredSentenceList = sentencesList.filter((sen) => sen.trim() !== "")

    setSentenceList(filteredSentenceList)


  }

//-----------------------------------------------------------------------------------------------------------------------------------


  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [noSpaces, setNoSpaces] = useState("")
  const [checkCharLimit, setCheckCharLimit] = useState(false)
  const [charLimit, setCharLimit] = useState(0)
  const [inputLimit, setInputLimit] = useState(100)
  

  function countWithoutSpaces(text){
    let trimmedText = text.trim()
    let noSpacesText = ""
    for (const char of text){
      if (char !== ' '){
        noSpacesText = noSpacesText + char
      }
    }
    setNoSpaces(noSpacesText)
  }



  function showCharSet(text){
    return (
      <>
        <input type="number" defaultValue = {inputLimit} 
        onChange={(e) => setInputLimit(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter"){
            setCharLimit(inputLimit)
            applyCharLimit()
          }
        }}
        />        
        <button onClick={applyCharLimit}>
        Set
        </button> 
      </>
    )
  }

  function applyCharLimit() {
    const limitedText = text.slice(0, Number(inputLimit))

    setCharLimit(Number(inputLimit))
    setText(limitedText)
    showLetters(limitedText)
}

//-----------------------------------------------------------------------------------------------------------------------------------

  return (
    <CounterContext.Provider value={{ text, setText, wordCounter, wordList, setWordList, sentenceCounter, sentenceList, setSentenceList, excludeSpaces, setExcludeSpaces, countWithoutSpaces, excludeSpaces, noSpaces, checkCharLimit, setCheckCharLimit, showCharSet, charLimit, setCharLimit, applyCharLimit }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider }


