import { render, screen } from '@testing-library/react'
import Options from '../Options'

it('Displays the properties from the country data properly', async () => {
  render(<Options countryId="Q414" />)

  const countryCapital = await screen.findByText(/Argentina/i)

  expect(countryCapital).toBeInTheDocument()
})
