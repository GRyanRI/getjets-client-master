'use strict'

let apiUrl
const apiUrls = {
  jetion: 'https://immense-river-30415.herokuapp.com/',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.jet
}

module.exports = {
  apiUrl
}
