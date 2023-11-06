class Cart {
    constructor(products = [], total = 0) {
        this.products = products,
        this.total = total
    }

    addProduct(product) {
        this.products.push(product)
        this.total += product.price
    }

    removeProduct(i) {
        let product = this.products[i]
        this.total -= product.price
        this.products.splice(i, 1)
    }
}

module.exports = Cart