import * as React from 'react'
import './Display.css'

export interface DisplayProps {
  flour: number | undefined
  water: number | undefined
}

export const numberWithCommas = (x: string | number): string => (x || 0)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const Display = (props: DisplayProps): JSX.Element => {
  const {
    flour = 0,
    water = 0,
  } = props

  const percentage = (100 * (water / flour)).toFixed(2)
  const sourdough = (flour + water) / 6
  const flourResult = numberWithCommas(Math.round(flour - (sourdough / 2)))
  const waterResult = numberWithCommas(Math.round(water - (sourdough / 2)))
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

  return (
    <>
      {(flour > 0 && water > 0) &&
      <dl title={'Modified recipe'}>
        <dt>
          Baker&apos;s percentage
        </dt>
        <dd>
          <strong>{percentage}%</strong>
        </dd>
        {
          displayData.map(d => (
            <React.Fragment key={d.label}>
              <dt>
                {d.label}
              </dt>
              <dd>
                <strong>{d.data}g</strong>
              </dd>
            </React.Fragment>
          ))
        }
        <dt>
          Yeast
        </dt>
        <dd>
          <strong>0g</strong>
        </dd>
        <dt>
          Other ingredients
        </dt>
        <dd>
          <i>no change</i>
        </dd>
      </dl>
      }
    </>
  )
}
