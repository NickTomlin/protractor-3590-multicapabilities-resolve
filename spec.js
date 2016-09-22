describe('protractor', () => {
  it('waits for beforeLaunch to resolve', () => {
    expect(global.addedByResolve).toEqual(true)
  })
})
