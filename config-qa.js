const {defineConfig} = require('cypress')
const baseConfig = require('./cypress.config')


const e2e = {
    baseUrl: 'http://www.qa.saucedemo.com/',
    env: {
      username:'QA_sauce', 
      password: 'QA_secret'
    }
}
module.exports = defineConfig({
    ...baseConfig,
    e2e
})
