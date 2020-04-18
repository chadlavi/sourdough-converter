import React from 'react'
import './App.css'
import { Calculator, CalculatorProps } from './Calculator/Calculator'
import { Display, DisplayProps } from './Display/Display'

const App = (): JSX.Element => {
  const [flour, setFlour] = React.useState<string>('')
  const [water, setWater] = React.useState<string>('')

  const displayProps: DisplayProps = {
    flour,
    water,
  }

  const calculatorProps: CalculatorProps = {
    ...displayProps,
    setFlour,
    setWater,
  }

  return (
    <div id='App'>
      <Calculator {...calculatorProps} />
      <Display {...displayProps} />
    </div>
  )
}

export default App
