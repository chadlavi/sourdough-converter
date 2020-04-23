import * as React from 'react'
import './Calculator.css'

export interface CalculatorProps {
  water: number|undefined
  flour: number|undefined
  setWater: React.Dispatch<React.SetStateAction<number|undefined>>
  setFlour: React.Dispatch<React.SetStateAction<number|undefined>>
}

export const Calculator = (props: CalculatorProps): JSX.Element => {
  const {
    water,
    flour,
    setWater,
    setFlour,
  } = props

  const onChange = (
    setter: React.Dispatch<React.SetStateAction<number | undefined>>
  ) => (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = parseFloat(e.currentTarget.value || '0')
    console.log(newValue)
    setter(newValue)
  }

  const selectAll = (e: React.MouseEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>): void => {
    const t = e.currentTarget
    setTimeout(() => {
      t.select()
    }, 100)
  }

  return (
    <div className={'half'} id={'calculator'}>
      <form
        autoComplete={'false'}
      >
        <label>
          <span className={'label-text'}>
            Original recipe flour (g)
          </span>
          <input
            value={flour || ' '}
            name={'water'}
            onChange={onChange(setFlour)}
            id={'flour'}
            type={'number'}
            inputMode={'decimal'}
            pattern={'[0-9]*'}
            min={0}
            onFocus={selectAll}
            onClick={selectAll}
          />
        </label>
        <label>
          <span className={'label-text'}>
            Original recipe water (g)
          </span>
          <input
            value={water || ' '}
            name={'water'}
            onChange={onChange(setWater)}
            type={'number'}
            inputMode={'decimal'}
            pattern={'[0-9]*'}
            min={0}
            onFocus={selectAll}
            onClick={selectAll}
          />
        </label>
      </form>
    </div>
  )
}
