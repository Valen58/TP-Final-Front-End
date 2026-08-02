import { createContext, useContext, useState } from "react"

const CounterContext = createContext()

function CounterProvider({ children }) {
  const [text, setText] = useState("")
  const [wordList, setWordList] = useState([])
  const [sentenceList, setSentenceList] = useState([])
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [noSpaces, setNoSpaces] = useState("")
  const [checkCharLimit, setCheckCharLimit] = useState(false)
  const [charLimit, setCharLimit] = useState(0)
  const [inputLimit, setInputLimit] = useState(100)
  const [lettersUsed, setLettersUsed] = useState([])



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
    wordCounter(limitedText)
    sentenceCounter(limitedText)
    countWithoutSpaces(limitedText)
}


    function showLetters(text){
      let lowerText = text.toLowerCase()
      let letterList = []
      const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']

      for (const letter of lowerText){

        if (alphabet.includes(letter)){
          let existingLetter = letterList.find((obj) => obj.lett === letter)

          if (existingLetter){
            existingLetter.apparitions++
          }
          else{
            let letterObject = {
              lett: letter,
              apparitions: 1
            }
            letterList.push(letterObject)
          }
        }
      }

      setLettersUsed(letterList)

    }

  return (
    <CounterContext.Provider value={{ text, setText, wordCounter, wordList, setWordList, sentenceCounter, sentenceList, setSentenceList, excludeSpaces, setExcludeSpaces, countWithoutSpaces, excludeSpaces, noSpaces, checkCharLimit, setCheckCharLimit, showCharSet, charLimit, setCharLimit, applyCharLimit, lettersUsed, setLettersUsed, showLetters }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider }


