import { createContext, useState } from "react"

const CounterContext = createContext()

function CounterProvider({ children }) {
  const [text, setText] = useState("")
  const [wordList, setWordList] = useState([])
  const [sentenceList, setSentenceList] = useState([])


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

    

    //este ciclo es medio impractico, se podria optimizar para evitar lo de los espacios contados como palabra dentro del primer for supongo
    //en el caso que el profe pida que las palabras tienen que tener > 1 caracter, es simplemente poner otra condicion en el if que diga wordslist[i].length > 1
    //let tempWordList = []
    // for (let i = 0; i < wordsList.length; i++){
    //   if (wordsList[i] !== ''){
    //     tempWordList.push(wordsList[i])
    //   }
    // }

   let newWordsList = wordsList.filter((w) => w !== '') // esta forma es mejor pero no quiero borrar la anterior por las dudas (todos estos comentarios borralos en la entrega final)

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
// por las dudas no toques esta parte hasta el martes y pregunta si realmente hace falta ponerle tantas restricciones a los contadores de caracteres, palabras y oraciones 
// (refiriendome a lo de que una palabra no es un conjunto de espacios vacios y una oracion no es simplemente un conjunto de espacios vacios con un punto al final) 
// porque tengo mis dudas si eso se encarga el exclude spaces o simplemente lo que hace es reducir el contador restandole los espacios
// intermedios que hay en el texto que se escribe en el textarea 

  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [noSpaces, setNoSpaces] = useState("")

  function deleteSpaces(text){
    let textWithoutSpaces = ""
    for (const letter of text){
      if (letter !== ' '){
        textWithoutSpaces = textWithoutSpaces + letter
      }
    }
    return textWithoutSpaces;
  }

  function exSpaces(text){
    if (excludeSpaces){
      setNoSpaces(deleteSpaces(text))
    }
  }

//-----------------------------------------------------------------------------------------------------------------------------------

  return (
    <CounterContext.Provider value={{ text, setText, wordCounter, wordList, setWordList, sentenceCounter, sentenceList, setSentenceList, excludeSpaces, setExcludeSpaces }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider }