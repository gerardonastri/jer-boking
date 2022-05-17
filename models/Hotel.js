import mongoose from 'mongoose'

const HotelSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    distance: {
        type: String
    },
    images: {
        type: [String]
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String]
    },
    cheapestPrice: {
        type: Number
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

export default mongoose.models.Hotel || mongoose.model('Hotel', HotelSchema)