const piggyBank = {
    pennies: 7,
    nickels: 56,
    dimes: 17,
    quarters: 50,


addPennies: function () {
  return (this.pennies * 0.01)
},
addNickels: function () {
  return (this.nickels * 0.05)
},
addDimes: function () {
  return (this.dimes * 0.10)
},
addQuarters: function () {
  return (this.quarters * 0.25)

}
}

const dollarAmount = (piggyBank.addPennies() + piggyBank.addNickels() + piggyBank.addDimes() + piggyBank.addQuarters())
console.log(dollarAmount)
