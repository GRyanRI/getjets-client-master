'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const womensClothingApi = function () {
  return $.ajax({
    url: config.apiUrl + '/jets/womens-clothing',
    method: 'GET'
  })
}

const mensClothingApi = function () {
  return $.ajax({
    url: config.apiUrl + '/jets/mens-clothing',
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

const checkout = (data) => {
  // console.log(data)
  // send a post to orders with jet info
  return $.ajax({
    url: config.apiUrl + '/orders',
    method: 'POST',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const orderHistoryApi = function () {
  return $.ajax({
    url: config.apiUrl + '/orders',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// using stripe documentation to checkout
// const checkout = event => {
//   console.log(event.target)
// }

// const getAllJets = event => {
//   console.log('getAllJets', store.user)
//   return $.ajax({
//     url: config.apiUrl + '/jets',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {}
//   })
// }
//
// const getAJet = event => {
//   console.log(event.target)
//   console.log(event.target.id)
//   return $.ajax({
//     url: config.apiUrl + '/jets/:id',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
module.exports = {
  addToContact,
  womensClothingApi,
  mensClothingApi,
  orderHistoryApi,
  checkout
}
