import * as React from 'react'
import './Display.css'

export interface DisplayProps {
  flour: string
  water: string
}

export const numberWithCommas = (x: string | number): string => (x || 0)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const Display = (props: DisplayProps): JSX.Element | null => {
  const {
    flour,
    water,
  } = props

  const flourNumber = parseInt(flour, 10)
  const waterNumber = parseInt(water, 10)
  const percentage = 100 * (waterNumber / flourNumber)
  const sourdough = (flourNumber + waterNumber) / 6
  const flourResult = numberWithCommas(Math.round(flourNumber - (sourdough / 2)))
  const waterResult = numberWithCommas(Math.round(waterNumber - (sourdough / 2)))
  const starterResult = numberWithCommas(Math.round(sourdough))

  const displayData = [
    {
      data: starterResult,
      label: 'Starter',
    },
    {
      data: waterResult,
      label: 'Water'
    },
    {
      data: flourResult,
      label: 'Flour',
    },
  ]

  return (flourNumber > 0 && waterNumber > 0) ? (
    <dl>
      <dt>
        Baker's percentage
      </dt>
      <dd>
        {percentage}%
      </dd>
      {
        displayData.map(d => (
          <React.Fragment key={d.label}>
            <dt>
              {d.label}
            </dt>
            <dd>
              {d.data}g
            </dd>
          </React.Fragment>
        ))
      }
      <dt>
        Other ingredients
      </dt>
      <dd>
        <i>no change</i>
      </dd>
    </dl>
  ) : null
}
