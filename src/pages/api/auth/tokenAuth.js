import Login from './login';

const jwt = require('jsonwebtoken');

export default async function handler(req, res, next) {
    // console.log('reqq', req, req.headers['x-auth-token'])

    try {
        // const token = req.headers['x-auth-token']
        const token = req.headers['x-auth-token']
        console.log('^^^^^token', token)
        if (!token) {
            return res.status(404).json({ success: false, msg: "Invalid authorization, Token Missing" })
            // throw new Error("Invalid authorization, Token Missing")
        }
        // const decode = jwt.verify(token, 'fahad')
        // const decode = jwt.verify(token, 'fahad', function (err, decoded) {
        //     // console.log('^^^^^|', decoded)
        //     // console.log('^^^^^|-', err)
        //     if (err) {
        //         return res.status(200).json({ success: false, msg: "Invalid authorization, Token Missing" })
        //     }
        //     if (!decode) {
        //         console.log('^^^^^')
        //         return res.status(200).json({ success: false, msg: "Invalid authorization, Token Missing" })
        //     }
        // })

        try {
            const decode = jwt.verify(token, 'fahad')
            console.log('^^^^^decoded', decode)
            if (!decode) {
                console.log('^^^^^')
                return res.status(404).json({ success: false, msg: "Invalid authorization, Token Missing" })
            }
            // req.method = 'POST'
            // req.body = {}
            // req.email = decode.email
            // req.password = decode.password

            // req.body.email = decode.email
            // req.body.password = decode.password
            console.log('decodee', decode)
            // next()
            // Login(req, res)
            return res.status(200).json({ success: true, msg: "Authorization passed" })
        } catch (err) {
            console.log('caught', err)
            console.error(err)
            return res.status(404).json({ success: false, msg: "Invalid authorization, Token Missing" })
        }
    } catch (err) {
        console.log('caught', err)
        return res.status(404).json({ success: false, msg: "Invalid authorization, Token Missing" })
    }


    return res.json({ msg: "Now go next" })
}