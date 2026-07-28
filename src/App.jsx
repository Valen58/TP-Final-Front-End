import { useState } from 'react'
import { CounterHeader } from './components/CounterHeader'
import { CounterContext } from './context/CounterContext'
import { CounterProvider } from './context/CounterContext'
import { DensityContext } from './context/DensityContext'
import { DensityProvider } from './context/DensityContext'
import { TextArea } from './components/TextArea'
import { LetterDensity } from './components/LetterDensity'
import './App.css'

function App() {
    return(
        <DensityProvider>
            <CounterProvider>
                <>
                    <CounterHeader/>
                    <TextArea/>
                    <h2>Letter Density</h2>
                </>
            </CounterProvider>
        </DensityProvider>
    )
}

export default App
