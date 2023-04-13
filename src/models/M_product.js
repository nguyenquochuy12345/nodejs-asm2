import mongoose, {Schema, model} from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    description: String,
    sold: {
        type: Number,
        default: 0
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    }
}, {timestamps: true})

export default model("Product", productSchema)