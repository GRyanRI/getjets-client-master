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
  $('#jets').on('click', browseEvents.onGetJets)
  // $('#jetList').on('submit', '.add-to-contact-jet', browseEvents.onAddToContact)
  $('#contact').on('click', browseEvents.onContact)
  $('#contactHist').on('click', browseEvents.onRetrieve)
})
