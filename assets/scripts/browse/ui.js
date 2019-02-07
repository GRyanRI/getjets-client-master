'use strict'
const store = require('./../store.js')

const getJetsSuccess = function (data) {
  $('#jetList').html('')
  $('#jumbo').fadeOut('slow')
  let content = '<div class="row">'
  store.jet = data.jets
  const dataArray = data.jets
  dataArray.forEach(function (jet) {
    const imgurUrl = jet.image
    // const addToContact = $('.')
    content += `<div class="col-sm-4">
      <div class="card" id="imageDiv">
        <div class="card-body" id="imageDivalso">
          <h5 class="card-title"></h5>
          <img class="card-img" src='${imgurUrl}.jpg' alt="Card image">
          <form class="add-to-contact-jet" id="${jet._id}">
            <p class="card-text">${jet.name}</p>
            <p class="card-text">$${jet.price}</p>
            <button class="btn btn-dark add-to-contact-jet">Add to contact</button>
            </form>
        </div>
      </div>
    </div>`
    // <button class="btn btn-dark add-to-contact" id="${jet._id}">Add to contact</button>
    // store.jet._id = jet
    // console.log(jet)
    // console.log(jet.image)
  })
  content += '</div>'
  $('#jetList').html(content)
}

const contactSuccess = data => {
  // console.log(data)
}

const viewContactSuccess = data => {
  $('#message').text('view contact successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password').trigger('reset')
  // console.log('viewContactSuccess ran. Data is :', data)
}

const viewContactFailure = () => {
  $('#message').text('Error on view contact')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('viewContactFailure ran. Error is :', error)
}

const contactHistSuccess = data => {
  // let sum = 0
  let content = '<table class="table">'
  // iterate through data.contacts to get created date
  // debugger
  data.contacts.forEach(function (contact) {
    content += `<tr>
      <td class="contactCreatedAt">Contact #: ${contact.createdAt}</td>
  </tr>`
    contact.contact.forEach(function (jet) {
    // nested iteration through contact
    // now you can access properties using dot notation in contact (.name.price)
    // add to sum, sum = 0
    // append to html content
    // once done iterating append to DOM using jquery
    // would like to show date, names of items in contact and total price
      content += `<tr>
        <td class="jetName">${jet.name}</td>
        <td class="jetPrice">${jet.price}</td>
    </tr>`
      // jet[i].price + jet[i+1].price
    })
  })
  $('#contactHistMsg').text('Your current contact history')
  $('#contactHistBody').append(content)
  // console.log(data)
}

const contactHistFailure = () => {
  $('#contactHistMsg').text('Unable to Generate Contact History')
  // console.error('contactHistFailure ran> Error is :', error)
}

module.exports = {
  contactSuccess,
  getJetsSuccess,
  viewContactSuccess,
  viewContactFailure,
  contactHistSuccess,
  contactHistFailure
}
