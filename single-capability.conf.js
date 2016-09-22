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
        global.addedByResolve = true
        console.log('resolving')
        resolve()
      }, 5000)
    })
  }
}

module.exports = {
  config
}
