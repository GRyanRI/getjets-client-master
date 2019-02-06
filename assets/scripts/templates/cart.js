module.exports = function contact (oldContact) {
  this.items = oldContact.items || {}
  this.totalQty = oldContact.totalQty || 0
  this.totalPrice = oldContact.totalPrices || 0
}

this.add = function (items, id) {
  let storedItem = this.items[id]
  if (!storedItem) {
    storedItem = this.items[id] = {item: items, qty: 0, price: 0}
  }
  storedItem.qty++
  storedItem.price = storedItem.item.price * storedItem.qty
  this.totalQty++
  this.totalPrice += storedItem.item.price
}

this.createArray = function () {
  const arr = []
  for (const id in this.items) {
    arr.push(this.items[id])
  }
  return arr
}
