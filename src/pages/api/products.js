const Product = require('../../components/model/createProduct')

export default async function handler(req, res) {
    try {
        const products = await Product.find({})
        console.log('productsss', products)
        return res.json({ success: true, products })
    } catch (err) {
        console.error(err)
    }
}