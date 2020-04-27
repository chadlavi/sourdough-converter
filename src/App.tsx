import React from 'react'
import { Calculator, CalculatorProps } from './Calculator/Calculator'
import { Display, DisplayProps } from './Display/Display'
import {
  CSSVariables,
  GlobalStyles,
  Grid,
  GridItem,
  Header,
  Link,
  Page,
  Paragraph,
} from '@chadlavi/clear'

export const linkify = (link: string): JSX.Element => (
  <Link
    href={link}
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

  const showDisplay = Boolean(flour && flour > 0 && water && water > 0)

  return (
    <>
      <CSSVariables />
      <GlobalStyles />
      <Page>
        <Grid spacing={16}>
          <GridItem>
            <Header>Sourdough converter</Header>
          </GridItem>
          <GridItem size={showDisplay ? 8 : 12}>
            <Calculator {...calculatorProps} />
          </GridItem>
          {showDisplay && <GridItem size={4}>
            <Display {...displayProps} />
          </GridItem>}
          <GridItem>
            <Paragraph>
              Note: sourdough starters take longer than dried yeast!
              You&apos;ll probably need to increase the fermentation time in your desired recipe.
            </Paragraph>
            <Paragraph>See also:</Paragraph>
            <ul>
              {referenceLinks}
            </ul>
          </GridItem>
          <GridItem>
            <Paragraph margins={false} style={{textAlign: 'right', fontSize: 'var(--clear-font-size-label)'}}>
              Built with <Link href={'https://chadlavi.github.io/clear/'}>Clear</Link>
            </Paragraph>
          </GridItem>
        </Grid>
      </Page>
    </>
  )
}

export default App
