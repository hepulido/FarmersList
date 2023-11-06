class Customer {
  constructor(name, email, shippingAddress, orderHistory = []) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
    this.orderHistory = orderHistory;
  }

  addToOrderHistory(cart) {
    this.orderHistory.push(cart);
  }
}

module.exports = Customer;
