'use strict'

const config = {
  framework: 'jasmine',
  specs: ['./spec.js'],

  multiCapabilities: [
    {
      browserName: 'chrome'
    }
  ],
  chromeDriver: require('chromedriver').path,
  directConnect: true,
  beforeLaunch: () => {
    console.log('starting')
    return new Promise(resolve => {
      setTimeout(() => {
        config.baseUrl = 'http://example.com'
        console.log('DONE AND SET')
        resolve()
      }, 2000)
    })
  }
}

module.exports = {
  config
}
