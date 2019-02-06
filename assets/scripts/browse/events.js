'use strict'
// const getFormFields = require('../get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

let contactJets = []
const onAddToContactWomen = event => {
  event.preventDefault()
  const jetIdToBuy = event.target.id
  const dataArrayWomen = store.womensJet
  let content = '<table class="table">'
  dataArrayWomen.forEach(function (jet) {
    if (jetIdToBuy === jet._id) {
      // capture this jet object and send it to checkout function
      contactJets.push(jet)
      content += `<tr>
          <td class="jetName">${jet.name}</td>
          <td class="jetPrice">$${jet.price}</td>
      </tr>`
      $('#message2').fadeIn(500)
      $('#message2').text(`Thank you for adding ${jet.name} to your contact`)
      $('#message2').fadeOut(3000)
    }
  })
  content += '</table>'
  $('#shopping-contact-list').append(content)

  let sum = $('#subTotal').html()
  sum = parseInt(sum.slice(1))
  $('#contact .jetPrice').each(function () {
    const num = this.innerHTML.slice(1)
    const subTotal = parseInt(sum) + parseInt(num)
    $('#subTotal').html(`$${subTotal}`)
  })
  // console.log('contactJets', contactJets)
}

const onAddToContactMen = event => {
  event.preventDefault()
  const jetIdToBuy = event.target.id
  const dataArrayMen = store.mensJet
  let content = '<table class="table">'
  dataArrayMen.forEach(function (jet) {
    if (jetIdToBuy === jet._id) {
      contactJets.push(jet)
      content += `<tr>
          <td class="jetName">${jet.name}</td>
          <td class="jetPrice">$${jet.price}</td>
      </tr>`
      $('#message2').fadeIn(500)
      $('#message2').text(`Thank you for adding ${jet.name} to your contact`)
      $('#message2').fadeOut(3000)
    }
  })
  content += '</table>'
  $('#shopping-contact-list').append(content)
  let sum = $('#subTotal').html()
  sum = parseInt(sum.slice(1))
  // console.log(sum)
  $('#contact .jetPrice').each(function () {
    const num = this.innerHTML.slice(1)
    const subTotal = parseInt(sum) + parseInt(num)
    $('#subTotal').html(`$${subTotal}`)
  })
  // console.log('contactJets', contactJets)
}

const onCheckout = (event) => {
  event.preventDefault()
  // console.log('onCheckout')
  contactJets = JSON.stringify(contactJets)
  // get data for jet ids, names and prices
  // console.log(contactJets)
  api.checkout(contactJets)
    .then(ui.checkoutSuccess)
    .catch(ui.checkoutFailure)
}

const onRetrieve = (event) => {
  event.preventDefault()
  api.orderHistoryApi()
    .then(ui.orderHistSuccess)
    .catch(ui.orderHistFailure)
}

const onGetWomensClothing = event => {
  event.preventDefault()
  api.womensClothingApi()
    .then(ui.getWomensClothingSuccess)
    // .then($('.add-to-contact').on('click', onAddToContact))
    // .then($('#jetList').on('click', '.add-to-contact', onAddToContact))
    // .then($('#jetList').on('click', '.checkout', onCheckout))
}

const onGetMensClothing = event => {
  event.preventDefault()
  api.mensClothingApi()
    .then(ui.getMensClothingSuccess)
}

// Only needed to test front end/back end connection.
// const onGetAllJets = event => {
//   event.preventDefault()
//   console.log('onGetAllJets', event.target)
//   api.getAllJets()
//     .then(ui.getAllJetsSuccess)
//     .catch(ui.getAllJetsFailure)
// }

module.exports = {
  onGetWomensClothing,
  onGetMensClothing,
  onAddToContactWomen,
  onAddToContactMen,
  onCheckout,
  onRetrieve
}
