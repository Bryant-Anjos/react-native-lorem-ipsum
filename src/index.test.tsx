import * as React from 'react'

import { render } from '@testing-library/react-native'

import Lorem from './index'

it('renders correctly', async () => {
  const { getByText } = render(<Lorem />)
  const lorem = getByText(/(?:\b\w+\b[\s]*){5}/)
  expect(lorem).toBeDefined()
})
