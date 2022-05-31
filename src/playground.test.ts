import {expect} from 'chai'

import {playground} from "./playground"

describe('Playground', () => {
  it('Returns null', () => {
    expect(playground()).to.be.null
  })
})
