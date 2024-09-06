import { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },  
        image: { type: String },
    },
    { timestamps: true }
);

// Pre-save hook to hash password
UserSchema.pre("save", async function (next) {
    const user = this;

    // Only hash the password if it's new or modified
    if (user.isModified("password")) {
        try {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        } catch (err) {
            return next(err);
        }
    }
    next();
});


UserSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

export const User = models?.User || model("User", UserSchema);
