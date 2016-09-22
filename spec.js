describe('protractor', () => {
  it('waits for beforeLaunch to resolve', () => {
    expect(browser.baseUrl).toEqual('http://example.com')
  })
})
