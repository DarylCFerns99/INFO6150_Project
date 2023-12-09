const mongoose = require("mongoose");
var bcrypt = require('bcrypt');

// Regexp for name, email and password
const validationsRegexp = {
    name: /^[A-Za-z ]{2,}$/,
    firstName: /^[A-Za-z]{1,}$/,
    lastName: /^[A-Za-z]{1,}$/,
    email: /([\w\.]+)@([\w-]+\.)+[\w-]{2,4}/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%#*?&]{8,}$/,
    confirmPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%#*?&]{8,}$/,
    phoneNumber: /^\d{3}-?\d{3}-?\d{4}$/,
    zipCode: /\d{5}/,
    address1: /^[\w,./\- ]+$/,
    address2: /^[\w,./\- ]*$/,
    city: /^([A-Z][a-z]+\s?)+$/,
    state: /^[A-Z]{2}$/,
    country: /^([A-Z][a-z]+\s?)+$/
}

// Salt factor
SALT_WORK_FACTOR = 10;

// Create User schema
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        validate: {
            validator: v => validationsRegexp["name"].test(v),
            message: (props) => `'${props.value}' is not a valid name`
        }
    },
    email: {
        type: String,
        unique: true,
        required: [true, "E-mail is required"],
        validate: {
            validator: v => validationsRegexp["email"].test(v),
            message: (props) => `'${props.value}' is not a valid email`
        }
    },
    phoneNumber: {
        type: String,
        unique: false,
        required: [true, "Phone number is required"],
        validate: {
            validator: v => validationsRegexp["phoneNumber"].test(v),
            message: (props) => `'${props.value}' is not a valid email`
        }
    },
    address1: {
        type: String,
        unique: false,
        required: [true, "Address line 1 is required"],
        validate: {
            validator: v => validationsRegexp["address1"].test(v),
            message: (props) => `'${props.value}' is not a valid address`
        }
    },
    address2: {
        type: String,
        unique: false,
        required: [false, "Address line 2 is required"],
        validate: {
            validator: v => validationsRegexp["address2"].test(v),
            message: (props) => `'${props.value}' is not a valid address`
        }
    },
    city: {
        type: String,
        unique: false,
        required: [true, "City is required"],
        validate: {
            validator: v => validationsRegexp["city"].test(v),
            message: (props) => `'${props.value}' is not a valid city`
        }
    },
    state: {
        type: String,
        unique: false,
        required: [true, "State is required"],
        validate: {
            validator: v => validationsRegexp["state"].test(v),
            message: (props) => `'${props.value}' is not a valid state`
        }
    },
    country: {
        type: String,
        unique: false,
        required: [true, "Country is required"],
        validate: {
            validator: v => validationsRegexp["country"].test(v),
            message: (props) => `'${props.value}' is not a valid country`
        }
    },
    zipCode: {
        type: String,
        unique: false,
        required: [true, "Zip code is required"],
        validate: {
            validator: v => validationsRegexp["zipCode"].test(v),
            message: (props) => `'${props.value}' is not a valid zipcode`
        }
    },
    password: {
        type: String,
        // select: false,
        required: [true, "Password is required"],
        // validate: {
        //     validator: v => passwordRegexp.test(v),
        //     message: (_) => `Not a valid password, password should contain at least 8 characters, upper case, lower case, number and a special character`
        // }
    },
    isUser: {
        type: Boolean,
        default: true
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

// userSchema.pre('save', hashing);

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