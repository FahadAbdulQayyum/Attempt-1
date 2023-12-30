const mongoose = require('mongoose');

let User;

try {
    // Check if the model already exists
    User = mongoose.model('User');
} catch (error) {
    // If the model doesn't exist, create it
    const userSchema = new mongoose.Schema({
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    });

    User = mongoose.model('User', userSchema);
}

module.exports = User;












// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     email: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })

// // const user = mongoose.model('user', userSchema)

// // module.exports = user
// // module.exports = mongoose.model('User', userSchema);
// module.exports = mongoose.models.users || mongoose.model('User', userSchema);