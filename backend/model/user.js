import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

//schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [50, "You cannot exceed 50 characters"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [8, "Please enter at least 8 characters"],
        select: false,
    }
}, {timestamps: true}
);

//encrypting password before saving 
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")){
       next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.getJwtToken = function () {
	return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
	 expiresIn: process.env.JWT_EXPIRES
   })	
}

userSchema.methods.comparePassword = async function(enteredPassword){
	return bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.model('User', userSchema);
