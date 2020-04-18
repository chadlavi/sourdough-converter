import * as React from 'react'
import './Calculator.css'

export interface CalculatorProps {
  water: string
  flour: string
  setWater: React.Dispatch<React.SetStateAction<string>>
  setFlour: React.Dispatch<React.SetStateAction<string>>
}

export const Calculator = (props: CalculatorProps): JSX.Element => {
  const {
    water,
    flour,
    setWater,
    setFlour,
  } = props

  const onChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value.replace(/[^\d]/, '')
    setter(newValue)
  }

  return (
    <div id={'calculator'}>
      <form
        autoComplete={'false'}
      >
        <label>
          <span className={'label-text'}>
            Flour (g)
          </span>
          <input
            value={flour}
            name={'water'}
            onChange={onChange(setFlour)}
          />
        </label>
        <label>
          <span className={'label-text'}>
            Water (g)
          </span>
          <input
            value={water}
            name={'water'}
            onChange={onChange(setWater)}
          />
        </label>
      </form>
    </div>
  )
}
