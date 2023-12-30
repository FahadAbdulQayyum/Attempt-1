import User from "@/components/model/user";
// const TokenAuth = require('./tokenAuth')
import TokenAuth from './tokenAuth'
import connectDB from "../../../../config/db";

export default async function handler(req, res) {
    try {
        // console.log('***req***', req)
        TokenAuth(req, res)
        console.log('req,idAdminn', req.email, req.isAdmin)
        connectDB();
        const { email, isAdmin } = req
        const DoesExist = await User.findOne({ email })
        console.log('doesExist', DoesExist)
        if (!DoesExist) {
            return res.json({ success: false, msg: 'This Email does not exist' })
        }
        // return res.json({ success: true, msg: 'Valid Email', isAdmin: DoesExist.isAdmin, email: DoesExist.email })
        return res.json({ success: true, msg: 'Valid Email', isAdmin: DoesExist.isAdmin, email: DoesExist.username })
    } catch (err) {
        return res.json({ success: false, msg: 'Server Error' })
    }
}