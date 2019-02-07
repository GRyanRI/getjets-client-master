'use strict'
// const getFormFields = require('../get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

let favoriteJets = []
const onAddToFavorite = event => {
  event.preventDefault()
  const jetIdToBuy = event.target.id
  const dataArray = store.Jet
  let content = '<table class="table">'
  dataArray.forEach(function (jet) {
    if (jetIdToBuy === jet._id) {
      // capture this jet object and send it to contact function
      favoriteJets.push(jet)
      content += `<tr>
          <td class="jetName">${jet.name}</td>
          <td class="jetPrice">$${jet.price}</td>
      </tr>`
      $('#message2').fadeIn(500)
      $('#message2').text(`Thank you for adding ${jet.name} to your favorite`)
      $('#message2').fadeOut(3000)
    }
  })
  content += '</table>'
  $('#jet-favorite-list').append(content)

  let sum = $('#subTotal').html()
  sum = parseInt(sum.slice(1))
  $('#favorite .jetPrice').each(function () {
    const num = this.innerHTML.slice(1)
    const subTotal = parseInt(sum) + parseInt(num)
    $('#subTotal').html(`$${subTotal}`)
  })
  // console.log('favoriteJets', favoriteJets)
}

const onContact = (event) => {
  event.preventDefault()
  // console.log('onContact')
  favoriteJets = JSON.stringify(favoriteJets)
  // get data for jet ids, names and prices
  // console.log(favoriteJets)
  api.contact(favoriteJets)
    .then(ui.contactSuccess)
    .catch(ui.contactFailure)
}

const onRetrieve = (event) => {
  event.preventDefault()
  api.contactHistoryApi()
    .then(ui.contactHistSuccess)
    .catch(ui.contactHistFailure)
}

const onGetJets = event => {
  event.preventDefault()
  api.jetsClothingApi()
    .then(ui.getJetsSuccess)
    // .then($('.add-to-favorite').on('click', onAddToFavorite))
    // .then($('#jetList').on('click', '.add-to-favorite', onAddToFavorite))
    // .then($('#jetList').on('click', '.contact', onContact))
}

module.exports = {
  onGetJets,
  onAddToFavoriteJet,
  onContact,
  onRetrieve
}
