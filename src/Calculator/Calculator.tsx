import * as React from 'react'
import { Input, Grid, GridItem, Label } from '@chadlavi/clear'

export interface CalculatorProps {
  water: number | undefined
  flour: number | undefined
  setWater: React.Dispatch<React.SetStateAction<number | undefined>>
  setFlour: React.Dispatch<React.SetStateAction<number | undefined>>
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

  return (
    <div id={'calculator'}>
      <Grid>
        <GridItem>
          <Label htmlFor='flour'>Original recipe flour (g)</Label>
          <Input
            value={flour}
            name={'flour'}
            onChange={onChange(setFlour)}
            id={'flour'}
            type={'number'}
            inputMode={'decimal'}
            pattern={'[0-9]*'}
            min={0}
          />
        </GridItem>
        <GridItem>
          <Label htmlFor='water'>Original recipe water (g)</Label>
          <Input
            value={water}
            name={'water'}
            onChange={onChange(setWater)}
            type={'number'}
            inputMode={'decimal'}
            pattern={'[0-9]*'}
            min={0}
          />
        </GridItem>
      </Grid>
    </div>
  )
}
