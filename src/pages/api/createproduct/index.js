import Product from '../../../components/model/createProduct'

export default async function (req, res) {
    try {
        const { productName, productPrice, productCategory, imgUrl } = req.body
        console.log('req||', req.body)
        const newProduct = await Product({ productName, productPrice, productCategory, imgUrl })
        const savedProduct = await newProduct.save();
        console.log('savedProduct', savedProduct)
        res.json({ success: true, msg: 'Product Successfully added' })
    } catch (err) {
        console.error(err)
    }
} 