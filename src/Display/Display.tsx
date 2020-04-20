import * as React from 'react'
import './Display.css'

export interface DisplayProps {
  flour: string
  water: string
}

export const numberWithCommas = (x: string | number): string => (x || 0)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const linkify = (link: string): JSX.Element => (
  <a
    href={link}
    rel='noopener noreferrer'
    target='_blank'
  >
    {link}
  </a>
)

const references = [
  'https://cnz.to/tips-tricks/converting-yeast-based-recipes-to-use-a-sourdough-starter/',
  'http://www.wildyeastblog.com/going-wild/',
  'http://www.thefreshloaf.com/node/34811/how-use-sourdough-starter-place-yeast',
]

const referenceLinks = references.map(r => (<li key={r}>{linkify(r)}</li>))

export const Display = (props: DisplayProps): JSX.Element => {
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

  return (
    <>
      {(flourNumber > 0 && waterNumber > 0) &&
      <dl className={'half'} title={'Modified recipe'}>
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
      <p>
        Note: sourdough starters take longer than dried yeast!
        You&apos;ll probably need to increase the fermentation time in your desired recipe.
      </p>
      <p>See also:</p>
      <ul>
        {referenceLinks}
      </ul>
    </>
  )
}