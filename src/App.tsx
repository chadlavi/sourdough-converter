import React from 'react'
import './App.css'
import { Calculator, CalculatorProps } from './Calculator/Calculator'
import { Display, DisplayProps } from './Display/Display'
import { CSSBaseline, Grid, GridItem, Page, Link } from '@chadlavi/clear'

export const linkify = (link: string): JSX.Element => (
  <Link
    href={link}
    rel='noopener noreferrer'
    target='_blank'
  >
    {link}
  </Link>
)

const references = [
  'https://cnz.to/tips-tricks/converting-yeast-based-recipes-to-use-a-sourdough-starter/',
  'http://www.wildyeastblog.com/going-wild/',
  'http://www.thefreshloaf.com/node/34811/how-use-sourdough-starter-place-yeast',
]

const referenceLinks = references.map(r => (<li key={r}>{linkify(r)}</li>))


const App = (): JSX.Element => {
  const [flour, setFlour] = React.useState<number|undefined>()
  const [water, setWater] = React.useState<number|undefined>()

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
    <>
      <CSSBaseline />
      <Page>
        <Grid spacing={16}>
          <GridItem>
            <h1>Sourdough converter</h1>
          </GridItem>
          <GridItem size={6}>
            <Calculator {...calculatorProps} />
          </GridItem>
          <GridItem size={6}>
            <Display {...displayProps} />
          </GridItem>
          <GridItem>
            <p>
              Note: sourdough starters take longer than dried yeast!
              You&apos;ll probably need to increase the fermentation time in your desired recipe.
            </p>
            <p>See also:</p>
            <ul>
              {referenceLinks}
            </ul>
          </GridItem>
        </Grid>
      </Page>
    </>
  )
}

export default App
