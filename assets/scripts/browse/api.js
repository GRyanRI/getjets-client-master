'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const jetsAPI = function () {
  return $.ajax({
    url: config.apiUrl + '/jets/all-jets',
    method: 'GET'
  })
}

const addToContact = data => {
  // console.log('addToContact', data)
//   store.contact.items = store.contact.items.concat(data)
//   // define data with button's id
//   // const data =
//   // send a patch to contacts with jet info
//   return $.ajax({
//     url: config.apiUrl + '/contact',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: ({contact: {items: store.contact.items}})
//   })
}

module.exports = {
  addToContact,
  jetsAPI,
  contactHistoryApi,
  contact
}
