export default async function handler(req, res) {
    const { email, password } = req.body;
    console.log('****', email, password)
    res.json({ msg: "Wju" })
}