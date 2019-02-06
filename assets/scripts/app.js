'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./event.js')
const browseEvents = require('./browse/events.js')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#mbrsign').on('submit', authEvents.onMbrSign)
  $('#womens').on('click', browseEvents.onGetWomensClothing)
  $('#mens').on('click', browseEvents.onGetMensClothing)
  $('#jetList').on('submit', '.add-to-contact-women', browseEvents.onAddToContactWomen)
  $('#jetList').on('submit', '.add-to-contact-men', browseEvents.onAddToContactMen)
  $('#checkout').on('click', browseEvents.onCheckout)
  $('#orderHist').on('click', browseEvents.onRetrieve)
})
