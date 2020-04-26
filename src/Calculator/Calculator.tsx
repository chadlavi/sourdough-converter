import * as React from 'react'
import { Input, Grid, GridItem } from '@chadlavi/clear'

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
    <div id={'calculator'}>
      <Grid>
        <GridItem>
          <Input
            value={flour}
            name={'flour'}
            label={'Original recipe flour (g)'}
            onChange={onChange(setFlour)}
            id={'flour'}
            type={'number'}
            inputMode={'decimal'}
            pattern={'[0-9]*'}
            min={0}
            onFocus={selectAll}
            onClick={selectAll}
          />
        </GridItem>
        <GridItem>
          <Input
            value={water}
            name={'water'}
            onChange={onChange(setWater)}
            type={'number'}
            inputMode={'decimal'}
            pattern={'[0-9]*'}
            label={'Original recipe water (g)'}
            min={0}
            onFocus={selectAll}
            onClick={selectAll}
          />
        </GridItem>
      </Grid>
    </div>
  )
}
