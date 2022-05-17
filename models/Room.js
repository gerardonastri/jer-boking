import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    maxPeople: {
        type: Number
    },
    roomNumbers: [{
        number: Number,
        unavailableDates: [{type: Date}]
    }]
}, {timestamps: true})

export default mongoose.models.Room || mongoose.model('Room', RoomSchema)