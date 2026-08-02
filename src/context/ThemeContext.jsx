import { createContext, useState } from "react"

const ThemeContext = createContext()

function ThemeProvider({children}){

    const [darkMode, setDarkMode] = useState(true)

    return(
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }