import { fireEvent, render, screen } from '@testing-library/react'
import Login from './index'

it('Changes login type with button firing', async () => {
  render(<Login />)
  const changeButton = await screen.findByRole('button', {
    name: /Haven't you/i,
  })
  fireEvent.click(changeButton)
  expect(
    await screen.findByRole('button', { name: /Do you/i })
  ).toBeInTheDocument()
})
