const mongoose = require("mongoose");
var bcrypt = require('bcrypt');

// Regexp for name, email and password
const nameRegexp = /^[A-Za-z ]{2,}$/;
const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%#*?&]{8,}$/;

// Salt factor
SALT_WORK_FACTOR = 10;

// Create User schema
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        validate: {
            validator: v => nameRegexp.test(v),
            message: (props) => `'${props.value}' is not a valid name`
        }
    },
    email: {
        type: String,
        unique: true,
        required: [true, "E-mail is required"],
        validate: {
            validator: v => emailRegexp.test(v),
            message: (props) => `'${props.value}' is not a valid email`
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: v => passwordRegexp.test(v),
            message: (_) => `Not a valid password, password should contain at least 8 characters, upper case, lower case, number and a special character`
        }
    }
}, { timestamps: true, collection: "User" });

function hashing(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
}

userSchema.pre('save', hashing);

// Methods to hash password
userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// Adding schema to model
var User = mongoose.model("user", userSchema);
module.exports = User;