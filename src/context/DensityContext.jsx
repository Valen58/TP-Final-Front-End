import { createContext, useState } from "react"

const DensityContext = createContext()

function DensityProvider({ children }) {
    const [lettersUsed, setLettersUsed] = useState([])


    //HACE EL CONTADOR PARA QUE SALGA EL PORCENTAJE DE APARICION DE CADA LETRA EN EL TEXTO, QUIZAS PODRIAS EN VEZ DE PASAR SOLO UN STRING PASES UN OBJETO CON LA LETRA Y LA CANTIDAD DE VECES QUE APARECE
    function showLetters(text){
      let lowerText = text.toLowerCase()
      let letterList = []
      const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

      for (const letter of lowerText){
        if (!letterList.includes(letter) && alphabet.includes(letter)){ //ojo que si pones primero la mayuscula no te la cuenta a pesar de que es una letra(creo que lo solucione despues fijate mejor jeje)
          letterList.push(letter)
        }
      }
      console.log(letterList)

      setLettersUsed(letterList)

    }


    

    return (
    <DensityContext.Provider value={{ lettersUsed, setLettersUsed, showLetters }}>
      {children}
    </DensityContext.Provider>
  );
}

export { DensityContext, DensityProvider }