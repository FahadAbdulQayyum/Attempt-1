import User from "@/components/model/user";
import connectDB from "../../../../config/db";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// import TokenAuth from "./tokenAuth"

// export default async function handler(req, res) {
const Signup = async (req, res) => {
    // TokenAuth(req, res)

    console.log(req, 'res')

    if (req.method !== 'POST') {
        return res.status(404).json({ success: false, msg: 'method is not post' })
    }

    let Usr = User

    try {
        connectDB();
        // console.log('reqqq', req)
        const { username, email, password } = req.body;

        // const user = await User.findOne({ email })
        const user = await Usr.findOne({ email })

        console.log('usre', user)

        if (user) {
            return res.status(404).json({ success: false, msg: 'A user already exist with this email' })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        console.log('hashedPassword', hashedPassword)

        // const token = jwt.sign({ email, password }, 'fahad', { expiresIn: '1h' })
        // const token = jwt.sign({ email, password: user.password }, 'fahad', { expiresIn: '1h' })

        const newUser = new Usr({ username, email, password: hashedPassword })

        const savedUser = await newUser.save()

        console.log('savedUser', savedUser)

        return res.json({ success: true, msg: "User created Successfully", savedUser });
    } catch (err) {
        console.error(err)
    }
}


export default Signup