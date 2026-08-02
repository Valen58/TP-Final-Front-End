import { useContext } from 'react'
import { CounterHeader } from './components/CounterHeader'
import { CounterProvider } from './context/CounterContext'
import { DensityProvider } from './context/DensityContext'
import { TextArea } from './components/TextArea'
import './App.css'
import { ThemeProvider, ThemeContext } from "./context/ThemeContext"


function AppContent(){

    const {darkMode} = useContext(ThemeContext)

    return(
        <article className={darkMode ? "dark" : "light"}>
            <CounterHeader/>
            <TextArea/>
        </article>
    )
}


function App() {

    return(
        <ThemeProvider>
            <DensityProvider>
                <CounterProvider>
                    <AppContent/>
                </CounterProvider>
            </DensityProvider>
        </ThemeProvider>
    )
}

export default App