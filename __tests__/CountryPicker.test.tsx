import React from 'react'

import { create, act } from 'react-test-renderer'

import CountryPicker from '../src/'

console.disableYellowBox = true

// TODO: fix tests
it('CountryPicker can be created', () => {
  const picker = create(
    <CountryPicker countryCode={'US'} onSelect={() => {}} />,
  )
  expect(picker).toBeDefined()
})

// it('<CountryPicker /> toMatchSnapshot', () => {
//   let root
//   act(() => {
//     root = create(<CountryPicker countryCode={'US'} onSelect={() => {}} />)
//     expect(root.toJSON()).toMatchSnapshot()
//   })
// })
