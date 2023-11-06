const Customer = require("./Customer.js");

class Auth {
    constructor(customers = []) {
        this.customers = customers
    }
    register(name, email, shippingAddress) {
        let customer1 = new Customer(name, email, shippingAddress);
        this.customers.push(customer1);
    }
    login(email) {
        let result = null
        this.customers.map((customer) => {
            if (email === customer.email) {
                result = customer

            }

        })
        return result


    }
}
module.exports = Auth;