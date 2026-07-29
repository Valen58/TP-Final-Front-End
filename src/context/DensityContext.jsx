import { createContext, useContext, useState } from "react"

const DensityContext = createContext()

function DensityProvider({ children }) {
    


  function countOnlyLetters(text){
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']

    let onlyLettersText = ""

    for (const letter of text.toLowerCase()){
      if (alphabet.includes(letter)){
        onlyLettersText += letter
      }
    }

    return onlyLettersText
  }


    

    return (
    <DensityContext.Provider value={{ countOnlyLetters }}>
      {children}
    </DensityContext.Provider>
  );
}

export { DensityContext, DensityProvider }