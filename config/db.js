const mongoose = require('mongoose');
const config = require('config');

// const db = config.get('mongoURI');
const { mongoURI: db } = require('./config');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            // useUnifiedTopology: true,
        })
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

// const connectDB = () => {
//     mongoose.connect(db, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true
//     }).then(() => console.log('Connected to MongoDB'))
//         .catch(err => {
//             console.error(err.message);
//             process.exit(1);
//         });
// };

module.exports = connectDB;