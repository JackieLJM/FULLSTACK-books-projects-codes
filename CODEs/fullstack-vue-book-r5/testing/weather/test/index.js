import Vue from 'vue'
import "es6-promise/auto"

Vue.config.productionTip = false

// require all test files within ./specs/weather
const testsContext = require.context('./specs/weather', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
