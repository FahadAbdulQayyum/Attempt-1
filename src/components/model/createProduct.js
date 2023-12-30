import mongoose from 'mongoose';

let Product;

try {
    // Check if the model already exists
    Product = mongoose.model('product-details');
} catch (error) {

    const createProduct = new mongoose.Schema({
        productName: String,
        productPrice: Number,
        productCategory: String,
        imgUrl: String
    })
    Product = mongoose.model('product-details', createProduct)
}
// module.exports = mongoose.model('product-details', createProduct)
module.exports = Product