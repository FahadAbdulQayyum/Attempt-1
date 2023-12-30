import User from "@/components/model/user";
import connectDB from "../../../../config/db";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// import TokenAuth from "./tokenAuth"

// export default async function handler(req, res) {
const Login = async (req, res) => {
    // TokenAuth(req, res)

    console.log(req, 'res')

    if (req.method !== 'POST') {
        return res.status(404).json({ success: false, msg: 'method is not post' })
    }

    let Usr = User

    try {
        connectDB();
        // console.log('reqqq', req)
        const { email, password } = req.body;

        // const user = await User.findOne({ email })
        const user = await Usr.findOne({ email })

        console.log('usre', user)

        if (!user) {
            return res.status(404).json({ success: false, msg: 'This user does not exist' })
        }

        const matchedPassword = await bcryptjs.compare(password, user.password)

        console.log('matchedPassowrd', matchedPassword)

        if (!matchedPassword) {
            return res.status(404).json({ success: false, msg: 'Password is incorrect' })
        }

        const token = jwt.sign({ email, password }, 'fahad', { expiresIn: '1h' })
        // const token = jwt.sign({ email, password: user.password }, 'fahad', { expiresIn: '1h' })

        return res.json({ success: true, msg: "Hello Boy", token });
    } catch (err) {
        console.error(err)
    }
}


export default Login